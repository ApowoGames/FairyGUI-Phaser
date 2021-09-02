import { PackageItem } from '../PackageItem';
export declare class Image extends Phaser.GameObjects.Container {
    protected _sourceTexture: Phaser.Textures.Texture;
    protected _scaleByTile?: boolean;
    protected _scale9Grid?: Phaser.Geom.Rectangle;
    private _tileGridIndice;
    private _sizeGrid;
    private _needRebuild;
    private _fillMethod;
    private _fillOrigin;
    private _fillAmount;
    private _fillClockwise?;
    private _mask?;
    private _color;
    private finalXs;
    private finalYs;
    private originFrame;
    private internalTint;
    private tintFill;
    /**
     * phaser 存到内存中的图片资源需要一个key，相同originkey的图片会覆盖原先九宫过的资源
     */
    private patchKey;
    constructor(scene: Phaser.Scene);
    setSize(width: number, height: number): this;
    createPatches(): void;
    drawPatches(): void;
    createPatchFrame(patch: any, x: any, y: any, width: any, height: any): void;
    getPatchNameByIndex(index: any): string;
    get texture(): Phaser.Textures.Texture;
    set texture(value: Phaser.Textures.Texture);
    setPackItem(value: PackageItem): void;
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
    private markChanged;
    protected rebuild(): void;
    private doDraw;
    private doFill;
}
