import { GRoot } from "..";
import { DisplayObjectEvent } from "../event/DisplayObjectEvent";
import { UISceneDisplay } from "../GRoot";
import { DOMEventManager } from "../utils/DOMEventManager";

export const enum StageOrientation {
    AUTO = "auto",
    PORTRAIT = "portrait",
    LANDSCAPE = "landscape"
}

export const enum StageScaleMode {
    NO_SCALE = "noScale",
    SHOW_ALL = "showAll",
    NO_BORDER = "noBorder",
    EXACT_FIT = "exactFit",
    FIXED_WIDTH = "fixedWidth",
    FIXED_HEIGHT = "fixedHeight",
    FIXED_AUTO = "fixedAuto"
}

export const enum StageAlign {
    LEFT,
    CENTER,
    RIGHT,
    TOP,
    MIDDLE,
    BOTTOM
}
export interface UIStageOptions {
    osd: string;
    res: string;
    resUI: string;
    dpr: number;
    scaleMode?: StageScaleMode;
    orientation?: StageOrientation;
    resolution?: number;
    designWidth: number;
    designHeight: number;
    alignV?: StageAlign,
    alignH?: StageAlign,
    fallbackWidth?: number,
    fallbackHeight?: number
    // [key: string]: string | number;
}

export class DefaultUIStageOptions implements UIStageOptions {
    public scaleMode?: StageScaleMode = StageScaleMode.SHOW_ALL;
    public orientation?: StageOrientation = StageOrientation.AUTO;
    public resolution?: number = 1;
    public designWidth: number = 800;
    public designHeight: number = 600;
    public alignV: StageAlign = StageAlign.MIDDLE;
    public alignH: StageAlign = StageAlign.CENTER;
    public fallbackWidth: number = 0;
    public fallbackHeight: number = 0;
    osd: string = "/";
    res: string = "resources/";
    resUI: string = "resources/ui";
    dpr: number = 1;
    // [key: string]: string | number;
}

type BoundingRect = {
    x: number,
    y: number,
    width: number,
    height: number
};

interface IBoundingRectCalculator {
    getRect(view: HTMLCanvasElement, fallbackWidth: number, fallbackHeight: number): BoundingRect;
}

class DefaultBoudingRectCalculator implements IBoundingRectCalculator {
    public getRect(view: HTMLCanvasElement, fallbackWidth: number, fallbackHeight: number): BoundingRect {
        let p = view.parentElement;
        if (!p)
            //this should be impossible situation unless the user forget to append the view into the DOM.
            throw new Error("Your view of Phaser are still in memory but not appended to DOM yet? it's necessary that there is a parent element to wrap your view up.");
        let rect = p.getBoundingClientRect();
        let ret: BoundingRect = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        }
        if (!rect || rect.width <= 0 || rect.height <= 0) {
            console.warn("It seems that you did not set a explicit size for the parent element of your view, now fall back to window size instead.");
            ret.width = window.innerWidth;
            ret.height = window.innerHeight;
            ret.x = 0;
            ret.y = 0;
        }
        else {
            ret.x = rect.left;
            ret.y = rect.top;
            ret.width = rect.width;
            ret.height = rect.height;
        }

        //consider the worst situation: window does not have size!!
        if (ret.width <= 0 || ret.height <= 0) {
            console.warn("fetch container size to initialize Phaser in all ways have failed, now use default size (fallbackWidth / fallbackHeight) specified in the options instead.");
            ret.width = fallbackWidth;
            ret.height = fallbackHeight;
        }

        return ret;
    }
}

export class UIStage extends Phaser.Events.EventEmitter {
    protected rootContainer: Phaser.GameObjects.Container;
    protected uiContainer: Phaser.GameObjects.Container;
    protected dialogContainer: Phaser.GameObjects.Container;
    protected tipsContainer: Phaser.GameObjects.Container;
    protected maskContainer: Phaser.GameObjects.Container;

    protected $options: UIStageOptions;
    protected $width: number = 0;
    protected $height: number = 0;
    protected $scaleX: number = 1;
    protected $scaleY: number = 1;

    protected $canvasMatrix: Phaser.GameObjects.Components.TransformMatrix = new Phaser.GameObjects.Components.TransformMatrix();

    public offsetX: number = 0;
    public offsetY: number = 0;

    private $sizeCalcer: DefaultBoudingRectCalculator = new DefaultBoudingRectCalculator();

    constructor(private scene: Phaser.Scene) {
        super();
        UIStageInst.push(this);
        this.rootContainer = this.scene.add.container(0, 0);
        this.uiContainer = this.scene.add.container(0, 0);
        this.dialogContainer = this.scene.add.container(0, 0);
        this.tipsContainer = this.scene.add.container(0, 0);
        this.maskContainer = this.scene.add.container(0, 0);
        this.rootContainer.setInteractive(new Phaser.Geom.Rectangle(0, 0, GRoot.inst.width, GRoot.inst.height), Phaser.Geom.Rectangle.Contains);
        this.scene.sys.displayList.add(this.rootContainer);
        this.scene.sys.displayList.add(this.uiContainer);
        this.scene.sys.displayList.add(this.dialogContainer);
        this.scene.sys.displayList.add(this.tipsContainer);
        this.scene.sys.displayList.add(this.maskContainer);
    }

    public get nativeStage(): Phaser.Input.InputPlugin {
        return this.scene.input;
    }

    public get stageWidth(): number {
        return this.$width;
    }

    public get stageHeight(): number {
        return this.$height;
    }

    addChild(child: Phaser.GameObjects.GameObject, type: UISceneDisplay, index: number = -1) {
        switch (type) {
            case UISceneDisplay.LAYER_ROOT:
                if (index < 0) {
                    this.rootContainer.add(child);
                } else {
                    this.rootContainer.addAt(child, index);
                }
                break;
            case UISceneDisplay.LAYER_UI:
                if (index < 0) {
                    this.uiContainer.add(child);
                } else {
                    this.uiContainer.addAt(child, index);
                }
                break;
            case UISceneDisplay.LAYER_DIALOG:
                if (index < 0) {
                    this.dialogContainer.add(child);
                } else {
                    this.dialogContainer.addAt(child, index);
                }
                break;
            case UISceneDisplay.LAYER_TOOLTIPS:
                if (index < 0) {
                    this.tipsContainer.add(child);
                } else {
                    this.tipsContainer.addAt(child, index);
                }
                break;
            case UISceneDisplay.LAYER_MASK:
                if (index < 0) {
                    this.maskContainer.add(child);
                } else {
                    this.maskContainer.addAt(child, index);
                }
                break;
        }
    }

    removeChild(child: Phaser.GameObjects.GameObject, type: UISceneDisplay) {
        this.scene.sys.displayList[type].removeChild(child);
    }

    /**@internal */
    updateScreenSize(): void {
        // todo resize screen
        // if (HTMLInput.isTyping) return;

        // let canvas = this.$appContext.view;
        // let canvasStyle: any = canvas.style;

        // let rect = this.$sizeCalcer.getRect(canvas, this.$options.fallbackWidth, this.$options.fallbackHeight);

        // let shouldRotate = false;
        // let orientation: string = this.$options.orientation;
        // if (orientation != StageOrientation.AUTO) {
        //     shouldRotate = orientation != StageOrientation.PORTRAIT && rect.height > rect.width
        //         || orientation == StageOrientation.PORTRAIT && rect.width > rect.height;
        // }
        // let screenWidth = shouldRotate ? rect.height : rect.width;
        // let screenHeight = shouldRotate ? rect.width : rect.height;

        // let stageSize = this.calculateStageSize(this.$options.scaleMode, screenWidth, screenHeight, this.$options.designWidth, this.$options.designHeight);
        // let stageWidth = stageSize.stageWidth;
        // let stageHeight = stageSize.stageHeight;
        // let displayWidth = stageSize.displayWidth;
        // let displayHeight = stageSize.displayHeight;
        // if (canvas.width !== stageWidth)
        //     canvas.width = stageWidth;
        // if (canvas.height !== stageHeight)
        //     canvas.height = stageHeight;
        // canvasStyle.transformOrigin = canvasStyle.webkitTransformOrigin = canvasStyle.msTransformOrigin = canvasStyle.mozTransformOrigin = canvasStyle.oTransformOrigin = "0px 0px 0px";
        // canvasStyle.width = displayWidth + "px";
        // canvasStyle.height = displayHeight + "px";

        // //kevin add
        // this.$appContext.renderer.resize(stageWidth, stageHeight);

        // let mat = this.$canvasMatrix.identity();

        // let dispWidth = shouldRotate ? displayHeight : displayWidth;
        // let dispHeight = shouldRotate ? displayWidth : displayHeight;

        // let offx: number, offy: number;
        // if (this.$options.alignH == StageAlign.LEFT) offx = 0;
        // else if (this.$options.alignH == StageAlign.RIGHT) offx = rect.width - dispWidth;
        // else offx = (rect.width - dispWidth) * 0.5;

        // if (this.$options.alignV == StageAlign.TOP) offy = 0;
        // else if (this.$options.alignV == StageAlign.BOTTOM) offy = rect.height - dispHeight;
        // else offy = (rect.height - dispHeight) * 0.5;

        // let rotDeg = 0;
        // if (shouldRotate) {
        //     if (this.$options.orientation == StageOrientation.LANDSCAPE) {
        //         mat.rotate(Math.PI / 2);
        //         mat.translate(screenHeight - offx, offy);
        //         rotDeg = 90;
        //     }
        //     else {
        //         mat.rotate(-Math.PI / 2);
        //         mat.translate(offx, screenWidth - offy);
        //         rotDeg = -90;
        //     }
        // }
        // else
        //     mat.translate(offx, offy);

        // if (shouldRotate) {
        //     mat.tx += this.offsetY;
        //     mat.ty += this.offsetX;
        // }
        // else {
        //     mat.tx += this.offsetX;
        //     mat.ty += this.offsetY;
        // }

        // mat.a = this.formatData(mat.a), mat.d = this.formatData(mat.d),
        //     mat.tx = this.formatData(mat.tx), mat.ty = this.formatData(mat.ty);

        // canvasStyle.transformOrigin = canvasStyle.webkitTransformOrigin = canvasStyle.msTransformOrigin = canvasStyle.mozTransformOrigin = canvasStyle.oTransformOrigin = "0px 0px 0px";
        // canvasStyle.transform = canvasStyle.webkitTransform = canvasStyle.msTransform = canvasStyle.mozTransform = canvasStyle.oTransform = `matrix(${mat.a},${mat.b},${mat.c},${mat.d},${mat.tx},${mat.ty})`;

        // this.$width = stageWidth;
        // this.$height = stageHeight;

        // this.$scaleX = stageWidth / displayWidth
        // this.$scaleY = stageHeight / displayHeight;

        // let im = this.$appContext.renderer.plugins.interaction as PIXI.extras.InteractionManager;
        // im.stageRotation = rotDeg;
        // im.stageScaleX = this.$scaleX;
        // im.stageScaleY = this.$scaleY;
        // this.$appContext.renderer.resize(stageWidth, stageHeight);
        // HTMLInput.inst.updateSize(displayWidth / stageWidth, displayHeight / stageHeight);

        this.emit(DisplayObjectEvent.SIZE_CHANGED, this);
    }

}

let UIStageInst: UIStage[] = [];
let resizeCheckTimer: number = NaN;

function resizeHandler(): void {
    UIStageInst.forEach(stage => {
        stage.updateScreenSize();
    });
}
DOMEventManager.inst.on("resize", function () {
    clearTimeout(resizeCheckTimer);
    resizeCheckTimer = window.setTimeout(resizeHandler, 300);
});
