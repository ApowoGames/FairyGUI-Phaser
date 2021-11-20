import { IImageManager, ImageInfo } from "./IImageManager";

export class ImageManager implements IImageManager {
    images: Map<string, ImageInfo>;

    constructor() {
        this.images = new Map();
    }

    add(key, config) {
        if (typeof key === "string") {
            this._add(key, config);
        } else if (Array.isArray(key)) {
            for (const k of key) {
                this._add(k);
            }
        } else {
            const data = key;
            for (const key in data) {
                this._add(key, data[key]);
            }
        }
        return this;
    }

    remove(key: string) {
        this.images.delete(key);
        return this;
    }

    get(key: string) {
        return this.images.get(key);
    }

    destroy() {
        this.images.clear();
    }

    getOuterWidth(key: string) {
        const imageInfo = this.images.get(key);
        return imageInfo ? (imageInfo.width + imageInfo.left + imageInfo.right) : 0;
    }

    getOuterHeight(key: string) {
        const imageInfo = this.images.get(key);
        return imageInfo ? (imageInfo.height + imageInfo.top + imageInfo.bottom) : 0;
    }

    protected _add(key, config?) {
        if (config === undefined) {
            config = { key };
        }
        // TODO add image
    }
}