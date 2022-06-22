import { GRoot } from './../../../GRoot';
import { UIPackage } from "../../..";
import { CanvasText } from "../canvastext/CanvasText";
import { SyncFont, SyncStyle } from "../canvastext/SyncContextMethods";
import { LineInfo, NewLineMode, WrapMode, WrapText } from "../WrapText";
import { PenManager } from "./PenManager";
import { GetTextHeightMetrics, GetTextWidth } from "./TextMetrics";

export function UpdatePenManager(penManager: PenManager, text: string, canvasText: CanvasText, wrapMode: WrapMode, wrapWidth: number) {
    penManager.freePens();
    if (text === "") {
        return penManager;
    }

    const { context, parent } = canvasText;

    const matchs = canvasText.parser.splitText(text);
    let curProp: any;
    let wrapLines: LineInfo[];
    let cursorX = 0;
    const dprOffset = GRoot.dpr * GRoot.uiScale;
    for (const match of matchs) {
        const result = canvasText.parser.tagTextToProp(match, curProp);
        let plainText = result.text;
        curProp = result.prop;

        if (typeof curProp.img === "string") {
            let imgWidth = 0;
            let imgHeight = 0;

            const packageItem = UIPackage.getItemByURL(curProp.img);
            if (packageItem) {
                imgWidth = packageItem.width;
                imgHeight = packageItem.height;
            } else {
                imgWidth = 0;
                imgHeight = 0;
            }
            penManager.addImagePen(
                cursorX,
                0,
                imgWidth * dprOffset,
                imgHeight * dprOffset,
                Phaser.Utils.Objects.Clone(curProp)
            );
            cursorX += imgWidth * dprOffset;
        } else if (plainText !== "") {
            context.save();
            const curStyle = canvasText.parser.propToContextStyle(parent.style, curProp);
            SyncFont(context, curStyle);
            SyncStyle(context, curStyle);
            let strokeThickness = curStyle.strokeThickness;
            let halfStrokeThickness = strokeThickness >> 1;

            wrapLines = WrapText(plainText, GetTextWidth, context, wrapMode, wrapWidth * GRoot.dpr * GRoot.uiScale, cursorX);

            // Style of wrapped lines are the same, and has the same text height
            let textHeightResult = GetTextHeightMetrics('|MÉq', context);

            for (const n of wrapLines) {
                const textHeight = textHeightResult.height + strokeThickness;
                const ascent = textHeightResult.ascent + halfStrokeThickness;
                const descent = textHeightResult.descent + halfStrokeThickness;

                penManager.addTextPen(
                    n.text,
                    cursorX,
                    0,
                    n.width,
                    textHeight,
                    ascent,
                    descent,
                    Phaser.Utils.Objects.Clone(curProp),
                    n.newLineMode
                );

                if (n.newLineMode !== NewLineMode.none) {
                    cursorX = 0;
                } else {
                    cursorX += n.width;
                }
            }
            context.restore();
        }
    }

    // Update cursorY of each pen in each line
    // Update maxLineWidth, totalLineHeight
    let liens = penManager.lines;
    let lineSpacing = canvasText.parent.style.lineSpacing;
    let maxLineWidth = 0;
    let totalLineHeight = 0;

    for (const line of liens) {
        const pens = line.pens;

        // Get lineHeight and ascentY
        let ascent = 0;
        let descent = 0;
        for (const pen of pens) {
            ascent = Math.max(ascent, pen.ascent);
            descent = Math.max(descent, pen.descent);
        }

        const currLineHeight = ascent + descent;
        const cursorY = totalLineHeight + ascent;

        for (const pen of pens) {
            pen.y += cursorY;
        }
        line.y = cursorY;
        line.height = currLineHeight;

        maxLineWidth = Math.max(maxLineWidth, line.width);
        totalLineHeight += currLineHeight + lineSpacing;
    }
    penManager.maxLineWidth = maxLineWidth;
    penManager.totalLineHeight = totalLineHeight - lineSpacing;

    return penManager;
}