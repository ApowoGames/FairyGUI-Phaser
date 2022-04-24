import { UISceneDisplay } from "../GRoot";
export declare const enum StageOrientation {
    AUTO = "auto",
    PORTRAIT = "portrait",
    LANDSCAPE = "landscape"
}
export declare const enum StageScaleMode {
    NO_SCALE = "noScale",
    SHOW_ALL = "showAll",
    NO_BORDER = "noBorder",
    EXACT_FIT = "exactFit",
    FIXED_WIDTH = "fixedWidth",
    FIXED_HEIGHT = "fixedHeight",
    FIXED_AUTO = "fixedAuto"
}
export declare const enum StageAlign {
    LEFT = 0,
    CENTER = 1,
    RIGHT = 2,
    TOP = 3,
    MIDDLE = 4,
    BOTTOM = 5
}
export interface UIStageOptions {
    osd: string;
    res: string;
    resUI: string;
    scaleMode?: StageScaleMode;
    orientation?: StageOrientation;
    dpr: number;
    x: number;
    y: number;
    designWidth: number;
    designHeight: number;
    width: number;
    height: number;
    alignV?: StageAlign;
    alignH?: StageAlign;
    fallbackWidth?: number;
    fallbackHeight?: number;
}
export declare class DefaultUIStageOptions implements UIStageOptions {
    scaleMode?: StageScaleMode;
    orientation?: StageOrientation;
    dpr: number;
    designWidth: number;
    designHeight: number;
    width: number;
    height: number;
    x: number;
    y: number;
    alignV?: StageAlign;
    alignH?: StageAlign;
    fallbackWidth: number;
    fallbackHeight: number;
    osd: string;
    res: string;
    resUI: string;
}
export declare class UIStage extends Phaser.Events.EventEmitter {
    private scene;
    protected containerMap: Map<number, Phaser.GameObjects.Container>;
    protected $options: UIStageOptions;
    protected $width: number;
    protected $height: number;
    protected $scaleX: number;
    protected $scaleY: number;
    protected $canvasMatrix: Phaser.GameObjects.Components.TransformMatrix;
    offsetX: number;
    offsetY: number;
    private $sizeCalcer;
    constructor(scene: Phaser.Scene);
    get stageOption(): UIStageOptions;
    getContainer(sortIndex: UISceneDisplay): Phaser.GameObjects.Container;
    get containersNum(): number;
    get nativeStage(): Phaser.Input.InputPlugin;
    get stageWidth(): number;
    get stageHeight(): number;
    addChild(child: Phaser.GameObjects.GameObject, type: number, index?: number): void;
    removeChild(child: Phaser.GameObjects.GameObject): void;
    /**@internal */
    updateScreenSize(): void;
}
