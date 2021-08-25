import { UIPackage } from './UIPackage';
import { GObject } from './GObject';
export class GObjectPool {
    private _pool: { [index: string]: Array<GObject> };
    private _count: number = 0;

    constructor() {
        this._pool = {};
    }

    public clear(): void {
        for (var i1 in this._pool) {
            var arr: Array<GObject> = this._pool[i1];
            var cnt: number = arr.length;
            for (var i: number = 0; i < cnt; i++)
                arr[i].dispose();
        }
        this._pool = {};
        this._count = 0;
    }

    public get count(): number {
        return this._count;
    }

    public getObject(url: string): Promise<GObject> {
        return new Promise((reslove, reject) => {
            url = UIPackage.normalizeURL(url);
            if (url == null)
                return reslove(null);

            var arr: Array<GObject> = this._pool[url];
            if (arr && arr.length > 0) {
                this._count--;
                return reslove(arr.shift());
            }

            UIPackage.createObjectFromURL(url).then((obj) => {
                return reslove(obj);
            });
        });
    }

    public returnObject(obj: GObject): void {
        var url: string = obj.resourceURL;
        if (!url)
            return;

        var arr: Array<GObject> = this._pool[url];
        if (arr == null) {
            arr = [];
            this._pool[url] = arr;
        }

        this._count++;
        arr.push(obj);
    }
}
