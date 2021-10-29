import { TranslationHelper } from './TranslationHelper';
import { PackageItemType, ObjectType } from './FieldTypes';
import { GObject } from './GObject';
import { GRoot } from './GRoot';
import { UIConfig } from './UIConfig';
import { ByteBuffer } from './utils/ByteBuffer';
import { PackageItem } from './PackageItem';
import { AssetProxy, LoaderType } from './AssetProxy';
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
            url = GRoot.inst.getResUrl(url);
            const scene = GRoot.inst.scene;
            // scene preload bytearray
            const buf = scene.cache.binary.get(resKey);
            if (!buf) {
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
            } else {
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
            }
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

    public static createObject(pkgName: string, resName: string, userClass?: new () => GObject): Promise<GObject> {
        const pkg: UIPackage = UIPackage.getByName(pkgName);
        if (pkg) {
            return pkg.createObject(resName, userClass);
        }
        return null;
    }

    public static createObjectFromURL(url: string, userClass?: new () => GObject): Promise<GObject> {
        return new Promise((reslove, reject) => {
            var pi: PackageItem = UIPackage.getItemByURL(url);
            if (pi) {
                pi.owner.internalCreateObject(pi, userClass).then((g) => {
                    return reslove(g);
                });
            } else {
                return reslove(null);
            }
        });
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

    public static getItemAssetByURL(url: string): Promise<Object> {
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

    public createObject(resName: string, userClass?: new () => GObject): Promise<GObject> {
        return new Promise((reslove, reject) => {
            const pi = this._itemsByName[resName];
            if (pi) {
                this.internalCreateObject(pi, userClass).then((g) => {
                    return reslove(g);
                });
            } else {
                return reslove(null);
            }
        });
    }

    /**
     * 创建内部子对象
     * @param item
     * @param userClass
     * @returns
     */
    public internalCreateObject(item: PackageItem, userClass?: new () => GObject): Promise<GObject> {
        return new Promise((reslove, reject) => {
            const g = Decls.UIObjectFactory.newObject(item, userClass);
            if (g == null) {
                return reslove(null);
            }
            UIPackage._constructing++;
            g.constructFromResource().then(() => {
                UIPackage._constructing--;
                return reslove(g);
            });
        });
    }

    public getItemById(itemId: string): PackageItem {
        return this._itemsById[itemId];
    }

    public getItemByName(resName: string): PackageItem {
        return this._itemsByName[resName];
    }

    public getItemAssetByName(resName: string): Promise<Object> {
        var pi: PackageItem = this._itemsByName[resName];
        if (pi == null) {
            throw "Resource not found -" + resName;
        }

        return this.getItemAsset(pi);
    }

    private checkHasFrame(item: PackageItem): boolean {
        if (!item) return false;
        if (item.texture) {
            const name = item.texture.key + "_" + item.name + "_" + item.width + "_" + item.height;
            const frame: Phaser.Textures.Frame = item.texture.frames[name];
            if (frame) {
                return true;
            }
        }
        return false;
    }

    public getItemAsset(item: PackageItem): Promise<Object> {
        return new Promise((reslove, reject) => {
            switch (item.type) {
                case PackageItemType.Image:
                    if (!item.decoded ) {
                        item.decoded = true;
                        const sprite: AtlasSprite = this._sprites[item.id];
                        if (sprite) {
                            this.getItemAsset(sprite.atlas).then((texture) => {
                                const atlasTexture: Phaser.Textures.Texture = <Phaser.Textures.Texture>texture;
                                if (atlasTexture) {
                                    item.texture = atlasTexture;
                                    item.x = sprite.rect.x;
                                    item.y = sprite.rect.y;
                                    item.tx = sprite.offset.x;
                                    item.ty = sprite.offset.y;
                                    item.width = sprite.rect.width;
                                    item.height = sprite.rect.height;
                                    const name = atlasTexture.key + "_" + item.name + "_" + item.width + "_" + item.height;
                                    const frame: Phaser.Textures.Frame = atlasTexture.frames[name];
                                    if (!frame) {
                                        item.texture.add(name, 0, item.x, item.y, item.width, item.height);
                                    }
                                    // Laya.Texture.create(atlasTexture,
                                    //     sprite.rect.x, sprite.rect.y, sprite.rect.width, sprite.rect.height,
                                    //     sprite.offset.x, sprite.offset.y,
                                    //     sprite.originalSize.x, sprite.originalSize.y);
                                } else {
                                    item.texture = null;
                                }
                                reslove(item);
                            });
                        }
                        else {
                            item.texture = null;
                            reslove(item);
                        }
                    } else {
                        const sprite: AtlasSprite = this._sprites[item.id];
                        if (!sprite) {
                            item.texture = null;
                            reslove(item);
                        } else {
                            let texture = GRoot.inst.scene.textures.get(sprite.atlas.file);
                            if (texture && texture.key !== "__MISSING") {
                                item.texture = texture;
                                item.x = sprite.rect.x;
                                item.y = sprite.rect.y;
                                item.tx = sprite.offset.x;
                                item.ty = sprite.offset.y;
                                item.width = sprite.rect.width;
                                item.height = sprite.rect.height;
                                const name = texture.key + "_" + item.name + "_" + item.width + "_" + item.height;
                                const frame = texture.frames[name];
                                if (!frame) {
                                    item.texture.add(name, 0, item.x, item.y, item.width, item.height);
                                }
                                reslove(item);
                            } else {
                                AssetProxy.inst.emitter.once(sprite.atlas.file + "_image" + "_complete", (file) => {
                                    texture = GRoot.inst.scene.textures.get(file);
                                    if (texture) {
                                        item.texture = texture;
                                        item.x = sprite.rect.x;
                                        item.y = sprite.rect.y;
                                        item.tx = sprite.offset.x;
                                        item.ty = sprite.offset.y;
                                        item.width = sprite.rect.width;
                                        item.height = sprite.rect.height;
                                        reslove(item);
                                    }

                                }, this);
                            }
                        }
                    }
                    break;
                case PackageItemType.Atlas:
                    if (!item.decoded) {
                        AssetProxy.inst.getRes(item.file, LoaderType.IMAGE).then((texturePath) => {
                            item.decoded = true;
                            const texture = GRoot.inst.scene.textures.get(texturePath);
                            item.texture = texture;
                            reslove(item.texture);
                        });
                        //     if(!fgui.UIConfig.textureLinearSampling)
                        //     item.texture.isLinearSampling = false;
                    } else {
                        reslove(item.texture);
                    }
                    break;
                case PackageItemType.Font:
                    console.error("no do font");
                    // if (!item.decoded) {
                    //     item.decoded = true;
                    // this.loadFont(item);
                    // }
                    // return item.bitmapFont;
                    break;
                case PackageItemType.MovieClip:
                    if (!item.decoded) {
                        item.decoded = true;
                        this.loadMovieClip(item).then(() => {
                            reslove(item);
                            return;
                        });
                    } else {
                        reslove(item);
                    }
                    break;
                case PackageItemType.Component:
                    reslove(item.rawData);
                    break;
                case PackageItemType.Misc:
                    console.error("no do misc");
                    // if (item.file)
                    //     return AssetProxy.inst.getRes(item.file);
                    // else
                    //     return null;
                    break;
                default:
                    reslove(null);
                    break;
            }
        })
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
                this.getItemAsset(item).then(() => {
                    onComplete(null, item);
                });
                break;
        }
    }

    private loadMovieClip(item: PackageItem): Promise<any> {
        return new Promise((reslove, rejcet) => {
            var buffer: ByteBuffer = item.rawData;

            buffer.seek(0, 0);

            item.interval = buffer.readInt();
            item.swing = buffer.readBool();
            item.repeatDelay = buffer.readInt();

            buffer.seek(0, 1);

            var frameCount: number = buffer.readShort();
            item.frames = [];

            var spriteId: string;
            var sprite: AtlasSprite;
            var fx: number;
            var fy: number;

            const fun0 = (i: number) => {
                // 超过mc的影片帧数则返回
                if (i >= frameCount) {
                    reslove(item);
                    return;
                }
                //for (var i: number = index; i < frameCount; i++) {
                var nextPos: number = buffer.readShort();
                nextPos += buffer.position;

                fx = buffer.readInt();
                fy = buffer.readInt();
                buffer.readInt(); //width
                buffer.readInt(); //height
                let frame = { addDelay: buffer.readInt() };
                spriteId = buffer.readS();

                if (spriteId != null && (sprite = this._sprites[spriteId]) != null) {
                    fun1(i, nextPos).then((resolveIndex) => {
                        item.frames[i]["addDelay"] = frame.addDelay;
                        fun0(resolveIndex + 1);
                    });
                }
                // else {
                //     item.frames[i] = frame;
                //     buffer.position = nextPos;
                //     fun0(i + 1);
                // }
                // }
            }
            const fun1 = (i: number, nextPos: number): Promise<number> => {
                return new Promise((resolve) => {
                    this.getItemAsset(sprite.atlas).then((texture: Phaser.Textures.Texture) => {
                        const atlasTexture: Phaser.Textures.Texture = texture;
                        const atlasX = this._sprites[spriteId].rect.x;
                        const atlasY = this._sprites[spriteId].rect.y;
                        const frameWid = this._sprites[spriteId].rect.width;
                        const frameHei = this._sprites[spriteId].rect.height
                        atlasTexture.add(spriteId, 0, atlasX, atlasY, frameWid, frameHei);
                        // if (!GRoot.inst.scene.textures.exists(spriteId)) {
                        //     const canvas = GRoot.inst.scene.textures.createCanvas(spriteId, item.width, item.height);
                        //     canvas.drawFrame(atlasTexture.key, spriteId, 0, 0);
                        // }
                        const frame = atlasTexture.frames[spriteId];
                        item.frames[i] = frame;
                        buffer.position = nextPos;
                        resolve(i);
                    });
                })
            }
            fun0(0);
        });
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