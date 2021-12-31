import { ByteBuffer } from './utils/ByteBuffer';
import { GObject } from './GObject';
import { HAlignModeString, VAlignModeString } from './display/text/Types';
export declare enum TextType {
    BASIC = 0,
    RICH = 1,
    INPUT = 2
}
export declare class GTextField extends GObject {
    protected _templateVars: {
        [index: string]: string;
    };
    protected _text: string;
    protected _autoSize: number;
    protected _widthAutoSize: boolean;
    protected _heightAutoSize: boolean;
    protected _ubbEnabled: boolean;
    protected _updatingSize: boolean;
    protected _align: HAlignModeString;
    protected _valign: VAlignModeString;
    protected _font: string;
    protected _fontSize: number;
    protected _color: string;
    protected _stroke: number;
    protected _strokeColor: string;
    /**
     * 行距
     */
    protected _lead: number;
    /**
     * 字距
     */
    protected _letterSpace: number;
    constructor(scene: Phaser.Scene, type: number);
    get font(): string;
    set font(value: string);
    get fontSize(): number;
    set fontSize(value: number);
    get color(): string;
    set color(value: string);
    get align(): HAlignModeString;
    set align(value: HAlignModeString);
    get valign(): VAlignModeString;
    set valign(value: VAlignModeString);
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
    setStroke(color: string, thickness: number): void;
    setShadowStyle(val: string): void;
    setShadowOffset(x: number, y: number): void;
    get strokeColor(): string;
    set strokeColor(value: string);
    set ubbEnabled(value: boolean);
    get ubbEnabled(): boolean;
    get autoSize(): number;
    set autoSize(value: number);
    protected updateAutoSize(): void;
    get textWidth(): number;
    protected parseTemplate(template: string): string;
    get templateVars(): {
        [index: string]: string;
    };
    set templateVars(value: {
        [index: string]: string;
    });
    setVar(name: string, value: string): GTextField;
    flushVars(): void;
    getProp(index: number): any;
    setProp(index: number, value: any): void;
    setup_beforeAdd(buffer: ByteBuffer, beginPos: number): void;
    protected updateSize(): void;
    protected doAlign(): void;
    typeset(): void;
    setup_afterAdd(buffer: ByteBuffer, beginPos: number): void;
}
