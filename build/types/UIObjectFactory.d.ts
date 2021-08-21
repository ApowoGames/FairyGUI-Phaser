import { GComponent } from "./GComponent";
import { GObject } from './GObject';
import { PackageItem } from './PackageItem';
import { GLoader } from './GLoader';
export declare class UIObjectFactory {
    static extensions: {
        [index: string]: new () => GComponent;
    };
    static loaderType: new () => GLoader;
    constructor();
    static setExtension(url: string, type: new () => GComponent): void;
    static setPackageItemExtension(url: string, type: new () => GComponent): void;
    static setLoaderExtension(type: new () => GLoader): void;
    static resolvePackageItemExtension(pi: PackageItem): void;
    static newObject(type: number | PackageItem, userClass?: new () => GObject): GObject;
}
