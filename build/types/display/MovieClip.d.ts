import { Image } from "./Image";
export interface Frame {
    addDelay: number;
    texture?: Phaser.Textures.Texture;
}
export declare class MovieClip extends Image {
    interval: number;
    swing: boolean;
    repeatDelay: number;
    timeScale: number;
    private _playing;
    private _frameCount;
    private _frames;
    private _frame;
    private _start;
    private _end;
    private _times;
    private _endAt;
    private _status;
    private _endHandler?;
    private _frameElapsed;
    private _reversed;
    private _repeatedCount;
    constructor(scene: Phaser.Scene);
    get frames(): Frame[];
    set frames(value: Frame[]);
    get frameCount(): number;
    get frame(): number;
    set frame(value: number);
    get playing(): boolean;
    set playing(value: boolean);
    rewind(): void;
    syncStatus(anotherMc: MovieClip): void;
    advance(timeInMiniseconds: number): void;
    setPlaySettings(start?: number, end?: number, times?: number, endAt?: number, endHandler?: () => void): void;
    update(): void;
    private drawFrame;
    private checkTimer;
    private __addToStage;
    private __removeFromStage;
}
