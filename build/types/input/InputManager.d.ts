export interface IInteractiveObj {
    fun: Function;
    context?: any;
}
export declare class InputManager {
    private _scene;
    private _downHandlerMap;
    private _upHandlerMap;
    constructor();
    setScene(scene: Phaser.Scene): void;
    clear(): void;
    destroy(): void;
    addToListener(type: string, gameObject: Phaser.GameObjects.GameObject, fun: Function, context: any): void;
    removeFromListener(type: string, gameObject: Phaser.GameObjects.GameObject, context: any): void;
    protected addListener(): void;
    protected removeListener(): void;
    protected gameDown(pointer: Phaser.Input.Pointer, gameObject: Phaser.GameObjects.GameObject): void;
    protected gameUp(pointer: Phaser.Input.Pointer, gameObject: Phaser.GameObjects.GameObject): void;
}
