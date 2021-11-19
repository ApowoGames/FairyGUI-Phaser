import { Pen } from "./Pen";
export declare class Line {
    pens: Pen[];
    y: number;
    height: number;
    destroy(): void;
    addPen(pen: Pen): this;
    hasPen(): boolean;
    get firstPen(): Pen;
    get lastPen(): Pen;
    get pensCounts(): number;
    get startIndex(): number;
    get width(): number;
}
