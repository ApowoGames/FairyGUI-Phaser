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

    private _element: Phaser.GameObjects.DOMElement;
    private _inputNode: InputElement;
    private _width: number;
    private _height: number;
    constructor(owner: GBasicTextField) {
        super(owner.scene);

        this._text2 = "";
        this.editable = true;
        this.setOrigin(0);
    }

    private onFocusHandler() {
        if (!this.editable || this._editing)
            return;

        // if (!this._font)
        //     this.applyFormat();

        if (!this._element)
            this.createElement();

        this._element.setVisible(true);
        const inputElement = (<InputElement>this._element.node);
        inputElement.value = this._text2;
        inputElement.style.fontSize = this.style.fontSize;
        // inputElement.style.textAlign = this.style.align;
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
        this._element.destroy();
        this._element = null;

        this._editing = false;
        this.updateTextField();
        this.setVisible(true);
    }

    private createElement() {
        this._element = new Phaser.GameObjects.DOMElement(this.scene);
        let e: InputElement;
        // if (this["$owner"].singleLine) {
        if (true) {
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

        this.off("pointerup", this.onFocusHandler, this);
        this.on("pointerup", this.onFocusHandler, this);
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
            this.on("pointerup", this.onFocusHandler, this);
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

    private onPointerSceneHandler() {
        console.log("onPointerSceneHandler", this._editing);
        if (this._editing) this.onBlurHandler();
    }
}
