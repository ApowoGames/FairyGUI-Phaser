import { Pool } from "../../../utils/Pool";
import { NewLineMode } from "../WrapText";
import { Line } from "./Line";
import { Pen } from "./Pen";

type PropType = { [key: string]: any };

export class PenManager {
    pens: Pen[];
    lines: Line[];
    maxLineWidth: number;
    totalLineHeight: number;

    private penPool: Pool<Pen>;
    constructor({ penPool: penPool }) {
        this.pens = [];
        this.lines = [];
        this.penPool = penPool;
    }

    destroy() {
        this.freePens();
    }

    freePens() {
        this.penPool.pushMultiple(this.pens);

        this.lines.forEach((l) => l.destroy());
        this.lines.length = 0;

        this.maxLineWidth = 0;
        this.totalLineHeight = 0;

        return this;
    }

    getLineStartIndex(index: number) {
        if (index >= this.lines.length) {
            return this.getLineEndIndex(index);
        }
        const line = this.lines[index];
        return (line && line[0]) ? line[0].startIndex : 0;
    }

    getLineEndIndex(index: number) {
        const len = this.lines.length;
        if (index >= len) {
            index = len - 1;
        }
        for (let li = index; li >= 0; li--) {
            let line = this.lines[li];
            if (line && line.hasPen()) {
                return line.lastPen.endIndex;
            }
        }
        return 0;
    }

    getLineWidth(index: number) {
        let line = this.lines[index];
        return (line) ? line.width : 0; // start from 0
    }

    getLineWidths() {
        const result = [];
        const len = this.lines.length;
        for (let i = 0; i < len; i++) {
            result.push(this.getLineWidth(i));
        }
        return result;
    }

    addTextPen(
        text: string,
        x: number,
        y: number,
        width: number,
        height: number,
        ascent: number,
        descent: number,
        prop: PropType,
        newLineMode: NewLineMode = NewLineMode.none
    ): this {
        let pen = this.penPool.pop();
        if (!pen) {
            pen = new Pen();
        }
        pen.set(text,
            x, y,
            width, height,
            ascent, descent,
            prop, newLineMode);
        this.addPen(pen);

        return this;
    }

    addImagePen(
        x: number,
        y: number,
        width: number,
        height: number,
        prop: PropType,
    ): this {

        this.addTextPen('', x, y, width, height, height, 0, prop, NewLineMode.none);

        return this;
    }

    addNewLinePen(
        newLineMode: NewLineMode
    ): this {

        let lastPen = this.lastPen;
        if (lastPen && (lastPen.newLineMode === NewLineMode.none)) {
            lastPen.newLineMode = newLineMode;
        }

        return this;
    }

    addPen(pen: Pen) {
        let previousPen = this.lastPen;
        if (previousPen == null) {
            pen.startIndex = 0;
        } else {
            pen.startIndex = previousPen.endIndex;
        }
        this.pens.push(pen);

        // Maintan lines
        let line = this.lastLine;
        if (line == null) {
            line = new Line();
            this.lines.push(line);
        }
        line.addPen(pen);

        // New line, add an empty line
        if (pen.newLineMode !== NewLineMode.none) {
            line = new Line();
            this.lines.push(line);
        }

        return this;
    }

    getSliceTagText(
        propToTextCallback: ((text: string, prop: PropType, prevProp: PropType) => string),
        propToTextCallbackScope?: any,
        start: number = 0,
        end?: number,
        wrap: boolean = false
    ): string {

        if (end === undefined) {
            let lastPen = this.lastPen;
            if (!lastPen) {
                return "";
            }

            end = lastPen.endIndex;
        }


        let arr: string[] = [];
        let previousProp: PropType;
        for (var i = 0, len = this.pens.length; i < len; i++) {
            let pen = this.pens[i];
            let penEndIdx = pen.endIndex;
            if (penEndIdx <= start) {
                continue;
            }

            let penTxt = (!wrap) ? pen.plainText : pen.wrapText;
            let currentProp = pen.prop;
            let penStartIdx = pen.startIndex;
            let isInRange = (penStartIdx >= start) && (penEndIdx <= end);
            if (!isInRange) {
                penTxt = penTxt.substring(start - penStartIdx, end - penStartIdx);
            }

            if (propToTextCallbackScope) {
                arr.push(
                    propToTextCallback.call(propToTextCallbackScope, penTxt, currentProp, previousProp)
                )
            } else {
                arr.push(
                    propToTextCallback(penTxt, currentProp, previousProp)
                )
            }

            previousProp = currentProp;
            if (penEndIdx >= end) {
                break;
            }
        }

        return arr.join();
    }

    clone(targetPenManager?: PenManager) {
        if (!targetPenManager) {
            targetPenManager = new PenManager({ penPool: this.penPool });
        }

        targetPenManager.freePens();

        for (const pen of this.pens) {
            targetPenManager.addPen(pen.clone());
        }

        const srcLines = this.lines;
        const targetLiens = targetPenManager.lines;
        const len = srcLines.length;
        for (let i = 0; i < len; i++) {
            const srcLine = srcLines[i];
            const targetLine = targetLiens[i];

            targetLine.y = srcLine.y;
            targetLine.height = srcLine.height;
        }

        return targetPenManager;
    }

    get lastPen() {
        return this.pens[this.pens.length - 1];
    }

    get lastLine() {
        return this.lines[this.lines.length - 1];
    }

    get linesCount() {
        return this.lines.length;
    }

    get plainText() {
        let txt = "";
        for (const pen of this.pens) {
            txt += pen.plainText;
        }
        return txt;
    }

    get rawTextLength() {
        let len = 0;
        for (const pen of this.pens) {
            len += pen.plainTextLength;
        }
        return len;
    }
}
