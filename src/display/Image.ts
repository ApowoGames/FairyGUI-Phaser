import { ToolSet } from './../utils/ToolSet';
import { fillImage } from './FillUtils';
import { Graphics } from "./Graphics";

export class Image extends Phaser.GameObjects.Container {
    protected _source: Phaser.Textures.Texture;
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

    constructor(scene: Phaser.Scene) {
        super(scene);

        // this.mouseEnabled = false;
        this._color = "#FFFFFF";
        this.width
    }

    // public set width(value: number) {
    //     if (this["_width"] !== value) {
    //         super.set_width(value);
    //         this.markChanged(1);
    //     }
    // }

    // public set height(value: number) {
    //     if (this["_height"] !== value) {
    //         super.set_height(value);
    //         this.markChanged(1);
    //     }
    // }
    public setSize(width: number, height: number): this {
        this.width = width;
        this.height = height;
        this.markChanged(1);
        return this;
    }

    public get texture(): Phaser.Textures.Texture {
        return this._source;
    }

    public set texture(value: Phaser.Textures.Texture) {
        if (this._source != value) {
            this._source = value;
            if (this["_width"] == 0) {
                if (this._source)
                    this.setSize(this._source.source[0].width, this._source.source[0].height);
                else
                    this.setSize(0, 0);
            }
            // todo 重绘
            // this.repaint();
            this.markChanged(1);
        }
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
        var tex: Phaser.Textures.Texture = this._source;

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
