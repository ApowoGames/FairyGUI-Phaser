import { ByteBuffer } from './utils/ByteBuffer';
import { GObjectPool } from './GObjectPool';
import { Controller } from './Controller';
import { GComponent } from "./GComponent";
import { GObject } from "./GObject";
import { Handler } from './utils/Handler';
export declare class GList extends GComponent {
    /**
     * this.itemRenderer(number index, GObject item);
     */
    itemRenderer: Handler;
    /**
     * this.itemProvider(index:number):string;
     */
    itemProvider: Handler;
    scrollItemToViewOnClick: boolean;
    foldInvisibleItems: boolean;
    protected _layout: number;
    protected _lineCount: number;
    protected _columnCount: number;
    protected _lineGap: number;
    protected _columnGap: number;
    protected _defaultItem: string;
    protected _autoResizeItem: boolean;
    protected _selectionMode: number;
    protected _align: string;
    protected _verticalAlign: string;
    protected _selectionController?: Controller;
    protected _lastSelectedIndex: number;
    protected _pool: GObjectPool;
    protected _virtual?: boolean;
    protected _loop?: boolean;
    protected _numItems: number;
    protected _realNumItems: number;
    protected _firstIndex: number;
    protected _curLineItemCount: number;
    protected _curLineItemCount2: number;
    protected _itemSize?: Phaser.Geom.Point;
    protected _virtualListChanged: number;
    protected _virtualItems?: Array<ItemInfo>;
    protected _eventLocked?: boolean;
    protected itemInfoVer: number;
    protected _timeDelta: number;
    protected _refreshListEvent: any;
    protected _refreshListTime: Phaser.Time.TimerEvent;
    protected shiftKey: boolean;
    protected ctrlKey: boolean;
    constructor(scene: Phaser.Scene, type: any);
    private __keyDown;
    private __keyUp;
    dispose(): void;
    get layout(): number;
    set layout(value: number);
    get lineCount(): number;
    set lineCount(value: number);
    get columnCount(): number;
    set columnCount(value: number);
    get lineGap(): number;
    set lineGap(value: number);
    get columnGap(): number;
    set columnGap(value: number);
    get align(): string;
    set align(value: string);
    get verticalAlign(): string;
    set verticalAlign(value: string);
    get virtualItemSize(): Phaser.Geom.Point;
    set virtualItemSize(value: Phaser.Geom.Point);
    get defaultItem(): string;
    set defaultItem(val: string);
    get autoResizeItem(): boolean;
    set autoResizeItem(value: boolean);
    get selectionMode(): number;
    set selectionMode(value: number);
    get selectionController(): Controller;
    set selectionController(value: Controller);
    get itemPool(): GObjectPool;
    getFromPool(url?: string): Promise<GObject>;
    returnToPool(obj: GObject): void;
    addChildAt(child: GObject, index: number): GObject;
    addItem(url?: string): Promise<GObject>;
    addItemFromPool(url?: string): Promise<GObject>;
    removeChildAt(index: number, dispose?: boolean): Promise<GObject>;
    removeChildToPoolAt(index: number): void;
    removeChildToPool(child: GObject): void;
    removeChildrenToPool(beginIndex?: number, endIndex?: number): void;
    get selectedIndex(): number;
    set selectedIndex(value: number);
    getSelection(result?: number[]): number[];
    addSelection(index: number, scrollItToView?: boolean): void;
    removeSelection(index: number): void;
    clearSelection(): void;
    protected clearSelectionExcept(g: GObject): void;
    selectAll(): void;
    selectNone(): void;
    selectReverse(): void;
    handleArrowKey(dir: number): void;
    protected __clickItem(pointer: Phaser.Input.Pointer, gameObject: Phaser.GameObjects.GameObject): void;
    protected dispatchItemEvent(item: GObject, evt: any): void;
    protected setSelectionOnEvent(item: GObject, evt: any): void;
    resizeToFit(itemCount?: number, minSize?: number): void;
    getMaxItemWidth(): number;
    protected handleSizeChanged(): void;
    handleControllerChanged(c: Controller): void;
    protected updateSelectionController(index: number): void;
    protected shouldSnapToNext(dir: number, delta: number, size: number): boolean;
    getSnappingPositionWithDir(xValue: number, yValue: number, xDir: number, yDir: number, result?: Phaser.Geom.Point): Phaser.Geom.Point;
    scrollToView(index: number, ani?: boolean, setFirst?: boolean): void;
    getFirstChildInView(): number;
    childIndexToItemIndex(index: number): number;
    itemIndexToChildIndex(index: number): number;
    setVirtual(): void;
    /**
     * Set the list to be virtual list, and has loop behavior.
     */
    setVirtualAndLoop(): void;
    protected _setVirtual(loop: boolean): void;
    /**
     * Set the list item count.
     * If the list instanceof not virtual, specified number of items will be created.
     * If the list instanceof virtual, only items in view will be created.
     */
    get numItems(): number;
    set numItems(value: number);
    refreshVirtualList(): void;
    protected checkVirtualList(): void;
    protected setVirtualListChangedFlag(layoutChanged?: boolean): void;
    protected _refreshVirtualList(): void;
    protected __scrolled(evt: any): void;
    protected getIndexOnPos1(forceUpdate: boolean): number;
    protected getIndexOnPos2(forceUpdate: boolean): number;
    protected getIndexOnPos3(forceUpdate: boolean): number;
    protected handleScroll(forceUpdate: boolean): void;
    protected handleScroll1(forceUpdate: boolean): Promise<boolean>;
    setBoundsChangedFlag(): void;
    protected handleScroll2(forceUpdate: boolean): Promise<boolean>;
    protected handleScroll3(forceUpdate: boolean): Promise<void>;
    protected handleArchOrder1(): void;
    protected handleArchOrder2(): void;
    protected handleAlign(contentWidth: number, contentHeight: number): void;
    protected updateBounds(): void;
    setup_beforeAdd(buffer: ByteBuffer, beginPos: number): Promise<void>;
    protected readItems(buffer: ByteBuffer): Promise<void>;
    protected setupItem(buffer: ByteBuffer, obj: GObject): void;
    setup_afterAdd(buffer: ByteBuffer, beginPos: number): void;
}
interface ItemInfo {
    width: number;
    height: number;
    obj?: GObject;
    updateFlag: number;
    selected?: boolean;
}
export {};
