import { ByteBuffer } from './utils/ByteBuffer';
import { ScrollPane } from './ScrollPane';
import { GComponent } from "./GComponent";
export declare class GScrollBar extends GComponent {
    private _grip;
    private _arrowButton1;
    private _arrowButton2;
    private _bar;
    private _target;
    private _vertical;
    private _scrollPerc;
    private _fixedGripSize;
    private _dragOffset;
    private _gripDragging;
    constructor(scene: Phaser.Scene, type: any);
    setScrollPane(target: ScrollPane, vertical: boolean): void;
    setDisplayPerc(value: number): void;
    setScrollPerc(val: number): void;
    get minSize(): number;
    get gripDragging(): boolean;
    protected constructExtension(buffer: ByteBuffer): void;
    private __gripMouseDown;
    private __gripMouseMove;
    private __gripMouseUp;
    private __arrowButton1Click;
    private __arrowButton2Click;
    private __barMouseDown;
}
