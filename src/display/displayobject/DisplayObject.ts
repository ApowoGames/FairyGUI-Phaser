//  bitmask flag for GameObject.renderMask
const _VISIBLE_FLAG = 1;
const _ALPHA_FLAG = 2; // 0010
const _TRANSFORM_FLAG = 4; // 0100

export class DisplayObject extends Phaser.GameObjects.GameObject {
    public x: number = 0;
    public y: number = 0;
    public width: number = 1;
    public height: number = 1;

    public flipX: boolean = false;
    public flipY: boolean = false;

    public originX: number = 0.5;
    public originY: number = 0.5;

    public scrollFactorX: number = 1;
    public scrollFactorY: number = 1;

    public pipeline: Phaser.Renderer.WebGL.WebGLPipeline;
    public defaultPipeline: Phaser.Renderer.WebGL.WebGLPipeline;
    public pipelineData: any;
    public renderer: Phaser.Renderer.Canvas.CanvasRenderer | Phaser.Renderer.WebGL.WebGLRenderer;

    public mask: Phaser.Display.Masks.BitmapMask | Phaser.Display.Masks.GeometryMask;

    public autoRound: boolean = true;

    public tintTopLeft: number = 0xffffff;
    public tintTopRight: number = 0xffffff;
    public tintBottomLeft: number = 0xffffff;
    public tintBottomRight: number = 0xffffff;
    public tintFill: boolean = false;

    protected _alpha: number = 1;
    protected _alphaTL: number = 1;
    protected _alphaTR: number = 1;
    protected _alphaBL: number = 1;
    protected _alphaBR: number = 1;

    protected _visible: boolean = true;

    protected _scaleX: number = 1;
    protected _scaleY: number = 1;

    protected _rotation: number = 0;

    protected _displayOriginX: number = 0;
    protected _displayOriginY: number = 0;
    protected _originComponent: boolean = true;

    protected _blendMode: Phaser.BlendModes = Phaser.BlendModes.NORMAL;

    constructor(scene: Phaser.Scene, type: string = "DisplayObject") {
        super(scene, type);
    }

    setOrigin(x?: number, y?: number) {
        if (x === undefined) x = 0.5;
        if (y === undefined) y = 0.5;

        this.originX = x;
        this.originY = y;

        return this.updateDisplayOrigin();
    }

    updateDisplayOrigin() {
        this._displayOriginX = this.originX * this.width;
        this._displayOriginY = this.originY * this.height;
        return this;
    }

    setVisible(val: boolean) {
        this.visible = val;
        return this;
    }

    setMask(mask: Phaser.Display.Masks.GeometryMask | Phaser.Display.Masks.BitmapMask) {
        this.mask = mask;
    }

    clearMask(destroyMask: boolean = false) {
        if (destroyMask && this.mask) {
            this.mask.destroy();
        }

        this.mask = null;

        return this;
    }

    setScale() {

    }

    setSize(w: number, h: number) {
        this.width = w;
        this.height = h;

        return this;
    }

    setPosition(x?: number, y?: number): this {
        this.x = x;
        this.y = y;

        return this;
    }

    setAlpha(topLeft: number, topRight: number, bottomLeft: number, bottomRight: number) {
        if (topLeft === undefined) {
            topLeft = 1;
        }
        if (topRight === undefined) {
            this.alpha = topLeft;
        }

        return this;
    }

    getLocalTransformMatrix(tempMatrix: Phaser.GameObjects.Components.TransformMatrix) {
        if (!tempMatrix) {
            tempMatrix = new Phaser.GameObjects.Components.TransformMatrix();
        }

        return tempMatrix.applyITRS(this.x, this.y, this._rotation, this.scaleX, this.scaleY);
    }

    getWorldTransformMatrix(tempMatrix?: Phaser.GameObjects.Components.TransformMatrix, parentMatrix?: Phaser.GameObjects.Components.TransformMatrix) {
        if (!tempMatrix) {
            tempMatrix = new Phaser.GameObjects.Components.TransformMatrix();
        }
        if (!parentMatrix) {
            parentMatrix = new Phaser.GameObjects.Components.TransformMatrix();
        }

        let parent = this.parentContainer;
        if (!parent) {
            return this.getLocalTransformMatrix(tempMatrix);
        }
        tempMatrix.applyITRS(this.x, this.y, this._rotation, this._scaleX, this._scaleY);

        while (parent) {
            parentMatrix.applyITRS(parent.x, parent.y, parent.rotation, parent.scaleX, parent.scaleY);

            parentMatrix.multiply(tempMatrix, tempMatrix);

            parent = parent.parentContainer;
        }

        return tempMatrix;
    }

    getLocalPoint(x: number, y: number, point: Phaser.Math.Vector2, camera: Phaser.Cameras.Scene2D.Camera) {
        if (!point) point = new Phaser.Math.Vector2();
        if (!camera) camera = this.scene.sys.cameras.main;

        const csx = camera.scrollX;
        const csy = camera.scrollY;

        const px = x + (csx * this.scrollFactorX) - csx;
        const py = y + (csy * this.scrollFactorY) - csy;
        if (this.parentContainer) {
            this.getWorldTransformMatrix().applyInverse(px, py, point);
        } else {
            Phaser.Math.TransformXY(px, py, this.x, this.y, this._rotation, this.scaleX, this.scaleY, point);
        }

        //  Normalize origin
        if (this._originComponent) {
            point.x += this._displayOriginX;
            point.y += this._displayOriginY;
        }
        return point;
    }

    getParentRotation() {
        let rotation = 0;
        let parent = this.parentContainer;

        while (parent) {
            rotation += parent.rotation;

            parent = parent.parentContainer;
        }
        return rotation;
    }

    initPipeline(pipeline?: Phaser.Renderer.WebGL.WebGLPipeline | string) {
        if (!pipeline) {
            pipeline = Phaser.Renderer.WebGL.Pipelines.MULTI_PIPELINE;
        }

        const renderer = this.scene.sys.renderer;
        if (!renderer) {
            return false;
        }

        const pipelines = (<Phaser.Renderer.WebGL.WebGLRenderer>renderer).pipelines;
        if (pipelines) {
            const instance = pipelines.get(pipeline);

            if (instance) {
                this.defaultPipeline = instance;
                this.pipeline = instance;

                return true;
            }
        }

        return false;
    }

    setPipeline(pipeline: Phaser.Renderer.WebGL.WebGLPipeline | string, pipelineData: any, copyData: boolean = true) {
        const renderer = this.scene.sys.renderer;
        if (!renderer) {
            return this;
        }

        const pipelines = (<Phaser.Renderer.WebGL.WebGLRenderer>renderer).pipelines;
        if (pipelines) {
            const instance = pipelines.get(pipeline);
            if (instance) {
                this.pipeline = instance;
            }

            if (pipelineData) {
                this.pipelineData = (copyData) ? Phaser.Utils.Objects.DeepCopy(pipelineData) : pipelineData;
            }
        }

        return this;
    }

    setPipelineData(key: string, value?: any) {
        const data = this.pipelineData;
        if (value === undefined) {
            delete data[key];
        } else {
            data[key] = value;
        }
        return this;
    }

    setBlendMode(val: Phaser.BlendModes) {
        this.blendMode = val;
    }

    setScrollFactor(x: number, y: number) {
        if (y === undefined) {
            y = x;
        }

        this.scrollFactorX = x;
        this.scrollFactorY = y;

        return this;
    }

    renderCanvas(renderer: Phaser.Renderer.Canvas.CanvasRenderer, src: Phaser.GameObjects.GameObject, camera: Phaser.Cameras.Scene2D.Camera, parentMatrix: Phaser.GameObjects.Components.TransformMatrix) {
    }

    renderWebGL(renderer: Phaser.Renderer.WebGL.WebGLRenderer, src: Phaser.GameObjects.GameObject, camera: Phaser.Cameras.Scene2D.Camera, parentMatrix: Phaser.GameObjects.Components.TransformMatrix) {
    }

    protected preDestroy() {

    }

    set scale(val: number) {
        this._scaleX = val;
        this._scaleY = val;

        if (val === 0) {
            this.renderFlags &= ~_TRANSFORM_FLAG;
        } else {
            this.renderFlags |= _TRANSFORM_FLAG;
        }
    }

    get scale() {
        return (this._scaleX + this._scaleY) / 2;
    }

    get scaleX() {
        return this._scaleX;
    }

    set scaleX(val: number) {
        this._scaleX = val;
        if (val === 0) {
            this.renderFlags &= _TRANSFORM_FLAG;
        } else {
            this.renderFlags |= _TRANSFORM_FLAG;
        }
    }

    get scaleY() {
        return this._scaleY;
    }

    set scaleY(val: number) {
        this._scaleY = val;
        if (val === 0) {
            this.renderFlags &= _TRANSFORM_FLAG;
        } else {
            this.renderFlags |= _TRANSFORM_FLAG;
        }
    }

    get rotation() {
        return this._rotation;
    }

    set rotation(val: number) {
        this._rotation = Phaser.Math.Angle.Wrap(val);
    }

    get angle() {
        return Phaser.Math.Angle.WrapDegrees(this._rotation * Phaser.Math.RAD_TO_DEG);
    }

    set angle(val: number) {
        this._rotation = Phaser.Math.Angle.WrapDegrees(val) * Phaser.Math.DEG_TO_RAD;
    }

    get displayOriginX() {
        return this._displayOriginX;
    }

    set displayOriginX(val: number) {
        this._displayOriginX = val;
        this.originX = val / this.width;
    }

    get displayOriginY() {
        return this._displayOriginY;
    }

    set displayOriginY(val: number) {
        this._displayOriginY = val;
        this.originY = val / this.height;
    }

    get displayWidth() {
        return this.width * this.scaleX;
    }

    set displayWidth(val: number) {
        this.scaleX = val / this.width;
    }

    get displayHeight(): number {
        return this.height * this.scaleY;
    }

    set displayHeight(val: number) {
        this.scaleY = val / this.height;
    }

    get alpha(): number {
        return this._alpha;
    }

    set alpha(val: number) {
        val = Phaser.Math.Clamp(val, 0, 1);

        this._alpha = val;

        if (val === 0) {
            this.renderFlags &= ~_ALPHA_FLAG;
        } else {
            this.renderFlags |= _ALPHA_FLAG;
        }
    }

    get alphaTL(): number {
        return this._alphaTL;
    }

    get alphaTR(): number {
        return this._alphaTR;
    }

    get alphaBL(): number {
        return this._alphaBL;
    }

    get alphaBR(): number {
        return this._alphaBR;
    }

    get visible(): boolean {
        return this._visible;
    }

    set visible(val: boolean) {
        this._visible = val;

        if (val) {
            this.renderFlags |= _VISIBLE_FLAG;
        } else {
            this.renderFlags &= ~_VISIBLE_FLAG;
        }
    }

    get blendMode() {
        return this._blendMode;
    }

    set blendMode(val: Phaser.BlendModes) {
        val |= 0;

        if (val >= -1) {
            this._blendMode = val;
        }
    }
}