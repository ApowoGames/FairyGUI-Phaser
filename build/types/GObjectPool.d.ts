import { GObject } from './GObject';
export declare class GObjectPool {
    private _pool;
    private _count;
    constructor();
    clear(): void;
    get count(): number;
    getObject(url: string): Promise<GObject>;
    returnObject(obj: GObject): void;
}
