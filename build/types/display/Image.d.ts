import { PackageItem } from '../PackageItem';
export declare class Image extends Phaser.GameObjects.Container {
    protected _sourceTexture: Phaser.Textures.Texture;
    protected _frame: number;
    protected _scaleByTile?: boolean;
    protected _scale9Grid?: Phaser.Geom.Rectangle;
    protected _sourceFrames: Phaser.Textures.Frame[];
    protected _playing: boolean;
    protected _frameCount: number;
    protected _frames: Phaser.Textures.Frame[];
    protected _start: number;
    protected _end: number;
    protected _times: number;
    protected _endAt: number;
    protected _status: number;
    protected _frameImgs: Map<string, Phaser.GameObjects.Image>;
    /**
     * 无论九宫还是非九宫的，基础贴图
     */
    protected _curImg: Phaser.GameObjects.Image;
    private _tileGridIndice;
    private _sizeGrid;
    private _needRebuild;
    private _fillMethod;
    private _fillOrigin;
    private _fillAmount;
    private _fillClockwise?;
    private _mask?;
    private _color;
    private _valueName;
    private finalXs;
    private finalYs;
    private originFrame;
    private _renderTexture;
    private internalTint;
    private tintFill;
    /**
     * phaser 存到内存中的图片资源需要一个key，相同originkey的图片会覆盖原先九宫过的资源
     */
    private patchKey;
    constructor(scene: Phaser.Scene);
    get curImage(): Phaser.GameObjects.Image;
    /**
     * 九宫图的原始图片名字
     */
    get valueName(): string;
    setTint(color: string): void;
    setSize(width: number, height: number, originFrame?: Phaser.Textures.Frame): this;
    changeSize(width: number, height: number, initBoo?: boolean, originFrame?: Phaser.Textures.Frame): Promise<Phaser.GameObjects.Container>;
    createPatches(): void;
    drawPatches(): void;
    createPatchFrame(patch: any, x: any, y: any, width: any, height: any): void;
    getPatchNameByIndex(index: any): string;
    get texture(): Phaser.Textures.Texture;
    set texture(value: Phaser.Textures.Texture);
    setPackItem(value: PackageItem): Promise<void>;
    get scale9Grid(): Phaser.Geom.Rectangle;
    set scale9Grid(value: Phaser.Geom.Rectangle);
    get scaleByTile(): boolean;
    set scaleByTile(value: boolean);
    get tileGridIndice(): number;
    set tileGridIndice(value: number);
    get fillMethod(): number;
    set fillMethod(value: number);
    get fillOrigin(): number;
    set fillOrigin(value: number);
    get fillClockwise(): boolean;
    set fillClockwise(value: boolean);
    get fillAmount(): number;
    set fillAmount(value: number);
    get color(): string;
    set color(value: string);
    protected markChanged(flag: number): void;
    protected rebuild(): void;
    private doDraw;
    private doFill;
}
