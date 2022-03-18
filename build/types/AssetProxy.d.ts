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
export interface IResCallBackObj {
    id: string;
    completeCallBack: Function;
    errorCallBack?: Function;
    context?: any;
}
export declare class AssetProxy {
    private _resMap;
    private _resCallBackMap;
    private _emitter;
    constructor();
    get emitter(): Phaser.Events.EventEmitter;
    private static _inst;
    static get inst(): AssetProxy;
    getRes(id: string, key: string, type: string): Promise<any>;
    load(id: string, key: string, url: any, type: string, completeCallBack: Function, errorCallBack?: Function, context?: any): void;
    addListen(type: string, key: string): void;
    removeListen(): void;
    startLoad(): void;
    private totalComplete;
    private onLoadComplete;
    private onLoadError;
}
