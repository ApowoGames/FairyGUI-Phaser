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
    dpr: number;
    webfont?: string;
    scaleMode?: StageScaleMode;
    orientation?: StageOrientation;
    resolution?: number;
    x: number;
    y: number;
    width: number;
    height: number;
    container: Phaser.GameObjects.Container;
    alignV?: StageAlign;
    alignH?: StageAlign;
    fallbackWidth?: number;
    fallbackHeight?: number;
}
export declare class DefaultUIStageOptions implements UIStageOptions {
    scaleMode?: StageScaleMode;
    orientation?: StageOrientation;
    resolution?: number;
    width: number;
    height: number;
    x: number;
    y: number;
    alignV: StageAlign;
    alignH: StageAlign;
    fallbackWidth: number;
    fallbackHeight: number;
    container: Phaser.GameObjects.Container;
    osd: string;
    res: string;
    resUI: string;
    dpr: number;
}
export declare class UIStage extends Phaser.Events.EventEmitter {
    private scene;
    protected rootContainer: Phaser.GameObjects.Container;
    protected $options: UIStageOptions;
    protected $width: number;
    protected $height: number;
    protected $scaleX: number;
    protected $scaleY: number;
    protected $canvasMatrix: Phaser.GameObjects.Components.TransformMatrix;
    offsetX: number;
    offsetY: number;
    private $sizeCalcer;
    constructor(scene: Phaser.Scene, rootContainer: Phaser.GameObjects.Container);
    get nativeStage(): Phaser.Input.InputPlugin;
    get stageWidth(): number;
    get stageHeight(): number;
    get displayObject(): Phaser.GameObjects.Container;
    addChild(child: Phaser.GameObjects.GameObject, type: UISceneDisplay, index?: number): void;
    removeChild(child: Phaser.GameObjects.GameObject, type: UISceneDisplay): void;
    /**@internal */
    updateScreenSize(): void;
}
