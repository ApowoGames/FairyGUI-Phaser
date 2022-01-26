import { InputManager } from "./input/InputManager";
import { ToolSet } from "./utils/ToolSet";
import { GObject } from "./GObject";
import { GGraph } from "./GGraph";
import { UIStage, UIStageOptions } from "./display/UIStage";
import { GComponent } from "./GComponent";
import { DisplayObjectEvent } from "./event/DisplayObjectEvent";
import { UIConfig } from "./UIConfig";
import { UIPackage } from "./UIPackage";
import { InteractiveEvent, ObjectType, PopupDirection, RelationType, Window } from ".";
import { Utils } from "./utils/Utils";
import { TextureManager } from "./texture/TextureManager";
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

const roundHalf = num => Math.round(num * 2) / 2

/**
 * gui根对象（逻辑对象）
 */
export class GRoot extends GComponent {

    private static _inst: GRoot;
    public static contentDprLevel: number = 0;
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
    private _inputManager: InputManager;
    private _textureManager: TextureManager;
    constructor() {
        super();
        this._popupStack = [];
        this._justClosedPopups = [];
        this._inputManager = new InputManager();
        this._textureManager = new TextureManager();
    }

    public get emitter(): Phaser.Events.EventEmitter {
        return this._uiStage;
    }

    public static get inst(): GRoot {
        if (GRoot._inst == null)
            GRoot._inst = new GRoot();
        return GRoot._inst;
    }

    public get input(): InputManager {
        return this._inputManager;
    }

    public get textureManager(): TextureManager {
        return this._textureManager;
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
    public attachTo(scene: Phaser.Scene, stageOptions?: any): void {
        this._scene = scene;
        this._inputManager.setScene(scene);
        Utils.FPSTarget = this._scene.game.config.fps.target || Utils.FPSTarget;
        //this.createDisplayObject();
        // todo deal stageoptions
        if (this._uiStage) {
            this.removeListen();
            // this._uiStage.removeChild(this._container, UISceneDisplay.LAYER_ROOT);
            this._uiStage.destroy();
        }
        this._stageOptions = stageOptions;
        // let con = this._stageOptions.container;
        // if (!con) {
        //     con = this.scene.add.container(this._stageOptions.x, this._stageOptions.y);
        //     con.setSize(this._stageOptions.width, this._stageOptions.height);
        //     // con.setInteractive(new Phaser.Geom.Rectangle(con.x, con.y, this._width, this._height), Phaser.Geom.Rectangle.Contains);
        // }
        this._uiStage = new UIStage(scene);
        (<any>this._scene).stage = this._uiStage;
        this._width = stageOptions.width;
        this._height = stageOptions.height;

        if (!this._stageOptions.desginWidth)
            this._stageOptions.desginWidth = this._width > this._height ? this._uiStage.stageOption.desginHeight : this._uiStage.stageOption.desginWidth;
        if (!this._stageOptions.desginHeight)
            this._stageOptions.desginHeight = this._height > this._width ? this._uiStage.stageOption.desginWidth : this._uiStage.stageOption.desginHeight;


        GRoot.inst.updateContentScaleLevel();
        GRoot.inst.updateContentDprLevel();
        // 初始化场景
        this.createDisplayObject();
        this.addListen();
    }

    public addToStage(child: Phaser.GameObjects.GameObject, type: number = 0, index: number = -1) {
        if (!this._uiStage) return;
        this._uiStage.addChild(child, type, index);
    }

    public removeFromStage(child: Phaser.GameObjects.GameObject) {
        if (!this._uiStage) return;
        this._uiStage.removeChild(child);
    }

    public getResUrl(key: string): string {
        return this._stageOptions.res + key;
    }

    public getResUIUrl(key: string): string {
        return this._stageOptions.resUI + key;
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
        this._uiStage.nativeStage.on(InteractiveEvent.POINTER_DOWN, this.onStageDown, this);
        this._uiStage.nativeStage.on(InteractiveEvent.POINTER_UP, this.onStageUp, this);
        this._uiStage.nativeStage.on(InteractiveEvent.POINTER_MOVE, this.onStageMove, this);
    }

    public removeListen() {
        this._uiStage.off(DisplayObjectEvent.SIZE_CHANGED, this.$winResize, this);
        this._uiStage.nativeStage.off(InteractiveEvent.POINTER_DOWN, this.onStageDown, this);
        this._uiStage.nativeStage.off(InteractiveEvent.POINTER_UP, this.onStageUp, this);
        this._uiStage.nativeStage.off(InteractiveEvent.POINTER_MOVE, this.onStageMove, this);
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

            UIPackage.createObjectFromURL(resourceURL).then((obj) => {
                this._defaultTooltipWin = obj;
                this._defaultTooltipWin.text = msg;
                this.showTooltipsWin(this._defaultTooltipWin);
            });
        } else {
            this._defaultTooltipWin.text = msg;
            this.showTooltipsWin(this._defaultTooltipWin);
        }
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

    /**
     * type用于获取传入该层级的容器或容器
     * @param child 
     * @param type 
     * @returns 
     */
    public addChild(child: GObject, type?: any): GObject {
        if (typeof (type) === "number") this._container = this._uiStage.getContainer(type);
        else if (typeof (type) === "undefined") this._container = this._uiStage.getContainer(0);
        else this._container = type;
        this.addChildAt(child, this._children.length);
        return child;
    }

    public showWindow(win: Window): void {
        this.addChild(win, UISceneDisplay.LAYER_TOOLTIPS);
        win.requestFocus();

        if (win.x > this.width)
            win.x = this.width - win.width;
        else if (win.x + win.width < 0)
            win.x = 0;

        if (win.y > this.height)
            win.y = this.height - win.height;
        else if (win.y + win.height < 0)
            win.y = 0;

        // this.adjustModalLayer();
    }

    public hideWindow(win: Window): void {
        win.hide();
    }

    public createDisplayObject() {
        // this._displayObject = this._uiStage.displayObject;
        // this._displayObject["$owner"] = this;

        // this._modalLayer = new GGraph(this.scene, ObjectType.Graph);
        // this._modalLayer.setSize(this.width, this.height);
        // this._modalLayer.drawRect(0, null, UIConfig.modalLayerColor);
        // this._modalLayer.addRelation(this, RelationType.Size);
        // this.addToStage(this._modalLayer.displayObject);
        // this._displayObject = this.scene.make.container(undefined, false);
        // this._displayObject.setInteractive(new Phaser.Geom.Rectangle(0, 0, this._width, this._height), Phaser.Geom.Rectangle.Contains);
        // this._displayObject["$owner"] = this;
        // this._displayObject.setSize(this._width, this._height);
        // this._container = this._displayObject;
        // const g = this.scene.make.graphics(undefined, false);
        // g.fillStyle(0xffcc00, 1);
        // g.fillRect(0, 0, this._width, this._height);
        // this._container.add(g);
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
        // this._container.setSize(stage.stageWidth, stage.stageHeight);
        this.updateContentScaleLevel();
        this.updateContentDprLevel();
    }

    private updateContentScaleLevel() {
        const widthScale = this._width / this._stageOptions.desginWidth;
        const heightScale = this._height / this._stageOptions.desginHeight;
        GRoot.contentScaleLevel = widthScale < heightScale ? widthScale : heightScale;

        const camera = this._scene.cameras.main;
        // camera.setScroll(-(this._width - this._stageOptions.desginWidth) / 2, -(this._height - this._stageOptions.desginHeight) / 2)
    }

    private updateContentDprLevel(): void {
        const dpr = this._stageOptions.dpr;
        if (dpr >= 3.5)
            GRoot.contentDprLevel = 3; //x4
        else if (dpr >= 2.5)
            GRoot.contentDprLevel = 2; //x3
        else if (dpr >= 1.5)
            GRoot.contentDprLevel = 1; //x2
        else
            GRoot.contentDprLevel = 0;
    }

    public showPopup(popup: GObject, target?: GObject, dir?: PopupDirection | boolean): void {
        if (this._popupStack.length > 0) {
            var k: number = this._popupStack.indexOf(popup);
            if (k != -1) {
                for (var i: number = this._popupStack.length - 1; i >= k; i--)
                    this.removeChild(this._popupStack.pop());
            }
        }
        this._popupStack.push(popup);

        if (target) {
            var p: GObject = target;
            while (p) {
                if (p.parent == this) {
                    if (popup.sortingOrder < p.sortingOrder) {
                        popup.sortingOrder = p.sortingOrder;
                    }
                    break;
                }
                p = p.parent;
            }
        }

        this.addChild(popup, UISceneDisplay.LAYER_TOOLTIPS);
        this.adjustModalLayer();

        var pos: Phaser.Geom.Point;
        var sizeW: number = 0, sizeH: number = 0;
        if (target) {
            pos = target.localToGlobal();
            sizeW = target.width;
            sizeH = target.height;
        }
        else {
            // console.log("show 100,100");
            pos = this.globalToLocal(this._width >> 1, this._height >> 1);
        }
        var xx: number, yy: number;
        xx = pos.x;
        if (xx + popup.width > this.width)
            xx = xx + sizeW - popup.width;
        yy = pos.y + sizeH;
        if (((dir === undefined || dir === PopupDirection.Auto) && pos.y + popup.height > this.height)
            || dir === false || dir === PopupDirection.Up) {
            yy = pos.y - popup.height - 1;
        }

        popup.x = xx;
        popup.y = yy;

    }

    public hidePopup(popup?: GObject): void {
        if (popup) {
            var k: number = this._popupStack.indexOf(popup);
            if (k != -1) {
                for (var i: number = this._popupStack.length - 1; i >= k; i--)
                    this.closePopup(this._popupStack.pop());
            }
        }
        else {
            var cnt: number = this._popupStack.length;
            for (i = cnt - 1; i >= 0; i--)
                this.closePopup(this._popupStack[i]);
            this._popupStack.length = 0;
        }
    }

    public closePopup(target: GObject): void {
        if (target.parent) {
            if (target instanceof Window)
                target.hide();
            else
                this.removeChild(target);
        }
    }

    public hideWindowImmediately(target: GObject) {
        if (target.parent) {
            this.removeChild(target);
        }
    }

    public checkPopups(clickTarget: Phaser.GameObjects.Container): void {
        if (this._checkPopups)
            return;

        this._checkPopups = true;
        this._justClosedPopups.length = 0;
        if (this._popupStack.length > 0) {
            var mc = clickTarget;
            while (mc.parentContainer && mc) {
                if (mc["$owner"]) {
                    var pindex: number = this._popupStack.indexOf(mc["$owner"]);
                    if (pindex != -1) {
                        for (var i: number = this._popupStack.length - 1; i > pindex; i--) {
                            var popup: GObject = this._popupStack.pop();
                            this.closePopup(popup);
                            this._justClosedPopups.push(popup);
                        }
                        return;
                    }
                }
                mc = mc.parentContainer;
            }

            var cnt: number = this._popupStack.length;
            for (i = cnt - 1; i >= 0; i--) {
                popup = this._popupStack[i];
                this.closePopup(popup);
                this._justClosedPopups.push(popup);
            }
            this._popupStack.length = 0;
        }
    }

    public togglePopup(popup: GObject, target?: GObject, dir?: PopupDirection | boolean): void {
        if (this._justClosedPopups.indexOf(popup) != -1)
            return;

        this.showPopup(popup, target, dir);
    }

    private adjustModalLayer(): void {
        var cnt: number = this.numChildren;

        if (this._modalWaitPane != null && this._modalWaitPane.parent != null)
            this.setChildIndex(this._modalWaitPane, cnt - 1);

        if (!this._modalLayer) return;
        for (var i: number = cnt - 1; i >= 0; i--) {
            var g: GObject = this.getChildAt(i);
            if ((g instanceof Window) && g.modal) {
                if (this._modalLayer.parent == null)
                    this.addChildAt(this._modalLayer, i);
                else
                    this.setChildIndexBefore(this._modalLayer, i);
                return;
            }
        }

        if (this._modalLayer.parent)
            this.removeChild(this._modalLayer);
    }
}
