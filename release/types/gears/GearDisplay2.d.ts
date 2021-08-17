import { GObject } from './../GObject';
import { GearBase } from './GearBase';
export declare class GearDisplay2 extends GearBase {
    pages: string[];
    condition: number;
    private _visible;
    constructor(owner: GObject);
    protected init(): void;
    apply(): void;
    evaluate(connected: boolean): boolean;
}
