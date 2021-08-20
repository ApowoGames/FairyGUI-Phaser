import { ByteBuffer } from './utils/ByteBuffer';
import { GTextField } from './GTextField';
export declare class GTextInput extends GTextField {
    private _input;
    private _prompt;
    constructor();
    createDisplayObject(): void;
    get nativeInput(): any;
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
    get bold(): boolean;
    set bold(value: boolean);
    get italic(): boolean;
    set italic(value: boolean);
    get singleLine(): boolean;
    set singleLine(value: boolean);
    get stroke(): number;
    set stroke(value: number);
    get strokeColor(): string;
    set strokeColor(value: string);
    get password(): boolean;
    set password(value: boolean);
    get keyboardType(): string;
    set keyboardType(value: string);
    set editable(value: boolean);
    get editable(): boolean;
    set maxLength(value: number);
    get maxLength(): number;
    set promptText(value: string);
    get promptText(): string;
    set restrict(value: string);
    get restrict(): string;
    get textWidth(): number;
    requestFocus(): void;
    protected handleSizeChanged(): void;
    setup_beforeAdd(buffer: ByteBuffer, beginPos: number): void;
}
