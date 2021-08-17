window.fgui = {};
window.fairygui = window.fgui;
"use strict";

(function (fgui) {
    class AsyncOperation {
        constructor() {
            this._itemList = new Array();
            this._objectPool = [];
        }
        createObject(pkgName, resName) {
            var pkg = fgui.UIPackage.getByName(pkgName);
            if (pkg) {
                var pi = pkg.getItemByName(resName);
                if (!pi)
                    throw new Error("resource not found: " + resName);
                this.internalCreateObject(pi);
            }
            else
                throw new Error("package not found: " + pkgName);
        }
        createObjectFromURL(url) {
            var pi = fgui.UIPackage.getItemByURL(url);
            if (pi)
                this.internalCreateObject(pi);
            else
                throw new Error("resource not found: " + url);
        }
        cancel() {
            // Laya.timer.clear(this, this.run);
            // this._itemList.length = 0;
            // if (this._objectPool.length > 0) {
            //     var cnt: number = this._objectPool.length;
            //     for (var i: number = 0; i < cnt; i++) {
            //         this._objectPool[i].dispose();
            //     }
            //     this._objectPool.length = 0;
            // }
        }
        internalCreateObject(item) {
            throw new Error("TODO");
            // this._itemList.length = 0;
            // this._objectPool.length = 0;
            // var di: DisplayListItem = { pi: item, type: item.objectType };
            // di.childCount = this.collectComponentChildren(item);
            // this._itemList.push(di);
            // this._index = 0;
            // Laya.timer.frameLoop(1, this, this.run);
        }
        collectComponentChildren(item) {
            var buffer = item.rawData;
            buffer.seek(0, 2);
            var di;
            var pi;
            var i;
            var dataLen;
            var curPos;
            var pkg;
            var dcnt = buffer.readShort();
            for (i = 0; i < dcnt; i++) {
                dataLen = buffer.readShort();
                curPos = buffer.position;
                buffer.seek(curPos, 0);
                var type = buffer.readByte();
                var src = buffer.readS();
                var pkgId = buffer.readS();
                buffer.position = curPos;
                if (src != null) {
                    if (pkgId != null)
                        pkg = fgui.UIPackage.getById(pkgId);
                    else
                        pkg = item.owner;
                    pi = pkg ? pkg.getItemById(src) : null;
                    di = { pi: pi, type: type };
                    if (pi && pi.type == fgui.PackageItemType.Component)
                        di.childCount = this.collectComponentChildren(pi);
                }
                else {
                    di = { type: type };
                    if (type == fgui.ObjectType.List) //list
                        di.listItemCount = this.collectListChildren(buffer);
                }
                this._itemList.push(di);
                buffer.position = curPos + dataLen;
            }
            return dcnt;
        }
        collectListChildren(buffer) {
            buffer.seek(buffer.position, 8);
            var listItemCount = 0;
            var i;
            var nextPos;
            var url;
            var pi;
            var di;
            var defaultItem = buffer.readS();
            var itemCount = buffer.readShort();
            for (i = 0; i < itemCount; i++) {
                nextPos = buffer.readShort();
                nextPos += buffer.position;
                url = buffer.readS();
                if (url == null)
                    url = defaultItem;
                if (url) {
                    pi = fgui.UIPackage.getItemByURL(url);
                    if (pi) {
                        di = { pi: pi, type: pi.objectType };
                        if (pi.type == fgui.PackageItemType.Component)
                            di.childCount = this.collectComponentChildren(pi);
                        this._itemList.push(di);
                        listItemCount++;
                    }
                }
                buffer.position = nextPos;
            }
            return listItemCount;
        }
        run() {
            throw new Error("TODO");
            // var obj: GObject;
            // var di: DisplayListItem;
            // var poolStart: number;
            // var k: number;
            // var t: number = Laya.Browser.now();
            // var frameTime: number = UIConfig.frameTimeForAsyncUIConstruction;
            // var totalItems: number = this._itemList.length;
            // while (this._index < totalItems) {
            //     di = this._itemList[this._index];
            //     if (di.pi) {
            //         obj = UIObjectFactory.newObject(di.pi);
            //         this._objectPool.push(obj);
            //         UIPackage._constructing++;
            //         if (di.pi.type == PackageItemType.Component) {
            //             poolStart = this._objectPool.length - di.childCount - 1;
            //             (<GComponent>obj).constructFromResource2(this._objectPool, poolStart);
            //             this._objectPool.splice(poolStart, di.childCount);
            //         }
            //         else {
            //             obj.constructFromResource();
            //         }
            //         UIPackage._constructing--;
            //     }
            //     else {
            //         obj = UIObjectFactory.newObject(di.type);
            //         this._objectPool.push(obj);
            //         if (di.type == ObjectType.List && di.listItemCount > 0) {
            //             poolStart = this._objectPool.length - di.listItemCount - 1;
            //             for (k = 0; k < di.listItemCount; k++) //把他们都放到pool里，这样GList在创建时就不需要创建对象了
            //                 (<GList>obj).itemPool.returnObject(this._objectPool[k + poolStart]);
            //             this._objectPool.splice(poolStart, di.listItemCount);
            //         }
            //     }
            //     this._index++;
            //     if ((this._index % 5 == 0) && Laya.Browser.now() - t >= frameTime)
            //         return;
            // }
            // Laya.timer.clear(this, this.run);
            // var result: GObject = this._objectPool[0];
            // this._itemList.length = 0;
            // this._objectPool.length = 0;
            // if (this.callback != null)
            //     this.callback(result);
        }
    }
    fgui.AsyncOperation = AsyncOperation;
})(fgui || (fgui = {}));
