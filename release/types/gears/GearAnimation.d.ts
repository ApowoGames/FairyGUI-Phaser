import { ByteBuffer } from './../utils/ByteBuffer';
import { GObject } from './../GObject';
import { GearBase } from './GearBase';
export declare class GearAnimation extends GearBase {
    private _storage;
    private _default;
    constructor(owner: GObject);
    protected init(): void;
    protected addStatus(pageId: string, buffer: ByteBuffer): void;
    apply(): void;
    updateState(): void;
}
