import { GTweener } from './../tween/GTweener';
import { ByteBuffer } from './../utils/ByteBuffer';
import { Controller } from './../Controller';
import { GObject } from './../GObject';
export declare class GearBase {
    static disableAllTweenEffect: boolean;
    protected _owner: GObject;
    protected _controller: Controller;
    protected _tweenConfig?: GearTweenConfig;
    static create(owner: GObject, index: number): GearBase;
    constructor(owner: GObject);
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
