import { GObject } from './GObject';
import { PackageItem } from './PackageItem';
export declare class UIPackage {
    private _id;
    private _name;
    private _items;
    private _itemsById;
    private _itemsByName;
    private _resKey;
    private _customId;
    private _sprites;
    private _dependencies;
    private _branches;
    _branchIndex: number;
    static _constructing: number;
    private static _instById;
    private static _instByName;
    private static _branch;
    private static _vars;
    constructor();
    static get branch(): string;
    static set branch(value: string);
    static getVar(key: string): string;
    static setVar(key: string, value: string): void;
    static getById(id: string): UIPackage;
    static getByName(name: string): UIPackage;
    static addPackage(resKey: string, descData?: ArrayBuffer): UIPackage;
    static loadPackage(resKey: string, onProgress?: (event: ProgressEvent) => void): Promise<UIPackage>;
    static removePackage(packageIdOrName: string): void;
    static createObject(pkgName: string, resName: string, userClass?: new () => GObject): Promise<GObject>;
    static createObjectFromURL(url: string, userClass?: new () => GObject): Promise<GObject>;
    static getItemURL(pkgName: string, resName: string): string;
    static getItemByURL(url: string): PackageItem;
    static getItemAssetByURL(url: string): Promise<Object>;
    static normalizeURL(url: string): string;
    static setStringsSource(source: string): void;
    private loadPackage;
    loadAllAssets(): void;
    unloadAssets(): void;
    dispose(): void;
    get id(): string;
    get name(): string;
    get customId(): string;
    set customId(value: string);
    createObject(resName: string, userClass?: new () => GObject): Promise<GObject>;
    /**
     * 创建内部子对象
     * @param item
     * @param userClass
     * @returns
     */
    internalCreateObject(item: PackageItem, userClass?: new () => GObject): Promise<GObject>;
    getItemById(itemId: string): PackageItem;
    getItemByName(resName: string): PackageItem;
    getItemAssetByName(resName: string): Promise<Object>;
    private checkHasFrame;
    getItemAsset(item: PackageItem, parentID?: string): Promise<Object>;
    getItemAssetAsync(item: PackageItem, onComplete?: (err: any, item: PackageItem) => void): void;
    private loadMovieClip;
    private loadFont;
    private loadSpine;
    private loadDragonBones;
}
export interface IObjectFactoryType {
    resolveExtension(pi: PackageItem): void;
    newObject(type: number | PackageItem, userClass?: new () => GObject): GObject;
}
export declare var Decls: {
    UIObjectFactory?: IObjectFactoryType;
};
