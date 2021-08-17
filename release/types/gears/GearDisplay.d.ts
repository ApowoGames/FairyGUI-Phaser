import { GObject } from './../GObject';
import { GearBase } from './GearBase';
export declare class GearDisplay extends GearBase {
    pages: string[];
    private _visible;
    private _displayLockToken;
    constructor(owner: GObject);
    protected init(): void;
    apply(): void;
    addLock(): number;
    releaseLock(token: number): void;
    get connected(): boolean;
}
