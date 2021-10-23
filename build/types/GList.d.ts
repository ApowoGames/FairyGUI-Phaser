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
    private _layout;
    private _lineCount;
    private _columnCount;
    private _lineGap;
    private _columnGap;
    private _defaultItem;
    private _autoResizeItem;
    private _selectionMode;
    private _align;
    private _verticalAlign;
    private _selectionController?;
    private _lastSelectedIndex;
    private _pool;
    private _virtual?;
    private _loop?;
    private _numItems;
    private _realNumItems;
    private _firstIndex;
    private _curLineItemCount;
    private _curLineItemCount2;
    private _itemSize?;
    private _virtualListChanged;
    private _virtualItems?;
    private _eventLocked?;
    private itemInfoVer;
    private _timeDelta;
    private _refreshListEvent;
    private _refreshListTime;
    constructor(scene?: Phaser.Scene);
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
    private clearSelectionExcept;
    selectAll(): void;
    selectNone(): void;
    selectReverse(): void;
    handleArrowKey(dir: number): void;
    private __clickItem;
    protected dispatchItemEvent(item: GObject, evt: any): void;
    private setSelectionOnEvent;
    resizeToFit(itemCount?: number, minSize?: number): void;
    getMaxItemWidth(): number;
    protected handleSizeChanged(): void;
    handleControllerChanged(c: Controller): void;
    private updateSelectionController;
    private shouldSnapToNext;
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
    private _setVirtual;
    /**
     * Set the list item count.
     * If the list instanceof not virtual, specified number of items will be created.
     * If the list instanceof virtual, only items in view will be created.
     */
    get numItems(): number;
    set numItems(value: number);
    refreshVirtualList(): void;
    private checkVirtualList;
    private setVirtualListChangedFlag;
    private _refreshVirtualList;
    private __scrolled;
    private getIndexOnPos1;
    private getIndexOnPos2;
    private getIndexOnPos3;
    private handleScroll;
    private handleScroll1;
    setBoundsChangedFlag(): void;
    private handleScroll2;
    private handleScroll3;
    private handleArchOrder1;
    private handleArchOrder2;
    private handleAlign;
    protected updateBounds(): void;
    setup_beforeAdd(buffer: ByteBuffer, beginPos: number): void;
    protected readItems(buffer: ByteBuffer): void;
    protected setupItem(buffer: ByteBuffer, obj: GObject): void;
    setup_afterAdd(buffer: ByteBuffer, beginPos: number): void;
}
