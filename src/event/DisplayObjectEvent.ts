import { GRoot } from "..";

export class DisplayObjectEvent {
    static XY_CHANGED = "__xyChanged";
    static SIZE_CHANGED = "__sizeChanged";
    static VISIBLE_CHANGED = "__visibleChanged";
    static SIZE_DELAY_CHANGE = "__sizeDelayChange";
    static MOUSE_WHEEL = "__mouseWheel";
    public static PULL_DOWN_RELEASE: string = "fui_pull_down_release";
    public static PULL_UP_RELEASE: string = "fui_pull_up_release";
}
export class InteractiveEvent {
    static POINTER_DOWN = "pointerdown";
    static POINTER_UP = "pointerup";
    static POINTER_OVER = "pointerover";
    static POINTER_OUT = "pointerout";
    static POINTER_MOVE = "pointermove";
    static GAMEOBJECT_DOWN = "gameobjectdown";
    static GAMEOBJECT_UP = "gameobjectup";
    static GAMEOBJECT_OVER = "gameobjectover";
    static GAMEOBJECT_OUT = "gameobjectout";
    static GAMEOBJECT_MOVE = "gameobjectmove";

    /** 事件类型。*/
    type: string;
    /** 原生浏览器事件。*/
    nativeEvent: any;
    /** 事件目标触发对象。*/
    target: Phaser.GameObjects.GameObject;
    /** 事件当前冒泡对象。*/
    currentTarget: Phaser.GameObjects.GameObject;
    /** @internal */
    _stoped: boolean;
    /** 分配给触摸点的唯一标识号（作为 int）。*/
    touchId: number;
    /**键盘值*/
    // keyCode: number;
    /**滚轮滑动增量*/
    // delta: number;

    /**
     * 设置事件数据。
     * @param	type 事件类型。
     * @param	currentTarget 事件目标触发对象。
     * @param	target 事件当前冒泡对象。
     * @return 返回当前 Event 对象。
     */
    setTo(type: string, currentTarget: Phaser.GameObjects.GameObject, target: Phaser.GameObjects.GameObject): DisplayObjectEvent {
        this.type = type;
        this.currentTarget = currentTarget;
        this.target = target;
        return this;
    }

    /**
     * 阻止对事件流中当前节点的后续节点中的所有事件侦听器进行处理。此方法不会影响当前节点 (currentTarget) 中的任何事件侦听器。
     */
    stopPropagation(): void {
        this._stoped = true;
    }

    /**
     * 触摸点列表。
     */
    get touches(): any[] {
        const arr = GRoot.inst.scene.input.manager.pointers;
        // if (!this.nativeEvent) return null;
        // var arr: any[] = this.nativeEvent.touches;
        // if (arr) {
        //     var stage: Stage = ILaya.stage;
        //     for (var i: number = 0, n: number = arr.length; i < n; i++) {
        //         var e: Phaser.Input.Pointer = arr[i];
        //         var point: Phaser.Geom.Point = new Phaser.Geom.Point();
        //         point.setTo(e.x, e.y);
        //         stage._canvasTransform.invertTransformPoint(point);
        //         stage.transform.invertTransformPoint(point);

        //         e.stageX = point.x;
        //         e.stageY = point.y;
        //     }
        // }
        return arr;
    }

    /**
     * 表示 Alt 键是处于活动状态 (true) 还是非活动状态 (false)。
     */
    // get altKey(): boolean {
    //     return this.nativeEvent.altKey;
    // }

    /**
     * 表示 Ctrl 键是处于活动状态 (true) 还是非活动状态 (false)。
     */
    // get ctrlKey(): boolean {
    //     return this.nativeEvent.ctrlKey;
    // }

    /**
     * 表示 Shift 键是处于活动状态 (true) 还是非活动状态 (false)。
     */
    // get shiftKey(): boolean {
    //     return this.nativeEvent.shiftKey;
    // }

    /**
     * 包含按下或释放的键的字符代码值。字符代码值为英文键盘值。
     */
    // get charCode(): boolean {
    //     return this.nativeEvent.charCode;
    // }

    /**
     * 表示键在键盘上的位置。这对于区分在键盘上多次出现的键非常有用。<br>
     * 例如，您可以根据此属性的值来区分左 Shift 键和右 Shift 键：左 Shift 键的值为 KeyLocation.LEFT，右 Shift 键的值为 KeyLocation.RIGHT。另一个示例是区分标准键盘 (KeyLocation.STANDARD) 与数字键盘 (KeyLocation.NUM_PAD) 上按下的数字键。
     */
    // get keyLocation(): number {
    //     return this.nativeEvent.location || this.nativeEvent.keyLocation;
    // }

    // /**鼠标在 Stage 上的 X 轴坐标*/
    // get stageX(): number {
    //     return ILaya.stage.mouseX;
    // }

    // /**鼠标在 Stage 上的 Y 轴坐标*/
    // get stageY(): number {
    //     return ILaya.stage.mouseY;
    // }
}
