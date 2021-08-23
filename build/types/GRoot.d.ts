import { GObject } from './GObject';
import { UIStageOptions } from './display/UIStage';
import { GComponent } from "./GComponent";
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
    get displayObject(): Phaser.GameObjects.Container;
    static get inst(): GRoot;
    /**
    * the current mouse/pointer data
    */
    static get globalMouseStatus(): GRootMouseStatus;
    get focus(): GObject;
    set focus(value: GObject);
    private setFocus;
    /**
     * 游戏/编辑器启动ui入口,注入uiScene
     * @param scene
     * @param stageOptions
     */
    attachTo(scene: Phaser.Scene, stageOptions?: UIStageOptions): void;
    addListen(): void;
    removeListen(): void;
    addTimeEvent(timeEvent: Phaser.Time.TimerEvent): Phaser.Time.TimerEvent;
    removeTimeEvent(timeEvent: Phaser.Time.TimerEvent): void;
    playOneShotSound(url: string, volumeScale?: number): void;
    showTooltips(msg: string): void;
    showTooltipsWin(tooltipWin: GObject, xx?: number, yy?: number): void;
    createDisplayObject(): void;
    private onStageDown;
    private onStageUp;
    private onStageMove;
    private $winResize;
    private updateContentScaleLevel;
}
