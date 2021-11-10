import { Controller } from "../Controller";
import { GTweener } from "../tween";
import { ByteBuffer } from "../utils";
/**
 * 与controller关联，eg：一张按钮中的图片可在控制器中不同帧中表现不同
 */
export declare class GearBase {
    static disableAllTweenEffect: boolean;
    _owner: any;
    protected _controller: Controller;
    protected _tweenConfig?: GearTweenConfig;
    dispose(): void;
    get controller(): Controller;
    set controller(val: Controller);
    get tweenConfig(): GearTweenConfig;
    setup(buffer: ByteBuffer): void;
    updateFromRelations(dx: number, dy: number): void;
    protected addStatus(pageId: string, buffer: ByteBuffer): void;
    protected init(): void;
    apply(): void;
    updateState(): void;
}
export declare class GearTweenConfig {
    tween: boolean;
    easeType: number;
    duration: number;
    delay: number;
    _displayLockToken: number;
    _tweener: GTweener;
    constructor();
}
