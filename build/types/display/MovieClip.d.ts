import { Image } from "./Image";
export declare class MovieClip extends Image {
    swing: boolean;
    repeatDelay: number;
    timeScale: number;
    private _interval;
    private _endHandler?;
    private _frameElapsed;
    private _reversed;
    private _repeatedCount;
    private _curKey;
    private _sprite;
    constructor(scene: Phaser.Scene);
    set interval(val: number);
    get interval(): number;
    get frames(): Phaser.Textures.Frame[];
    set frames(value: Phaser.Textures.Frame[]);
    get frameCount(): number;
    get frame(): number;
    set frame(value: number);
    get playing(): boolean;
    set playing(value: boolean);
    advance(timeInMiniseconds: number): void;
    setPlaySettings(start?: number, end?: number, times?: number, endAt?: number, endHandler?: () => void): void;
    private drawFrame;
    protected rebuild(): void;
    destroy(): void;
    private checkTimer;
}
