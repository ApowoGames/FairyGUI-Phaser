import { ITextStyle } from "../style/TextStyle";

export function SyncFont(context: CanvasRenderingContext2D, style: ITextStyle) {
    context.font = style.font;
}

export function SyncStyle(context: CanvasRenderingContext2D, style: ITextStyle) {
    context.textBaseline = "alphabetic";
    context.textAlign = "start";

    context.fillStyle = style.fillStyle;
    context.strokeStyle = style.strokeStyle;

    context.lineWidth = style.strokeThickness;
    context.lineCap = "round";
    context.lineJoin = "round";
    context.imageSmoothingEnabled = true;
}

export function SyncShadow(context: CanvasRenderingContext2D, style: ITextStyle, enable: boolean) {
    if (enable) {
        context.shadowColor = style.shadowColor;
        context.shadowBlur = style.shadowBlur;
        context.shadowOffsetX = style.shadowOffsetX;
        context.shadowOffsetY = style.shadowOffsetY;
    } else {
        context.shadowColor = "#000";
        context.shadowBlur = 0;
        context.shadowOffsetX = 0;
        context.shadowOffsetY = 0;
    }
}