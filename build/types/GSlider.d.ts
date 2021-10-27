import { ByteBuffer } from './utils/ByteBuffer';
import { GComponent } from "./GComponent";
export declare class GSlider extends GComponent {
    private _min;
    private _max;
    private _value;
    private _titleType;
    private _reverse;
    private _wholeNumbers;
    private _titleObject;
    private _barObjectH;
    private _barObjectV;
    private _barMaxWidth;
    private _barMaxHeight;
    private _barMaxWidthDelta;
    private _barMaxHeightDelta;
    private _gripObject;
    private _clickPos;
    private _clickPercent;
    private _barStartX;
    private _barStartY;
    changeOnClick: boolean;
    /**是否可拖动开关**/
    canDrag: boolean;
    constructor(scene: Phaser.Scene, type: any);
    get titleType(): number;
    set titleType(value: number);
    get wholeNumbers(): boolean;
    set wholeNumbers(value: boolean);
    get min(): number;
    set min(value: number);
    get max(): number;
    set max(value: number);
    get value(): number;
    set value(value: number);
    update(): void;
    private updateWithPercent;
    protected constructExtension(buffer: ByteBuffer): void;
    protected handleSizeChanged(): void;
    setup_afterAdd(buffer: ByteBuffer, beginPos: number): void;
    private __gripMouseDown;
    private __gripMouseMove;
    private __gripMouseUp;
    private __barMouseDown;
}
