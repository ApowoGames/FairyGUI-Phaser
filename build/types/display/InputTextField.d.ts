import { GBasicTextField } from "../GBasicTextField";
import { TextField } from "./text/TextField";
export declare class InputTextField extends TextField {
    maxLength: number;
    keyboardType: string;
    restrict: string;
    editable: boolean;
    password: boolean;
    private _editing;
    private _text2;
    private _promptText;
    /**
     * 输入文本dom元素
     */
    private _element;
    private _inputNode;
    private _width;
    private _height;
    private mRectangle;
    constructor(owner: GBasicTextField);
    destroy(): void;
    private onFocusHandler;
    private onBlurHandler;
    private createElement;
    private updateTextField;
    /**
     * Don"t propagate touch/mouse events to parent(game canvas)
     * @param element
     */
    stopPropagationTouchEvents(e: any): void;
    routeEvents(gameObject: any, element: any, elementEvents: any): void;
    getText(): string;
    setText(value: string): this;
    selectText(): this;
    get placeholder(): string;
    set placeholder(value: string);
    setPlaceholder(value: any): this;
    setEnabled(enabled: any): this;
    setBlur(): this;
    setFocus(): this;
    setSize(width: number, height: number): this;
    private onPointerSceneHandler;
    private checkInBounds;
}
