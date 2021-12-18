/**
 * 用于管理faiygui贴图加载的管理器
 * 持续更新
 */
export class TextureManager {
    private _addTextureMap: Map<string, boolean>;
    constructor() {
        this._addTextureMap = new Map();
    }

    add(key: string) {
        if (!this._addTextureMap.get(key)) {
            this._addTextureMap.set(key, true);
        }
    }

    get(key: string): boolean {

        return this._addTextureMap.get(key);
    }

}

