import { TextField } from "../TextField";
import { FillStyleType, HAlignModeString, VAlignModeString } from "../Types";
import { WrapMode } from "../WrapText";
export declare class ITextStyle {
    backgroundColor?: string;
    fontFamily?: string;
    fontSize?: string | number;
    fontStyle?: string;
    italic?: boolean;
    bold?: boolean;
    font?: string;
    fillStyle?: FillStyleType;
    strokeStyle?: FillStyleType;
    strokeThickness?: number;
    shadowOffsetX?: number;
    shadowOffsetY?: number;
    shadowColor?: string;
    shadowBlur?: number;
    shadowStroke?: boolean;
    shadowFill?: boolean;
    underlineColor?: FillStyleType;
    underlineThickness?: number;
    underlineOffsetY?: number;
    rtl?: boolean;
    halign?: HAlignModeString;
    valign?: VAlignModeString;
    fixedWidth?: number;
    fixedHeight?: number;
    resolution?: number;
    lineSpacing?: number;
    letterSpacing?: number;
    wrapMode?: number;
    wrapWidth?: number;
    image?: any;
    metrics?: any;
    antialias?: boolean;
}
export declare class TextStyle implements ITextStyle {
    backgroundColor?: string;
    fontFamily?: string;
    fontSize?: string;
    fontStyle?: string;
    bold: boolean;
    italic: boolean;
    fillStyle?: FillStyleType;
    strokeStyle?: FillStyleType;
    strokeThickness?: number;
    shadowOffsetX?: number;
    shadowOffsetY?: number;
    shadowColor?: string;
    shadowBlur?: number;
    shadowStroke?: boolean;
    shadowFill?: boolean;
    underlineColor?: FillStyleType;
    underlineThickness?: number;
    underlineOffsetY?: number;
    halign?: HAlignModeString;
    valign?: VAlignModeString;
    fixedWidth?: number;
    fixedHeight?: number;
    resolution?: number;
    lineSpacing?: number;
    letterSpacing?: number;
    rtl?: boolean;
    wrapMode?: WrapMode;
    wrapWidth?: number;
    antialias?: boolean;
    protected _font: string;
    private parent;
    private _metrics;
    constructor(text: TextField, style: ITextStyle);
    setStyle(style: ITextStyle, updateText?: boolean): void;
    update(recalculateMetrics: boolean): TextField;
    buildFont(): this;
    setFont(font: any): TextField;
    setFontFamily(family: string): TextField;
    setFontStyle(style: any): TextField;
    setFontSize(size: string | number): TextField;
    setFixedSize(width: number, height: number): TextField;
    setFill(color: any): void;
    setLineSpacing(value: number): void;
    setStroke(style: FillStyleType, thickness: number): void;
    setUnderLine(color: string, o: any): void;
    setSingleLine(value: boolean): void;
    get canvas(): HTMLCanvasElement;
    get context(): CanvasRenderingContext2D;
    get isWrapFitMode(): boolean;
    get lineHeight(): any;
    get metrics(): any;
}
