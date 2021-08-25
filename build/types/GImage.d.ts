import { ByteBuffer } from './utils/ByteBuffer';
import { Image } from './display/Image';
import { GObject } from './GObject';
export declare class GImage extends GObject {
    private _image;
    private _flip;
    private _contentItem;
    constructor(scene?: Phaser.Scene);
    get image(): Image;
    get color(): string;
    set color(value: string);
    get flip(): number;
    set flip(value: number);
    get fillMethod(): number;
    set fillMethod(value: number);
    get fillOrigin(): number;
    set fillOrigin(value: number);
    get fillClockwise(): boolean;
    set fillClockwise(value: boolean);
    get fillAmount(): number;
    set fillAmount(value: number);
    createDisplayObject(): void;
    constructFromResource(): Promise<void>;
    protected handleXYChanged(): void;
    getProp(index: number): any;
    setProp(index: number, value: any): void;
    setup_beforeAdd(buffer: ByteBuffer, beginPos: number): void;
}
