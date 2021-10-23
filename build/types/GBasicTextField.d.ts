import { GTextField } from './GTextField';
export declare class GBasicTextField extends GTextField {
    private _textField;
    private _font;
    private _color;
    /**
     * 描边颜色，默认黑色
     */
    private _strokeColor;
    private _singleLine;
    private _letterSpacing;
    private _textWidth;
    private _textHeight;
    private _bitmapFont?;
    private _lines?;
    constructor(scene?: Phaser.Scene);
    createDisplayObject(): void;
    get nativeText(): Phaser.GameObjects.Text;
    set text(value: string);
    get text(): string;
    get font(): string;
    set font(value: string);
    get fontSize(): number;
    set fontSize(value: number);
    get color(): string;
    set color(value: string);
    get align(): string;
    set align(value: string);
    get valign(): string;
    set valign(value: string);
    get leading(): number;
    set leading(value: number);
    get letterSpacing(): number;
    set letterSpacing(value: number);
    get bold(): boolean;
    set bold(value: boolean);
    get italic(): boolean;
    set italic(value: boolean);
    get underline(): boolean;
    set underline(value: boolean);
    get singleLine(): boolean;
    set singleLine(value: boolean);
    get stroke(): number;
    set stroke(value: number);
    get strokeColor(): string;
    set strokeColor(value: string);
    protected updateAutoSize(): void;
    get textWidth(): number;
    ensureSizeCorrect(): void;
    typeset(): void;
    protected updateSize(): void;
    setSize(w: any, h: any): void;
    private renderWithBitmapFont;
    protected handleSizeChanged(): void;
    protected handleGrayedChanged(): void;
    protected doAlign(): void;
    flushVars(): void;
}
export declare class TextExt extends Phaser.GameObjects.Text {
    private _owner;
    private _lock;
    private _sizeDirty;
    constructor(owner: GBasicTextField);
    baseTypeset(): void;
    typeset(): void;
    setChanged(): void;
    protected set isChanged(value: boolean);
}
export interface LineInfo {
    width: number;
    height: number;
    textHeight: number;
    text: string;
    y: number;
}
