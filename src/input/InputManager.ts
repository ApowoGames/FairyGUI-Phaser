import { InteractiveEvent } from './../event/DisplayObjectEvent';

export interface IInteractiveObj {
    fun: Function,
    context?: any,
}
export class InputManager {
    private _scene: Phaser.Scene;
    private _downHandlerMap: Map<Phaser.GameObjects.GameObject, IInteractiveObj>;
    private _upHandlerMap: Map<Phaser.GameObjects.GameObject, IInteractiveObj>;
    constructor() {
        this._downHandlerMap = new Map();
        this._upHandlerMap = new Map();
    }

    setScene(scene: Phaser.Scene) {
        this.removeListener();
        this._scene = scene;
        this.addListener();
    }

    destroy() {
        this._downHandlerMap.clear();
        this._downHandlerMap = null;
        this._upHandlerMap.clear();
        this._upHandlerMap = null;
        this.removeListener();
    }

    addToListener(type: string, gameObject: Phaser.GameObjects.GameObject, fun: Function, context: any) {
        switch (type) {
            case InteractiveEvent.GAMEOBJECT_DOWN:
                if (!this._downHandlerMap.get(gameObject)) this._downHandlerMap.set(gameObject, { fun, context });
                break;
            case InteractiveEvent.GAMEOBJECT_UP:
                if (!this._upHandlerMap.get(gameObject)) this._upHandlerMap.set(gameObject, { fun, context });
                break;
        }
    }

    removeFromListener(type: string, gameObject: Phaser.GameObjects.GameObject, context: any) {
        switch (type) {
            case InteractiveEvent.GAMEOBJECT_DOWN:
                if (this._downHandlerMap.get(gameObject)) this._downHandlerMap.delete(gameObject);
                break;
            case InteractiveEvent.GAMEOBJECT_UP:
                if (this._upHandlerMap.get(gameObject)) this._upHandlerMap.delete(gameObject);
                break;
        }
    }

    protected addListener() {
        this._scene.input.on(InteractiveEvent.GAMEOBJECT_DOWN, this.gameDown, this);
        this._scene.input.on(InteractiveEvent.GAMEOBJECT_UP, this.gameUp, this);
    }

    protected removeListener() {
        if (!this._scene) return;
        this._scene.input.off(InteractiveEvent.GAMEOBJECT_DOWN, this.gameDown, this);
        this._scene.input.off(InteractiveEvent.GAMEOBJECT_UP, this.gameUp, this);
    }

    protected gameDown(pointer: Phaser.Input.Pointer, gameObject: Phaser.GameObjects.GameObject) {
        const obj: IInteractiveObj = this._downHandlerMap.get(gameObject);
        if (obj) {
            const fun = obj.fun.call(obj.context || this, pointer, gameObject);
        }
    }

    protected gameUp(pointer: Phaser.Input.Pointer, gameObject: Phaser.GameObjects.GameObject) {
        const obj: IInteractiveObj = this._upHandlerMap.get(gameObject);
        if (obj) {
            const fun = obj.fun.call(obj.context || this, pointer, gameObject);
        }
    }



}