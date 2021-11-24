import { PackageItem } from './PackageItem';
import { GRoot } from './GRoot';
export enum LoaderType {
    IMAGE = "image",
    ATLAS = "atlas",
    AUDIO = "audio",
    VIDEO = "video",
    JSON = "json",
    SCRIPT = "script",
    GLSL = "glsl",
    BITMAPFONT = "bitmapFont",
    SPRITESHEET = "spritesheet",

}

export interface IResCallBackObj {
    id: string,
    completeCallBack: Function,
    errorCallBack?: Function
}
export class AssetProxy {
    private _resMap: Map<string, string>;
    private _resCallBackMap: Map<string, Map<string, IResCallBackObj>>;
    // private _completeCallBack: Function;
    // private _errorCallBack: Function;
    private _emitter: Phaser.Events.EventEmitter;
    constructor() {
        this._resMap = new Map();
        this._resCallBackMap = new Map();
        this._emitter = new Phaser.Events.EventEmitter;
    }

    public get emitter(): Phaser.Events.EventEmitter {
        return this._emitter;
    }

    private static _inst: AssetProxy;

    public static get inst(): AssetProxy {
        if (!AssetProxy._inst)
            AssetProxy._inst = new AssetProxy();
        return AssetProxy._inst;
    }

    public getRes(id: string, key: string, type: string): Promise<any> {
        return new Promise((resolve, reject) => {
            if (!this._resMap.get(key)) {
                const url = GRoot.inst.getResUIUrl(key);
                this.load(id, key, url, type, (file) => {
                    this._emitter.emit(file + "_" + type + "_complete", file);
                    this._resMap.set(key, url);
                    resolve(file);
                }, () => {
                    reject("__DEFAULT");
                });
            } else {
                resolve(GRoot.inst.getResUIUrl(key));
            }
        });
    }

    public load(id: string, key: string, url: any, type: string, completeCallBack: Function, errorCallBack?: Function): void {
        let rescbMap = this._resCallBackMap.get(key);
        if (!rescbMap) {
            rescbMap = new Map();
            rescbMap.set(id, {
                id,
                completeCallBack,
                errorCallBack
            });
        } else {
            if (!rescbMap.get(id)) {
                rescbMap.set(id, {
                    id,
                    completeCallBack,
                    errorCallBack
                });
            }
        }
        this._resCallBackMap.set(key, rescbMap);
        this.addListen(type, key);
        if (GRoot.inst.scene.cache.obj.has(key)) {
            rescbMap.forEach((obj: IResCallBackObj) => {
                obj.completeCallBack();
            });
            return;
        }
        switch (type) {
            case LoaderType.IMAGE:
                GRoot.inst.scene.load.image(key, url);
                break;
            case LoaderType.ATLAS:
                GRoot.inst.scene.load.atlas(key, url);
                break;
            case LoaderType.AUDIO:
                GRoot.inst.scene.load.audio(key, url);
                break;
            case LoaderType.VIDEO:
                GRoot.inst.scene.load.video(key, url);
                break;
            case LoaderType.JSON:
                GRoot.inst.scene.load.json(key, url);
                break;
            case LoaderType.SCRIPT:
                GRoot.inst.scene.load.script(key, url);
                break;
            case LoaderType.GLSL:
                GRoot.inst.scene.load.glsl(key, url);
                break;
            case LoaderType.BITMAPFONT:
                GRoot.inst.scene.load.bitmapFont(key, url);
                break;
            case LoaderType.SPRITESHEET:
                GRoot.inst.scene.load.spritesheet(key, url);
                break;
            default:
                GRoot.inst.scene.load.image(key, url);
                break;
        }
        GRoot.inst.scene.load.start();
    }

    public addListen(type: string, key: string) {
        GRoot.inst.scene.load.on(Phaser.Loader.Events.FILE_COMPLETE + "-" + type + "-" + key, this.onLoadComplete, this);
        GRoot.inst.scene.load.on(Phaser.Loader.Events.FILE_LOAD_ERROR + "-" + type + "-" + key, this.onLoadError, this);
        GRoot.inst.scene.load.on(Phaser.Loader.Events.COMPLETE, this.totalComplete, this);
    }

    public removeListen() {
        GRoot.inst.scene.load.off(Phaser.Loader.Events.COMPLETE, this.totalComplete, this);
    }

    public startLoad() {
        GRoot.inst.scene.load.start();
    }

    private totalComplete(loader?: any, totalComplete?: number, totalFailed?: number) {
    }

    private onLoadComplete(key: string, file?: File) {
        const rescbMap = this._resCallBackMap.get(key);
        if (rescbMap) {
            rescbMap.forEach((obj: IResCallBackObj) => {
                obj.completeCallBack(key);
            });
        }
        this._resCallBackMap.delete(key);
        GRoot.inst.scene.load.off(Phaser.Loader.Events.FILE_COMPLETE + "-" + file + "-" + key, this.onLoadComplete, this);
        GRoot.inst.scene.load.off(Phaser.Loader.Events.FILE_LOAD_ERROR + "-" + file + "-" + key, this.onLoadError, this);
    }

    private onLoadError(key: string, file?: File) {
        const rescbMap = this._resCallBackMap.get(key);
        if (rescbMap) {
            rescbMap.forEach((obj: IResCallBackObj) => {
                obj.completeCallBack(key);
            });
        }
        this._resCallBackMap.delete(key);
        GRoot.inst.scene.load.off(Phaser.Loader.Events.FILE_COMPLETE + "-" + file + "-" + key, this.onLoadComplete, this);
        GRoot.inst.scene.load.off(Phaser.Loader.Events.FILE_LOAD_ERROR + "-" + file + "-" + key, this.onLoadError, this);
    }
}
