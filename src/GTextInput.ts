import { ByteBuffer } from './utils/ByteBuffer';
import { UIConfig } from './UIConfig';
import { GTextField } from './GTextField';
import { InputTextField } from './display/InputTextField';
import { UBBParser } from '.';
import { GBasicTextField } from './GBasicTextField';


export class InputType {
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


export class GTextInput extends GBasicTextField {

    constructor(scene: Phaser.Scene) {
        super(scene);
    }

    public createDisplayObject(): void {
        this._displayObject = this._textField = new InputTextField(this).setOrigin(0, 0);
    //     this._displayObject["$owner"] = this;
    //     this._displayObject.createInput();
    }
    

    public get nativeInput(): any {
        return this._textField;
    }

    public set text(value: string) {
        this._textField.text = value;
    }

    public get text(): string {
        return this._textField.text;
    }

    public get password(): boolean {
        return this.inputTextField.password;
    }

    public set password(value: boolean) {
        this.inputTextField.password = value;
    }

    public get keyboardType(): string {
        return this.inputTextField.type;
    }

    public set keyboardType(value: string) {
        this.inputTextField.keyboardType = value;
    }

    public set editable(value: boolean) {
        this.inputTextField.editable = value;
    }

    public get editable(): boolean {
        return this.inputTextField.editable;
    }

    public set maxLength(value: number) {
        this.inputTextField.maxLength = value;
        // this._input.maxChars = value;
    }

    public get maxLength(): number {
        return this.inputTextField.maxLength;
    }

    public set placeholder(value: string) {
        var str: string = UBBParser.inst.parse(value, true);
        this.inputTextField.placeholder = str;
        // if (UBBParser.inst.lastColor)
            // this._input.promptColor = UBBParser.inst.lastColor;
    }

    public get placeholder(): string {
        return this.inputTextField.placeholder;
    }

    public set restrict(value: string) {
        this.inputTextField.restrict = value;
    }

    public get restrict(): string {
        return this.inputTextField.restrict;
    }

    public requestFocus(): void {
        this.inputTextField.setFocus();

        super.requestFocus();
    }

    public setup_beforeAdd(buffer: ByteBuffer, beginPos: number): void {
        super.setup_beforeAdd(buffer, beginPos);

        buffer.seek(beginPos, 4);

        var str: string = buffer.readS();
        if (str != null)
            this.placeholder = str;

        str = buffer.readS();
        if (str != null)
            this.restrict = str;

        var iv: number = buffer.readInt();
        if (iv != 0)
            this.maxLength = iv;
        iv = buffer.readInt();
        if (iv != 0) {
            if (iv == 4)
                this.keyboardType = InputType.TYPE_NUMBER;
            else if (iv == 3)
                this.keyboardType = InputType.TYPE_URL;
        }
        if (buffer.readBool())
            this.password = true;
    }
    

    private get inputTextField() {
        return <InputTextField>this._textField;
    }
}