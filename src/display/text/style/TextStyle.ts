import { TextField } from "../TextField";
import { CONST } from "../const";
import { FillStyleType, HAlignModeString, VAlignModeString } from "../Types";
import { GRoot, UIConfig } from "../../..";
import { WrapMode } from "../WrapText";
import { MeasureText } from "../measureText";


//  Key: [ Object Key, Default Value ]

var propertyMap = {
    fontFamily: ['fontFamily', 'Courier'],
    fontSize: ['fontSize', '16px'],
    fontStyle: ['fontStyle', ''],
    backgroundColor: ['backgroundColor', null],
    color: ['color', '#fff'],
    stroke: ['stroke', '#fff'],
    strokeThickness: ['strokeThickness', 0],
    shadowOffsetX: ['shadow.offsetX', 0],
    shadowOffsetY: ['shadow.offsetY', 0],
    shadowColor: ['shadow.color', '#000'],
    shadowBlur: ['shadow.blur', 0],
    shadowStroke: ['shadow.stroke', false],
    shadowFill: ['shadow.fill', false],
    align: ['align', 'left'],
    maxLines: ['maxLines', 0],
    fixedWidth: ['fixedWidth', 0],
    fixedHeight: ['fixedHeight', 0],
    resolution: ['resolution', 0],
    rtl: ['rtl', false],
    testString: ['testString', '|MÃ‰qgy'],
    baselineX: ['baselineX', 1.2],
    baselineY: ['baselineY', 1.4],
    wordWrapWidth: ['wordWrap.width', null],
    wordWrapCallback: ['wordWrap.callback', null],
    wordWrapCallbackScope: ['wordWrap.callbackScope', null],
    wordWrapUseAdvanced: ['wordWrap.useAdvancedWrap', false]
};

const GetValue = Phaser.Utils.Objects.GetValue;
const GetAdvancedValue = Phaser.Utils.Objects.GetAdvancedValue;
export interface ITextStyle {

    fontFamily?: string;
    fontSize?: string;
    fontStyle?: string;
    font?: string;
    backgroundColor?: string;
    color?: string;
    stroke?: string;
    strokeThickness?: number;
    shadow?: Phaser.Types.GameObjects.Text.TextShadow;
    padding?: Phaser.Types.GameObjects.Text.TextPadding;
    align?: string;
    maxLines?: number;

    testString?: string;
    baselineX?: number;
    baselineY?: number;
    wordWrap?: Phaser.Types.GameObjects.Text.TextWordWrap;

    italic?: boolean;
    bold?: boolean;

    fillStyle?: FillStyleType;
    strokeStyle?: FillStyleType;

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

// @ts-ignore
export class TextStyle implements ITextStyle {
    fontFamily?: string = UIConfig.defaultFont;
    fontSize?: string = "16px";
    fontStyle?: string = "";
    backgroundColor?: string;
    color?: string = "#fff";
    stroke?: string = "#fff";
    shadow?: Phaser.Types.GameObjects.Text.TextShadow;
    padding?: Phaser.Types.GameObjects.Text.TextPadding;
    align?: string = "left";
    maxLines?: number = 0;
    testString?: string = '|MÃ‰qgy';
    baselineX?: number = 1.2;
    baselineY?: number = 1.4;
    wordWrap?: Phaser.Types.GameObjects.Text.TextWordWrap;

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
    private _resolution: number = 1;
    lineSpacing?: number = 0;
    letterSpacing?: number = 0;

    rtl?: boolean = false;

    // wrap
    private _wrapMode?: WrapMode;
    private _wrapWidth?: number;

    antialias?: boolean = true;
    protected _font: string;

    parent: TextField;

    private _metrics;
    constructor(text: TextField, style: ITextStyle) {
        this.parent = text;

        this.setStyle(style);
        let metrics = style.metrics;
        if (metrics) {
            this._metrics = {
                ascent: metrics.ascent || 0,
                descent: metrics.descent || 0,
                fontSize: metrics.fontSize || 0
            }
        } else {
            metrics = MeasureText(this)
        }
    }

    get font(): string {
        return this._font;
    }

    get wrapMode(): number {
        return this._wrapMode;
    }

    set wrapMode(val: number) {
        this._wrapMode = val;
    }

    get wrapWidth(): number {
        return this._wrapWidth;
    }

    set wrapWidth(val: number) {
        this._wrapWidth = val;
        this.update(true);
    }

    get resolution(): number {
        return this._resolution;
    }

    set resolution(val) {
        this._resolution = val;
        this.update(true);
    }



    syncFont(canvas, context) {
        context.font = this._font;
    }

    setStyle(style: ITextStyle, updateText: boolean = true, setDefaults: boolean = false) {
        if (updateText === undefined) { updateText = true; }
        if (setDefaults === undefined) { setDefaults = false; }

        if (style && style.hasOwnProperty('fontSize') && typeof style.fontSize === 'number') {
            // @ts-ignore
            style.fontSize = style.fontSize.toString() + 'px';
        }

        for (var key in propertyMap) {
            var value = (setDefaults) ? propertyMap[key][1] : this[key];

            if (key === 'wordWrapCallback' || key === 'wordWrapCallbackScope') {
                // 回调和范围应该在不处理值的情况下设置
                this[key] = GetValue(style, propertyMap[key][0], value);
            }
            else {
                this[key] = GetAdvancedValue(style, propertyMap[key][0], value);
            }
        }

        var font = GetValue(style, 'font', null);

        if (font !== null) {
            this.setFont(font, false);
        }

        this._font = [this.fontStyle, this.fontSize, this.fontFamily].join(' ').trim();

        // 允许使用填充代替颜色
        var fill = GetValue(style, 'fill', null);

        if (fill !== null) {
            this.color = fill;
        }

        if (updateText) {
            return this.update(true);
        }
        else {
            return this.parent;
        }
    }

    update(recalculateMetrics: boolean) {
        if (recalculateMetrics) {
            this._font = `${this.fontStyle} ${this.fontSize} ${this.fontFamily}`;
            // @ts-ignore
            this._metrics = Phaser.GameObjects.MeasureText(this);
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

    setFont(font, updateText) {
        if (updateText === undefined) { updateText = true; }

        var fontFamily = font;
        var fontSize = '';
        var fontStyle = '';

        if (typeof font !== 'string') {
            fontFamily = GetValue(font, 'fontFamily', 'Courier');
            fontSize = GetValue(font, 'fontSize', '16px');
            fontStyle = GetValue(font, 'fontStyle', '');
        }
        else {
            var fontSplit = font.split(' ');

            var i = 0;

            fontStyle = (fontSplit.length > 2) ? fontSplit[i++] : '';
            fontSize = fontSplit[i++] || '16px';
            fontFamily = fontSplit[i++] || 'Courier';
        }

        if (fontFamily !== this.fontFamily || fontSize !== this.fontSize || fontStyle !== this.fontStyle) {
            this.fontFamily = fontFamily;
            this.fontSize = fontSize;
            this.fontStyle = fontStyle;

            if (updateText) {
                this.update(true);
            }
        }

        return this.parent;
    }

    setFontFamily(family: string) {
        this.fontFamily = family;
        return this.update(true);
    }

    setFontStyle(style: string) {
        if (this.fontStyle !== style) {
            this.fontStyle = style;
            return this.update(true);
        }
    }

    setFontSize(size: string | number) {
        if (typeof size === "number") {
            // size = (GRoot.inst.stageWidth / GRoot.dpr) / (GRoot.inst.desginWidth / size) / GRoot.uiScale;
            size = size.toString() + "px";
        }
        if (this.fontSize !== size) {
            this.fontSize = size;
            return this.update(true);
        }
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

    setFill(color: string) {
        if (this.fillStyle !== color) {
            this.fillStyle = color;
            this.update(true);
        }
    }

    setLineSpacing(value: number) {
        this.lineSpacing = value;
        this.update(false);
    }

    setStroke(style: FillStyleType, thickness: number) {
        this.strokeStyle = style;
        this.strokeThickness = thickness;
        return this.update(true);
    }

    setUnderLine(thickness: number = 2, style?: FillStyleType, offsetY?: number) {
        if (!style) {
            style = this.fillStyle;
        }

        if (this.underlineColor !== style || this.underlineThickness !== thickness || this.underlineOffsetY !== offsetY) {
            this.underlineColor = style;
            this.underlineThickness = thickness;
            if (offsetY) this.underlineOffsetY = offsetY;
            return this.update(true);
        }
    }

    setShadowStyle(color: string) {
        if (this.shadowColor !== color) {
            this.shadowColor = color;
            return this.update(true);
        }
    }

    setShadowOffset(x: number, y: number) {
        if (this.shadowOffsetX !== x || this.shadowOffsetY !== y) {
            this.shadowFill = (x !== 0 || y !== 0);
            this.shadowOffsetX = x;
            this.shadowOffsetY = y;
            return this.update(true);
        }
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