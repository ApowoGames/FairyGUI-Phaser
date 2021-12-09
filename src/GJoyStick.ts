import { ByteBuffer, GComponent, GObject, InteractiveEvent } from ".";

export class GJoyStick extends GComponent {
    /**
     * 摇杆触控最大偏移
     */
    public static BIG_RANGE: number = 100;
    /**
     * 摇杆背景
     */
    private _bg: GObject;
    /**
     * 摇杆按钮
     */
    private _btn: GObject;
    /**
     * 摇杆
     */
    private _handle?: GObject;
    /**
     * 摇杆垫片
     */
    private _gasKet?: GObject;

    private _down: boolean = false;

    private bgRadius: number;

    private _downPos: Phaser.Geom.Point;
    constructor(scene: Phaser.Scene, type) {
        super(scene, type);
        this._downPos = new Phaser.Geom.Point();
    }

    public addEventListener() {
        this.removeEventListener();
        this.on(InteractiveEvent.GAMEOBJECT_DOWN, this.downHandler, this);
        this.scene.input.on(InteractiveEvent.GAMEOBJECT_UP, this.upHandler, this);
    }

    public removeEventListener() {
        this.scene.input.off(InteractiveEvent.GAMEOBJECT_MOVE, this.pointerMove, this);
        this.off(InteractiveEvent.GAMEOBJECT_DOWN, this.downHandler, this);
        this.scene.input.off(InteractiveEvent.GAMEOBJECT_UP, this.upHandler, this);
    }

    private downHandler(pointer, gameoject) {
        if (this._down) return;
        // if (gameojectList) {
        //     if (gameojectList.length > 1) {
        //         return;
        //     } else if (gameojectList.length === 1) {
        //         if (gameojectList[0].name) {
        //             if (gameojectList[0].name !== "joystick_btn") {
        //                 return;
        //             }
        //         } else {
        //             return;
        //         }
        //     }
        // }
        this._down = true;
        this._downPos.setTo(pointer.x, pointer.y);
        this.scene.input.on(InteractiveEvent.GAMEOBJECT_MOVE, this.pointerMove, this);
        // 由于app环境下，游戏在浏览器中是全屏模式，所以需要在点击事件上除以当前UIscale调整位置
        // this.x = pointer.worldX;
        // this.y = pointer.worldY;
        // this.visible = true;
    }

    private pointerMove(pointer) {
        if (!this._down) return;
        const worldMatrix = (<Phaser.GameObjects.Container>this._displayObject).getWorldTransformMatrix();
        const dragX = pointer.worldX - worldMatrix.tx - this._width / 2;
        const dragY = pointer.worldY - worldMatrix.ty - this._height / 2;
        const length = Math.sqrt(dragX * dragX + dragY * dragY);
        const normalizeX = dragX / length;
        const normalizeY = dragY / length;
        let vecX = dragX;
        let vecY = dragY;
        if (length > this.bgRadius) {
            vecX = normalizeX * this.bgRadius;
            vecY = normalizeY * this.bgRadius;
        }
        const r = Math.atan2(vecY, vecX);
        const angle = r * 180 / Math.PI;

        this._btn.x = vecX + this._btn._width / 2;
        this._btn.y = vecY + this._btn._height / 2;

    }

    private upHandler(pointer?: Phaser.Geom.Point) {
        console.log("up ===>");
        this._btn.x = this._width - this._btn._width >> 1;
        this._btn.y = this._height - this._btn._height >> 1;
        this._down = false;
        // this.visible = false;
        this.off(InteractiveEvent.GAMEOBJECT_MOVE, this.pointerMove, this);
        // if (!(this.mWorld.inputManager as JoyStickManager).enable) {
        //     return;
        // }
        // this.mJoyListeners.forEach((l: InputListener) => {
        //     if (this.checkdragUp()) {
        //         l.upHandler();
        //     }
        // });
    }

    // private checkdragDown(l: InputListener, r: number): boolean {
    //     let dir: number;
    //     let keyArr: number[] = [];
    //     if (r <= 0 && r > (-Math.PI / 2)) {
    //         dir = r !== 0 ? Direction.right_up : Direction.right;
    //     } else if (r <= (-Math.PI / 2) && r > (-Math.PI)) {
    //         dir = r !== (-Math.PI / 2) ? Direction.up_left : Direction.up;
    //     } else if (r > (Math.PI / 2) && r <= Math.PI) {
    //         dir = r !== Math.PI ? Direction.left_down : Direction.left;
    //     } else if (r > 0 && r <= (Math.PI / 2)) {
    //         dir = r !== Math.PI / 2 ? Direction.down_right : Direction.down;
    //     }
    //     keyArr = this.getKeys(dir);
    //     if (this.mdownStr === keyArr.toString()) return false;
    //     this.mdownStr = keyArr.toString();
    //     l.downHandler(dir, keyArr);
    //     // if (!(this.mWorld.inputManager as JoyStickManager).enable) {
    //     //     return false;
    //     // }
    //     this.mWorld.roomManager.currentRoom.playerManager.actor.setDirection(dir);
    //     return true;
    // }

    public setup_afterAdd(buffer: ByteBuffer, beginPos: number) {
        super.setup_afterAdd(buffer, beginPos);
        this.addEventListener();
    }

    protected constructExtension(buffer: ByteBuffer): Promise<void> {
        return new Promise((resolve) => {
            this._bg = this.getChild("bg");
            this._btn = this.getChild("btn");
            this._handle = this.getChild("handle");
            this._gasKet = this.getChild("gasket");

            this.bgRadius = this._bg._width + GJoyStick.BIG_RANGE >> 1;
            resolve();
        });
    }



}