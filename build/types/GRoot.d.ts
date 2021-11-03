import { GObject } from './GObject';
import { GComponent } from "./GComponent";
import { PopupDirection, Window } from '.';
export declare class GRootMouseStatus {
    touchDown: boolean;
    mouseX: number;
    mouseY: number;
}
export declare enum UISceneDisplay {
    LAYER_ROOT = 0,
    LAYER_UI = 1,
    LAYER_DIALOG = 2,
    LAYER_TOOLTIPS = 3,
    LAYER_MASK = 4
}
/**
 * gui根对象（逻辑对象）
 */
export declare class GRoot extends GComponent {
    private static _inst;
    static contentScaleLevel: number;
    private static _gmStatus;
    private _uiStage;
    private _modalLayer;
    private _popupStack;
    private _justClosedPopups;
    private _modalWaitPane;
    private _tooltipWin;
    private _defaultTooltipWin;
    private _checkPopups;
    constructor();
    get emitter(): Phaser.Events.EventEmitter;
    static get inst(): GRoot;
    /**
    * the current mouse/pointer data
    */
    static get globalMouseStatus(): GRootMouseStatus;
    get focus(): GObject;
    set focus(value: GObject);
    private setFocus;
    private _stageOptions;
    /**
     * 游戏/编辑器启动ui入口,注入uiScene
     * @param scene
     * @param stageOptions
     */
    attachTo(scene: Phaser.Scene, stageOptions?: any): void;
    addToStage(child: Phaser.GameObjects.GameObject, type?: UISceneDisplay, index?: number): void;
    removeFromStage(child: Phaser.GameObjects.GameObject, type: UISceneDisplay): void;
    getResUrl(key: string): string;
    getResUIUrl(key: string): string;
    getOsdRes(value: string): string;
    addListen(): void;
    removeListen(): void;
    addTimeEvent(timeEvent: Phaser.Time.TimerEvent): Phaser.Time.TimerEvent;
    removeTimeEvent(timeEvent: Phaser.Time.TimerEvent): void;
    playOneShotSound(url: string, volumeScale?: number): void;
    showTooltips(msg: string): void;
    showTooltipsWin(tooltipWin: GObject, xx?: number, yy?: number): void;
    showWindow(win: Window): void;
    hideWindow(win: Window): void;
    createDisplayObject(): void;
    private onStageDown;
    private onStageUp;
    private onStageMove;
    private $winResize;
    private updateContentScaleLevel;
    showPopup(popup: GObject, target?: GObject, dir?: PopupDirection | boolean): void;
    hidePopup(popup?: GObject): void;
    private closePopup;
    checkPopups(clickTarget: Phaser.GameObjects.Container): void;
    togglePopup(popup: GObject, target?: GObject, dir?: PopupDirection | boolean): void;
    private adjustModalLayer;
}
