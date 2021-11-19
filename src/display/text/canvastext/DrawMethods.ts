import { UIPackage } from "../../..";
import { HitAreaManager } from "../hitareamanager/HitAreaManager";
import { Pen } from "../penmanager/Pen";
import { PenManager } from "../penmanager/PenManager";
import { ITextStyle } from "../style/TextStyle";
import { HAlignModeString, VAlignModeString } from "../Types";
import { CanvasText } from "./CanvasText";
import { SyncFont, SyncShadow, SyncStyle } from "./SyncContextMethods";

export function Draw(
    canvasText: CanvasText,
    drawBoundX: number,
    drawBoundY: number,
    drawBoundWidth: number,
    drawBoundHeight: number,
    textScrollX: number = 0,
    textScrollY: number = 0,
    penManager: PenManager = canvasText.penManager
) {
    if (canvasText.hitAreaManager) {
        canvasText.hitAreaManager.clear();
    }

    let totalLineHeight = penManager.totalLineHeight;
    if (totalLineHeight === 0) {
        return;
    }

    const clipMode = (drawBoundWidth < canvasText.textWidth) || drawBoundHeight < canvasText.textHeight;

    const context = canvasText.context;
    context.save();

    const parent = canvasText.parent;

    const style = parent.style;
    Clear(canvasText, style);

    if (clipMode) {
        context.beginPath();
        context.rect(drawBoundX, drawBoundY, drawBoundWidth, drawBoundHeight);
        context.clip();
    }

    const hAlign: HAlignModeString = style.halign;
    const vAlign: VAlignModeString = style.valign;

    // Shift offsetY
    let offsetY = drawBoundY - textScrollY;
    switch (vAlign) {
        case "center":
            offsetY += (drawBoundHeight - totalLineHeight) / 2;
            break;

        case "bottom":
            offsetY += drawBoundHeight - totalLineHeight - 2;
            break;
    }

    let lineTop = offsetY;
    const lines = penManager.lines;
    const drawBoundBottom = drawBoundX + drawBoundHeight;
    for (const line of lines) {
        if (lineTop > drawBoundBottom) {
            // Remainder lines are below draw bound
            break;
        }

        const lineBottom = lineTop + line.height;
        if (lineBottom < drawBoundY) {
            // Lines above draw bound
            lineTop = lineBottom;
            continue;
        }

        let lineWidth = line.width;
        if (lineWidth === 0) {
            // Line has no valid text pen
            lineTop = lineBottom;
            continue;
        }

        // Shift offsetX
        let offsetX = drawBoundX - textScrollX;
        switch (hAlign) {
            case "center":
                offsetX += (drawBoundWidth - lineWidth) / 2;
                break;

            case "right":
                offsetX += drawBoundWidth - lineWidth;
                break;
        }

        // Draw each pen in this line
        let pens = line.pens;
        for (const pen of pens) {
            DrawPen(canvasText, pen, offsetX, offsetY);
        }
        
        lineTop = lineBottom;
    }

    context.restore();
}

export async function DrawPen(canvasText: CanvasText, pen: Pen, offsetX: number, offsetY: number) {
    offsetX += pen.x;
    offsetY += pen.y + (pen.prop.y || 0);

    const context = canvasText.context;
    const defaultStyle = canvasText.parent.style;

    context.save();
    const curStyle = canvasText.parser.propToContextStyle(defaultStyle, pen.prop);
    SyncFont(context, curStyle);
    SyncStyle(context, curStyle);

    // Underline
    if ((curStyle.underlineThickness > 0) && (pen.width > 0)) {
        DrawUnderline(canvasText, offsetX, offsetY, pen.width, curStyle);
    }

    // Text
    if (pen.isTextPen) {
        DrawText(canvasText, offsetX, offsetY, pen.text, curStyle);
    }

    // Image
    if (pen.isImagePen) {
        await DrawImage(canvasText,
            offsetX,
            offsetY,
            pen.prop.img,
            curStyle
        );
    }

    context.restore();

    if (pen.hasAreaMarker && pen.width > 0) {
        if (!canvasText.hitAreaManager) {
            canvasText.hitAreaManager = new HitAreaManager();
        }
        canvasText.hitAreaManager.add(pen.prop.url, offsetX, offsetY, pen.width, pen.height);
    }
}

function Clear(
    canvasText: CanvasText,
    style: ITextStyle
): void {

    let canvas = canvasText.canvas,
        context = canvasText.context;

    context.clearRect(0, 0, canvas.width, canvas.height);
}

function DrawText(canvasText: CanvasText, x: number, y: number, text: string, style: ITextStyle) {
    const context = canvasText.context;
    const { strokeStyle, strokeThickness, fillStyle } = style;
    if (strokeStyle && (strokeStyle !== "none" && strokeThickness > 0)) {
        SyncShadow(context, style, style.shadowFill);
        context.strokeText(text, x, y);
    }

    if (fillStyle && fillStyle !== "none") {
        SyncShadow(context, style, style.shadowFill);
        context.fillText(text, x, y);
    }
}

function DrawUnderline(canvasText: CanvasText, x: number, y: number, width: number, style: ITextStyle) {
    y += (style.underlineOffsetY - style.underlineThickness / 2) * style.resolution;

    const context = canvasText.context;
    const savedLineCap = context.lineCap;
    context.lineCap = "butt";
    context.beginPath();
    context.strokeStyle = style.underlineColor;
    context.lineWidth = style.underlineThickness * style.resolution;
    context.moveTo(x, y);
    context.lineTo(x + width, y);
    context.stroke();
    context.lineCap = savedLineCap;
}

function DrawImage(canvasText: CanvasText, x: number, y: number, imgKey: string, style: ITextStyle) {
    const imageManager = canvasText.imageManager;
    if (!imageManager) {
        return;
    }
    // TODO

    // const imgInfo = imageManager.get(imgKey);
    const item = UIPackage.getItemAssetByURL(imgKey);

    // x += imgInfo.left;
    // y += imgInfo.y - imgInfo.height;

    // const context = canvasText.context;
    // context.drawImage();
}