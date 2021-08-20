import { GObject } from './GObject';
export declare class DragDropManager {
    private _agent;
    private _sourceData;
    private static _inst;
    static get inst(): DragDropManager;
    constructor();
    get dragAgent(): GObject;
    get dragging(): boolean;
    startDrag(source: GObject, icon: string, sourceData?: any, touchID?: number): void;
    cancel(): void;
    private __dragEnd;
}
