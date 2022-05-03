import { GRoot } from './GRoot';
import { ByteBuffer } from './utils/ByteBuffer';
import { UIConfig } from './UIConfig';
import { ToolSet } from './utils/ToolSet';
import { UIPackage } from './UIPackage';
import { LoaderFillType, PackageItemType, ObjectPropID } from './FieldTypes';
import { GObjectPool } from './GObjectPool';
import { MovieClip } from './display/MovieClip';
import { PackageItem } from './PackageItem';
import { GObject } from './GObject';
import { GComponent } from './GComponent';
import { AssetProxy, LoaderType } from './AssetProxy';
export class GLoader extends GObject {
    private _url: string;
    private _align: string;
    private _valign: string;
    private _autoSize: boolean;
    private _fill: number;
    private _shrinkOnly: boolean;
    private _showErrorSign: boolean;
    private _contentItem: PackageItem;
    private _content: MovieClip;
    private _errorSign?: GObject;
    private _content2?: GComponent;

    private _updatingLayout: boolean;

    private _isLoading: boolean = false

    private static _errorSignPool: GObjectPool = new GObjectPool();

    constructor(scene: Phaser.Scene, type) {
        super(scene, type);
        this._url = "";
        this._fill = LoaderFillType.None;
        this._align = "left";
        this._valign = "top";
        this._showErrorSign = true;
    }

    public createDisplayObject(): void {
        super.createDisplayObject();
        this._content = new MovieClip(this.scene);
        this._content["$owner"] = this;
        this._displayObject.add(this._content);
        // this._displayObject.mouseEnabled = true;
    }

    public dispose(): void {
        if (!this._contentItem && this._content.texture) {
            this.freeExternal(this._content.texture);
        }
        if (this._content)
            this._content.destroy();
        if (this._content2)
            this._content2.dispose();

        super.dispose();
    }

    public get url(): string {
        return this._url;
    }

    public set url(value: string) {
        if (this._url == value)
            return;

        this._url = value;
        this.loadContent().then(() => {

        });
        this.updateGear(7);
    }

    public get icon(): string {
        return this._url;
    }

    public set icon(value: string) {
        this.url = value;
    }

    public get align(): string {
        return this._align;
    }

    public set align(value: string) {
        if (this._align != value) {
            this._align = value;
            this.updateLayout();
        }
    }

    public get verticalAlign(): string {
        return this._valign;
    }

    public set verticalAlign(value: string) {
        if (this._valign != value) {
            this._valign = value;
            this.updateLayout();
        }
    }

    public get fill(): number {
        return this._fill;
    }

    public set fill(value: number) {
        if (this._fill != value) {
            this._fill = value;
            this.updateLayout();
        }
    }

    public get shrinkOnly(): boolean {
        return this._shrinkOnly;
    }

    public set shrinkOnly(value: boolean) {
        if (this._shrinkOnly != value) {
            this._shrinkOnly = value;
            this.updateLayout();
        }
    }

    public get autoSize(): boolean {
        return this._autoSize;
    }

    public set autoSize(value: boolean) {
        if (this._autoSize != value) {
            this._autoSize = value;
            this.updateLayout();
        }
    }

    public get playing(): boolean {
        return this._content.playing;
    }

    public set playing(value: boolean) {
        if (this._content.playing != value) {
            this._content.playing = value;
            this.updateGear(5);
        }
    }

    public get frame(): number {
        return this._content.frame;
    }

    public set frame(value: number) {
        if (this._content.frame != value) {
            this._content.frame = value;
            this.updateGear(5);
        }
    }

    public get color(): string {
        return this._content.color;
    }

    public set color(value: string) {
        if (this._content.color != value) {
            this._content.color = value;
            this.updateGear(4);
        }
    }

    public get fillMethod(): number {
        return this._content.fillMethod;
    }

    public set fillMethod(value: number) {
        this._content.fillMethod = value;
    }

    public get fillOrigin(): number {
        return this._content.fillOrigin;
    }

    public set fillOrigin(value: number) {
        this._content.fillOrigin = value;
    }

    public get fillClockwise(): boolean {
        return this._content.fillClockwise;
    }

    public set fillClockwise(value: boolean) {
        this._content.fillClockwise = value;
    }

    public get fillAmount(): number {
        return this._content.fillAmount;
    }

    public set fillAmount(value: number) {
        this._content.fillAmount = value;
    }

    public get showErrorSign(): boolean {
        return this._showErrorSign;
    }

    public set showErrorSign(value: boolean) {
        this._showErrorSign = value;
    }

    public get content(): MovieClip {
        return this._content;
    }

    public get component(): GComponent {
        return this._content2;
    }

    protected loadContent(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.clearContent();

            if (!this._url)
                return;

            if (ToolSet.startsWith(this._url, "ui://"))
                this.loadFromPackage(this._url).then(() => {
                    resolve();
                });
            else
                this.loadExternal().then(() => {
                    resolve();
                });
        });

    }

    protected loadFromPackage(itemURL: string): Promise<void> {
        return new Promise((reslove, reject) => {
            this._contentItem = UIPackage.getItemByURL(itemURL);
            if (this._contentItem) {
                this._contentItem = this._contentItem.getBranch();
                this.sourceWidth = this._contentItem.width;
                this.sourceHeight = this._contentItem.height;
                this._contentItem = this._contentItem.getHighResolution();
                this._isLoading = true;
                this._contentItem.load().then(() => {
                    this._isLoading = false;
                    if (this._autoSize) {
                        this.setSize(this.sourceWidth, this.sourceHeight);
                    }

                    if (this._contentItem.type == PackageItemType.Image) {
                        if (!this._contentItem.texture) {
                            this.setErrorState();
                            return reject();
                        }
                        else {
                            this._content.scale9Grid = this._contentItem.scale9Grid;
                            this._content.scaleByTile = this._contentItem.scaleByTile;
                            this._content.tileGridIndice = this._contentItem.tileGridIndice;
                            this.sourceWidth = this._contentItem.width;
                            this.sourceHeight = this._contentItem.height;
                            const name = this._contentItem.texture.key + "_" + this._contentItem.name + "_" + this._contentItem.width + "_" + this._contentItem.height;
                            const frame: Phaser.Textures.Frame = this._contentItem.texture.frames[name];
                            if (frame) {
                                this._content.frames = [frame];
                            }
                            this.updateLayout();
                            return reslove();
                        }
                    }
                    else if (this._contentItem.type == PackageItemType.MovieClip) {
                        this.sourceWidth = this._contentItem.width;
                        this.sourceHeight = this._contentItem.height;
                        this._content.interval = this._contentItem.interval;
                        this._content.swing = this._contentItem.swing;
                        this._content.repeatDelay = this._contentItem.repeatDelay;
                        this._content.frames = this._contentItem.frames;
                        this.updateLayout();
                        return reslove();
                    }
                    else if (this._contentItem.type == PackageItemType.Component) {
                        UIPackage.createObjectFromURL(itemURL).then((obj) => {
                            if (!obj) {
                                this.setErrorState();
                                return reject();
                            }
                            else if (!(obj instanceof GComponent)) {
                                obj.dispose();
                                this.setErrorState();
                                return reject();
                            }
                            else {
                                this._content2 = obj.asCom;
                                this._displayObject.add(this._content2.displayObject);
                                this.updateLayout();
                                return reslove();
                            }
                        });
                    }
                    else {
                        this.setErrorState();
                        return reject();
                    }
                });
            }
            else {
                this.setErrorState();
                return reject();
            }
        });
    }

    protected loadExternal(): Promise<void> {
        return new Promise((resolve, reject) => {
            AssetProxy.inst.load(this.id, this._url, this._url, LoaderType.IMAGE, this.__getResCompleted, undefined, this);
            AssetProxy.inst.addListen(LoaderType.IMAGE, this._url);
            AssetProxy.inst.startLoad();
            resolve();
        });
        // AssetProxy.inst.load(this._url, Laya.Handler.create(this, this.__getResCompleted), null, Laya.Loader.IMAGE);
    }

    protected freeExternal(texture: Phaser.Textures.Texture): void {
    }

    protected onExternalLoadSuccess(texture: Phaser.Textures.Texture): void {
        this._content.texture = texture;
        this._content.scale9Grid = null;
        this._content.scaleByTile = false;
        this.sourceWidth = texture.source[0].width;
        this.sourceHeight = texture.source[0].height;
        const frame: Phaser.Textures.Frame = texture.frames["__BASE"];
        if (frame) {
            this._content.frames = [frame];
        }
        this._content.setSize(this.sourceWidth, this.sourceHeight);
        this.updateLayout();
    }

    protected onExternalLoadFailed(): void {
        this.setErrorState();
    }

    private __getResCompleted(tex: Phaser.Textures.Texture): void {
        if (tex != null)
            this.onExternalLoadSuccess(tex);
        else
            this.onExternalLoadFailed();
        AssetProxy.inst.removeListen();
    }

    private setErrorState(): void {
        if (!this._showErrorSign)
            return;

        if (!this._errorSign) {
            if (UIConfig.loaderErrorSign != null) {
                GLoader._errorSignPool.getObject(UIConfig.loaderErrorSign).then((obj) => {
                    this._errorSign = obj;
                    if (this._errorSign) {
                        this._errorSign.setSize(this.width, this.height);
                        this._displayObject.add(this._errorSign.displayObject);
                    }
                });
            }
        }
    }

    private clearErrorState(): void {
        if (this._errorSign) {
            this._displayObject.remove(this._errorSign.displayObject);
            GLoader._errorSignPool.returnObject(this._errorSign);
            this._errorSign = null;
        }
    }

    private updateLayout(): void {
        const offset = GRoot.dpr * GRoot.uiScale;
        // if (!this._content2 && !this._content.texture && !this._content.frames) {
        //     if (this._autoSize) {
        //         this._updatingLayout = true;
        //         this.setSize(50, 30);
        //         this._updatingLayout = false;
        //     }
        //     return;
        // }

        // let cw = this.sourceWidth;
        // let ch = this.sourceHeight;

        // if (this._autoSize) {
        //     this._updatingLayout = true;
        //     if (cw == 0)
        //         cw = 50;
        //     if (ch == 0)
        //         ch = 30;
        //     this.setSize(cw, ch);
        //     this._updatingLayout = false;

        //     if (cw == this._width && ch == this._height) {
        //         if (this._content2) {
        //             this._content2.setXY(0, 0);
        //             this._content2.setScale(1, 1);
        //         }
        //         else {
        //             this._content.setSize(cw, ch);
        //             this._content.setPosition(0, 0);
        //         }
        //         return;
        //     }
        // }

        // var sx: number = 1, sy: number = 1;
        // if (this._fill != LoaderFillType.None) {
        //     sx = this.width / this.sourceWidth;
        //     sy = this.height / this.sourceHeight;

        //     if (sx != 1 || sy != 1) {
        //         if (this._fill == LoaderFillType.ScaleMatchHeight)
        //             sx = sy;
        //         else if (this._fill == LoaderFillType.ScaleMatchWidth)
        //             sy = sx;
        //         else if (this._fill == LoaderFillType.Scale) {
        //             if (sx > sy)
        //                 sx = sy;
        //             else
        //                 sy = sx;
        //         }
        //         else if (this._fill == LoaderFillType.ScaleNoBorder) {
        //             if (sx > sy)
        //                 sy = sx;
        //             else
        //                 sx = sy;
        //         }

        //         if (this._shrinkOnly) {
        //             if (sx > 1)
        //                 sx = 1;
        //             if (sy > 1)
        //                 sy = 1;
        //         }

        //         cw = this.sourceWidth * sx;
        //         ch = this.sourceHeight * sy;
        //     }
        // }

        // if (this._content2)
        //     this._content2.setScale(sx, sy);
        // else
        //     this._content.setSize(cw, ch);

        // var nx: number, ny: number;
        // if (this._align == "center")
        //     nx = Math.floor((this.width - cw) / 2);
        // else if (this._align == "right")
        //     nx = this.width - cw;
        // else
        //     nx = 0;
        // if (this._valign == "middle")
        //     ny = Math.floor((this.height - ch) / 2);
        // else if (this._valign == "bottom")
        //     ny = this.height - ch;
        // else
        //     ny = 0;

        // if (this._content2)
        //     this._content2.setXY(nx, ny);
        // else
        //     this._content.setPosition(nx * GRoot.dpr + cw / 2, ny * GRoot.dpr + ch / 2);
        if (!this._content2 && !this._content.texture && !this._content.frames) {
            if (this._autoSize) {
                this._updatingLayout = true;
                this.setSize(50, 30);
                this._updatingLayout = false;
            }
            return;
        }
        let cw;
        let ch;
        let pivotX = this.pivotX;
        let pivotY = this.pivotY;
        if (this.parent) {
            if (this.parent.parent) {
                if (this.parent.parent instanceof GRoot) {
                    cw = this.sourceWidth;
                    ch = this.sourceHeight;
                    pivotX = this.pivotX;
                    pivotY = this.pivotY;
                } else {
                    cw = this.parent.initWidth;
                    ch = this.parent.initHeight;
                    pivotX = this.parent.pivotX;
                    pivotY = this.parent.pivotY;
                }
            } else {
                cw = this.sourceWidth;
                ch = this.sourceHeight;
            }
        } else {
            cw = this.sourceWidth;
            ch = this.sourceHeight;
        }
        // cw *= offset;
        // ch *= offset;
        if (this._autoSize) {
            this._updatingLayout = true;
            if (cw == 0)
                cw = 50;
            if (ch == 0)
                ch = 30;
            this.setSize(cw, ch);
            this._updatingLayout = false;

            if (cw == this._width && ch == this._height) {
                if (this._content2) {
                    this._content2.setXY(0, 0);
                    this._content2.setScale(1, 1);
                }
                else {
                    this._content.changeSize(cw, ch);
                    this._content.setPosition(0, 0);
                }
                return;
            }
        }

        var sx: number = 1, sy: number = 1;
        if (this._fill != LoaderFillType.None) {
            sx = this.initWidth / this.sourceWidth;
            sy = this.initHeight / this.sourceHeight;

            if (sx != 1 || sy != 1) {
                if (this._fill == LoaderFillType.ScaleMatchHeight)
                    sx = sy;
                else if (this._fill == LoaderFillType.ScaleMatchWidth)
                    sy = sx;
                else if (this._fill == LoaderFillType.Scale) {
                    if (sx > sy)
                        sx = sy;
                    else
                        sy = sx;
                }
                else if (this._fill == LoaderFillType.ScaleNoBorder) {
                    if (sx > sy)
                        sy = sx;
                    else
                        sx = sy;
                }

                if (this._shrinkOnly) {
                    if (sx > 1)
                        sx = 1;
                    if (sy > 1)
                        sy = 1;
                }

                cw = Math.round(this.sourceWidth * sx) * offset;
                ch = Math.round(this.sourceHeight * sy) * offset;
            }
        }
        this.adaptiveScaleX = sx;
        this.adaptiveScaleY = sy;

        if (this._content2)
            this._content2.setScale(sx * offset, sy * offset);
        else {
            // 通过编辑器获取的高清资源
            if (this._contentItem && this._contentItem.isHighRes) this._content.setSize(cw, ch);
            else this._content.setScale(sx * offset, sy * offset);
            // if (this._content.frames) {
            //     this._content.setSize(cw, ch, this._content.frames[0]);
            // } else {
            //     this._content.setSize(cw, ch);
            // }
        }


        var nx: number, ny: number;

        if (this._align == "center")
            nx = (0.5 - pivotX) * cw + Math.floor((this.width * offset - cw) / 2);
        else if (this._align == "right")
            nx = (0.5 - pivotX) * cw + (this.width * offset - cw);
        else
            nx = (0.5 - pivotX) * cw;
        if (this._valign == "middle")
            ny = (0.5 - pivotY) * ch + Math.floor((this.height * offset - ch) / 2);
        else if (this._valign == "bottom")
            ny = (0.5 - pivotY) * ch + (this.height * offset - ch);
        else
            ny = (0.5 - pivotY) * ch;
        // 需要将位置除以缩放值进行计算，因为缩放后位置会产生偏移
        if (this._content2)
            this._content2.setXY(nx / sx, ny / sy);
        else {
            // 通过编辑器获取的高清资源
            if (this._contentItem && this._contentItem.isHighRes) this._content.setPosition(nx / sx, ny / sy);
            else this._content.setPosition(nx, ny);
        }

    }

    private clearContent(): void {
        // 异步导致清除contentItem时还未加载成功
        if (this._isLoading) return;
        this.clearErrorState();

        if (!this._contentItem && this._content.texture) {
            this.freeExternal(this._content.texture);
        }

        this._content.texture = null;
        this._content.frames = null;

        if (this._content2) {
            this._content2.dispose();
            this._content2 = null;
        }

        this._contentItem = null;
    }

    protected handleSizeChanged(): void {
        super.handleSizeChanged();

        if (!this._updatingLayout)
            this.updateLayout();
    }

    public getProp(index: number): any {
        switch (index) {
            case ObjectPropID.Color:
                return this.color;
            case ObjectPropID.Playing:
                return this.playing;
            case ObjectPropID.Frame:
                return this.frame;
            case ObjectPropID.TimeScale:
                return this._content.timeScale;
            default:
                return super.getProp(index);
        }
    }

    public setProp(index: number, value: any): void {
        switch (index) {
            case ObjectPropID.Color:
                this.color = value;
                break;
            case ObjectPropID.Playing:
                this.playing = value;
                break;
            case ObjectPropID.Frame:
                this.frame = value;
                break;
            case ObjectPropID.TimeScale:
                this._content.timeScale = value;
                break;
            case ObjectPropID.DeltaTime:
                this._content.advance(value);
                break;
            default:
                super.setProp(index, value);
                break;
        }
    }

    public setup_beforeAdd(buffer: ByteBuffer, beginPos: number): Promise<void> {
        return new Promise((resolve, reject) => {
            super.setup_beforeAdd(buffer, beginPos);

            buffer.seek(beginPos, 5);

            var iv: number;

            this._url = buffer.readS();
            iv = buffer.readByte();
            this._align = iv == 0 ? "left" : (iv == 1 ? "center" : "right");
            iv = buffer.readByte();
            this._valign = iv == 0 ? "top" : (iv == 1 ? "middle" : "bottom");
            this._fill = buffer.readByte();
            this._shrinkOnly = buffer.readBool();
            this._autoSize = buffer.readBool();
            this._showErrorSign = buffer.readBool();
            this._content.playing = buffer.readBool();
            this._content.frame = buffer.readInt();

            if (buffer.readBool())
                this.color = buffer.readColorS();

            this._content.fillMethod = buffer.readByte();
            if (this._content.fillMethod != 0) {
                this._content.fillOrigin = buffer.readByte();
                this._content.fillClockwise = buffer.readBool();
                this._content.fillAmount = buffer.readFloat();
            }

            if (this._url) {
                this.loadContent().then(() => {
                    resolve();
                });
            } else {
                resolve();
            }
        });

    }
}
