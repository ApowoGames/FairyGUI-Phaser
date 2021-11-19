export declare class Pool<T> {
    items: T[];
    constructor();
    pop(): T;
    push(l: T): this;
    clear(): this;
    pushMultiple(item: T[]): this;
    destroy(): void;
}
