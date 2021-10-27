import { PackageItem } from './PackageItem';
import { ObjectPropID } from './FieldTypes';
import { MovieClip } from './display/MovieClip';
import { GObject } from './GObject';
import { ByteBuffer } from './utils/ByteBuffer';
export class GMovieClip extends GObject {
    private _movieClip: MovieClip;

    constructor(scene: Phaser.Scene) {
        super(scene);
    }

    public get color(): string {
        return this._movieClip.color;
    }

    public set color(value: string) {
        this._movieClip.color = value;
    }

    public createDisplayObject(): void {
        this._displayObject = this._movieClip = new MovieClip(this.scene);
        // this._movieClip.mouseEnabled = false;
        this._displayObject["$owner"] = this;
    }

    public getChild(): GObject {
       return null;
    }

    public get playing(): boolean {
        return this._movieClip.playing;
    }

    public set playing(value: boolean) {
        if (this._movieClip.playing != value) {
            this._movieClip.playing = value;
            this.updateGear(5);
        }
    }

    public get frame(): number {
        return this._movieClip.frame;
    }

    public set frame(value: number) {
        if (this._movieClip.frame != value) {
            this._movieClip.frame = value;
            this.updateGear(5);
        }
    }

    public get timeScale(): number {
        return this._movieClip.timeScale;
    }

    public set timeScale(value: number) {
        this._movieClip.timeScale = value;
    }

    public advance(timeInMiniseconds: number): void {
        this._movieClip.advance(timeInMiniseconds);
    }

    //从start帧开始，播放到end帧（-1表示结尾），重复times次（0表示无限循环），循环结束后，停止在endAt帧（-1表示参数end）
    public setPlaySettings(start?: number, end?: number, times?: number, endAt?: number, endHandler?: () => void): void {
        this._movieClip.setPlaySettings(start, end, times, endAt, endHandler);
    }

    public set touchable(value: boolean) {
        this._touchable = false;
        // if (this._touchable != value) {
        //     this.setTouchable(value);
        // }
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
                return this.timeScale;
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
                this.timeScale = value;
                break;
            case ObjectPropID.DeltaTime:
                this.advance(value);
                break;
            default:
                super.setProp(index, value);
                break;
        }
    }

    public constructFromResource(): Promise<void> {
        return new Promise((reslove, reject) => {
            var displayItem: PackageItem = this.packageItem.getBranch();

            this.sourceWidth = displayItem.width;
            this.sourceHeight = displayItem.height;
            this.initWidth = this.sourceWidth;
            this.initHeight = this.sourceHeight;

            displayItem = displayItem.getHighResolution();
            displayItem.load().then((packageItem: PackageItem) => {
                // this._movieClip.setSize(packageItem.width, packageItem.height);
                this._movieClip.interval = packageItem.interval;
                this._movieClip.swing = packageItem.swing;
                this._movieClip.repeatDelay = packageItem.repeatDelay;
                this._movieClip.frames = packageItem.frames;
                reslove();
            });
        });
    }

    protected handleSizeChanged(): void {
        this._displayObject.setSize(this._width, this._height);
        // this._displayObject.setInteractive(new Phaser.Geom.Rectangle(0, 0, this._width, this._height), Phaser.Geom.Rectangle.Contains);
    }

    public setup_beforeAdd(buffer: ByteBuffer, beginPos: number): void {
        super.setup_beforeAdd(buffer, beginPos);

        buffer.seek(beginPos, 5);

        if (buffer.readBool())
            this.color = buffer.readColorS();
        buffer.readByte(); //flip
        this._movieClip.frame = buffer.readInt();
        this._movieClip.playing = buffer.readBool();
    }
    protected handleXYChanged(): void {
        var xv: number = this._x + this._xOffset;
        var yv: number = this._y + this._yOffset;
        if (this._pivotAsAnchor) {
            xv -= this._pivotX * this._width;
            yv -= this._pivotY * this._height;
        }
        if (this._pixelSnapping) {
            xv = Math.round(xv);
            yv = Math.round(yv);
        }
        let tmpX = xv + this._pivotOffsetX + this._movieClip.frames[0].width >> 1;
        let tmpY = yv + this._pivotOffsetY + this._movieClip.frames[0].height >> 1;
        this._displayObject.setPosition(tmpX, tmpY);
    }
}
