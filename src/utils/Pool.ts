export class Pool<T> {
    items: T[];

    constructor() {
        this.items = [];
    }

    pop(): T {
        if (this.items.length) {
            return this.items.pop();
        }
    }

    push(l: T): this {
        this.items.push(l);
        return this;
    }

    clear() {
        this.items.length = 0;
        return this;
    }

    pushMultiple(item: T[]): this {
        this.items.push.apply(this.items, item);
        item.length = 0;
        return this;
    }

    destroy() {
        this.clear();
        this.items = undefined;
    }
}