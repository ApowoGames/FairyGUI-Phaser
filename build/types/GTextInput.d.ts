import { ByteBuffer } from './utils/ByteBuffer';
import { GBasicTextField } from './GBasicTextField';
export declare class InputType {
    /** 常规文本域。*/
    static TYPE_TEXT: string;
    /** password 类型用于密码域输入。*/
    static TYPE_PASSWORD: string;
    /** email 类型用于应该包含 e-mail 地址的输入域。*/
    static TYPE_EMAIL: string;
    /** url 类型用于应该包含 URL 地址的输入域。*/
    static TYPE_URL: string;
    /** number 类型用于应该包含数值的输入域。*/
    static TYPE_NUMBER: string;
    /**
     * <p>range 类型用于应该包含一定范围内数字值的输入域。</p>
     * <p>range 类型显示为滑动条。</p>
     * <p>您还能够设定对所接受的数字的限定。</p>
     */
    static TYPE_RANGE: string;
    /**  选取日、月、年。*/
    static TYPE_DATE: string;
    /** month - 选取月、年。*/
    static TYPE_MONTH: string;
    /** week - 选取周和年。*/
    static TYPE_WEEK: string;
    /** time - 选取时间（小时和分钟）。*/
    static TYPE_TIME: string;
    /** datetime - 选取时间、日、月、年（UTC 时间）。*/
    static TYPE_DATE_TIME: string;
    /** datetime-local - 选取时间、日、月、年（本地时间）。*/
    static TYPE_DATE_TIME_LOCAL: string;
    /**
     * <p>search 类型用于搜索域，比如站点搜索或 Google 搜索。</p>
     * <p>search 域显示为常规的文本域。</p>
     */
    static TYPE_SEARCH: string;
}
export declare class GTextInput extends GBasicTextField {
    constructor(scene: Phaser.Scene, type: any);
    createDisplayObject(): void;
    get nativeInput(): any;
    set text(value: string);
    get text(): string;
    get password(): boolean;
    set password(value: boolean);
    get keyboardType(): string;
    set keyboardType(value: string);
    set editable(value: boolean);
    get editable(): boolean;
    set maxLength(value: number);
    get maxLength(): number;
    set placeholder(value: string);
    get placeholder(): string;
    set restrict(value: string);
    get restrict(): string;
    requestFocus(): void;
    init(): void;
    setup_beforeAdd(buffer: ByteBuffer, beginPos: number): void;
    private get inputTextField();
}
