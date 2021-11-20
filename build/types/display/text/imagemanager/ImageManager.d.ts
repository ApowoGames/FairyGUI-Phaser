import { IImageManager, ImageInfo } from "./IImageManager";
export declare class ImageManager implements IImageManager {
    images: Map<string, ImageInfo>;
    constructor();
    add(key: any, config: any): this;
    remove(key: string): this;
    get(key: string): ImageInfo;
    destroy(): void;
    getOuterWidth(key: string): number;
    getOuterHeight(key: string): number;
    protected _add(key: any, config?: any): void;
}
