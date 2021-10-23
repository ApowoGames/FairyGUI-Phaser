export declare class InputTextField extends Phaser.GameObjects.DOMElement {
    private onTextChanged;
    constructor(scene: Phaser.Scene);
    createInput(): void;
    /**
     * Don"t propagate touch/mouse events to parent(game canvas)
     * @param element
     */
    stopPropagationTouchEvents(e: any): void;
    routeEvents(gameObject: any, element: any, elementEvents: any): void;
    get text(): string;
    set text(value: string);
    setText(value: any): this;
    selectText(): this;
    get placeholder(): string;
    set placeholder(value: string);
    setPlaceholder(value: any): this;
    get tooltip(): string;
    set tooltip(value: string);
    setTooltip(value: any): this;
    setTextChangedCallback(callback: any): this;
    get readOnly(): boolean;
    set readOnly(value: boolean);
    setReadOnly(value: any): this;
    get spellCheck(): boolean;
    set spellCheck(value: boolean);
    setSpellCheck(value: any): this;
    setStyle(key: any, value: any): this;
    getStyle(key: any): string;
    scrollToBottom(): this;
    setEnabled(enabled: any): this;
    setBlur(): this;
    setFocus(): this;
}
