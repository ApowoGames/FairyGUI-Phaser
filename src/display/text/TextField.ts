import { DisplayObject } from '../displayobject/DisplayObject';
import { Parser } from './bbcode/Parser';
import { CanvasText } from './canvastext/CanvasText';
import { ImageManager } from './imagemanager/ImageManager';
import { TextCanvasRenderer } from './renderer/CanvasRenderer';
import { TextWebGLRenderer } from './renderer/WebGLRenderer';
import { TextStyle } from './style/TextStyle';
import { FillStyleType, HAlignModeString, VAlignModeString } from './Types';
import { WrapMode } from './WrapText';

const AddToDOM = Phaser.DOM.AddToDOM;
const RemoveFromDOM = Phaser.DOM.RemoveFromDOM;
const CanvasPool = Phaser.Display.Canvas.CanvasPool;
export class TextField extends DisplayObject {
    public canvas: HTMLCanvasElement;
    public context: CanvasRenderingContext2D | null;
    public frame: Phaser.Textures.Frame;
    public texture: Phaser.Textures.Texture;
    public padding: Phaser.Geom.Rectangle;
    public dirty: boolean;
    protected _text: string;
    protected _imageManager: ImageManager;
    protected _canvasText: CanvasText;
    protected _style: TextStyle;

    constructor(scene: Phaser.Scene) {
        super(scene, "TextField");

        this.renderer = scene.sys.game.renderer;

        this.canvas = CanvasPool.create(this);

        this.context = this.canvas.getContext("2d");

        this._text = undefined;

        this.width = 1;
        this.height = 1;

        this._style = new TextStyle(this, {});

        this.dirty = false;

        this.texture = scene.sys.textures.addCanvas(null, this.canvas, true);

        this.frame = this.texture.get();

        this.frame.source.resolution = this._style.resolution;

        const webglRenderer = (<Phaser.Renderer.WebGL.WebGLRenderer>this.renderer);
        if (webglRenderer && webglRenderer.gl) {
            webglRenderer.deleteTexture(this.frame.source.glTexture);
            this.frame.source.glTexture = null;
        }

        this.setOrigin(0, 0);
        this.initPipeline();
        this.setPosition(0, 0);

        this.padding = new Phaser.Geom.Rectangle();

        this._canvasText = new CanvasText({
            parent: this,
            canvas: this.canvas,
            context: this.context,
            parse: new Parser(),
        });
        this.initRTL();
        this.scene.sys.game.events.on(Phaser.Core.Events.CONTEXT_RESTORED, this.onContextRestored, this);

        this.on("areadown", (pointer, localX, localY, event) => {
            console.log("areadown: ", pointer, localX, localY);
        }, this);
    }


    initRTL() {
        if (!this.style.rtl) {
            return;
        }

        //  Here is where the crazy starts.
        //
        //  Due to browser implementation issues, you cannot fillText BiDi text to a canvas
        //  that is not part of the DOM. It just completely ignores the direction property.

        this.canvas.dir = 'rtl';

        //  Experimental atm, but one day ...
        this.context.direction = 'rtl';

        //  Add it to the DOM, but hidden within the parent canvas.
        this.canvas.style.display = 'none';

        AddToDOM(this.canvas, this.scene.sys.canvas);

        //  And finally we set the x origin
        this.originX = 1;
    }

    public setText(value: string | string[]) {
        if (!value) {
            value = "";
        }
        if (Array.isArray(value)) {
            value = value.join("\n");
        }
        if (value !== this._text) {
            this._text = value;

            this.updateText();
        }
        return this;

    }

    public addImage(key: string, config: string) {
        this.imageManager.add(key, config);
        return this;
    }

    public drawAreaBounds(graphics, color) {
        // TODO
        return this;
    }

    public updateText(runWrap: boolean = true) {
        if (this._text === undefined) {
            return;
        }
        const canvasText = this.canvasText;

        const style = this._style;
        if (runWrap) {
            canvasText.updatePenManager(
                this._text,
                style.wrapMode,
                style.wrapWidth
            )
        }

        const padding = this.padding;
        let textWidth, textHeight;
        if (style.fixedWidth === 0) {
            textWidth = canvasText.textWidth
            this.width = textWidth + padding.left + padding.right;
        } else {
            this.width = style.fixedWidth;
            textWidth = this.width - padding.left - padding.right;
            if (textWidth > canvasText.textWidth) {
                textWidth = canvasText.textWidth;
            }
        }
        if (style.fixedHeight === 0) {
            textHeight = canvasText.textHeight;
            this.height = textHeight + padding.top + padding.bottom;
        } else {
            this.height = style.fixedHeight;
            textHeight = this.height - padding.top - padding.bottom;
            if (textHeight < canvasText.textHeight) {
                textHeight = canvasText.textHeight;
            }
        }

        let w = this.width;
        let h = this.height;

        this.updateDisplayOrigin();

        const resolution = style.resolution;
        w *= resolution;
        h *= resolution;

        w = Math.max(Math.ceil(w), 1);
        h = Math.max(Math.ceil(h), 1);

        const canvas = this.canvas;
        const context = this.context;
        if (canvas.width !== w || canvas.height !== h) {
            canvas.width = w;
            canvas.height = h;
            this.frame.setSize(w, h);
        } else {
            context.clearRect(0, 0, w, h);
        }

        context.save();
        context.scale(resolution, resolution);

        // draw
        canvasText.draw(
            padding.left,
            padding.top,
            textWidth,
            textHeight
        ).then((value: CanvasText) => {

            context.restore();

            const webglRenderer = <Phaser.Renderer.WebGL.WebGLRenderer>this.renderer;
            if (webglRenderer.gl) {
                this.frame.source.glTexture = webglRenderer.canvasToTexture(canvas, this.frame.source.glTexture, true);
                this.frame.glTexture = this.frame.source.glTexture;
            }

            this.dirty = true;

            const input = this.input;
            if (input && !input.customHitArea) {
                input.hitArea.width = this.width;
                input.hitArea.height = this.height;
            }
        });
        return this;
    }

    setPosition(x?: number, y?: number): this {
        return super.setPosition(x, y);
    }

    setWordWrapWidth(width: number, useAdvancedWrap: boolean = false) {
        this._style.wrapMode = WrapMode.char;
        this._style.wrapWidth = width;
    }

    setResolution(resolution: number) {
        this._style.resolution = resolution;
    }

    setSingleLine(val: boolean) {
        this._style.wrapMode = val ? WrapMode.none : WrapMode.char;
    }

    setInteractive(hitArea?: Phaser.Types.Input.InputConfiguration | any, callback?: Phaser.Types.Input.HitAreaCallback, dropZone?: boolean) {
        const target = {};
        const source = hitArea ? hitArea : {};
        // source["cursor"] = 'pointer'; // 移动端无需鼠标手型
        Object.assign(target, source);
        super.setInteractive(target, callback, dropZone);
        this.canvasText.setInteractive();
        return this;
    }

    disableInteractive(): this {
        super.disableInteractive();
        this.canvasText.disableInteractive();
        return this;
    }

    renderCanvas(renderer: Phaser.Renderer.Canvas.CanvasRenderer, src: TextField, camera: Phaser.Cameras.Scene2D.Camera, parentMatrix: Phaser.GameObjects.Components.TransformMatrix) {
        TextCanvasRenderer(renderer, src, camera, parentMatrix);
    }

    renderWebGL(renderer: Phaser.Renderer.WebGL.WebGLRenderer, src: TextField, camera: Phaser.Cameras.Scene2D.Camera, parentMatrix: Phaser.GameObjects.Components.TransformMatrix) {
        TextWebGLRenderer(renderer, src, camera, parentMatrix);
    }

    setColor(val: string) {
        this._style.setFill(val);
    }

    setAlign(val: HAlignModeString) {
        this._style.halign = val;
    }

    setVAlign(val: VAlignModeString) {
        this._style.valign = val;
    }

    setBold(val: boolean) {
        this._style.bold = val;
    }

    setItalic(val: boolean) {
        this._style.italic = val;
    }

    setUnderline(thickness: number = 2, style?: FillStyleType, offsetY?: number) {
        this._style.setUnderLine(thickness, style, offsetY);

    }

    public setShadowStyle(color: string) {
        this._style.setShadowStyle(color);
    }

    public setShadowOffset(x: number, y: number) {
        this._style.setShadowOffset(x, y);
    }

    public setShadowFill(val: boolean) {
        this._style.shadowFill = val;
    }

    setLetterSpacing(val: number) {
        // this._style.letterSpacing = val;
    }

    setStroke(color: FillStyleType, thickness: number) {
        this._style.setStroke(color, thickness);
    }

    setLineSpacing(val: number) {
        this._style.setLineSpacing(val);

        return this;
    }

    setFont(font: string) {
        this._style.setFontFamily(font);
        return this;
    }

    setFontSize(fontSize: string | number) {
        this._style.setFontSize(fontSize);

        return this;
    }

    setValign(val: VAlignModeString) {
        this._style.valign = val;
    }

    protected onContextRestored() {
        this.dirty = true;
    }

    public preDestroy() {
        this.scene.sys.game.events.off(Phaser.Core.Events.CONTEXT_RESTORED, this.onContextRestored, this);
        RemoveFromDOM(this.canvas);
        if (this._canvasText) {
            this._canvasText.destroy();
            this._canvasText = undefined;
        }

        if (this._imageManager) {
            this._imageManager.destroy();
            this._imageManager = undefined;
        }
        CanvasPool.remove(this.canvas);
        if (this.texture && this.texture.key) this.texture.destroy();
        super.preDestroy();

    }

    get imageManager() {
        if (!this._imageManager) {
            this._imageManager = new ImageManager();
        }
        return this._imageManager;
    }

    get canvasText() {
        return this._canvasText;
    }

    get style() {
        return this._style;
    }

    get text(): string {
        return this._text;
    }

    set text(val: string) {
        this.setText(val);
    }
}


