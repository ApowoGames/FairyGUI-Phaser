import { GRoot } from "../../..";

export function GetTextWidth(text: string, context: CanvasRenderingContext2D) {
    return context.measureText(text).width;
}

export type TextHeightResultType = {
    ascent: number,
    descent: number,
    height: number
}

export function GetTextHeightMetrics(
    text: string,
    context: CanvasRenderingContext2D,
    defaultTextHeight: number = 0
): TextHeightResultType {

    let metrics = context.measureText(text);
    let ascent = metrics.actualBoundingBoxAscent;
    let descent = metrics.actualBoundingBoxDescent;
    if ((!ascent && !descent) || text === '') {
        ascent = defaultTextHeight;
        descent = 0;
    }

    TextHeightResult.ascent = ascent;
    TextHeightResult.descent = descent;
    TextHeightResult.height = Math.ceil(Math.abs(ascent) + Math.abs(descent));
    return TextHeightResult;
}

let TextHeightResult: TextHeightResultType = {
    ascent: 0,
    descent: 0,
    height: 0
}