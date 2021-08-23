import { TranslationHelper } from './TranslationHelper';
import { PackageItemType, ObjectType } from './FieldTypes';
import { GObject } from './GObject';
import { GRoot } from './GRoot';
import { UIConfig } from './UIConfig';
import { ByteBuffer } from './utils/ByteBuffer';
import { PackageItem } from './PackageItem';
type PackageDependency = { id: string, name: string };
export class UIPackage {
    private _id: string;
    private _name: string;
    private _items: PackageItem[];
    private _itemsById: { [index: string]: PackageItem };
    private _itemsByName: { [index: string]: PackageItem };
    private _resKey: string;
    private _customId: string;
    private _sprites: Object;
    private _dependencies: Array<PackageDependency>;
    private _branches: Array<string>;
    public _branchIndex: number;

    public static _constructing: number = 0;

    private static _instById: { [index: string]: UIPackage } = {};
    private static _instByName: { [index: string]: UIPackage } = {};
    private static _branch: string = "";
    private static _vars: { [index: string]: string } = {};

    constructor() {
        this._items = [];
        this._itemsById = {};
        this._itemsByName = {};
        this._sprites = {};
        this._dependencies = [];
        this._branches = [];
        this._branchIndex = -1;
    }

    public static get branch(): string {
        return UIPackage._branch;
    }

    public static set branch(value: string) {
        UIPackage._branch = value;
        for (const pkgId in UIPackage._instById) {
            const pkg = UIPackage._instById[pkgId];
            if (pkg._branches) {
                pkg._branchIndex = pkg._branches.indexOf(value);
            }
        }
    }

    public static getVar(key: string): string {
        return UIPackage._vars[key];
    }

    public static setVar(key: string, value: string) {
        UIPackage._vars[key] = value;
    }

    public static getById(id: string): UIPackage {
        return UIPackage._instById[id];
    }

    public static getByName(name: string): UIPackage {
        return UIPackage._instByName[name];
    }

    public static addPackage(resKey: string, descData?: ArrayBuffer): UIPackage {
        if (!descData) {
            // TODO
        }

        const buffer: ByteBuffer = new ByteBuffer(descData);
        const pkg = new UIPackage();
        pkg._resKey = resKey;
        pkg.loadPackage(buffer);
        UIPackage._instById[pkg.id] = pkg;
        UIPackage._instByName[pkg.name] = pkg;
        UIPackage._instById[resKey] = pkg;
        return pkg;
    }

    public static loadPackage(resKey: string, onProgress?: (event: ProgressEvent) => void): Promise<UIPackage> {
        return new Promise((resolve) => {
            let pkg = this._instById[resKey];
            if (pkg) {
                resolve(pkg);
            }
            let url = resKey;
            const extension = `.${UIConfig.packageFileExtension}`;
            if (!resKey.endsWith(extension)) {
                url += extension;
            }
            const scene = GRoot.inst.scene;
            scene.load.binary(resKey, url);
            scene.load.once("complete", () => {
                pkg = new UIPackage();
                pkg._resKey = resKey;
                pkg.loadPackage(new ByteBuffer(<ArrayBuffer>scene.cache.binary.get(resKey)));
                const promises = [];
                for (const item of pkg._items) {
                    if (item.type === PackageItemType.Atlas) {
                        // TODO loadTexture
                        promises.push()
                    } else if (item.type === PackageItemType.Sound) {
                        // TODO loadSound
                        promises.push()
                    }
                }

                let resolve2 = () => {
                    UIPackage._instById[pkg.id] = pkg;
                    UIPackage._instByName[pkg.name] = pkg;
                    UIPackage._instById[pkg._resKey] = pkg;

                    resolve(pkg);
                };

                if (promises.length > 0)
                    Promise.all(promises).then(resolve2);
                else
                    resolve2();
            });
            scene.load.start();
        });
    }

    public static removePackage(packageIdOrName: string) {
        let pkg = UIPackage._instById[packageIdOrName];
        if (!pkg) {
            pkg = UIPackage._instByName[packageIdOrName];
        }
        if (!pkg) {
            throw new Error(`unknown package: ${packageIdOrName}`);
        }
        pkg.dispose();
        delete UIPackage._instById[pkg.id];
        delete UIPackage._instByName[pkg.name];
        delete UIPackage._instById[pkg._resKey];
        if (pkg._customId) {
            delete UIPackage._instById[pkg._customId];
        }
    }

    public static createObject(pkgName: string, resName: string, userClass?: new () => GObject): GObject {
        const pkg: UIPackage = UIPackage.getByName(pkgName);
        if (pkg) {
            return pkg.createObject(resName, userClass);
        }
        return null;
    }

    public static createObjectFromURL(url: string, userClass?: new () => GObject): GObject {
        var pi: PackageItem = UIPackage.getItemByURL(url);
        if (pi) {
            return pi.owner.internalCreateObject(pi, userClass);
        }
        return null;
    }

    public static getItemURL(pkgName: string, resName: string): string {
        var pkg: UIPackage = UIPackage.getByName(pkgName);
        if (!pkg)
            return null;

        var pi: PackageItem = pkg._itemsByName[resName];
        if (!pi)
            return null;

        return "ui://" + pkg.id + pi.id;
    }

    public static getItemByURL(url: string): PackageItem {
        var pos1: number = url.indexOf("//");
        if (pos1 == -1)
            return null;

        var pos2: number = url.indexOf("/", pos1 + 2);
        if (pos2 == -1) {
            if (url.length > 13) {
                var pkgId: string = url.substr(5, 8);
                var pkg: UIPackage = UIPackage.getById(pkgId);
                if (pkg) {
                    var srcId: string = url.substr(13);
                    return pkg.getItemById(srcId);
                }
            }
        }
        else {
            var pkgName: string = url.substr(pos1 + 2, pos2 - pos1 - 2);
            pkg = UIPackage.getByName(pkgName);
            if (pkg) {
                var srcName: string = url.substr(pos2 + 1);
                return pkg.getItemByName(srcName);
            }
        }

        return null;
    }

    public static getItemAssetByURL(url: string): Object {
        var item: PackageItem = UIPackage.getItemByURL(url);
        if (item == null)
            return null;

        return item.owner.getItemAsset(item);
    }

    public static normalizeURL(url: string): string {
        if (url == null)
            return null;

        var pos1: number = url.indexOf("//");
        if (pos1 == -1)
            return null;

        var pos2: number = url.indexOf("/", pos1 + 2);
        if (pos2 == -1)
            return url;

        var pkgName: string = url.substr(pos1 + 2, pos2 - pos1 - 2);
        var srcName: string = url.substr(pos2 + 1);
        return UIPackage.getItemURL(pkgName, srcName);
    }

    public static setStringsSource(source: string): void {
        TranslationHelper.loadFromXML(source);
    }

    private loadPackage(buffer: ByteBuffer) {
        if (buffer.readUint() != 0x46475549)
            throw new Error("FairyGUI: old package format found in '" + this._resKey + "'");

        buffer.version = buffer.readInt();
        var compressed: boolean = buffer.readBool();
        this._id = buffer.readString();
        this._name = buffer.readString();
        buffer.skip(20);

        if (compressed) {
            // todo uncompress
            // var buf: Uint8Array = new Uint8Array(buffer.buffer, buffer.position, buffer.length - buffer.position);
            // var inflater = new Zlib.RawInflate(buf);
            // buf = inflater.decompress();

            // let buffer2: ByteBuffer = new ByteBuffer(buf);
            // buffer2.version = buffer.version;
            // buffer = buffer2;
        }

        var ver2: boolean = buffer.version >= 2;
        var indexTablePos: number = buffer.position;
        var cnt: number;
        var i: number;
        var j: number;
        var nextPos: number;
        var str: string;
        var branchIncluded: boolean;

        buffer.seek(indexTablePos, 4);

        cnt = buffer.readInt();
        var stringTable: string[] = [];
        for (i = 0; i < cnt; i++)
            stringTable[i] = buffer.readString();
        buffer.stringTable = stringTable;

        buffer.seek(indexTablePos, 0);
        cnt = buffer.readShort();
        for (i = 0; i < cnt; i++)
            this._dependencies.push({ id: buffer.readS(), name: buffer.readS() });

        if (ver2) {
            cnt = buffer.readShort();
            if (cnt > 0) {
                this._branches = buffer.readSArray(cnt);
                if (UIPackage._branch)
                    this._branchIndex = this._branches.indexOf(UIPackage._branch);
            }

            branchIncluded = cnt > 0;
        }

        buffer.seek(indexTablePos, 1);

        var pi: PackageItem;
        var path: string = this._resKey;
        let pos = path.lastIndexOf('/');
        let shortPath = pos == -1 ? "" : path.substr(0, pos + 1);
        path = path + "_";

        cnt = buffer.readShort();
        for (i = 0; i < cnt; i++) {
            nextPos = buffer.readInt();
            nextPos += buffer.position;

            pi = new PackageItem();
            pi.owner = this;
            pi.type = buffer.readByte();
            pi.id = buffer.readS();
            pi.name = buffer.readS();
            buffer.readS(); //path
            str = buffer.readS();
            if (str)
                pi.file = str;
            buffer.readBool();//exported
            pi.width = buffer.readInt();
            pi.height = buffer.readInt();

            switch (pi.type) {
                case PackageItemType.Image:
                    {
                        pi.objectType = ObjectType.Image;
                        var scaleOption: number = buffer.readByte();
                        if (scaleOption == 1) {
                        pi.scale9Grid = new Phaser.Geom.Rectangle();
                        pi.scale9Grid.x = buffer.readInt();
                        pi.scale9Grid.y = buffer.readInt();
                        pi.scale9Grid.width = buffer.readInt();
                        pi.scale9Grid.height = buffer.readInt();

                        pi.tileGridIndice = buffer.readInt();
                        }
                        else if (scaleOption == 2)
                            pi.scaleByTile = true;

                        pi.smoothing = buffer.readBool();
                        break;
                    }

                case PackageItemType.MovieClip:
                    {
                        pi.smoothing = buffer.readBool();
                        pi.objectType = ObjectType.MovieClip;
                        pi.rawData = buffer.readBuffer();
                        break;
                    }

                case PackageItemType.Font:
                    {
                        pi.rawData = buffer.readBuffer();
                        break;
                    }

                case PackageItemType.Component:
                    {
                        var extension: number = buffer.readByte();
                        if (extension > 0)
                            pi.objectType = extension;
                        else
                            pi.objectType = ObjectType.Component;
                        pi.rawData = buffer.readBuffer();

                        // Decls.UIObjectFactory.resolvePackageItemExtension(pi);
                        Decls.UIObjectFactory.resolveExtension(pi);
                        break;
                    }

                case PackageItemType.Atlas:
                case PackageItemType.Sound:
                case PackageItemType.Misc:
                    {
                        pi.file = path + pi.file;
                        break;
                    }

                case PackageItemType.Spine:
                case PackageItemType.DragonBones:
                    {
                        pi.file = shortPath + pi.file;
                        // pi.skeletonAnchor = new Laya.Point();
                        // pi.skeletonAnchor.x = buffer.getFloat32();
                        // pi.skeletonAnchor.y = buffer.getFloat32();
                        break;
                    }
            }

            if (ver2) {
                str = buffer.readS();//branch
                if (str)
                    pi.name = str + "/" + pi.name;

                var branchCnt: number = buffer.readByte();
                if (branchCnt > 0) {
                    if (branchIncluded)
                        pi.branches = buffer.readSArray(branchCnt);
                    else
                        this._itemsById[buffer.readS()] = pi;
                }

                var highResCnt: number = buffer.readByte();
                if (highResCnt > 0)
                    pi.highResolution = buffer.readSArray(highResCnt);
            }

            this._items.push(pi);
            this._itemsById[pi.id] = pi;
            if (pi.name != null)
                this._itemsByName[pi.name] = pi;

            buffer.position = nextPos;
        }

        buffer.seek(indexTablePos, 2);

        cnt = buffer.readShort();
        for (i = 0; i < cnt; i++) {
            nextPos = buffer.readShort();
            nextPos += buffer.position;

            var itemId: string = buffer.readS();
            pi = this._itemsById[buffer.readS()];

            let sprite: AtlasSprite = { atlas: pi, rect: new Phaser.Geom.Rectangle(), offset: new Phaser.Geom.Point(), originalSize: new Phaser.Geom.Point() };
            sprite.atlas = pi;
            sprite.rect.x = buffer.readInt();
            sprite.rect.y = buffer.readInt();
            sprite.rect.width = buffer.readInt();
            sprite.rect.height = buffer.readInt();
            sprite.rotated = buffer.readBool();
            if (ver2 && buffer.readBool()) {
                sprite.offset.x = buffer.readInt();
                sprite.offset.y = buffer.readInt();
                sprite.originalSize.x = buffer.readInt();
                sprite.originalSize.y = buffer.readInt();
            }
            else {
                sprite.originalSize.x = sprite.rect.width;
                sprite.originalSize.y = sprite.rect.height;
            }
            this._sprites[itemId] = sprite;

            buffer.position = nextPos;
        }

        if (buffer.seek(indexTablePos, 3)) {
            cnt = buffer.readShort();
            for (i = 0; i < cnt; i++) {
                nextPos = buffer.readInt();
                nextPos += buffer.position;

                pi = this._itemsById[buffer.readS()];
                // if (pi && pi.type == PackageItemType.Image) {
                //     pi.pixelHitTestData = new PixelHitTestData();
                //     pi.pixelHitTestData.load(buffer);
                // }

                buffer.position = nextPos;
            }
        }
    }

    public loadAllAssets() {
        const cnt = this._items.length;
        for (const item of this._items) {
            this.getItemAsset(item);
        }
    }

    public unloadAssets() {
        for (const item of this._items) {
            if (item.type === PackageItemType.Atlas) {
                // if (item.texture)
                throw new Error("TODO");
            }
        }
    }

    public dispose() {
        for (const item of this._items) {
            throw new Error("TODO");
        }
    }

    public get id() {
        return this._id;
    }

    public get name() {
        return this._name;
    }

    public get customId() {
        return this._customId;
    }

    public set customId(value: string) {
        if (this._customId) {
            delete UIPackage._instById[this._customId];
        }
        this._customId = value;
        if (this._customId) {
            UIPackage._instById[this._customId] = this;
        }
    }

    public createObject(resName: string, userClass?: new () => GObject): GObject {
        const pi = this._itemsByName[resName];
        if (pi) {
            return this.internalCreateObject(pi, userClass);
        } else {
            return null;
        }
    }

    public internalCreateObject(item: PackageItem, userClass?: new () => GObject): GObject {
        const g = Decls.UIObjectFactory.newObject(item, userClass);
        if (g == null) {
            return null;
        }
        UIPackage._constructing++;
        g.constructFromResource();
        UIPackage._constructing--;
        return g;
    }

    public getItemById(itemId: string): PackageItem {
        return this._itemsById[itemId];
    }

    public getItemByName(resName: string): PackageItem {
        return this._itemsByName[resName];
    }

    public getItemAssetByName(resName: string): Object {
        var pi: PackageItem = this._itemsByName[resName];
        if (pi == null) {
            throw "Resource not found -" + resName;
        }

        return this.getItemAsset(pi);
    }

    public getItemAsset(item: PackageItem): Object {
        switch (item.type) {
            case PackageItemType.Image:
            if (!item.decoded) {
                item.decoded = true;
                var sprite: AtlasSprite = this._sprites[item.id];
                if (sprite) {
                    var atlasTexture: Phaser.Textures.Texture = <Phaser.Textures.Texture>(this.getItemAsset(sprite.atlas));
                    if (atlasTexture) {
                        // item.texture = new Phaser.Textures.Texture(0,);
                        // Laya.Texture.create(atlasTexture,
                        //     sprite.rect.x, sprite.rect.y, sprite.rect.width, sprite.rect.height,
                        //     sprite.offset.x, sprite.offset.y,
                        //     sprite.originalSize.x, sprite.originalSize.y);
                    } else {
                        item.texture = null;
                    }
                }
                else
                    item.texture = null;
            }
            return item.texture;

            case PackageItemType.Atlas:
                if (!item.decoded) {
                    item.decoded = true;
                    // item.texture = AssetProxy.inst.getRes(item.file);
                    //if(!fgui.UIConfig.textureLinearSampling)
                    //item.texture.isLinearSampling = false;
                }
            // return item.texture;

            case PackageItemType.Font:
            // if (!item.decoded) {
            //     item.decoded = true;
            // this.loadFont(item);
            // }
            // return item.bitmapFont;

            case PackageItemType.MovieClip:
            // if (!item.decoded) {
            //     item.decoded = true;
            //     this.loadMovieClip(item);
            // }
            // return item.frames;

            case PackageItemType.Component:
                return item.rawData;

            case PackageItemType.Misc:
            // if (item.file)
            //     return AssetProxy.inst.getRes(item.file);
            // else
            //     return null;
            default:
                return null;
        }
    }

    public getItemAssetAsync(item: PackageItem, onComplete?: (err: any, item: PackageItem) => void): void {
        if (item.decoded) {
            onComplete(null, item);
            return;
        }

        if (item.loading) {
            item.loading.push(onComplete);
            return;
        }

        switch (item.type) {
            case PackageItemType.Spine:
            case PackageItemType.DragonBones:
            // 
            default:
                this.getItemAsset(item);
                onComplete(null, item);
                break;
        }
    }

    private loadMovieClip(item: PackageItem): void {

    }

    private loadFont(item: PackageItem): void {

    }

    private loadSpine() {
        // TODO
    }

    private loadDragonBones() {
        // TODO
    }
}

interface AtlasSprite {
    atlas: PackageItem;
    rect: Phaser.Geom.Rectangle;
    offset: Phaser.Geom.Point;
    originalSize: Phaser.Geom.Point;
    rotated?: boolean;
}

export interface IObjectFactoryType {
    resolveExtension(pi: PackageItem): void;
    newObject(type: number | PackageItem, userClass?: new () => GObject): GObject;
}

export var Decls: { UIObjectFactory?: IObjectFactoryType } = {};