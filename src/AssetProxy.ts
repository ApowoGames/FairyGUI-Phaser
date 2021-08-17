namespace fgui {

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
    export class AssetProxy {
        private _resMap: Map<string, string>;
        private _completeCallBack: Function;
        private _errorCallBack: Function;
        constructor() {
            this._resMap = new Map();
        }

        private static _inst: AssetProxy;

        public static get inst(): AssetProxy {
            if (!AssetProxy._inst)
                AssetProxy._inst = new AssetProxy();
            return AssetProxy._inst;
        }

        public getRes(key: string): string {
            return this._resMap.get(key);
        }

        public load(key: string, url: any, type: string, completeCallBack: Function, _errorCallBack?: Function): void {
            this._resMap.set(key, url);
            this._completeCallBack = completeCallBack;
            this._errorCallBack = _errorCallBack;
            if (GRoot.inst.scene.cache.obj.has(key)) {
                if (this._completeCallBack) {
                    return this._completeCallBack();
                }
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
        }

        public startLoad() {
            GRoot.inst.scene.load.on(Phaser.Loader.Events.FILE_COMPLETE, this.onLoadComplete, this);
            GRoot.inst.scene.load.on(Phaser.Loader.Events.FILE_LOAD_ERROR, this.onLoadError, this);
            GRoot.inst.scene.load.start();
        }

        private onLoadComplete() {
            if (this._completeCallBack) this._completeCallBack();
        }

        private onLoadError() {
            if (this._errorCallBack) this._errorCallBack();
        }
    }
}