import { GBasicTextField } from "../GBasicTextField";
import { TextField } from "./text/TextField";

type InputElement = HTMLTextAreaElement | HTMLInputElement;

const ElementEvents = {
    textchange: "oninput",
    click: "onclick",
    dblclick: "ondblclick",
    focus: "onfocus",
    blur: "onblur",
};

export class InputTextField extends TextField {
    public maxLength: number;
    public keyboardType: string;
    public restrict: string;
    public editable: boolean;
    public password: boolean;
    private _editing: boolean;

    private _text2: string;
    private _promptText: string;

    /**
     * 输入文本dom元素
     */
    private _element: Phaser.GameObjects.DOMElement;
    private _inputNode: InputElement;
    private _width: number;
    private _height: number;
    private mRectangle: Phaser.Geom.Rectangle;
    constructor(owner: GBasicTextField) {
        super(owner.scene);

        this._text2 = "";
        this.editable = true;
        this.setOrigin(0);
        this.scene.input.on("pointerup", this.onFocusHandler, this);
    }

    destroy(): void {
        this.editable = false;
        this._editing = false;
        this.scene.input.off("pointerup", this.onFocusHandler, this);
        this.scene.input.off("pointerdown", this.onPointerSceneHandler, this);
        if (this._element) {
            this._element.destroy();
            this._element = null;
        }
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
        const textWidth = this._width;
        const textHeight = this._height;
        // if (style.fixedWidth === 0) {
        //     textWidth = canvasText.textWidth
        //     this.width = textWidth + padding.left + padding.right;
        // } else {
        //     this.width = style.fixedWidth;
        //     textWidth = this.width - padding.left - padding.right;
        //     if (textWidth > canvasText.textWidth) {
        //         textWidth = canvasText.textWidth;
        //     }
        // }
        // if (style.fixedHeight === 0) {
        //     textHeight = canvasText.textHeight;
        //     this.height = textHeight + padding.top + padding.bottom;
        // } else {
        //     this.height = style.fixedHeight;
        //     textHeight = this.height - padding.top - padding.bottom;
        //     if (textHeight < canvasText.textHeight) {
        //         textHeight = canvasText.textHeight;
        //     }
        // }

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
        ).then(() => {

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

    private onFocusHandler(point: Phaser.Input.Pointer) {
        if (!this.checkInBounds(point)) return;
        if (!this.editable || this._editing)
            return;

        if (!this._element)
            this.createElement();

        this._element.setVisible(true);
        const inputElement = (<InputElement>this._element.node);
        inputElement.value = this._text2;
        inputElement.style.fontSize = this.style.fontSize;
        if (this.maxLength !== undefined) inputElement.maxLength = this.maxLength;

        this.scene.input.on("pointerdown", this.onPointerSceneHandler, this);
        inputElement.focus();
        this.disableInteractive();
        this._editing = true;
        this.setVisible(false);
    }

    private onBlurHandler() {
        this.scene.input.off("pointerdown", this.onPointerSceneHandler, this);
        this._inputNode.blur();
        this._element.setVisible(false);
        this.setInteractive();
        this._text2 = this._inputNode.value;
        this._inputNode = null;
        if (this._element) {
            this._element.destroy();
            this._element = null;
        }

        this._editing = false;
        this.updateTextField();
        this.setVisible(true);
    }

    private createElement() {
        this._element = new Phaser.GameObjects.DOMElement(this.scene);
        let e: InputElement;
        if (this["$owner"].singleLine) {
            e = document.createElement("input");
        } else {
            e = document.createElement("textarea");
            e.style.resize = "none";
            e.style.overflow = "scroll";
        }

        this._inputNode = e;
        e.style.outline = "none";
        e.style.borderWidth = "0px";
        e.style.padding = "0px";
        e.style.margin = "0px";
        e.style.position = "absolute";
        e.style.display = "none";
        e.style.background = 'transparent';
        e.style.transformOrigin = e.style["WebkitTransformOrigin"] = "0 0 0";
        e.style.width = `${this._width}px`;
        e.style.height = `${this._height}px`;
        this._element.setElement(e);
        this._element.setOrigin(this.originX, this.originY);
        this._element.setPosition(this.x, this.y);
        this.parentContainer.add(this._element);
    }

    private updateTextField() {
        if (this._editing)
            this._inputNode.value = this._text2;
        else if (this._text2.length === 0 && this._promptText) {
            super.setText(this._promptText);
        } else if (this.password) {
            super.setText("*".repeat(this._text2.length));
        } else {
            super.setText(this._text2);
        }

        this.scene.input.off("pointerup", this.onFocusHandler, this);
        this.scene.input.on("pointerup", this.onFocusHandler, this);
    }

    /**
     * Don"t propagate touch/mouse events to parent(game canvas)
     * @param element 
     */
    stopPropagationTouchEvents(e) {

        const callback = function (e) {
            e.stopPropagation();
        }
        // Don't propagate touch/mouse events to parent(game canvas)
        e.addEventListener("touchstart", callback, false);
        e.addEventListener("touchmove", callback, false);
        e.addEventListener("touchend", callback, false);
        e.addEventListener("mousedown", callback, false);
        e.addEventListener("mouseup", callback, false);
        e.addEventListener("mousemove", callback, false);
    }

    routeEvents(gameObject, element, elementEvents) {
        for (let eventName in elementEvents) { // Note: Don't use `var` here
            element[elementEvents[eventName]] = function (e) {
                gameObject.emit(eventName, gameObject, e);
            };
        }
    }
    getText() {
        if (this._editing) {
            this._text2 = (<InputElement>this._element.node).value;
        }
        return this._text2;
    }

    setText(value: string) { // Override
        this._text2 = value;
        this.updateTextField();
        if (value) {
            this.scene.input.on("pointerup", this.onFocusHandler, this);
        }
        return this;
    }

    selectText() {
        if (this._inputNode) this._inputNode.select();
        return this;
    }

    get placeholder() {
        return this._promptText;
    }

    set placeholder(value: string) {
        // this._inputNode.placeholder = value;
        this._promptText = value;
        if (this._editing) {
            this._inputNode.placeholder = this._promptText;
        }

        this.updateTextField();
    }

    setPlaceholder(value) {
        this.placeholder = value;
        return this;
    }


    setEnabled(enabled) {
        if (enabled === undefined) {
            enabled = true;
        }
        this._inputNode.disabled = !enabled;
        return this;
    }

    setBlur() {
        this._inputNode.blur();
        return this;
    }

    setFocus() {
        this._inputNode.focus();
        return this;
    }

    setSize(width: number, height: number) {
        if (this.scene.scale.autoRound) {
            width = Math.floor(width);
            height = Math.floor(height);
        }
        if (this._width === width && this._height === height) {
            return;
        }
        this._width = width;
        this._height = height;
        super.setSize(width, height);
        if (this._inputNode) {
            const style = (<InputElement>this._inputNode).style;
            style.width = `${width}px`;
            style.height = `${height}px`;
        }

        // this.updateSize();
        return this;
    }

    private onPointerSceneHandler(point: Phaser.Input.Pointer) {
        if (this.checkInBounds(point)) return;
        console.log("onPointerSceneHandler", this._editing);
        if (this._editing) this.onBlurHandler();
    }

    private checkInBounds(point): boolean {
        const px = point.worldX;
        const py = point.worldY;
        let tmpX = 0;
        let tmpY = 0;
        if (this.parentContainer) {
            const worldMatrix = this.parentContainer.getWorldTransformMatrix();
            tmpX += worldMatrix.tx;
            tmpY += worldMatrix.ty;
        }
        const left = this.x + tmpX;
        const right = this.x + this._width + tmpX;
        const top = this.y + tmpY;
        const bottom = this.y + this._height + tmpY;
        if (px < left || px > right || py < top || py > bottom) return false;
        return true;
    }
}
