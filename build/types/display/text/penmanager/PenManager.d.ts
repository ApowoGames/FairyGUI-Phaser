import { NewLineMode } from "../WrapText";
import { Line } from "./Line";
import { Pen } from "./Pen";
declare type PropType = {
    [key: string]: any;
};
export declare class PenManager {
    pens: Pen[];
    lines: Line[];
    maxLineWidth: number;
    totalLineHeight: number;
    private penPool;
    constructor({ penPool: penPool }: {
        penPool: any;
    });
    destroy(): void;
    freePens(): this;
    getLineStartIndex(index: number): any;
    getLineEndIndex(index: number): number;
    getLineWidth(index: number): number;
    getLineWidths(): any[];
    addTextPen(text: string, x: number, y: number, width: number, height: number, ascent: number, descent: number, prop: PropType, newLineMode?: NewLineMode): this;
    addImagePen(x: number, y: number, width: number, height: number, prop: PropType): this;
    addNewLinePen(newLineMode: NewLineMode): this;
    addPen(pen: Pen): this;
    getSliceTagText(propToTextCallback: ((text: string, prop: PropType, prevProp: PropType) => string), propToTextCallbackScope?: any, start?: number, end?: number, wrap?: boolean): string;
    clone(targetPenManager?: PenManager): PenManager;
    get lastPen(): Pen;
    get lastLine(): Line;
    get linesCount(): number;
    get plainText(): string;
    get rawTextLength(): number;
}
export {};
