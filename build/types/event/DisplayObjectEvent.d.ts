export declare class DisplayObjectEvent {
    static XY_CHANGED: string;
    static SIZE_CHANGED: string;
    static VISIBLE_CHANGED: string;
    static SIZE_DELAY_CHANGE: string;
    static MOUSE_WHEEL: string;
    static PULL_DOWN_RELEASE: string;
    static PULL_UP_RELEASE: string;
}
export declare class InteractiveEvent {
    static POINTER_DOWN: string;
    static POINTER_UP: string;
    static POINTER_OVER: string;
    static POINTER_OUT: string;
    static POINTER_MOVE: string;
    static GAMEOBJECT_DOWN: string;
    static GAMEOBJECT_UP: string;
    static GAMEOBJECT_OVER: string;
    static GAMEOBJECT_OUT: string;
    static GAMEOBJECT_MOVE: string;
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
    /**滚轮滑动增量*/
    /**
     * 设置事件数据。
     * @param	type 事件类型。
     * @param	currentTarget 事件目标触发对象。
     * @param	target 事件当前冒泡对象。
     * @return 返回当前 Event 对象。
     */
    setTo(type: string, currentTarget: Phaser.GameObjects.GameObject, target: Phaser.GameObjects.GameObject): DisplayObjectEvent;
    /**
     * 阻止对事件流中当前节点的后续节点中的所有事件侦听器进行处理。此方法不会影响当前节点 (currentTarget) 中的任何事件侦听器。
     */
    stopPropagation(): void;
    /**
     * 触摸点列表。
     */
    get touches(): any[];
}
