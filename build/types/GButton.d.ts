import { ByteBuffer } from './utils/ByteBuffer';
import { GTextField } from './GTextField';
import { Controller } from './Controller';
import { GObject } from './GObject';
import { GComponent } from "./GComponent";
export declare class GButton extends GComponent {
    protected _titleObject: GObject;
    protected _iconObject: GObject;
    private _mode;
    private _selected;
    private _title;
    private _selectedTitle;
    private _icon;
    private _selectedIcon;
    private _sound;
    private _soundVolumeScale;
    private _buttonController;
    private _relatedController;
    private _relatedPageId;
    private _changeStateOnClick;
    private _linkedPopup?;
    private _downEffect;
    private _downEffectValue;
    private _downScaled?;
    private _down;
    private _over;
    static UP: string;
    static DOWN: string;
    static OVER: string;
    static SELECTED_OVER: string;
    static DISABLED: string;
    static SELECTED_DISABLED: string;
    constructor(scene: Phaser.Scene, type: any);
    createDisplayObject(): void;
    get icon(): string;
    set icon(value: string);
    get selectedIcon(): string;
    set selectedIcon(value: string);
    get title(): string;
    set title(value: string);
    get text(): string;
    set text(value: string);
    get selectedTitle(): string;
    set selectedTitle(value: string);
    get titleColor(): string;
    set titleColor(value: string);
    get titleFontSize(): number;
    set titleFontSize(value: number);
    get sound(): string;
    set sound(val: string);
    get soundVolumeScale(): number;
    set soundVolumeScale(value: number);
    set selected(val: boolean);
    get selected(): boolean;
    get mode(): number;
    set mode(value: number);
    get relatedController(): Controller;
    set relatedController(val: Controller);
    get relatedPageId(): string;
    set relatedPageId(val: string);
    get changeStateOnClick(): boolean;
    set changeStateOnClick(value: boolean);
    get linkedPopup(): GObject;
    set linkedPopup(value: GObject);
    getTextField(): GTextField;
    protected setState(val: string): void;
    setSize(wv: number, hv: number, ignorePivot?: boolean): void;
    protected handleSizeChanged(): void;
    handleControllerChanged(c: Controller): void;
    protected handleGrayedChanged(): void;
    getProp(index: number): any;
    setProp(index: number, value: any): void;
    protected constructExtension(buffer: ByteBuffer): void;
    addListener(): void;
    removeListener(): void;
    setup_beforeAdd(buffer: ByteBuffer, beginPos: number): void;
    setup_afterAdd(buffer: ByteBuffer, beginPos: number): void;
    constructFromResource2(objectPool: GObject[], poolIndex: number): Promise<void>;
    private __rollover;
    private __rollout;
    private __mousedown;
    private __mouseup;
    private __click;
}
