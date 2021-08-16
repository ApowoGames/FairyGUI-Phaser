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
            Laya.timer.clear(this, this.run);
            this._itemList.length = 0;
            if (this._objectPool.length > 0) {
                var cnt = this._objectPool.length;
                for (var i = 0; i < cnt; i++) {
                    this._objectPool[i].dispose();
                }
                this._objectPool.length = 0;
            }
        }
        internalCreateObject(item) {
            this._itemList.length = 0;
            this._objectPool.length = 0;
            var di = { pi: item, type: item.objectType };
            di.childCount = this.collectComponentChildren(item);
            this._itemList.push(di);
            this._index = 0;
            Laya.timer.frameLoop(1, this, this.run);
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
            var dcnt = buffer.getInt16();
            for (i = 0; i < dcnt; i++) {
                dataLen = buffer.getInt16();
                curPos = buffer.pos;
                buffer.seek(curPos, 0);
                var type = buffer.readByte();
                var src = buffer.readS();
                var pkgId = buffer.readS();
                buffer.pos = curPos;
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
                buffer.pos = curPos + dataLen;
            }
            return dcnt;
        }
        collectListChildren(buffer) {
            buffer.seek(buffer.pos, 8);
            var listItemCount = 0;
            var i;
            var nextPos;
            var url;
            var pi;
            var di;
            var defaultItem = buffer.readS();
            var itemCount = buffer.getInt16();
            for (i = 0; i < itemCount; i++) {
                nextPos = buffer.getInt16();
                nextPos += buffer.pos;
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
                buffer.pos = nextPos;
            }
            return listItemCount;
        }
        run() {
            var obj;
            var di;
            var poolStart;
            var k;
            var t = Laya.Browser.now();
            var frameTime = fgui.UIConfig.frameTimeForAsyncUIConstruction;
            var totalItems = this._itemList.length;
            while (this._index < totalItems) {
                di = this._itemList[this._index];
                if (di.pi) {
                    obj = fgui.UIObjectFactory.newObject(di.pi);
                    this._objectPool.push(obj);
                    fgui.UIPackage._constructing++;
                    if (di.pi.type == fgui.PackageItemType.Component) {
                        poolStart = this._objectPool.length - di.childCount - 1;
                        obj.constructFromResource2(this._objectPool, poolStart);
                        this._objectPool.splice(poolStart, di.childCount);
                    }
                    else {
                        obj.constructFromResource();
                    }
                    fgui.UIPackage._constructing--;
                }
                else {
                    obj = fgui.UIObjectFactory.newObject(di.type);
                    this._objectPool.push(obj);
                    if (di.type == fgui.ObjectType.List && di.listItemCount > 0) {
                        poolStart = this._objectPool.length - di.listItemCount - 1;
                        for (k = 0; k < di.listItemCount; k++) //把他们都放到pool里，这样GList在创建时就不需要创建对象了
                            obj.itemPool.returnObject(this._objectPool[k + poolStart]);
                        this._objectPool.splice(poolStart, di.listItemCount);
                    }
                }
                this._index++;
                if ((this._index % 5 == 0) && Laya.Browser.now() - t >= frameTime)
                    return;
            }
            Laya.timer.clear(this, this.run);
            var result = this._objectPool[0];
            this._itemList.length = 0;
            this._objectPool.length = 0;
            if (this.callback != null)
                this.callback.runWith(result);
        }
    }
    fgui.AsyncOperation = AsyncOperation;
})(fgui || (fgui = {}));
