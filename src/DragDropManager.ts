import { Events } from './Events';
import { ObjectType } from './FieldTypes';
import { GObject } from './GObject';
import { GLoader } from './GLoader';
import { GRoot } from '.';
export class DragDropManager {

    private _agent: GLoader;
    private _sourceData: any;

    private static _inst: DragDropManager;
    public static get inst(): DragDropManager {
        if (!DragDropManager._inst)
            DragDropManager._inst = new DragDropManager();
        return DragDropManager._inst;
    }

    constructor() {
        this._agent = new GLoader(GRoot.inst.scene, ObjectType.Loader);
        this._agent.draggable = true;
        this._agent.touchable = false;////important
        this._agent.setSize(100, 100);
        this._agent.setPivot(0.5, 0.5, true);
        this._agent.align = "center";
        this._agent.verticalAlign = "middle";
        this._agent.sortingOrder = 1000000;
        this._agent.displayObject.on("dragend", this.__dragEnd, this);
    }

    public get dragAgent(): GObject {
        return this._agent;
    }

    public get dragging(): boolean {
        return this._agent.parent != null;
    }

    public startDrag(source: GObject, icon: string, sourceData?: any, touchID?: number): void {
        if (this._agent.parent)
            return;

        this._sourceData = sourceData;
        this._agent.url = icon;
        GRoot.inst.addChild(this._agent);
        var pt: Phaser.Geom.Point = new Phaser.Geom.Point(GRoot.inst.scene.input.activePointer.worldX, GRoot.inst.scene.input.activePointer.worldY);
        this._agent.setXY(pt.x, pt.y);
        this._agent.startDrag(touchID);
    }

    public cancel(): void {
        if (this._agent.parent) {
            this._agent.stopDrag();
            GRoot.inst.removeChild(this._agent);
            this._sourceData = null;
        }
    }

    private __dragEnd(evt: any): void {
        if (!this._agent.parent) //cancelled
            return;

        GRoot.inst.removeChild(this._agent);

        var sourceData: any = this._sourceData;
        this._sourceData = null;

        var obj: GObject = GObject.cast(evt.target);
        while (obj) {
            if (obj.displayObject.input.dropZone) {
                obj.requestFocus();
                obj.displayObject.emit(Events.DROP, [sourceData, Events.createEvent(Events.DROP, obj.displayObject, evt)]);
                return;
            }

            obj = obj.parent;
        }
    }
}
