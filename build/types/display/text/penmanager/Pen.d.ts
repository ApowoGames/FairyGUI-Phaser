import { NewLineMode } from "../WrapText";
export declare class Pen {
    text: string;
    x: number;
    y: number;
    width: number;
    height: number;
    ascent: number;
    descent: number;
    prop: any;
    newLineMode: NewLineMode;
    startIndex: number;
    set(text?: string, x?: number, y?: number, width?: number, height?: number, ascent?: number, descent?: number, prop?: any, newLineMode?: NewLineMode, startIndex?: number): this;
    clone(): Pen;
    get plainText(): string;
    get wrapText(): string;
    get plainTextLength(): number;
    get endIndex(): number;
    get lastX(): number;
    get isTextPen(): boolean;
    get isImagePen(): boolean;
    get hasAreaMarker(): boolean;
}
