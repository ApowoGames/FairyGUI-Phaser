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
    isDesk: boolean;
    scaleMode?: StageScaleMode;
    orientation?: StageOrientation;
    dpr: number;
    x: number;
    y: number;
    // 16:9 = 3840×2160 2560X1440 1920×1080 1600×900 1366×768 1280×720 1024×576 960×540 854×480 720×405 640x360
    designWidth: number;
    designHeight: number;
    width: number;
    height: number;
    alignV?: StageAlign,
    alignH?: StageAlign,
    fallbackWidth?: number,
    fallbackHeight?: number
    // [key: string]: string | number;
}

export class DefaultUIStageOptions implements UIStageOptions {
    public scaleMode?: StageScaleMode = StageScaleMode.SHOW_ALL;
    public orientation?: StageOrientation = StageOrientation.AUTO;
    public dpr: number = 1;
    // 默认竖屏
    public isDesk: boolean = false; // 默认手机ui
    public designWidth: number = 360;
    public designHeight: number = 640;
    public width: number = 480;
    public height: number = 854;
    public x: number = 0;
    public y: number = 0;
    public alignV?: StageAlign = StageAlign.MIDDLE;
    public alignH?: StageAlign = StageAlign.CENTER;
    public fallbackWidth: number = 0;
    public fallbackHeight: number = 0;
    public osd: string = "/";
    public res: string = "resources/";
    public resUI: string = "resources/ui";
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
    protected containerMap: Map<number, Phaser.GameObjects.Container>;
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
        this.containerMap = new Map();
        this.getContainer(UISceneDisplay.LAYER_ROOT);
        this.$options = new DefaultUIStageOptions();
    }

    get stageOption(): UIStageOptions {
        return this.$options;
    }

    public getContainer(sortIndex: UISceneDisplay): Phaser.GameObjects.Container {
        if (!this.containerMap) this.containerMap = new Map();
        let con = this.containerMap.get(sortIndex);
        if (!con) {
            con = this.scene.make.container(undefined, false);
            // 嵌入当前scene显示队列的对应index位置
            this.scene.sys.displayList.addAt(con,sortIndex);
            // const parentContainer = <Phaser.GameObjects.Container>this.scene.sys.displayList.list[sortIndex] ?
            //     <Phaser.GameObjects.Container>this.scene.sys.displayList.list[sortIndex] : this.scene.add.container(0, 0);
            // con = this.scene.make.container(undefined, false);
            // const len = parentContainer && parentContainer.list && parentContainer.list.length ? parentContainer.list.length : 0
            // if (parentContainer) parentContainer.addAt(con, len);
            this.containerMap.set(sortIndex, con);
        }
        return con;
    }

    get containersNum(): number {
        return this.containerMap.size;
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

    // public get displayObject(): Phaser.GameObjects.Container {
    //     return this.rootContainer;
    // }

    addChild(child: Phaser.GameObjects.GameObject, type: number, index: number = -1) {
        const con = this.getContainer(type);
        if (index < 0) {
            con.add(child);
        } else {
            con.addAt(child, index);
        }
    }

    removeChild(child: Phaser.GameObjects.GameObject) {
        if (child.parentContainer) child.parentContainer.remove(child);
        child.removeFromUpdateList();
        child.removeFromDisplayList();
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
