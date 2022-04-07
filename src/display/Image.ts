import { GRoot } from '..';
import { PackageItem } from '../PackageItem';
import { Utils } from '../utils/Utils';
import { ToolSet } from './../utils/ToolSet';
import { fillImage } from './FillUtils';
import { Graphics } from "./Graphics";

const __BASE = "__BASE";
const patches = ["[0][0]", "[1][0]", "[2][0]", "[0][1]", "[1][1]", "[2][1]", "[0][2]", "[1][2]", "[2][2]"];
export class Image extends Phaser.GameObjects.Container {
    protected _sourceTexture: Phaser.Textures.Texture;
    protected _frame: number = 0;
    protected _scaleByTile?: boolean;
    protected _scale9Grid?: Phaser.Geom.Rectangle;
    protected _sourceFrames: Phaser.Textures.Frame[] = [];
    protected _playing: boolean = true;
    protected _frameCount: number = 0;
    protected _frames: Phaser.Textures.Frame[];
    protected _start: number = 0;
    protected _end: number = 0;
    protected _times: number = 0;
    protected _endAt: number = 0;
    protected _status: number = 0; //0-none, 1-next loop, 2-ending, 3-ended

    protected _frameImgs: Map<string, Phaser.GameObjects.Image> = new Map();
    /**
     * 无论九宫还是非九宫的，基础贴图
     */
    protected _curImg: Phaser.GameObjects.Image;

    /**
     * 平铺用的tilesprite
     */
    protected _tileSprite: Phaser.GameObjects.TileSprite;

    /**
     * 是否已经fairy包装item中获取完数据
     */
    private _hasSetPackItem: boolean = false;

    private _tileGridIndice: number = 0;
    private _sizeGrid: number[];
    private _needRebuild: number = 0;
    private _fillMethod: number;
    private _fillOrigin: number = 0;
    private _fillAmount: number = 0;
    private _fillClockwise?: boolean;
    private _mask?: Graphics;
    private _color: string;
    private _valueName: string;

    private finalXs: number[] = [];
    private finalYs: number[] = [];
    // private _img: Phaser.GameObjects.Image;
    private originFrame: Phaser.Textures.Frame;

    private _renderTexture: Phaser.GameObjects.RenderTexture;

    private internalTint: number;
    private tintFill: boolean = false;
    /**
     * phaser 存到内存中的图片资源需要一个key，相同originkey的图片会覆盖原先九宫过的资源
     */
    private patchKey: string;

    /**
     * 是否对九宫图片只做缩放，eg：当left，middle为0，则对原始图片进行缩放
     */
    private _scale9GridBool: boolean = false;

    constructor(scene: Phaser.Scene) {
        super(scene);
        // this._renderTexture = this.scene.make.renderTexture(undefined, false);
        // this._renderTexture.setPosition(0, 0);
        // this.add(this._renderTexture);
        // this.patchKey = Math.random() * 1000 + "";
        // this.mouseEnabled = false;
        this._color = "#FFFFFF";
    }

    public get curImage(): Phaser.GameObjects.Image {
        return this._curImg;
    }

    /**
     * 九宫图的原始图片名字
     */
    public get valueName(): string {
        return this._valueName;
    }

    public setTint(color: string) {
        const _color = Utils.toNumColor(color);
        this.list.forEach((img: Phaser.GameObjects.Image) => {
            if (img) {
                img.clearTint();
                img.setTint(_color);
            }
        });

    }

    public setSize(width: number, height: number, originFrame?: Phaser.Textures.Frame): this {
        this.width = width;
        this.height = height;
        const originWidth = this["$owner"].sourceWidth;
        const originHeight = this["$owner"].sourceHeight;
        if (this._scale9Grid) {
            const _left = this._scale9Grid.left;
            const _right = originWidth - this._scale9Grid.right;
            const _top = this._scale9Grid.top;
            const _bottom = originHeight - this._scale9Grid.bottom;

            if (width < _left || width < _right || width < (_left + _right) || height < _top || height < _bottom || height < (_top + _bottom)) {
                this.finalXs = [0, 0, 0, this.width];
                this.finalYs = [0, 0, 0, this.height];
                this._scale9GridBool = true;
            } else {
                this.finalXs = [0, _left, width - _left - _right, width];
                this.finalYs = [0, _top, height - _top - _bottom, height];
                this._scale9GridBool = false;
            }
        } else {
            this.finalXs = [0, 0, 0, this.width];
            this.finalYs = [0, 0, 0, this.height];
        }
        // 有texture资源后再创建九宫图片
        if (!this.originFrame) this.originFrame = originFrame;
        if (this.originFrame) {
            this.createPatches();
            this.drawPatches();
        }
        this.markChanged(1);
        return this;
    }

    public changeSize(width: number, height: number, initBoo?: boolean, originFrame?: Phaser.Textures.Frame): Promise<Phaser.GameObjects.Container> {
        if (initBoo === undefined) initBoo = false;
        return new Promise((resolve, reject) => {
            const key = this.valueName;
            if (initBoo) {
                this.width = width;
                this.height = height;
                const originWidth = this["$owner"].sourceWidth;
                const originHeight = this["$owner"].sourceHeight;
                if (this._scale9Grid) {
                    const _left = this._scale9Grid.left;
                    const _right = originWidth - this._scale9Grid.right;
                    const _top = this._scale9Grid.top;
                    const _bottom = originHeight - this._scale9Grid.bottom;

                    if (width < _left || width < _right || width < (_left + _right) || height < _top || height < _bottom || height < (_top + _bottom)) {
                        this.finalXs = [0, 0, 0, this.width];
                        this.finalYs = [0, 0, 0, this.height];
                        this._scale9GridBool = true;
                    } else {
                        this.finalXs = [0, _left, width - _left - _right, width];
                        this.finalYs = [0, _top, height - _top - _bottom, height];
                        this._scale9GridBool = false;
                    }
                } else {
                    this.finalXs = [0, 0, 0, this.width];
                    this.finalYs = [0, 0, 0, this.height];
                }
                // 有texture资源后再创建九宫图片
                if (!this.originFrame) this.originFrame = originFrame;
            }


            if (this.originFrame) {
                if (initBoo) {
                    this.createPatches();
                    // 当_curImg存在时，说明9宫切图已经保存了一份基础合图，无须再用renderTexture绘制
                    if (!this._renderTexture && this._scale9Grid && !this._curImg) {
                        this._renderTexture = this.scene.make.renderTexture({ x: 0, y: 0, width: this.width, height: this.height }, false);
                    } else if (this._curImg) {
                        this._renderTexture = null;
                    }
                }

                this.drawPatches();
                if (this._renderTexture) {
                    if (this.scene.textures.exists(key)) {
                        (<Phaser.GameObjects.Image>this._curImg) = this.scene.make.image({ key }, false);
                        resolve(this);
                    } else {
                        this._renderTexture.snapshot((img) => {
                            const fun = (cbKey) => {
                                this.scene.textures.off("addtexture", fun, this);
                                if (cbKey === this.patchKey || this.scene.textures.get(this.patchKey)) {
                                    (<Phaser.GameObjects.Image>this._curImg) = this.scene.make.image({ key: this.patchKey }, false);
                                    this.markChanged(1);
                                    resolve(this);
                                }
                            }
                            this.scene.textures.off("addtexture", fun, this);
                            // 可能同时会有多个texture add事件派发，需要判读callbackkey和当前key是否一致
                            this.scene.textures.on("addtexture", fun, this);
                            if (!GRoot.inst.textureManager.get(key)) {
                                GRoot.inst.textureManager.add(key);
                            }
                            if (!this.scene.textures.get(this.patchKey)) {
                                this.scene.textures.addBase64(this.patchKey, (<any>img).src);
                            } else {
                                fun(this.patchKey);
                            }
                            this._renderTexture.destroy();
                        });
                    }
                } else {
                    resolve(this);
                }
            }
        });
    }

    createPatches() {
        // The positions we want from the base texture
        // 保存有x轴和y轴9宫坐标信息，如果存在坐标信息相同，则表示某一部分的图片尺寸为0，需要查看原因
        const textureXs = this.finalXs;//[0, this._scale9Grid.left, this.originFrame.width - this._scale9Grid.right, this.originFrame.width];
        const textureYs = this.finalYs;//[0, this._scale9Grid.top, this.originFrame.height - this._scale9Grid.bottom, this.originFrame.height];
        let patchIndex = 0;
        for (let yi = 0; yi < 3; yi++) {
            for (let xi = 0; xi < 3; xi++) {
                this.createPatchFrame(this.getPatchNameByIndex(patchIndex), textureXs[xi], // x
                    textureYs[yi], // y
                    textureXs[xi + 1] - textureXs[xi], // width
                    textureYs[yi + 1] - textureYs[yi] // height
                );
                ++patchIndex;
            }
        }
    }

    drawPatches() {
        const tintFill = this.tintFill;
        //如果是平铺，可以不移除tilesprite，只有9宫和正常贴图才需要
        if (!this._scaleByTile) this.removeAll(true);
        // 非九宫直接画texture
        if (!this._scale9Grid || this._scale9GridBool) {
            const patch = this._sourceTexture.frames[this.getPatchNameByIndex(8)];
            if (this._curImg) {
                this._curImg.destroy();
                this._curImg = null;
            }
            const name = !this._scale9Grid ? patch.name : "__BASE";
            (<Phaser.GameObjects.Image>this._curImg) = this.scene.make.image({ key: patch.texture.key, frame: name }, false);
            // new Phaser.GameObjects.Image(this.scene, 0, 0, patch.texture.key, name);
            this._curImg.setOrigin(0);
            this._curImg.displayWidth = this.finalXs[3]; //+ (xi < 2 ? this.mCorrection : 0);
            this._curImg.displayHeight = this.finalYs[3]; //+ (yi < 2 ? this.mCorrection : 0);
            this._curImg.setPosition(this.finalXs[2], this.finalYs[2]);
            // console.log("drawImage ===>", this._curImg, this.finalXs, this.finalYs);
            this.add(this._curImg);
            if (this.internalTint)
                this._curImg.setTint(this.internalTint);
            this._curImg.tintFill = tintFill;
            return;
        }

        let patchIndex = 0;
        const originHeight = this["$owner"].sourceHeight;
        const _left = this._scale9Grid.left;
        for (let yi = 0; yi < 3; yi++) {
            for (let xi = 0; xi < 3; xi++) {
                // 九宫逻辑中如果宽高为0，则不做后续处理
                // if (this.finalXs[xi + 1] - this.finalXs[xi] <= 0 || this.finalYs[yi + 1] - this.finalYs[yi] <= 0) {
                //     continue;
                // }
                const patch = this._sourceTexture.frames[this.getPatchNameByIndex(patchIndex)];
                const patchImg = this.scene.make.image({ key: patch.texture.key, frame: patch.name }, false);
                // new Phaser.GameObjects.Image(this.scene, 0, 0, patch.texture.key, patch.name);
                patchImg.setOrigin(0);
                let posx = this.finalXs[xi];
                let posy = this.finalYs[yi];
                if (xi === 2) {
                    if (this.finalXs[2] < _left) {
                        posx = _left;
                    }
                }

                patchImg.setPosition(posx, posy);
                // const displayWidth = this.finalXs[xi + 1] - this.finalXs[xi] < 0 ? 0 : this.finalXs[xi + 1] - this.finalXs[xi]; //+ (xi < 2 ? this.mCorrection : 0);
                // const displayHeight = this.finalYs[yi + 1] - this.finalYs[yi] < 0 ? 0 : this.finalYs[yi + 1] - this.finalYs[yi];
                patchImg.displayWidth = this.finalXs[xi + 1] - this.finalXs[xi] < 0 ? 0 : this.finalXs[xi + 1] - this.finalXs[xi] + 1; //+ (xi < 2 ? this.mCorrection : 0);
                patchImg.displayHeight = this.finalYs[yi + 1] - this.finalYs[yi] < 0 ? 0 : this.finalYs[yi + 1] - this.finalYs[yi] + 1; //+ (yi < 2 ? this.mCorrection : 0);    
                // patchImg.setScale(
                //     displayWidth / patch.width,
                //     displayHeight / patch.height
                // );

                // console.log("drawImage ===>", patchImg, this.finalXs, this.finalYs);
                if (this._renderTexture && !this._renderTexture.dirty) this._renderTexture.draw(patchImg, patchImg.x, patchImg.y);
                this.add(patchImg);
                if (this.internalTint)
                    patchImg.setTint(this.internalTint);
                patchImg.tintFill = tintFill;
                ++patchIndex;
            }
        }
        // test position
        // if (this["$owner"]._id === "n1") return;
        // const g = this.scene.add.graphics(undefined);
        // g.clear();
        // g.fillStyle(0xFFCC00);
        // g.fillRect(0, 0, 20, 20);
        // this.add(g);
    }

    createPatchFrame(patch, x, y, width, height) {
        if (this.originFrame && !this._sourceTexture) this._sourceTexture = this.originFrame.texture;
        if (this._sourceTexture.frames.hasOwnProperty(patch)) {
            // console.log("patch cf", patch);
            return;
        }
        // 在texture的frames列表中添加对应增加的frame
        this._sourceTexture.add(patch, this.originFrame.sourceIndex, this.originFrame.cutX + x, this.originFrame.cutY + y, width, height);
    }

    getPatchNameByIndex(index) {
        return this.originFrame.name + patches[index] + this.patchKey;
    }

    public get display(): any {
        return this._tileSprite || this._curImg;
    }

    public get texture(): Phaser.Textures.Texture {
        return this._sourceTexture;
    }

    public set texture(value: Phaser.Textures.Texture) {
        if (this._sourceTexture != value) {
            this._sourceTexture = value;
            if (this._sourceTexture)
                this.changeSize(this.width, this.height, true);
            else
                this.changeSize(0, 0, true);
            // todo 重绘
            // this.scene.add.image(0, 0, this._sourceTexture);
            // const frames = value.getFrameNames();
            // const baseFrameName = frames[0];
            // this._renderTexture.drawFrame(value.key, baseFrameName, 0, 0);
            // this.repaint();
            // this.markChanged(1);
            // if (!this._sourceTexture.hasOwnProperty("useCount")) {
            //     Object.defineProperties(this.texture, {
            //         useCount: {
            //             value: 0,
            //             writable: true
            //         }
            //     });
            // }
            // // @ts-ignore
            // this._sourceTexture.useCount++;
        }
    }

    // public destroy(fromScene?: boolean): void {
    //     if (this._sourceTexture) {
    //         if (!this._sourceTexture.hasOwnProperty("useCount")) {
    //             Object.defineProperties(this.texture, {
    //                 useCount: {
    //                     value: 0,
    //                     writable: true
    //                 }
    //             });
    //         }
    //         // @ts-ignore
    //         this._sourceTexture.useCount--;
    //     }
    //     super.destroy(fromScene);
    // }

    public setPackItem(value: PackageItem): Promise<void> {
        return new Promise((resolve, reject) => {
            if (!value || !value.texture) {
                console.log("no packitem ===>", value);
                reject();
                return;
            }

            const _texture = value.texture;
            this._valueName = _texture.key + "_" + value.name;
            const name = this._valueName + "_" + this["$owner"].initWidth + "_" + this["$owner"].initHeight;
            this.patchKey = name;
            this._hasSetPackItem = true;
            // 非九宫正常图片
            if (!this._scale9Grid) {
                if (this.width !== _texture.frames["__BASE"].cutWidth || this.height !== _texture.frames["__BASE"].cutHeight) {
                    // 手动将packitem数据组织成frame格式添加到大图集的frames中，内部会去重
                    _texture.add(name, 0, value.x, value.y, value.width, value.height);
                    if (!this.scene.textures.exists(name)) {
                        const canvas = this.scene.textures.createCanvas(name, value.width, value.height);
                        canvas.drawFrame(_texture.key, name, 0, 0);
                        if (canvas && this._sourceTexture != canvas) {
                            this._sourceTexture = canvas;
                            this.originFrame = this._sourceTexture.frames["__BASE"];
                            this.setSize(value.width, value.height);
                            this.markChanged(1);
                            resolve();
                        }
                    } else {
                        let texture = this.scene.textures.get(name);
                        if (texture && this._sourceTexture != texture) {
                            this._sourceTexture = texture;
                            this.originFrame = this._sourceTexture.frames["__BASE"];
                            this.setSize(value.width, value.height);
                            this.markChanged(1);
                            resolve();
                        }
                    }
                }
                // 单张图片非图集
                else {
                    const img = this.scene.make.image({ key: _texture.key }, false);
                    // img.setTexture(_texture.key);
                    this.add(img);
                    this.markChanged(1);
                    resolve();
                }
            }
            // 九宫图片 
            else {
                // 手动将packitem数据组织成frame格式添加到大图集的frames中，内部会去重
                _texture.add(name, 0, value.x, value.y, value.width, value.height);
                if (!this.scene.textures.exists(name)) {
                    const canvas = this.scene.textures.createCanvas(name, value.width, value.height);
                    canvas.drawFrame(_texture.key, name, 0, 0);
                    if (canvas && this._sourceTexture != canvas) {
                        this._sourceTexture = canvas;
                        this.originFrame = this._sourceTexture.frames["__BASE"];
                        this.changeSize(value.width, value.height, true).then(() => {
                            this.markChanged(1);
                            resolve();
                        });
                    }
                } else {
                    let texture = this.scene.textures.get(name);
                    if (texture && this._sourceTexture != texture) {
                        this._sourceTexture = texture;
                        this.originFrame = this._sourceTexture.frames["__BASE"];
                        this.changeSize(value.width, value.height, true).then(() => {
                            this.markChanged(1);
                            resolve();
                        });
                    }
                }
            }
        });
    }



    public get scale9Grid(): Phaser.Geom.Rectangle {
        return this._scale9Grid;
    }

    public set scale9Grid(value: Phaser.Geom.Rectangle) {
        this._scale9Grid = value;
        this._sizeGrid = null;
        this.markChanged(1);
    }

    public get scaleByTile(): boolean {
        return this._scaleByTile;
    }

    public set scaleByTile(value: boolean) {
        if (this._scaleByTile != value) {
            this._scaleByTile = value;
            this.markChanged(1);
        }
    }

    public get tileGridIndice(): number {
        return this._tileGridIndice;
    }

    public set tileGridIndice(value: number) {
        if (this._tileGridIndice != value) {
            this._tileGridIndice = value;
            this.markChanged(1);
        }
    }

    public get fillMethod(): number {
        return this._fillMethod;
    }

    public set fillMethod(value: number) {
        if (this._fillMethod != value) {
            this._fillMethod = value;
            if (this._fillMethod != 0) {
                if (!this._mask) {
                    this._mask = new Graphics(this.scene);
                    // this._mask.mouseEnabled = false;
                }
                this.mask = this._mask.createGeometryMask();
                this.markChanged(2);
            }
            else if (this.mask) {
                this._mask.clear();
                this.mask = null;
            }
        }
    }

    public get fillOrigin(): number {
        return this._fillOrigin;
    }

    public set fillOrigin(value: number) {
        if (this._fillOrigin != value) {
            this._fillOrigin = value;
            if (this._fillMethod != 0)
                this.markChanged(2);
        }
    }

    public get fillClockwise(): boolean {
        return this._fillClockwise;
    }

    public set fillClockwise(value: boolean) {
        if (this._fillClockwise != value) {
            this._fillClockwise = value;
            if (this._fillMethod != 0)
                this.markChanged(2);
        }
    }

    public get fillAmount(): number {
        return this._fillAmount;
    }

    public set fillAmount(value: number) {
        if (this._fillAmount != value) {
            this._fillAmount = value;
            if (this._fillMethod != 0)
                this.markChanged(2);
        }
    }

    public get color(): string {
        return this._color;
    }

    public set color(value: string) {
        if (this._color != value) {
            this._color = value;

            ToolSet.setColorFilter(this, value);
        }
    }

    protected markChanged(flag: number): void {
        if (!this._hasSetPackItem) {
            return;
        }
        if (!this._needRebuild) {
            this._needRebuild = flag;
            this.rebuild();
            // Laya.timer.callLater(this, this.rebuild);
        }
        else
            this._needRebuild = this._needRebuild | flag; //  位运算（按位或） this._needRebuild |= flag; 
    }

    protected rebuild(): void {
        if ((this._needRebuild & 1) != 0)
            this.doDraw();
        if ((this._needRebuild & 2) != 0 && this._fillMethod != 0)
            this.doFill();
        this._needRebuild = 0;
    }

    private doDraw(): void {
        var w: number = this.width;
        var h: number = this.height;

        var tex: Phaser.Textures.Texture = this._sourceTexture;
        if (tex == null || w == 0 || h == 0) {
            return;
        }


        if (this._scaleByTile) {
            if (this._curImg) {
                this._curImg.visible = false;
            }
            if (!this._tileSprite) {
                this._tileSprite = this.scene.make.tileSprite(undefined, false);
                this._tileSprite.setOrigin(0);
                this._tileSprite.setSize(w, h);
                this._tileSprite.setTexture(tex.key, "__BASE");
                this.add(this._tileSprite);
            } else {
                if (this._tileSprite.width != w || this._tileSprite.height != h) {
                    this._tileSprite.setSize(w, h);
                }
            }

        }
    }

    private doFill(): void {
        var w: number = this["_width"];
        var h: number = this["_height"];
        var g: Graphics = this._mask;
        g.clear();

        if (w == 0 || h == 0)
            return;

        var points: any[] = fillImage(w, h, this._fillMethod, this._fillOrigin, this._fillClockwise, this._fillAmount);
        if (points == null) {
            //不知道为什么，不这样操作一下空白的遮罩不能生效
            this.mask = null;
            this.mask = this._mask.createGeometryMask();
            return;
        }

        // todo drawPoly
        // g.drawPoly(0, 0, points, "#FFFFFF");
    }
}
