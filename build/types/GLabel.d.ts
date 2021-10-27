import { ByteBuffer } from './utils/ByteBuffer';
import { GTextField } from './GTextField';
import { GObject } from './GObject';
import { GComponent } from "./GComponent";
export declare class GLabel extends GComponent {
    protected _titleObject: GObject;
    protected _iconObject: GObject;
    constructor(scene: Phaser.Scene, type: any);
    get icon(): string;
    set icon(value: string);
    get title(): string;
    set title(value: string);
    get text(): string;
    set text(value: string);
    get titleColor(): string;
    set titleColor(value: string);
    get titleFontSize(): number;
    set titleFontSize(value: number);
    get color(): string;
    set color(value: string);
    set editable(val: boolean);
    get editable(): boolean;
    getTextField(): GTextField;
    getProp(index: number): any;
    setProp(index: number, value: any): void;
    protected constructExtension(buffer: ByteBuffer): void;
    setup_afterAdd(buffer: ByteBuffer, beginPos: number): void;
}
