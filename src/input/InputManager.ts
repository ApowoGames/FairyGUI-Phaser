import { InteractiveEvent } from './../event/DisplayObjectEvent';

export interface IInteractiveObj {
    fun: Function,
    context?: any,
}
export class InputManager {
    private _scene: Phaser.Scene;
    private _downHandlerMap: Map<Phaser.GameObjects.GameObject, IInteractiveObj>;
    private _upHandlerMap: Map<Phaser.GameObjects.GameObject, IInteractiveObj>;
    private _moveHandlerMap: Map<Phaser.GameObjects.GameObject, IInteractiveObj>;
    private _overHandlerMap: Map<Phaser.GameObjects.GameObject, IInteractiveObj>;
    private _outHandlerMap: Map<Phaser.GameObjects.GameObject, IInteractiveObj>;
    constructor() {
        this._downHandlerMap = new Map();
        this._upHandlerMap = new Map();
        this._moveHandlerMap = new Map();
        this._overHandlerMap = new Map();
        this._outHandlerMap = new Map();
    }

    setScene(scene: Phaser.Scene) {
        this.removeListener();
        this._scene = scene;
        this.addListener();
    }

    clear() {
        // 切换ui，把上一个ui监听的函数全部清空
        this._downHandlerMap.clear();
        this._upHandlerMap.clear();
        this._moveHandlerMap.clear();
        this._overHandlerMap.clear();
        this._outHandlerMap.clear();
    }

    destroy() {
        this.clear();
        this._downHandlerMap = null;
        this._upHandlerMap = null;
        this._moveHandlerMap = null;
        this._overHandlerMap = null;
        this._outHandlerMap = null;
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
            case InteractiveEvent.GAMEOBJECT_MOVE:
                if (!this._moveHandlerMap.get(gameObject)) this._moveHandlerMap.set(gameObject, { fun, context });
                break;
            case InteractiveEvent.GAMEOBJECT_OVER:
                if (!this._overHandlerMap.get(gameObject)) this._overHandlerMap.set(gameObject, { fun, context });
                break;
            case InteractiveEvent.GAMEOBJECT_OUT:
                if (!this._outHandlerMap.get(gameObject)) this._outHandlerMap.set(gameObject, { fun, context });
                break;
            default:
                gameObject.on(type, fun, context);
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
            case InteractiveEvent.GAMEOBJECT_MOVE:
                if (!this._moveHandlerMap.get(gameObject)) this._moveHandlerMap.delete(gameObject);
                break;
            case InteractiveEvent.GAMEOBJECT_OVER:
                if (!this._overHandlerMap.get(gameObject)) this._overHandlerMap.delete(gameObject);
                break;
            case InteractiveEvent.GAMEOBJECT_OUT:
                if (!this._outHandlerMap.get(gameObject)) this._outHandlerMap.delete(gameObject);
                break;
            default:
                gameObject.off(type, context);
                break;
        }
    }

    protected addListener() {
        this._scene.input.on(InteractiveEvent.GAMEOBJECT_DOWN, this.gameDown, this);
        this._scene.input.on(InteractiveEvent.GAMEOBJECT_UP, this.gameUp, this);
        this._scene.input.on(InteractiveEvent.GAMEOBJECT_MOVE, this.gameMove, this);
        this._scene.input.on(InteractiveEvent.GAMEOBJECT_OVER, this.gameOver, this);
        this._scene.input.on(InteractiveEvent.GAMEOBJECT_OUT, this.gameOut, this);
    }

    protected removeListener() {
        if (!this._scene) return;
        this._scene.input.off(InteractiveEvent.GAMEOBJECT_DOWN, this.gameDown, this);
        this._scene.input.off(InteractiveEvent.GAMEOBJECT_UP, this.gameUp, this);
        this._scene.input.off(InteractiveEvent.GAMEOBJECT_MOVE, this.gameMove, this);
        this._scene.input.off(InteractiveEvent.GAMEOBJECT_OVER, this.gameOver, this);
        this._scene.input.off(InteractiveEvent.GAMEOBJECT_OUT, this.gameOut, this);
    }

    protected gameOver(pointer: Phaser.Input.Pointer, gameObject: Phaser.GameObjects.GameObject) {
        const obj: IInteractiveObj = this._overHandlerMap.get(gameObject);
        if (obj) {
            obj.fun.call(obj.context || this, pointer, gameObject);
        }
    }

    protected gameOut(pointer: Phaser.Input.Pointer, gameObject: Phaser.GameObjects.GameObject) {
        const obj: IInteractiveObj = this._outHandlerMap.get(gameObject);
        if (obj) {
            obj.fun.call(obj.context || this, pointer, gameObject);
        }
    }

    protected gameDown(pointer: Phaser.Input.Pointer, gameObject: Phaser.GameObjects.GameObject) {
        const obj: IInteractiveObj = this._downHandlerMap.get(gameObject);
        if (obj) {
            obj.fun.call(obj.context || this, pointer, gameObject);
        }
    }

    protected gameUp(pointer: Phaser.Input.Pointer, gameObject: Phaser.GameObjects.GameObject) {
        const obj: IInteractiveObj = this._upHandlerMap.get(gameObject);
        if (obj) {
            obj.fun.call(obj.context || this, pointer, gameObject);
        }
    }

    protected gameMove(pointer: Phaser.Input.Pointer, gameObject: Phaser.GameObjects.GameObject) {
        const obj: IInteractiveObj = this._moveHandlerMap.get(gameObject);
        if (obj) {
            obj.fun.call(obj.context || this, pointer, gameObject);
        }
    }



}