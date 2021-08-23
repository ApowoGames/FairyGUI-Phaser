import { ToolSet } from './utils/ToolSet';
import { GObject } from './GObject';
import { GGraph } from './GGraph';
import { UIStage, UIStageOptions } from './display/UIStage';
import { GComponent } from "./GComponent";
import { DisplayObjectEvent } from './event/DisplayObjectEvent';
import { UIConfig } from './UIConfig';
import { UIPackage } from './UIPackage';

export class GRootMouseStatus {
    public touchDown: boolean = false;
    public mouseX: number = 0;
    public mouseY: number = 0;
}

export enum UISceneDisplay {
    LAYER_ROOT,
    LAYER_UI,
    LAYER_DIALOG,
    LAYER_TOOLTIPS,
    LAYER_MASK
}

/**
 * gui根对象（逻辑对象）
 */
export class GRoot extends GComponent {

    private static _inst: GRoot;
    public static contentScaleLevel: number = 0;
    private static _gmStatus = new GRootMouseStatus();
    private _uiStage: UIStage;
    private _modalLayer: GGraph;
    private _popupStack: GObject[];
    private _justClosedPopups: GObject[];
    private _modalWaitPane: GObject;
    private _tooltipWin: GObject;
    private _defaultTooltipWin: GObject;
    private _checkPopups: boolean;
    constructor() {
        super();
    }

    public get displayObject(): Phaser.GameObjects.Container {
        return this._container;
    }

    public static get inst(): GRoot {
        if (GRoot._inst == null)
            GRoot._inst = new GRoot();
        return GRoot._inst;
    }

    /**
    * the current mouse/pointer data
    */
    public static get globalMouseStatus(): GRootMouseStatus {
        return GRoot._gmStatus;
    }

    public get focus(): GObject {
        return null;
    }

    public set focus(value: GObject) {
        this.setFocus(value);
    }

    private setFocus(value: GObject): void {
    }

    private _stageOptions: UIStageOptions;

    /**
     * 游戏/编辑器启动ui入口,注入uiScene
     * @param scene 
     * @param stageOptions 
     */
    public attachTo(scene: Phaser.Scene, stageOptions?: UIStageOptions): void {

        this._scene = scene;
        this.createDisplayObject();
        // todo deal stageoptions
        if (this._uiStage) {
            this.removeListen();
            this._uiStage.removeChild(this._container, UISceneDisplay.LAYER_ROOT);
            this._uiStage.destroy();
        }

        this._stageOptions = stageOptions;

        this._uiStage = new UIStage(scene);
        this._uiStage.addChild(this._container, UISceneDisplay.LAYER_ROOT);
        this.addListen();
    }

    public getResUrl(key: string): string {
        return this._stageOptions.res + key;
    }

    public getResUIUrl(key: string): string {
        return this._stageOptions.resUI + KeyboardEvent;
    }

    public getOsdRes(value: string): string {
        if (this._stageOptions.osd) {
            return this._stageOptions.osd + value;
        }
        return value;
    }

    public addListen() {
        this.removeListen();
        this._uiStage.on(DisplayObjectEvent.SIZE_CHANGED, this.$winResize, this);
        this._uiStage.nativeStage.on("pointerdown", this.onStageDown, this);
        this._uiStage.nativeStage.on("pointerup", this.onStageUp, this);
        this._uiStage.nativeStage.on("pointermove", this.onStageMove, this);
    }

    public removeListen() {
        this._uiStage.off(DisplayObjectEvent.SIZE_CHANGED, this.$winResize, this);
        this._uiStage.nativeStage.off("pointerdown", this.onStageDown, this);
        this._uiStage.nativeStage.off("pointerup", this.onStageUp, this);
        this._uiStage.nativeStage.off("pointermove", this.onStageMove, this);
    }

    public addTimeEvent(timeEvent: Phaser.Time.TimerEvent): Phaser.Time.TimerEvent {
        return this.scene.time.addEvent(timeEvent);
    }

    public removeTimeEvent(timeEvent: Phaser.Time.TimerEvent) {
        if (timeEvent) timeEvent.remove();
    }

    public playOneShotSound(url: string, volumeScale?: number): void {
        if (ToolSet.startsWith(url, "ui://"))
            return;

        this.scene.sound.play(url);
    }

    public showTooltips(msg: string): void {
        if (this._defaultTooltipWin == null) {
            var resourceURL: string = UIConfig.tooltipsWin;
            if (!resourceURL) {
                console.warn("UIConfig.tooltipsWin not defined");
                return;
            }

            this._defaultTooltipWin = UIPackage.createObjectFromURL(resourceURL);
        }

        this._defaultTooltipWin.text = msg;
        this.showTooltipsWin(this._defaultTooltipWin);
    }

    public showTooltipsWin(tooltipWin: GObject, xx?: number, yy?: number): void {
        // this.hideTooltips();

        // this._tooltipWin = tooltipWin;
        // if (xx == null || yy == null) {
        //     xx = Stage.touchPos.x + 10;
        //     yy = Stage.touchPos.y + 20;
        // }
        // var pt: Vector2 = this.globalToLocal(xx, yy);
        // xx = pt.x;
        // yy = pt.y;

        // if (xx + this._tooltipWin.width > this.width) {
        //     xx = xx - this._tooltipWin.width - 1;
        //     if (xx < 0)
        //         xx = 10;
        // }
        // if (yy + this._tooltipWin.height > this.height) {
        //     yy = yy - this._tooltipWin.height - 1;
        //     if (xx - this._tooltipWin.width - 1 > 0)
        //         xx = xx - this._tooltipWin.width - 1;
        //     if (yy < 0)
        //         yy = 10;
        // }

        // this._tooltipWin.x = xx;
        // this._tooltipWin.y = yy;
        // this.addChild(this._tooltipWin);
    }

    public createDisplayObject() {
        this._container = this._scene.add.container(0, 0);
    }

    private onStageDown(pointer: Phaser.Input.Pointer) {
        GRoot._gmStatus.mouseX = pointer.worldX;
        GRoot._gmStatus.mouseY = pointer.worldY;
        GRoot._gmStatus.touchDown = true;
    }

    private onStageUp(pointer: Phaser.Input.Pointer) {
        GRoot._gmStatus.touchDown = false;
    }

    private onStageMove(pointer: Phaser.Input.Pointer) {
        GRoot._gmStatus.mouseX = pointer.worldX;
        GRoot._gmStatus.mouseY = pointer.worldY;
    }

    private $winResize(stage: UIStage): void {
        this._container.setSize(stage.stageWidth, stage.stageHeight);
        this.updateContentScaleLevel();
    }

    private updateContentScaleLevel(): void {
        GRoot.contentScaleLevel = this._stageOptions.dpr;
        // var mat: Phaser.GameObjects.Components.TransformMatrix = <Phaser.GameObjects.Components.TransformMatrix>(<any>Laya.stage)._canvasTransform;
        // var ss: number = Math.max(mat.getScaleX(), mat.getScaleY());
        // if (ss >= 3.5)
        //     GRoot.contentScaleLevel = 3; //x4
        // else if (ss >= 2.5)
        //     GRoot.contentScaleLevel = 2; //x3
        // else if (ss >= 1.5)
        //     GRoot.contentScaleLevel = 1; //x2
        // else
        //     GRoot.contentScaleLevel = 0;
    }
}
