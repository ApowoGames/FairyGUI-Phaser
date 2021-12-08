import { ByteBuffer, GComponent } from ".";
export declare class GJoyStick extends GComponent {
    /**
     * 摇杆触控最大偏移
     */
    static BIG_RANGE: number;
    /**
     * 摇杆背景
     */
    private _bg;
    /**
     * 摇杆按钮
     */
    private _btn;
    /**
     * 摇杆
     */
    private _handle?;
    /**
     * 摇杆垫片
     */
    private _gasKet?;
    private _down;
    private bgRadius;
    private _downPos;
    constructor(scene: Phaser.Scene, type: any);
    addEventListener(): void;
    removeEventListener(): void;
    private downHandler;
    private pointerMove;
    private upHandler;
    setup_afterAdd(buffer: ByteBuffer, beginPos: number): void;
    protected constructExtension(buffer: ByteBuffer): Promise<void>;
}
