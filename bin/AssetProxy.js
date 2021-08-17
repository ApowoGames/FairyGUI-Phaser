window.fgui = {};
window.fairygui = window.fgui;
"use strict";

(function (fgui) {
    class AssetProxy {
        constructor() {
            // this._asset = Laya.loader;
        }
        static get inst() {
            if (!AssetProxy._inst)
                AssetProxy._inst = new AssetProxy();
            return AssetProxy._inst;
        }
        getRes(url) {
            return this._asset.getRes(url);
        }
        load(url, complete, progress, type, priority, cache) {
            this._asset.load(url, complete, progress, type, priority, cache);
        }
        setAsset(asset) {
            this._asset = asset;
        }
    }
    fgui.AssetProxy = AssetProxy;
})(fgui || (fgui = {}));
