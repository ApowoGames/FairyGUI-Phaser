import { Byte } from './Byte';
import { HitArea } from './HitArea';
export declare class PixelHitTest extends HitArea {
    private _data;
    offsetX: number;
    offsetY: number;
    scaleX: number;
    scaleY: number;
    constructor(data: PixelHitTestData, offsetX: number, offsetY: number);
    contains(x: number, y: number): boolean;
}
export declare class PixelHitTestData {
    pixelWidth: number;
    scale: number;
    pixels: number[];
    constructor();
    load(ba: Byte): void;
}
