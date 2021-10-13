import { PackageItem } from '../PackageItem';
import { ToolSet } from './../utils/ToolSet';
import { fillImage } from './FillUtils';
import { Graphics } from "./Graphics";

const __BASE = "__BASE";
const patches = ["[0][0]", "[1][0]", "[2][0]", "[0][1]", "[1][1]", "[2][1]", "[0][2]", "[1][2]", "[2][2]"];
export class Image extends Phaser.GameObjects.Container {
    protected _sourceTexture: Phaser.Textures.Texture;
    protected _scaleByTile?: boolean;
    protected _scale9Grid?: Phaser.Geom.Rectangle;

    private _tileGridIndice: number = 0;
    private _sizeGrid: number[];
    private _needRebuild: number = 0;
    private _fillMethod: number = 0;
    private _fillOrigin: number = 0;
    private _fillAmount: number = 0;
    private _fillClockwise?: boolean;
    private _mask?: Graphics;
    private _color: string;

    private finalXs: number[] = [];
    private finalYs: number[] = [];
    // private _img: Phaser.GameObjects.Image;
    // private _renderTexture: Phaser.GameObjects.RenderTexture;
    private originFrame: Phaser.Textures.Frame;

    private internalTint: number;
    private tintFill: boolean = false;
    /**
     * phaser 存到内存中的图片资源需要一个key，相同originkey的图片会覆盖原先九宫过的资源
     */
    private patchKey: string;

    constructor(scene: Phaser.Scene) {
        super(scene);

        // this._renderTexture = this.scene.make.renderTexture(undefined, false);
        // this._renderTexture.setPosition(0, 0);
        // this.add(this._renderTexture);
        // this.patchKey = Math.random() * 1000 + "";
        // this.mouseEnabled = false;
        this._color = "#FFFFFF";
    }

    public setSize(width: number, height: number): this {
        this.width = width;
        this.height = height;
        const originWidth = this["$owner"].sourceWidth;
        const originHeight = this["$owner"].sourceHeight;
        if (this._scale9Grid) {
            const _left = this._scale9Grid.left;
            const _right = originWidth - this._scale9Grid.right;
            const _top = this._scale9Grid.top;
            const _bottom = originHeight - this._scale9Grid.bottom;
            const centerWid = this._scale9Grid.width; // right - left
            const centerHei = this._scale9Grid.height; // bottom - top
            this.finalXs = [0, _left, width - _left - _right, width];
            this.finalYs = [0, _top, height - _top - _bottom, height];
        } else {
            this.finalXs = [0, 0, 0, this.width];
            this.finalYs = [0, 0, 0, this.height];
        }
        // 有texture资源后再创建九宫图片
        if (this.originFrame) {
            this.createPatches();
            this.drawPatches();
        }
        this.markChanged(1);
        return this;
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
        this.removeAll(true);
        let patchIndex = 0;
        for (let yi = 0; yi < 3; yi++) {
            for (let xi = 0; xi < 3; xi++) {
                const patch = this._sourceTexture.frames[this.getPatchNameByIndex(patchIndex)];
                const patchImg = new Phaser.GameObjects.Image(this.scene, 0, 0, patch.texture.key, patch.name);
                patchImg.setOrigin(0);
                patchImg.setPosition(this.finalXs[xi], this.finalYs[yi]);
                patchImg.displayWidth = this.finalXs[xi + 1] - this.finalXs[xi]; //+ (xi < 2 ? this.mCorrection : 0);
                patchImg.displayHeight = this.finalYs[yi + 1] - this.finalYs[yi]; //+ (yi < 2 ? this.mCorrection : 0);
                // console.log("drawImage ===>", patchImg, this.finalXs, this.finalYs);
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
        if (this._sourceTexture.frames.hasOwnProperty(patch)) {
            console.log("patch cf", patch);
            return;
        }
        this._sourceTexture.add(patch, this.originFrame.sourceIndex, this.originFrame.cutX + x, this.originFrame.cutY + y, width, height);
    }

    getPatchNameByIndex(index) {
        return this.originFrame.name + patches[index] + this.patchKey;
    }

    public get texture(): Phaser.Textures.Texture {
        return this._sourceTexture;
    }

    public set texture(value: Phaser.Textures.Texture) {
        if (this._sourceTexture != value) {
            this._sourceTexture = value;
            if (this["_width"] == 0) {
                if (this._sourceTexture)
                    this.setSize(this._sourceTexture.source[0].width, this._sourceTexture.source[0].height);
                else
                    this.setSize(0, 0);
            }
            // todo 重绘
            // this.scene.add.image(0, 0, this._sourceTexture);
            const frames = value.getFrameNames();
            const baseFrameName = frames[0];
            // this._renderTexture.drawFrame(value.key, baseFrameName, 0, 0);
            // this.repaint();
            this.markChanged(1);
        }
    }

    public setPackItem(value: PackageItem) {
        if (!value || !value.texture) {
            // console.log("setpackitem ===>", value);
            return;
        }

        const _texture = value.texture;
        const name = _texture.key + "_" + value.name + "_" + this["$owner"].width + "_" + this["$owner"].height;
        this.patchKey = name;
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
                    }
                } else {
                    let texture = this.scene.textures.get(name);
                    if (texture && this._sourceTexture != texture) {
                        this._sourceTexture = texture;
                        this.originFrame = this._sourceTexture.frames["__BASE"];
                        this.setSize(value.width, value.height);
                    }
                }
            } else {
                const img = this.scene.make.image(undefined, false);
                img.setTexture(_texture.key);
                this.add(img);
            }
        } else {
            // 手动将packitem数据组织成frame格式添加到大图集的frames中，内部会去重
            _texture.add(name, 0, value.x, value.y, value.width, value.height);
            if (!this.scene.textures.exists(name)) {
                const canvas = this.scene.textures.createCanvas(name, value.width, value.height);
                canvas.drawFrame(_texture.key, name, 0, 0);
                if (canvas && this._sourceTexture != canvas) {
                    this._sourceTexture = canvas;
                    this.originFrame = this._sourceTexture.frames["__BASE"];
                    this.setSize(value.width, value.height);
                }
            } else {
                let texture = this.scene.textures.get(name);
                if (texture && this._sourceTexture != texture) {
                    this._sourceTexture = texture;
                    this.originFrame = this._sourceTexture.frames["__BASE"];
                    this.setSize(value.width, value.height);
                }
            }
        }
        this.markChanged(1);
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

    private markChanged(flag: number): void {
        if (!this._needRebuild) {
            this._needRebuild = flag;

            // Laya.timer.callLater(this, this.rebuild);
        }
        else
            this._needRebuild |= flag;
    }

    protected rebuild(): void {
        if ((this._needRebuild & 1) != 0)
            this.doDraw();
        if ((this._needRebuild & 2) != 0 && this._fillMethod != 0)
            this.doFill();
        this._needRebuild = 0;
    }

    private doDraw(): void {
        var w: number = this["_width"];
        var h: number = this["_height"];
        var g: Graphics = new Graphics(this.scene);
        var tex: Phaser.Textures.Texture = this._sourceTexture;

        g.clear();

        if (tex == null || w == 0 || h == 0) {
            return;
        }

        if (this._scaleByTile) {
            // todo draw texture
            //  g.fillTexture(tex, 0, 0, w, h);
        }
        else if (this._scale9Grid) {
            if (!this._sizeGrid) {
                var tw: number = tex.source[0].width;
                var th: number = tex.source[0].height;
                var left: number = this._scale9Grid.x;
                var right: number = Math.max(tw - this._scale9Grid.right, 0);
                var top: number = this._scale9Grid.y;
                var bottom: number = Math.max(th - this._scale9Grid.bottom, 0);
                this._sizeGrid = [top, right, bottom, left, this._tileGridIndice];
            }

            // todo draw9Grid
            //g.draw9Grid(tex, 0, 0, w, h, this._sizeGrid);
        }
        else {
            // todo drawImage
            //g.drawImage(tex, 0, 0, w, h);
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
