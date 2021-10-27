import { GObject } from './GObject';
import { ByteBuffer } from './utils/ByteBuffer';
export declare class GMovieClip extends GObject {
    private _movieClip;
    constructor(scene: Phaser.Scene, type: number);
    get color(): string;
    set color(value: string);
    createDisplayObject(): void;
    getChild(): GObject;
    get playing(): boolean;
    set playing(value: boolean);
    get frame(): number;
    set frame(value: number);
    get timeScale(): number;
    set timeScale(value: number);
    advance(timeInMiniseconds: number): void;
    setPlaySettings(start?: number, end?: number, times?: number, endAt?: number, endHandler?: () => void): void;
    set touchable(value: boolean);
    getProp(index: number): any;
    setProp(index: number, value: any): void;
    constructFromResource(): Promise<void>;
    protected handleSizeChanged(): void;
    setup_beforeAdd(buffer: ByteBuffer, beginPos: number): void;
    protected handleXYChanged(): void;
}
