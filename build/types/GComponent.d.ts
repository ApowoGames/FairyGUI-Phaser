import { ByteBuffer } from "./utils/ByteBuffer";
import { GGroup } from "./GGroup";
import { ScrollPane } from "./ScrollPane";
import { Transition } from "./Transition";
import { Margin } from "./Margin";
import { Controller } from "./Controller";
import { Graphics } from "./display/Graphics";
import { GObject } from "./GObject";
export declare class GComponent extends GObject {
    private _sortingChildCount;
    protected _opaque: boolean;
    private _applyingController?;
    private _mask?;
    private _maskReversed;
    private _maskDisplay;
    protected _renderEvent: any;
    protected _renderTime: Phaser.Time.TimerEvent;
    protected _buildNativeEvent: any;
    protected _buildNativeTime: Phaser.Time.TimerEvent;
    protected _margin: Margin;
    protected _trackBounds: boolean;
    protected _boundsChanged: boolean;
    protected _childrenRenderOrder: number;
    protected _apexIndex: number;
    _buildingDisplayList: boolean;
    _children: GObject[];
    _controllers: Controller[];
    _transitions: Transition[];
    _container: Phaser.GameObjects.Container;
    _scrollPane?: ScrollPane;
    _alignOffset: Phaser.Geom.Point;
    constructor(scene?: Phaser.Scene, type?: number);
    createDisplayObject(): void;
    get container(): Phaser.GameObjects.Container;
    set container(value: Phaser.GameObjects.Container);
    dispose(): void;
    get displayListContainer(): Phaser.GameObjects.Container;
    realAddChildDisplayObject(child: GObject, index?: number): void;
    addChild(child: GObject): GObject;
    addChildAt(child: GObject, index: number): GObject;
    private getInsertPosForSortingChild;
    removeChild(child: GObject, dispose?: boolean): Promise<GObject>;
    removeChildAt(index: number, dispose?: boolean): Promise<GObject>;
    removeChildren(beginIndex?: number, endIndex?: number, dispose?: boolean): void;
    getChildAt(index: number): GObject;
    getChild(name: string): GObject;
    getChildByPath(path: String): GObject;
    getVisibleChild(name: string): GObject;
    getChildInGroup(name: string, group: GGroup): GObject;
    getChildById(id: string): GObject;
    getChildIndex(child: GObject): number;
    setChildIndex(child: GObject, index: number): void;
    setChildIndexBefore(child: GObject, index: number): number;
    protected _setChildIndex(child: GObject, oldIndex: number, index: number): number;
    swapChildren(child1: GObject, child2: GObject): void;
    swapChildrenAt(index1: number, index2: number): void;
    get numChildren(): number;
    isAncestorOf(child: GObject): boolean;
    addController(controller: Controller): void;
    getControllerAt(index: number): Controller;
    getController(name: string): Controller;
    removeController(c: Controller): void;
    get controllers(): Controller[];
    childStateChanged(child: GObject): void;
    protected buildNativeDisplayList(): void;
    applyController(c: Controller): void;
    applyAllControllers(): void;
    adjustRadioGroupDepth(obj: GObject, c: Controller): void;
    getTransitionAt(index: number): Transition;
    getTransition(transName: string): Transition;
    isChildInView(child: GObject): boolean;
    getFirstChildInView(): number;
    get scrollPane(): ScrollPane;
    get opaque(): boolean;
    set opaque(value: boolean);
    get margin(): Margin;
    set margin(value: Margin);
    get childrenRenderOrder(): number;
    set childrenRenderOrder(value: number);
    get apexIndex(): number;
    set apexIndex(value: number);
    get mask(): Graphics;
    set mask(value: Graphics);
    setMask(value: any, reversed: boolean): void;
    setExtenralScale(sx: number, sy: number, force?: boolean): void;
    get baseUserData(): string;
    protected updateHitArea(): void;
    protected updateMask(): void;
    protected setupScroll(buffer: ByteBuffer): Promise<void>;
    protected setupOverflow(overflow: number): void;
    protected handleSizeChanged(): void;
    protected handleGrayedChanged(): void;
    handleControllerChanged(c: Controller): void;
    setBoundsChangedFlag(): void;
    protected __render(): void;
    ensureBoundsCorrect(): void;
    protected updateBounds(): void;
    setBounds(ax: number, ay: number, aw: number, ah: number): void;
    get viewWidth(): number;
    set viewWidth(value: number);
    get viewHeight(): number;
    set viewHeight(value: number);
    getSnappingPosition(xValue: number, yValue: number, result?: Phaser.Geom.Point): Phaser.Geom.Point;
    /**
     * dir正数表示右移或者下移，负数表示左移或者上移
     */
    getSnappingPositionWithDir(xValue: number, yValue: number, xDir: number, yDir: number, result?: Phaser.Geom.Point): Phaser.Geom.Point;
    childSortingOrderChanged(child: GObject, oldValue: number, newValue: number): void;
    constructFromResource(): Promise<void>;
    constructFromResource2(objectPool: GObject[], poolIndex: number): Promise<void>;
    protected constructExtension(buffer: ByteBuffer): Promise<void>;
    protected onConstruct(): void;
    protected constructFromXML(xml: Object): void;
    setup_afterAdd(buffer: ByteBuffer, beginPos: number): void;
    checkMask(): void;
    setXY(xv: number, yv: number, force?: boolean): void;
    protected handleScaleChanged(): void;
    protected ___added(): void;
    protected ___removed(): void;
}
