import { NewLineMode } from "../WrapText";

export class Pen {
    text: string = '';
    x: number = 0;
    y: number = 0;
    width: number = 0;
    height: number = 0;
    ascent: number = 0;
    descent: number = 0;
    prop: any = {};
    newLineMode: NewLineMode = NewLineMode.none;
    startIndex: number = 0;

    set(
        text: string = '',
        x: number = 0,
        y: number = 0,
        width: number = 0,
        height: number = 0,
        ascent: number = 0,
        descent: number = 0,
        prop: any = {},
        newLineMode: NewLineMode = NewLineMode.none,
        startIndex: number = 0
    ): this {
        this.text = text;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.ascent = ascent;
        this.descent = descent;
        this.prop = prop;
        this.newLineMode = newLineMode;
        this.startIndex = startIndex;

        return this;
    }

    clone() {
        const result = new Pen();
        result.set(this.text, this.x, this.y, this.width, this.height, this.ascent, this.descent, Phaser.Utils.Objects.Clone(this.prop), this.newLineMode, this.startIndex);
        return result;
    }

    get plainText() {
        return (this.newLineMode === NewLineMode.raw) ? `${this.text}\n` : this.text;
    }

    get wrapText() {
        return (this.newLineMode !== NewLineMode.none) ? `${this.text}\n` : this.text;
    }

    get plainTextLength() {
        let len = this.text.length;
        if (this.newLineMode === NewLineMode.raw) {
            len += 1;
        }
        return len;
    }

    get endIndex() {
        return this.startIndex + this.plainTextLength;
    }

    get lastX() {
        return this.x + this.width;
    }

    get isTextPen() {
        return this.text !== "";
    }

    get isImagePen() {
        return Boolean(this.prop.img);
    }
    
    get hasAreaMarker() {
        return Boolean(this.prop.url);
    }
}