import { GearBase } from './gears/GearBase';
import { Controller } from './Controller';
import { ByteBuffer } from './utils/ByteBuffer';
import { GTreeNode } from './GTreeNode';
import { GGroup } from './GGroup';
import { Relations } from './Relations';
import { PackageItem } from './PackageItem';
import { GComponent } from './GComponent';
import { GTree } from './GTree';
import { GButton, GGraph, GImage, GList, GLoader, GMovieClip, GProgressBar, GRichTextField, GRoot, GTextField, GTextInput } from '.';
export declare class DisplayStyle {
    static EMPTY: DisplayStyle;
    /**水平缩放 */
    scaleX: number;
    /**垂直缩放 */
    scaleY: number;
    /**水平倾斜角度 */
    skewX: number;
    /**垂直倾斜角度 */
    skewY: number;
    /**X轴心点 */
    pivotX: number;
    /**Y轴心点 */
    pivotY: number;
    /**旋转角度 */
    rotation: number;
    /**透明度 */
    alpha: number;
    /**滚动区域 */
    scrollRect: Phaser.Geom.Rectangle;
    /**视口 */
    viewport: Phaser.Geom.Rectangle;
    /**点击区域 */
    hitArea: any;
}
export declare class GObject {
    data: Object;
    packageItem: PackageItem;
    static draggingObject: GObject;
    protected _x: number;
    protected _y: number;
    private _alpha;
    private _rotation;
    private _visible;
    private _dpr;
    protected _touchable: boolean;
    private _grayed;
    private _draggable?;
    private _scaleX;
    private _scaleY;
    protected _skewX: number;
    protected _skewY: number;
    protected _pivotX: number;
    protected _pivotY: number;
    protected _pivotAsAnchor: boolean;
    protected _pivotOffsetX: number;
    protected _pivotOffsetY: number;
    private _sortingOrder;
    private _internalVisible;
    private _handlingController?;
    private _tooltips?;
    protected _pixelSnapping?: boolean;
    protected _relations: Relations;
    protected _group?: GGroup;
    private _gears;
    private _dragBounds?;
    private _dragTesting?;
    private _dragStartPos?;
    protected _displayStyle: DisplayStyle;
    private _timeEvent;
    protected _displayObject: any;
    protected _xOffset: number;
    protected _yOffset: number;
    protected _scene: Phaser.Scene;
    protected _worldMatrix: Phaser.GameObjects.Components.TransformMatrix;
    protected _worldTx: number;
    protected _worldTy: number;
    minWidth: number;
    minHeight: number;
    maxWidth: number;
    maxHeight: number;
    sourceWidth: number;
    sourceHeight: number;
    initWidth: number;
    initHeight: number;
    _parent: GComponent;
    _width: number;
    _height: number;
    _rawWidth: number;
    _rawHeight: number;
    _id: string;
    _name: string;
    _underConstruct: boolean;
    _gearLocked?: boolean;
    _sizePercentInGroup: number;
    _treeNode?: GTreeNode;
    protected _objectType: number;
    constructor(scene: Phaser.Scene, type: number);
    resizeMask(wid: number, hei: number): void;
    private _resizeMask;
    set type(val: number);
    get type(): number;
    get dpr(): number;
    set dpr(value: number);
    get id(): string;
    set id(value: string);
    get name(): string;
    set name(value: string);
    get x(): number;
    set x(value: number);
    get y(): number;
    set y(value: number);
    get scene(): Phaser.Scene;
    set scene(value: Phaser.Scene);
    get worldMatrix(): Phaser.GameObjects.Components.TransformMatrix;
    get timeEvent(): Phaser.Time.TimerEvent;
    set timeEvent(value: Phaser.Time.TimerEvent);
    setXY(xv: number, yv: number, force?: boolean): void;
    get xMin(): number;
    set xMin(value: number);
    get yMin(): number;
    set yMin(value: number);
    get pixelSnapping(): boolean;
    set pixelSnapping(value: boolean);
    center(restraint?: boolean): void;
    get width(): number;
    set width(value: number);
    get height(): number;
    set height(value: number);
    setSize(wv: number, hv: number, ignorePivot?: boolean): void;
    ensureSizeCorrect(): void;
    makeFullScreen(): void;
    get actualWidth(): number;
    get actualHeight(): number;
    get scaleX(): number;
    set scaleX(value: number);
    get scaleY(): number;
    set scaleY(value: number);
    setScale(sx: number, sy: number): void;
    get skewX(): number;
    set skewX(value: number);
    get skewY(): number;
    set skewY(value: number);
    setSkew(sx: number, sy: number): void;
    get pivotX(): number;
    set pivotX(value: number);
    get pivotY(): number;
    set pivotY(value: number);
    setPivot(xv: number, yv?: number, asAnchor?: boolean): void;
    get pivotAsAnchor(): boolean;
    protected internalSetPivot(xv: number, yv: number, asAnchor: boolean): void;
    protected updatePivotOffset(): void;
    protected applyPivot(): void;
    get touchable(): boolean;
    set touchable(value: boolean);
    setTouchable(value: boolean): void;
    protected removeInteractive(): void;
    get grayed(): boolean;
    set grayed(value: boolean);
    get enabled(): boolean;
    set enabled(value: boolean);
    get rotation(): number;
    set rotation(value: number);
    get normalizeRotation(): number;
    get alpha(): number;
    set alpha(value: number);
    get visible(): boolean;
    set visible(value: boolean);
    get internalVisible(): boolean;
    get internalVisible2(): boolean;
    get internalVisible3(): boolean;
    get sortingOrder(): number;
    set sortingOrder(value: number);
    get focused(): boolean;
    requestFocus(): void;
    get tooltips(): string;
    set tooltips(value: string);
    private __rollOver;
    private __doShowTooltips;
    private __rollOut;
    get blendMode(): Phaser.BlendModes | string;
    set blendMode(value: Phaser.BlendModes | string);
    get filters(): any[];
    set filters(value: any[]);
    get inContainer(): boolean;
    get onStage(): boolean;
    get resourceURL(): string;
    set group(value: GGroup);
    get group(): GGroup;
    getGear(index: number): GearBase;
    protected updateGear(index: number): void;
    checkGearController(index: number, c: Controller): boolean;
    updateGearFromRelations(index: number, dx: number, dy: number): void;
    addDisplayLock(): number;
    releaseDisplayLock(token: number): void;
    private checkGearDisplay;
    get relations(): Relations;
    addRelation(target: GObject, relationType: number, usePercent?: boolean): void;
    removeRelation(target: GObject, relationType?: number): void;
    get displayObject(): Phaser.GameObjects.GameObject;
    get parent(): GComponent;
    set parent(val: GComponent);
    removeFromParent(): void;
    get root(): GRoot;
    get asCom(): GComponent;
    get asButton(): GButton;
    get asProgress(): GProgressBar;
    get asTextField(): GTextField;
    get asRichTextField(): GRichTextField;
    get asTextInput(): GTextInput;
    get asLoader(): GLoader;
    get asList(): GList;
    get asTree(): GTree;
    get asGraph(): GGraph;
    get asGroup(): GGroup;
    get asImage(): GImage;
    get asMovieClip(): GMovieClip;
    get text(): string;
    set text(value: string);
    get icon(): string;
    set icon(value: string);
    get treeNode(): GTreeNode;
    get isDisposed(): boolean;
    get scrollRect(): Phaser.Geom.Rectangle;
    set scrollRect(val: Phaser.Geom.Rectangle);
    /**
     * <p>可以设置一个Rectangle区域作为点击区域，或者设置一个<code>HitArea</code>实例作为点击区域，HitArea内可以设置可点击和不可点击区域。</p>
     * <p>如果不设置hitArea，则根据宽高形成的区域进行碰撞。</p>
    */
    get hitArea(): any;
    set hitArea(value: any);
    dispose(): void;
    onClick(listener: Function, context: any): void;
    offClick(listener: Function, context: any): void;
    hasClickListener(): boolean;
    /**
     * 添加fairygui内部事件
     * @param type
     * @param listener
     * @param context
     */
    onEvent(type: string, listener: Function, context?: any): void;
    offEvent(type: string, listener: Function, context?: any): void;
    /**
     * 添加phaser交互事件
     * @param type
     * @param listener
     * @param context
     */
    on(type: string, listener: Function, context?: any): void;
    off(type: string, listener: Function, context?: any): void;
    get draggable(): boolean;
    set draggable(value: boolean);
    get dragBounds(): Phaser.Geom.Rectangle;
    set dragBounds(value: Phaser.Geom.Rectangle);
    startDrag(touchID?: number): void;
    stopDrag(): void;
    get dragging(): boolean;
    localToGlobal(ax?: number, ay?: number, result?: Phaser.Geom.Point): Phaser.Geom.Point;
    _localToGlobal(point: Phaser.Geom.Point, createNewPoint?: boolean): Phaser.Geom.Point;
    globalToLocal(ax?: number, ay?: number, result?: Phaser.Geom.Point): Phaser.Geom.Point;
    _globalToLocal(point: Phaser.Geom.Point, createNewPoint?: boolean): Phaser.Geom.Point;
    /**
 * 将本地坐标系坐标转转换到父容器坐标系。
 * @param point 本地坐标点。
 * @return  转换后的点。
 */
    toParentPoint(point: Phaser.Geom.Point): Phaser.Geom.Point;
    /**
     * 将父容器坐标系坐标转换到本地坐标系。
     * @param point 父容器坐标点。
     * @return  转换后的点。
     */
    fromParentPoint(point: Phaser.Geom.Point): Phaser.Geom.Point;
    /**
 * 对指定的点应用当前矩阵的逆转化并返回此点。
 * @param	out 待转化的点 Point 对象。
 * @return	返回out
 */
    invertTransformPoint(out: Phaser.Geom.Point): Phaser.Geom.Point;
    localToGlobalRect(ax?: number, ay?: number, aw?: number, ah?: number, result?: Phaser.Geom.Rectangle): Phaser.Geom.Rectangle;
    globalToLocalRect(ax?: number, ay?: number, aw?: number, ah?: number, result?: Phaser.Geom.Rectangle): Phaser.Geom.Rectangle;
    handleControllerChanged(c: Controller): void;
    createDisplayObject(): void;
    setDisplayObject(val: any): void;
    protected handleXYChanged(): void;
    protected handleSizeChanged(): void;
    protected handleScaleChanged(): void;
    protected handleGrayedChanged(): void;
    protected handleAlphaChanged(): void;
    handleVisibleChanged(): void;
    getProp(index: number): any;
    setProp(index: number, value: any): void;
    constructFromResource(): Promise<void>;
    setup_beforeAdd(buffer: ByteBuffer, beginPos: number): void;
    setup_afterAdd(buffer: ByteBuffer, beginPos: number): void;
    private initDrag;
    private dragBegin;
    private dragEnd;
    private reset;
    private __begin;
    private __moving;
    private __end;
    static cast(sprite: Phaser.GameObjects.GameObject): GObject;
}
export declare const BlendMode: {
    2: Phaser.BlendModes;
    3: Phaser.BlendModes;
    4: Phaser.BlendModes;
};
