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
    constructor();
    private static _inst;
    static get inst(): AssetProxy;
    getRes(key: string, type: string): Promise<any>;
    load(key: string, url: any, type: string, completeCallBack: Function, _errorCallBack?: Function): void;
    startLoad(): void;
    private onLoadComplete;
    private onLoadError;
}
