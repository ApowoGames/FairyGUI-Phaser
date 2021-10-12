import { GObject } from './GObject';
import { ByteBuffer } from './utils/ByteBuffer';
import { Controller } from './Controller';
import { GScrollBar } from './GScrollBar';
import { GComponent } from "./GComponent";
export declare class ScrollPane {
    private _owner;
    private _container;
    private _mask;
    private _maskContainer;
    private _alignContainer?;
    private _scrollType;
    private _scrollStep;
    private _mouseWheelStep;
    private _decelerationRate;
    private _scrollBarMargin;
    private _bouncebackEffect;
    private _touchEffect;
    private _scrollBarDisplayAuto?;
    private _vScrollNone;
    private _hScrollNone;
    private _needRefresh;
    private _refreshBarAxis;
    private _displayOnLeft?;
    private _snapToItem?;
    _displayInDemand?: boolean;
    private _mouseWheelEnabled?;
    private _pageMode?;
    private _inertiaDisabled?;
    private _floating?;
    private _dontClipMargin?;
    private maskScrollRect;
    private _xPos;
    private _yPos;
    private _viewSize;
    private _contentSize;
    private _overlapSize;
    private _pageSize;
    private _containerPos;
    private _beginTouchPos;
    private _lastTouchPos;
    private _lastTouchGlobalPos;
    private _velocity;
    private _velocityScale;
    private _lastMoveTime;
    private _isHoldAreaDone;
    private _aniFlag;
    _loop: number;
    private _headerLockedSize;
    private _footerLockedSize;
    private _refreshEventDispatching;
    private _dragged;
    private _tweening;
    private _tweenTime;
    private _tweenDuration;
    private _tweenStart;
    private _tweenChange;
    private _pageController?;
    private _hzScrollBar?;
    private _vtScrollBar?;
    private _header?;
    private _footer?;
    private _tweenUpdateTimeEvent;
    private _tweenUpdateTime;
    private _refreshTimeEvent;
    private _refreshTime;
    private _timeDelta;
    static draggingPane: ScrollPane;
    private mRectangle;
    constructor(owner: GComponent);
    setup(buffer: ByteBuffer): void;
    dispose(): void;
    get owner(): GComponent;
    get hzScrollBar(): GScrollBar;
    get vtScrollBar(): GScrollBar;
    get header(): GComponent;
    get footer(): GComponent;
    get bouncebackEffect(): boolean;
    set bouncebackEffect(sc: boolean);
    get touchEffect(): boolean;
    set touchEffect(sc: boolean);
    set scrollStep(val: number);
    get scrollStep(): number;
    get snapToItem(): boolean;
    set snapToItem(value: boolean);
    get mouseWheelEnabled(): boolean;
    set mouseWheelEnabled(value: boolean);
    get decelerationRate(): number;
    set decelerationRate(value: number);
    get isDragged(): boolean;
    get percX(): number;
    set percX(value: number);
    setPercX(value: number, ani?: boolean): void;
    get percY(): number;
    set percY(value: number);
    setPercY(value: number, ani?: boolean): void;
    get posX(): number;
    set posX(value: number);
    setPosX(value: number, ani?: boolean): void;
    get posY(): number;
    set posY(value: number);
    setPosY(value: number, ani?: boolean): void;
    get contentWidth(): number;
    get contentHeight(): number;
    get viewWidth(): number;
    set viewWidth(value: number);
    get viewHeight(): number;
    set viewHeight(value: number);
    get currentPageX(): number;
    set currentPageX(value: number);
    get currentPageY(): number;
    set currentPageY(value: number);
    setCurrentPageX(value: number, ani?: boolean): void;
    setCurrentPageY(value: number, ani?: boolean): void;
    get isBottomMost(): boolean;
    get isRightMost(): boolean;
    get pageController(): Controller;
    set pageController(value: Controller);
    get scrollingPosX(): number;
    get scrollingPosY(): number;
    scrollTop(ani?: boolean): void;
    scrollBottom(ani?: boolean): void;
    scrollUp(ratio?: number, ani?: boolean): void;
    scrollDown(ratio?: number, ani?: boolean): void;
    scrollLeft(ratio?: number, ani?: boolean): void;
    scrollRight(ratio?: number, ani?: boolean): void;
    scrollToView(target: Phaser.Geom.Rectangle | GObject, ani?: boolean, setFirst?: boolean): void;
    isChildInView(obj: GObject): boolean;
    cancelDragging(): void;
    lockHeader(size: number): void;
    lockFooter(size: number): void;
    onOwnerSizeChanged(): void;
    handleControllerChanged(c: Controller): void;
    private updatePageController;
    adjustMaskContainer(): void;
    setSize(aWidth: number, aHeight: number): void;
    setContentSize(aWidth: number, aHeight: number): void;
    changeContentSizeOnScrolling(deltaWidth: number, deltaHeight: number, deltaPosX: number, deltaPosY: number): void;
    private handleSizeChanged;
    private posChanged;
    private refresh;
    private refresh2;
    private __mouseDown;
    private checkInBounds;
    private __mouseMove;
    private __mouseUp;
    private __click;
    private __mouseWheel;
    private updateScrollBarPos;
    updateScrollBarVisible(): void;
    private updateScrollBarVisible2;
    private __barTweenComplete;
    private getLoopPartSize;
    private loopCheckingCurrent;
    private loopCheckingTarget;
    private loopCheckingTarget2;
    private loopCheckingNewPos;
    private alignPosition;
    private alignByPage;
    private updateTargetAndDuration;
    private updateTargetAndDuration2;
    private fixDuration;
    private startTween;
    private killTween;
    private checkRefreshBar;
    private tweenUpdate;
    private runTween;
}
