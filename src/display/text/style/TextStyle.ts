import { TextField } from "../TextField";
import { CONST } from "../const";
import { FillStyleType, HAlignModeString, VAlignModeString } from "../Types";
import { UIConfig } from "../../..";
import { WrapMode } from "../WrapText";

export class ITextStyle {
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

    // shadow
    shadowOffsetX?: number;
    shadowOffsetY?: number;
    shadowColor?: string;
    shadowBlur?: number;
    shadowStroke?: boolean;
    shadowFill?: boolean;

    // underline
    underlineColor?: FillStyleType;
    underlineThickness?: number;
    underlineOffsetY?: number;

    // rtl
    rtl?: boolean;

    // align
    halign?: HAlignModeString;
    valign?: VAlignModeString;

    // size
    fixedWidth?: number;
    fixedHeight?: number;
    resolution?: number;
    lineSpacing?: number;
    letterSpacing?: number

    // wrap
    wrapMode?: number;
    wrapWidth?: number;

    // image
    image?: any;

    metrics?: any;

    antialias?: boolean;
}

export class TextStyle implements ITextStyle {
    backgroundColor?: string;

    fontFamily?: string = UIConfig.defaultFont;
    fontSize?: string = "16px"
    fontStyle?: string = "";
    bold: boolean = false;
    italic: boolean = false;
    fillStyle?: FillStyleType = "#000";
    strokeStyle?: FillStyleType = "#000";
    strokeThickness?: number = 0;

    // shadow
    shadowOffsetX?: number = 0;
    shadowOffsetY?: number = 0;
    shadowColor?: string = "#000";
    shadowBlur?: number = 0;
    shadowStroke?: boolean = false;
    shadowFill?: boolean = false;

    // underline
    underlineColor?: FillStyleType;
    underlineThickness?: number = 0;
    underlineOffsetY?: number = 5;

    // align
    halign?: HAlignModeString = "left";
    valign?: VAlignModeString = "top";

    // size
    fixedWidth?: number = 0;
    fixedHeight?: number = 0;
    resolution?: number = 1;
    lineSpacing?: number = 0;
    letterSpacing?: number = 0;

    rtl?: boolean = false;

    // wrap
    wrapMode?: WrapMode;
    wrapWidth?: number;

    antialias?: boolean = true;
    protected _font: string;

    private parent: TextField;

    private _metrics;
    constructor(text: TextField, style: ITextStyle) {
        this.parent = text;

        this.setStyle(style);
        const metrics = style.metrics;
        if (metrics) {
            this._metrics = {
                ascent: metrics.ascent || 0,
                descent: metrics.descent || 0,
                fontSize: metrics.fontSize || 0
            }
        } else {
            // TODO
            // this.metrics = Phaser.GameObjects.MeasureText(this)
        }
    }

    setStyle(style: ITextStyle, updateText: boolean = true) {
        if (style && style.hasOwnProperty("wrap")) {
            // TODO
            // const wrap = style.wrap;
        }

        if (style && style.fontSize && typeof style.fontSize === "number") {
            style.fontSize = style.fontSize.toString() + "px";
        }
    }

    update(recalculateMetrics: boolean) {
        if (recalculateMetrics) {
            this._font = `${this.fontStyle} ${this.fontSize} ${this.fontFamily}`;
            // TODO
            // this.metrics = Phaser.GameObjects.MeasureText(this);
        }
        return this.parent.updateText(recalculateMetrics);
    }

    buildFont() {
        const newFont = this.fontStyle + " " + this.fontSize + " " + this.fontFamily;
        if (newFont !== this._font) {
            this._font = newFont;
        }
        return this;
    }

    setFont(font) {
        
        return this.update(true);
    }

    setFontFamily(family: string) {
        this.fontFamily = family;

        return this.update(true);
    }

    setFontStyle(style) {
        this.fontStyle = style;

        return this.update(true);
    }

    setFontSize(size: string | number) {
        if (typeof size === "number") {
            size = size.toString() + "px";
        }
        this.fontSize = size;
        return this.update(true);
    }

    setFixedSize(width: number, height: number) {
        this.fixedWidth = width;
        this.fixedHeight = height;

        if (width) {
            this.parent.width = width;
        }
        if (height) {
            this.parent.height = height;
        }
        return this.update(this.isWrapFitMode);
    }

    setFill(color) {
    }

    setLineSpacing(value: number) {
        this.lineSpacing = value;
        this.update(false);
    }

    setStroke(style: FillStyleType, thickness: number) {
        this.strokeStyle = style;
        this.strokeThickness = thickness;
        // return this.update(true);
    }

    setUnderLine(color: string, o) {
        this.underlineColor = color;
        // this.underlineOffset = offset;
        // this.underlineThickness = thickness;
    }

    setSingleLine(value: boolean) {
        
    }

    get canvas() {
        return this.parent.canvasText.canvas;
    }

    get context() {
        return this.parent.canvasText.context;
    }

    get isWrapFitMode() {
        return (this.fixedWidth > 0) && (this.wrapMode !== CONST.NO_WRAP) && (this.wrapWidth === 0);
    }

    get lineHeight() {
        return this._metrics.fontSize + this.strokeThickness + this.lineSpacing;
    }

    get metrics() {
        return this._metrics;
    }
}

const WRAPMODE = {
    none: CONST.NO_WRAP,
    word: CONST.WORD_WRAP,
    char: CONST.CHAR_WRAP,
    character: CONST.CHAR_WRAP
};