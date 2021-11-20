export declare function GetTextWidth(text: string, context: CanvasRenderingContext2D): number;
export declare type TextHeightResultType = {
    ascent: number;
    descent: number;
    height: number;
};
export declare function GetTextHeightMetrics(text: string, context: CanvasRenderingContext2D, defaultTextHeight?: number): TextHeightResultType;
