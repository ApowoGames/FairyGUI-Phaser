import { InteractiveEvent } from './event/DisplayObjectEvent';
import { ByteBuffer } from './utils/ByteBuffer';
import { ScrollPane } from './ScrollPane';
import { GObject } from './GObject';
import { GComponent } from "./GComponent";

export class GScrollBar extends GComponent {
    private _grip: GObject;
    private _arrowButton1: GObject;
    private _arrowButton2: GObject;
    private _bar: GObject;
    private _target: ScrollPane;

    private _vertical: boolean;
    private _scrollPerc: number;
    private _fixedGripSize: boolean;

    private _dragOffset: Phaser.Geom.Point;
    private _gripDragging: boolean;

    constructor(scene: Phaser.Scene, type) {
        super(scene, type);
        this._dragOffset = new Phaser.Geom.Point();
        this._scrollPerc = 0;
    }

    public get hasDrag(): boolean {
        return this._gripDragging;
    }

    public setScrollPane(target: ScrollPane, vertical: boolean): void {
        this._target = target;
        this._vertical = vertical;
    }

    public setDisplayPerc(value: number) {
        if (this._vertical) {
            if (!this._fixedGripSize)
                this._grip.height = Math.floor(value * this._bar.height);
            this._grip.y = this._bar.y + (this._bar.height - this._grip.height) * this._scrollPerc;

        }
        else {
            if (!this._fixedGripSize)
                this._grip.width = Math.floor(value * this._bar.width);
            this._grip.x = this._bar.x + (this._bar.width - this._grip.width) * this._scrollPerc;
        }
        this._grip.visible = value != 0 && value != 1;
    }

    public setScrollPerc(val: number) {
        this._scrollPerc = val;
        if (this._vertical) {
            this._grip.y = this._bar.y + (this._bar.height - this._grip.height) * this._scrollPerc;
        }
        else
            this._grip.x = this._bar.x + (this._bar.width - this._grip.width) * this._scrollPerc;
    }

    public get minSize(): number {
        if (this._vertical)
            return (this._arrowButton1 ? this._arrowButton1.height : 0) + (this._arrowButton2 ? this._arrowButton2.height : 0);
        else
            return (this._arrowButton1 ? this._arrowButton1.width : 0) + (this._arrowButton2 ? this._arrowButton2.width : 0);
    }

    public get gripDragging(): boolean {
        return this._gripDragging;
    }

    protected constructExtension(buffer: ByteBuffer): Promise<void> {
        return new Promise((resolve, reject) => {
            buffer.seek(0, 6);

            this._fixedGripSize = buffer.readBool();

            this._grip = this.getChild("grip");
            if (!this._grip) {
                console.log("需要定义grip");
                return;
            }

            this._bar = this.getChild("bar");
            if (!this._bar) {
                console.log("需要定义bar");
                return;
            }

            this._arrowButton1 = this.getChild("arrow1");
            this._arrowButton2 = this.getChild("arrow2");

            this._grip.on(InteractiveEvent.GAMEOBJECT_DOWN, this.__gripMouseDown, this);

            if (this._arrowButton1)
                this._arrowButton1.on(InteractiveEvent.GAMEOBJECT_DOWN, this.__arrowButton1Click, this);
            if (this._arrowButton2)
                this._arrowButton2.on(InteractiveEvent.GAMEOBJECT_DOWN, this.__arrowButton2Click, this);

            this.on(InteractiveEvent.GAMEOBJECT_DOWN, this.__barMouseDown, this);
            resolve();
        });
    }

    private __gripMouseDown(pointer: Phaser.Input.Pointer): void {

        this._gripDragging = true;
        this._target.updateScrollBarVisible();

        this.scene.input.on(InteractiveEvent.GAMEOBJECT_MOVE, this.__gripMouseMove, this);
        this.scene.input.on(InteractiveEvent.GAMEOBJECT_UP, this.__gripMouseUp, this);

        // this.globalToLocal(pointer.x, pointer.y, this._dragOffset);
        this._dragOffset.x = pointer.worldX - this._grip.x;
        this._dragOffset.y = pointer.worldY - this._grip.y;
    }

    private __gripMouseMove(pointer: Phaser.Input.Pointer): void {
        if (!this.onStage)
            return;

        // var pt: Phaser.Geom.Point = this.globalToLocal(pointer.x, pointer.y, s_vec2);
        if (this._vertical) {
            var curY: number = pointer.worldY - this._dragOffset.y;
            this._target.setPercY((curY) / (this._bar.height - this._grip.height), false);
        }
        else {
            var curX: number = pointer.worldX - this._dragOffset.x;
            this._target.setPercX((curX) / (this._bar.width - this._grip.width), false);
        }
    }

    private __gripMouseUp(pointer: Phaser.Input.Pointer): void {
        if (!this.onStage)
            return;

        this.scene.input.off(InteractiveEvent.GAMEOBJECT_MOVE, this.__gripMouseMove, this);
        this.scene.input.off(InteractiveEvent.GAMEOBJECT_UP, this.__gripMouseUp, this);

        this._gripDragging = false;
        this._target.updateScrollBarVisible();
    }

    private __arrowButton1Click(pointer: Phaser.Input.Pointer): void {
        if (this._vertical)
            this._target.scrollUp();
        else
            this._target.scrollLeft();
    }

    private __arrowButton2Click(pointer: Phaser.Input.Pointer): void {
        if (this._vertical)
            this._target.scrollDown();
        else
            this._target.scrollRight();
    }

    private __barMouseDown(pointer: Phaser.Input.Pointer): void {
        // var pt: Phaser.Geom.Point = this._grip.globalToLocal(pointer.x, pointer.y, s_vec2);
        if (this._vertical) {
            if (pointer.y < 0)
                this._target.scrollUp(4);
            else
                this._target.scrollDown(4);
        }
        else {
            if (pointer.x < 0)
                this._target.scrollLeft(4);
            else
                this._target.scrollRight(4);
        }
    }
}

// var s_vec2: Phaser.Geom.Point = new Phaser.Geom.Point();
