import { GearBase } from './GearBase';
export declare class GearDisplay extends GearBase {
    pages: string[];
    private _visible;
    private _displayLockToken;
    protected init(): void;
    apply(): void;
    addLock(): number;
    releaseLock(token: number): void;
    get connected(): boolean;
}
