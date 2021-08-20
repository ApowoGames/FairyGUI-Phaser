import { HitArea } from './HitArea';
import { GObject } from './../GObject';
export declare class ChildHitArea extends HitArea {
    private _child;
    private _reversed;
    private _tPos;
    constructor(child: GObject, reversed?: boolean);
    contains(x: number, y: number): boolean;
}
