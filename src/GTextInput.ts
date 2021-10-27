import { ByteBuffer } from './utils/ByteBuffer';
import { UIConfig } from './UIConfig';
import { GTextField } from './GTextField';
import { InputTextField } from './display/InputTextField';
import { UBBParser } from '.';


export class Input extends Text {
    /** 常规文本域。*/
    static TYPE_TEXT: string = "text";
    /** password 类型用于密码域输入。*/
    static TYPE_PASSWORD: string = "password";
    /** email 类型用于应该包含 e-mail 地址的输入域。*/
    static TYPE_EMAIL: string = "email";
    /** url 类型用于应该包含 URL 地址的输入域。*/
    static TYPE_URL: string = "url";
    /** number 类型用于应该包含数值的输入域。*/
    static TYPE_NUMBER: string = "number";
    /**
     * <p>range 类型用于应该包含一定范围内数字值的输入域。</p>
     * <p>range 类型显示为滑动条。</p>
     * <p>您还能够设定对所接受的数字的限定。</p>
     */
    static TYPE_RANGE: string = "range";
    /**  选取日、月、年。*/
    static TYPE_DATE: string = "date";
    /** month - 选取月、年。*/
    static TYPE_MONTH: string = "month";
    /** week - 选取周和年。*/
    static TYPE_WEEK: string = "week";
    /** time - 选取时间（小时和分钟）。*/
    static TYPE_TIME: string = "time";
    /** datetime - 选取时间、日、月、年（UTC 时间）。*/
    static TYPE_DATE_TIME: string = "datetime";
    /** datetime-local - 选取时间、日、月、年（本地时间）。*/
    static TYPE_DATE_TIME_LOCAL: string = "datetime-local";
    /**
     * <p>search 类型用于搜索域，比如站点搜索或 Google 搜索。</p>
     * <p>search 域显示为常规的文本域。</p>
     */
    static TYPE_SEARCH: string = "search";
}


export class GTextInput extends GTextField {
    private _input: any;

    private _prompt: string;

    constructor(scene: Phaser.Scene, type) {
        super(scene, type);
    }

    public createDisplayObject(): void {
        this._displayObject = this._input = new InputTextField(this.scene);
        // this._displayObject.mouseEnabled = true;
        this._displayObject["$owner"] = this;
        this._displayObject.createInput();
    }

    public get nativeInput(): any {
        return this._input;
    }

    public set text(value: string) {
        this._input.text = value;
    }

    public get text(): string {
        return this._input.text;
    }

    public get font(): string {
        return this._input.font;
    }

    public set font(value: string) {
        if (value)
            this._input.font = value;
        else
            this._input.font = UIConfig.defaultFont;
    }

    public get fontSize(): number {
        return this._input.fontSize;
    }

    public set fontSize(value: number) {
        this._input.fontSize = value;
    }

    public get color(): string {
        return this._input.color;
    }

    public set color(value: string) {
        this._input.color = value;
    }

    public get align(): string {
        return this._input.align;
    }

    public set align(value: string) {
        this._input.align = value;
    }

    public get valign(): string {
        return this._input.valign;
    }

    public set valign(value: string) {
        this._input.valign = value;
    }

    public get leading(): number {
        return this._input.leading;
    }

    public set leading(value: number) {
        this._input.leading = value;
    }

    public get bold(): boolean {
        return this._input.bold;
    }

    public set bold(value: boolean) {
        this._input.bold = value;
    }

    public get italic(): boolean {
        return this._input.italic;
    }

    public set italic(value: boolean) {
        this._input.italic = value;
    }

    public get singleLine(): boolean {
        return !this._input.multiline;
    }

    public set singleLine(value: boolean) {
        this._input.multiline = !value;
    }

    public get stroke(): number {
        return this._input.stroke;
    }

    public set stroke(value: number) {
        this._input.stroke = value;
    }

    public get strokeColor(): string {
        return this._input.strokeColor;
    }

    public set strokeColor(value: string) {
        this._input.strokeColor = value;
        this.updateGear(4);
    }

    public get password(): boolean {
        return this._input.type == "password";
    }

    public set password(value: boolean) {
        if (value)
            this._input.type = "password";
        else
            this._input.type = "text";
    }

    public get keyboardType(): string {
        return this._input.type;
    }

    public set keyboardType(value: string) {
        this._input.type = value;
    }

    public set editable(value: boolean) {
        this._input.editable = value;
    }

    public get editable(): boolean {
        return this._input.editable;
    }

    public set maxLength(value: number) {
        this._input.maxChars = value;
    }

    public get maxLength(): number {
        return this._input.maxChars;
    }

    public set promptText(value: string) {
        this._prompt = value;
        var str: string = UBBParser.inst.parse(value, true);
        this._input.prompt = str;
        if (UBBParser.inst.lastColor)
            this._input.promptColor = UBBParser.inst.lastColor;
    }

    public get promptText(): string {
        return this._prompt;
    }

    public set restrict(value: string) {
        this._input.restrict = value;
    }

    public get restrict(): string {
        return this._input.restrict;
    }

    public get textWidth(): number {
        return this._input.textWidth;
    }

    public requestFocus(): void {
        this._input.focus = true;

        super.requestFocus();
    }

    protected handleSizeChanged(): void {
        this._input.size(this._width, this._height);
    }

    public setup_beforeAdd(buffer: ByteBuffer, beginPos: number): void {
        super.setup_beforeAdd(buffer, beginPos);

        buffer.seek(beginPos, 4);

        var str: string = buffer.readS();
        if (str != null)
            this.promptText = str;

        str = buffer.readS();
        if (str != null)
            this._input.restrict = str;

        var iv: number = buffer.readInt();
        if (iv != 0)
            this._input.maxChars = iv;
        iv = buffer.readInt();
        if (iv != 0) {
            if (iv == 4)
                this.keyboardType = Input.TYPE_NUMBER;
            else if (iv == 3)
                this.keyboardType = Input.TYPE_URL;
        }
        if (buffer.readBool())
            this.password = true;
    }
}