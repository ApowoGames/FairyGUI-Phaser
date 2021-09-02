export declare enum LoaderType {
    IMAGE = "image",
    ATLAS = "atlas",
    AUDIO = "audio",
    VIDEO = "video",
    JSON = "json",
    SCRIPT = "script",
    GLSL = "glsl",
    BITMAPFONT = "bitmapFont",
    SPRITESHEET = "spritesheet"
}
export declare class AssetProxy {
    private _resMap;
    private _completeCallBack;
    private _errorCallBack;
    private _emitter;
    constructor();
    get emitter(): Phaser.Events.EventEmitter;
    private static _inst;
    static get inst(): AssetProxy;
    getRes(key: string, type: string): Promise<any>;
    load(key: string, url: any, type: string, completeCallBack: Function, _errorCallBack?: Function): void;
    addListen(type: string, key: string): void;
    removeListen(): void;
    startLoad(): void;
    private totalComplete;
    private onLoadComplete;
    private onLoadError;
}
