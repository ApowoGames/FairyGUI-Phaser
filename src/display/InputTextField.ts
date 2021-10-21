import { Input } from "phaser3";

type InputElement = HTMLTextAreaElement | HTMLInputElement;

const ElementEvents = {
    textchange: "oninput",
    click: "onclick",
    dblclick: "ondblclick",
    focus: "onfocus",
    blur: "onblur",
};

export class InputTextField extends Phaser.GameObjects.DOMElement {
    private onTextChanged: Function;
    constructor(scene: Phaser.Scene) {
        super(scene);
    }

    public createInput() {
        let e: InputElement;
        if (this["$owner"].singleLine) {
            e = document.createElement("input");
        } else {
            e = document.createElement("textarea");
            e.style.resize = "none";
            e.style.overflow = "scroll";
        }

        e.id = 'InputText';
        e.style.outline = "none";
        e.style.borderWidth = "0px";
        e.style.padding = "0px";
        e.style.margin = "0px";
        e.style.position = "absolute";
        e.style.display = "none";
        e.style.background = 'transparent';
        e.style.transformOrigin = e.style["WebkitTransformOrigin"] = "0 0 0";

        this.routeEvents(this, e, ElementEvents);
        // this._input.onblur = () => { Stage.setFocus(null); }
        this.stopPropagationTouchEvents(e);
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
    get text() {
        return (this.node as InputElement).value;
    }

    set text(value) {
        (this.node as InputElement).value = value;
    }

    setText(value) { // Override
        this.text = value;
        return this;
    }

    selectText() {
        (this.node as InputElement).select();
        return this;
    }

    get placeholder() {
        return (this.node as InputElement).placeholder;
    }

    set placeholder(value) {
        (this.node as InputElement).placeholder = value;
    }

    setPlaceholder(value) {
        this.placeholder = value;
        return this;
    }

    get tooltip() {
        return (this.node as InputElement).title;
    }

    set tooltip(value) {
        (this.node as InputElement).title = value;
    }

    setTooltip(value) {
        this.tooltip = value;
        return this;
    }

    setTextChangedCallback(callback) {
        this.onTextChanged = callback;
        return this;
    }

    get readOnly() {
        return (this.node as InputElement).readOnly;
    }

    set readOnly(value) {
        (this.node as InputElement).readOnly = value;
    }

    setReadOnly(value) {
        if (value === undefined) {
            value = true;
        }
        this.readOnly = value;
        return this;
    }

    get spellCheck() {
        return (this.node as InputElement).spellcheck;
    }

    set spellCheck(value) {
        (this.node as InputElement).spellcheck = value;
    }

    setSpellCheck(value) {
        this.spellCheck = value;
        return this;
    }

    setStyle(key, value) {
        (this.node as InputElement).style[key] = value;
        return this;
    }

    getStyle(key) {
        return (this.node as InputElement).style[key];
    }

    scrollToBottom() {
        this.node.scrollTop = this.node.scrollHeight;
        return this;
    }

    setEnabled(enabled) {
        if (enabled === undefined) {
            enabled = true;
        }
        (this.node as InputElement).disabled = !enabled;
        return this;
    }

    setBlur() {
        (this.node as InputElement).blur();
        return this;
    }

    setFocus() {
        (this.node as InputElement).focus();
        return this;
    }

}
