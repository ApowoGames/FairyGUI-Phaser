export declare enum WrapMode {
    none = 0,
    word = 1,
    char = 2
}
export declare enum NewLineMode {
    none = 0,
    raw = 1,
    wrapped = 2
}
export declare type LineInfo = {
    text: string;
    width: number;
    newLineMode: NewLineMode;
};
export declare type GetTextWidthCallbackType = (text: string, context?: unknown) => number;
export declare const SplitTextRegExp: RegExp;
export declare function WrapText(text: string, getTextWidthCallback: GetTextWidthCallbackType, context: unknown, wrapMode: WrapMode, wrapWidth: number, offset?: number): LineInfo[];
