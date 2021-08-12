namespace fgui {
    export class DisplayObjectEvent {
        static XY_CHANGED = "__xyChanged";
        static SIZE_CHANGED = "__sizeChanged";
        static VISIBLE_CHANGED = "__visibleChanged";
        static SIZE_DELAY_CHANGE = "__sizeDelayChange";
        static MOUSE_WHEEL = "__mouseWheel"
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
    }
}