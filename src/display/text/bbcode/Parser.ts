import { ITextStyle } from "../style/TextStyle";

const GETPROP_RESULT = {
    text: null,
    prop: null
}

type PropType = {
    b?: true,
    i?: true,
    size?: string,
    color?: string,
    stroke?: string | true,
    u?: string | true,
    shadow?: true,
    y?: number,
    img?: string | true,
    url?: string
}

export class Parser {
    constructor() {
    }

    splitText(text: string, isPlainTextMode: boolean = false): string[] {
        const result: string[] = [];

        let charIdx = 0;
        while (true) {
            const arr = RE_SPLITTEXT.exec(text);
            if (!arr) {
                break;
            }

            const match = arr[0];
            const matchStart = RE_SPLITTEXT.lastIndex - match.length;
            if (charIdx < matchStart) {
                result.push(text.substring(charIdx, matchStart));
            }

            if (!isPlainTextMode) {
                result.push(match);
            }

            charIdx = RE_SPLITTEXT.lastIndex;
        }

        const totalLen = text.length;
        if (charIdx < totalLen) {
            result.push(text.substring(charIdx, totalLen));
        }
        return result; // [text, ...]
    }

    tagTextToProp(text: string, prevProp: PropType) {
        let plainText: string, innerMatch: RegExpMatchArray;
        if (!prevProp) {
            prevProp = {};
        }

        if (prevProp.img) {
            if (prevProp.img === true) {
                this.updateProp(prevProp, PROP_ADD, "img", text);
            } else {
                this.updateProp(prevProp, PROP_REMOVE, "img");
            }
            plainText = "";
        }
        // Check if current fragment is a class tag
        if (RE_BLOD_OPEN.test(text)) {
            this.updateProp(prevProp, PROP_ADD, "b", true);
            plainText = "";
        } else if (RE_BLOD_CLOSE.test(text)) {
            this.updateProp(prevProp, PROP_REMOVE, "b");
            plainText = "";
        } else if (RE_ITALICS_OPEN.test(text)) {
            this.updateProp(prevProp, PROP_ADD, "i", true);
            plainText = "";
        } else if (RE_ITALICS_CLOSE.test(text)) {
            this.updateProp(prevProp, PROP_REMOVE, "i");
            plainText = "";
        } else if (RE_SIZE_OPEN.test(text)) {
            innerMatch = text.match(RE_SIZE_OPEN);
            this.updateProp(prevProp, PROP_ADD, "size", `${innerMatch[1]}px`);
            plainText = "";
        } else if (RE_SIZE_CLOSE.test(text)) {
            this.updateProp(prevProp, PROP_REMOVE, "size");
            plainText = "";
        } else if (RE_COLOR_OPEN.test(text)) {
            innerMatch = text.match(RE_COLOR_OPEN);
            this.updateProp(prevProp, PROP_ADD, "color", innerMatch[1]);
            plainText = "";
        } else if (RE_COLOR_CLOSE.test(text)) {
            this.updateProp(prevProp, PROP_REMOVE, "color");
            plainText = "";
        } else if (RE_UNDERLINE_OPEN.test(text)) {
            innerMatch = text.match(RE_UNDERLINE_OPEN);
            this.updateProp(prevProp, PROP_ADD, "u", true);
            plainText = "";
        } else if (RE_UNDERLINE_OPENC.test(text)) {
            innerMatch = text.match(RE_UNDERLINE_OPENC);
            this.updateProp(prevProp, PROP_ADD, "u", innerMatch[1]);
            plainText = "";
        } else if (RE_UNDERLINE_CLOSE.test(text)) {
            this.updateProp(prevProp, PROP_REMOVE, "u");
            plainText = "";
        } else if (RE_SHADOW_OPEN.test(text)) {
            this.updateProp(prevProp, PROP_ADD, "shadow", true);
            plainText = "";
        } else if (RE_SHADOW_CLOSE.test(text)) {
            this.updateProp(prevProp, PROP_REMOVE, "shadow");
            plainText = "";
        } else if (RE_STROKE_OPEN.test(text)) {
            this.updateProp(prevProp, PROP_ADD, "stroke", true);
            plainText = "";
        } else if (RE_STROKE_OPENC.test(text)) {
            innerMatch = text.match(RE_STROKE_OPENC);
            this.updateProp(prevProp, PROP_ADD, "stroke", innerMatch[1]);
            plainText = "";
        } else if (RE_STROKE_CLOSE.test(text)) {
            this.updateProp(prevProp, PROP_REMOVE, "stroke");
            plainText = "";
        } else if (RE_OFFSETY_OPEN.test(text)) {
            innerMatch = text.match(RE_OFFSETY_OPEN);
            this.updateProp(prevProp, PROP_ADD, "y", parseFloat(innerMatch[1]));
            plainText = "";
        } else if (RE_OFFSETY_CLOSE.test(text)) {
            this.updateProp(prevProp, PROP_REMOVE, "y");
            plainText = "";
        } else if (RE_IMAGE_OPEN.test(text)) {
            innerMatch = text.match(RE_IMAGE_OPEN);
            this.updateProp(prevProp, PROP_ADD, "img", true);
            plainText = "";
        } else if (RE_IMAGE_CLOSE.test(text)) {
            this.updateProp(prevProp, PROP_REMOVE, "img");
            plainText = "";
        } else if (RE_URL_OPEN.test(text)) {
            innerMatch = text.match(RE_URL_OPEN);
            this.updateProp(prevProp, PROP_ADD, "url", innerMatch[1]);
            plainText = "";
        } else if (RE_URL_CLOSE.test(text)) {
            this.updateProp(prevProp, PROP_REMOVE, "url");
            plainText = "";
        } else {
            plainText = text;
        }

        var result = GETPROP_RESULT;
        result.text = plainText;
        result.prop = prevProp;
        return result;
    }

    propToContextStyle(defaultStyle: ITextStyle, prop: PropType) {
        const result: ITextStyle = {};
        if (!prop.hasOwnProperty("img")) {
            result.image = null;

            // if (prop.hasOwnProperty("family")) {
            //     result.fontFamily = prop.family;
            // } else {
            //     result.fontFamily = defaultStyle.fontFamily;
            // }

            result.fontFamily = defaultStyle.fontFamily;

            result.fontSize = prop.size ?? defaultStyle.fontSize;

            result.fontStyle = this.getFontStyle(prop.b ?? defaultStyle.bold, prop.i ?? defaultStyle.italic);

            result.font = `${result.fontStyle} ${result.fontSize} ${result.fontFamily}`;

            result.fillStyle = prop.color ?? defaultStyle.fillStyle;

            result.letterSpacing = defaultStyle.letterSpacing;

            result.lineSpacing = defaultStyle.lineSpacing;

            if (prop.hasOwnProperty("stroke")) {
                result.strokeStyle = prop.stroke === true ? defaultStyle.strokeStyle : prop.stroke;
                // if (prop.stroke === true) {
                //     result.strokeStyle = defaultStyle.strokeStyle;
                //     result.strokeThickness = defaultStyle.strokeThickness;
                // } else {
                //     result.strokeStyle = prop.stroke;
                //     result.strokeThickness = defaultStyle.strokeThickness;
                // }
            } else {
                result.strokeStyle = defaultStyle.strokeStyle;
            }
            result.strokeThickness = defaultStyle.strokeThickness;
        } else {
            result.image = prop.img;
        }

        if (prop.hasOwnProperty("shadow")) {
            if (prop.shadow === true) {
                result.shadowColor = defaultStyle.shadowColor;
            } else {
                result.shadowColor = prop.shadow;
            }
            result.shadowStroke = true;
            result.shadowFill = true;
        } else {
            result.shadowBlur = defaultStyle.shadowBlur;
            result.shadowStroke = defaultStyle.shadowStroke;
            result.shadowFill = defaultStyle.shadowFill;
        }
        result.shadowColor = defaultStyle.shadowColor;
        result.shadowOffsetX = defaultStyle.shadowOffsetX;
        result.shadowOffsetY = defaultStyle.shadowOffsetY;

        if (prop.hasOwnProperty('u')) {
            if (typeof prop.u === "string") {
                result.underlineColor = prop.u;
            } else {
                result.underlineColor = defaultStyle.fillStyle;
            }
            result.underlineThickness = defaultStyle.underlineThickness || 2;
            result.underlineOffsetY = defaultStyle.underlineOffsetY;
        } else {
            result.underlineColor = defaultStyle.underlineColor;
            result.underlineThickness = defaultStyle.underlineThickness;
            result.underlineOffsetY = defaultStyle.underlineOffsetY;
        }

        if (prop.hasOwnProperty("url")) {
            result.underlineColor = defaultStyle.fillStyle;
            result.underlineThickness = 2;
            result.underlineOffsetY = 5;
        }

        result.resolution = defaultStyle.resolution;
        result.antialias = defaultStyle.antialias;
        return result;
    }

    propToTagText(text: string, prop: PropType, prevProp): string {
        if (prevProp === undefined) {
            prevProp = EMPTYPROP;
        }
        const headers: string[] = [];
        for (const k in prevProp) {
            if (!prop.hasOwnProperty(k)) {
                headers.push(`[/${k}]`);
            }
        }

        for (const k in prop) {
            const value = prop[k];
            if (prevProp[k] === value) {
                continue;
            }
            switch (k) {
                case "size":
                    headers.push(`[size=${value.replace("px", "")}]`);
                    break;
                case "color":
                case "stroke":
                case "img":
                case "url":
                case "y":
                    headers.push(`[${k}=${value}]`);
                    break;
                case "u":
                    if (value === true) {
                        headers.push(`[u]`);
                    } else {
                        headers.push(`[u=${value}]`);
                    }
                    break;
                default:
                    headers.push(`[${k}]`);
                    break;
            }
        }
        headers.push(text);
        return headers.join("")
    }

    protected updateProp(prop, op, key: string, value?: any) {
        if (op === PROP_ADD) {
            prop[key] = value;
        } else {
            if (prop.hasOwnProperty(key)) {
                delete prop[key];
            }
        }
    }

    protected getFontStyle(isBold: boolean, isItalic: boolean) {
        if (isBold && isItalic) {
            return "bold italic"
        }
        if (isBold) {
            return "bold";
        }
        if (isItalic) {
            return "italic";
        }
        return "";
    }
}
const RE_SPLITTEXT = /\[b\]|\[\/b\]|\[i\]|\[\/i\]|\[size=(\d+)\]|\[\/size\]|\[color=([a-z]+|#[0-9abcdef]+)\]|\[\/color\]|\[u\]|\[u=([a-z]+|#[0-9abcdef]+)\]|\[\/u\]|\[shadow\]|\[\/shadow\]|\[stroke\]|\[stroke=([a-z]+|#[0-9abcdef]+)\]|\[\/stroke\]|\[img\]|\[\/img\]|\[url=([^\]]+)\]|\[\/url\]|\[y=([-.0-9]+)\]|\[\/y\]/ig;

const RE_BLOD_OPEN = /\[b\]/i;
const RE_BLOD_CLOSE = /\[\/b\]/i;
const RE_ITALICS_OPEN = /\[i\]/i;
const RE_ITALICS_CLOSE = /\[\/i\]/i;
const RE_SIZE_OPEN = /\[size=(\d+)\]/i;
const RE_SIZE_CLOSE = /\[\/size\]/i;
const RE_COLOR_OPEN = /\[color=([a-z]+|#[0-9abcdef]+)\]/i;
const RE_COLOR_CLOSE = /\[\/color\]/i;
const RE_UNDERLINE_OPEN = /\[u\]/i;
const RE_UNDERLINE_OPENC = /\[u=([a-z]+|#[0-9abcdef]+)\]/i;
const RE_UNDERLINE_CLOSE = /\[\/u\]/i;
const RE_SHADOW_OPEN = /\[shadow\]/i;
const RE_SHADOW_CLOSE = /\[\/shadow\]/i;
const RE_STROKE_OPEN = /\[stroke\]/i;
const RE_STROKE_OPENC = /\[stroke=([a-z]+|#[0-9abcdef]+)\]/i;
const RE_STROKE_CLOSE = /\[\/stroke\]/i;
const RE_OFFSETY_OPEN = /\[y=([-.0-9]+)\]/i;
const RE_OFFSETY_CLOSE = /\[\/y\]/i;
const RE_IMAGE_OPEN = /\[img\]/i;
const RE_IMAGE_CLOSE = /\[\/img\]/i;
const RE_URL_OPEN = /\[url=([^\]]+)\]/i;
const RE_URL_CLOSE = /\[\/url\]/i;
const EMPTYPROP = {};
const PROP_REMOVE = false;
const PROP_ADD = true;
