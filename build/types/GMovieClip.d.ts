import { GObject } from './GObject';
import { ByteBuffer } from './utils/ByteBuffer';
export declare class GMovieClip extends GObject {
    private _movieClip;
    constructor(scene: Phaser.Scene);
    get color(): string;
    set color(value: string);
    createDisplayObject(): void;
    get playing(): boolean;
    set playing(value: boolean);
    get frame(): number;
    set frame(value: number);
    get timeScale(): number;
    set timeScale(value: number);
    rewind(): void;
    syncStatus(anotherMc: GMovieClip): void;
    advance(timeInMiniseconds: number): void;
    setPlaySettings(start?: number, end?: number, times?: number, endAt?: number, endHandler?: () => void): void;
    getProp(index: number): any;
    setProp(index: number, value: any): void;
    constructFromResource(): Promise<void>;
    setup_beforeAdd(buffer: ByteBuffer, beginPos: number): void;
}
