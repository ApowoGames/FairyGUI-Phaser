export declare class DOMEventManager extends Phaser.Events.EventEmitter {
    static inst: DOMEventManager;
    constructor();
    private notifyResizeEvents;
    private onMouseWheel;
    private retEvent;
    private lowestDelta;
    private nullLowestDeltaTimeout;
    private nullLowestDelta;
    /*******************keys*******************/
    private $pressedKeys;
    private $releasedKeys;
    private $downKeys;
    isKeyDown(key: number): boolean;
    isKeyPressed(key: number): boolean;
    isKeyReleased(key: number): boolean;
    private onWindowKeyDown;
    private onWindowKeyUp;
}
