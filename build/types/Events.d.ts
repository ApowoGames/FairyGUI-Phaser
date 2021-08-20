import { InteractiveEvent } from "./event/DisplayObjectEvent";
export declare class Events {
    static STATE_CHANGED: string;
    static XY_CHANGED: string;
    static SIZE_CHANGED: string;
    static SIZE_DELAY_CHANGE: string;
    static CLICK_ITEM: string;
    static SCROLL: string;
    static SCROLL_END: string;
    static DROP: string;
    static DRAG_START: string;
    static DRAG_MOVE: string;
    static DRAG_END: string;
    static PULL_DOWN_RELEASE: string;
    static PULL_UP_RELEASE: string;
    static GEAR_STOP: string;
    static $event: InteractiveEvent;
    static createEvent(type: string, target: Phaser.GameObjects.GameObject, source?: {
        target?: Phaser.GameObjects.Container;
        touchId?: number;
    }): InteractiveEvent;
    static dispatch(type: string, target: Phaser.GameObjects.GameObject, source?: {
        target?: Phaser.GameObjects.GameObject;
        touchId?: number;
    }): void;
}
