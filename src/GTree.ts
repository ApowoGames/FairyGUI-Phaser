import { ByteBuffer } from './utils/ByteBuffer';
import { BlendMode, GObject } from './GObject';
import { Controller } from './Controller';
import { GTreeNode } from './GTreeNode';
import { GList } from './GList';
import { GComponent } from './GComponent';
import { Events } from './Events';
import { Handler } from './utils/Handler';
import { OverflowType, ToolSet } from '.';
export class GTree extends GList {

    /**
     * (node: GTreeNode, obj: GComponent) => void
     */
    public treeNodeRender: Handler;
    /**
     * (node: GTreeNode, expanded: boolean) => void;
     */
    public treeNodeWillExpand: Handler;

    private _indent: number;
    private _clickToExpand: number;
    private _rootNode: GTreeNode;
    private _expandedStatusInEvt: boolean;

    constructor(scene: Phaser.Scene, type) {
        super(scene, type);

        this._indent = 15;

        this._rootNode = new GTreeNode(true);
        this._rootNode._setTree(this);
        this._rootNode.expanded = true;
        this.scene.input.on("gameobjectdown", this.__cellMouseDown, this);
    }

    public dispose(): void {
        this.scene.input.off("gameobjectdown", this.__cellMouseDown, this);
        super.dispose();
    }

    public get rootNode(): GTreeNode {
        return this._rootNode;
    }

    public get indent(): number {
        return this._indent;
    }

    public set indent(value: number) {
        this._indent = value;
    }

    public get clickToExpand(): number {
        return this._clickToExpand;
    }

    public set clickToExpand(value: number) {
        this._clickToExpand = value;
    }

    public getSelectedNode(): GTreeNode {
        if (this.selectedIndex != -1)
            return this.getChildAt(this.selectedIndex)._treeNode;
        else
            return null;
    }

    public getSelectedNodes(result?: Array<GTreeNode>): Array<GTreeNode> {
        if (!result)
            result = new Array<GTreeNode>();

        s_list.length = 0;
        super.getSelection(s_list);
        var cnt: number = s_list.length;
        var ret: Array<GTreeNode> = new Array<GTreeNode>();
        for (var i: number = 0; i < cnt; i++) {
            var node: GTreeNode = this.getChildAt(s_list[i])._treeNode;
            ret.push(node);
        }
        return ret;
    }

    public selectNode(node: GTreeNode, scrollItToView?: boolean): void {
        var parentNode: GTreeNode = node.parent;
        while (parentNode && parentNode != this._rootNode) {
            parentNode.expanded = true;
            parentNode = parentNode.parent;
        }

        if (!node._cell)
            return;

        this.addSelection(this.getChildIndex(node._cell), scrollItToView);
    }

    public unselectNode(node: GTreeNode): void {
        if (!node._cell)
            return;

        this.removeSelection(this.getChildIndex(node._cell));
    }

    public expandAll(folderNode?: GTreeNode): void {
        if (!folderNode)
            folderNode = this._rootNode;

        folderNode.expanded = true;
        var cnt: number = folderNode.numChildren;
        for (var i: number = 0; i < cnt; i++) {
            var node: GTreeNode = folderNode.getChildAt(i);
            if (node.isFolder)
                this.expandAll(node);
        }
    }

    public collapseAll(folderNode?: GTreeNode): void {
        if (!folderNode)
            folderNode = this._rootNode;

        if (folderNode != this._rootNode)
            folderNode.expanded = false;
        var cnt: number = folderNode.numChildren;
        for (var i: number = 0; i < cnt; i++) {
            var node: GTreeNode = folderNode.getChildAt(i);
            if (node.isFolder)
                this.collapseAll(node);
        }
    }

    private createCell(node: GTreeNode): Promise<void> {
        return new Promise((resolve, reject) => {
            this.getFromPool(node._resURL ? node._resURL : this.defaultItem).then((obj) => {
                var child: GComponent = <GComponent>obj;
                if (!child) {
                    throw new Error("cannot create tree node object.");
                }


                child._treeNode = node;
                node._cell = child;

                var indentObj: GObject = child.getChild("indent");
                if (indentObj)
                    indentObj.width = (node.level - 1) * this._indent;

                var cc: Controller;

                cc = child.getController("expanded");
                if (cc) {
                    cc.on(Events.STATE_CHANGED, this.__expandedStateChanged, this);
                    cc.selectedIndex = node.expanded ? 1 : 0;
                }

                cc = child.getController("leaf");
                if (cc)
                    cc.selectedIndex = node.isFolder ? 0 : 1;

                // if (node.isFolder)
                //     child.on("pointerdown", this.__cellMouseDown, this);

                if (this.treeNodeRender)
                    this.treeNodeRender.runWith([node, child]);
                resolve();
            });
        });
    }

    public _afterInserted(node: GTreeNode): Promise<void> {
        return new Promise((resolve, reject) => {
            const fun0 = () => {
                var index: number = this.getInsertIndexForNode(node);
                this.addChildAt(node._cell, index);
                if (this.treeNodeRender)
                    this.treeNodeRender.runWith([node, node._cell]); ''

                if (node.isFolder && node.expanded) {
                    this.checkChildren(node, index).then(() => {
                        resolve();
                    });
                } else {
                    resolve();
                }
            }
            if (!node._cell) {
                this.createCell(node).then(() => {
                    fun0();
                });
            } else {
                fun0();
            }
        });
    }

    private getInsertIndexForNode(node: GTreeNode): number {
        var prevNode: GTreeNode = node.getPrevSibling();
        if (!prevNode)
            prevNode = node.parent;
        var insertIndex: number = this.getChildIndex(prevNode._cell) + 1;
        var myLevel: number = node.level;
        var cnt: number = this.numChildren;
        for (var i: number = insertIndex; i < cnt; i++) {
            var testNode: GTreeNode = this.getChildAt(i)._treeNode;
            if (testNode.level <= myLevel)
                break;

            insertIndex++;
        }

        return insertIndex;
    }

    public _afterRemoved(node: GTreeNode): void {
        this.removeNode(node);
    }

    public _afterExpanded(node: GTreeNode): void {
        if (node == this._rootNode) {
            this.checkChildren(this._rootNode, 0);
            return;
        }

        if (this.treeNodeWillExpand != null)
            this.treeNodeWillExpand.runWith([node, true]);

        if (!node._cell)
            return;

        if (this.treeNodeRender)
            this.treeNodeRender.runWith([node, node._cell]);

        var cc: Controller = node._cell.getController("expanded");
        if (cc)
            cc.selectedIndex = 1;

        if (node._cell.parent)
            this.checkChildren(node, this.getChildIndex(node._cell));
    }

    public _afterCollapsed(node: GTreeNode): void {
        if (node == this._rootNode) {
            this.checkChildren(this._rootNode, 0);
            return;
        }

        if (this.treeNodeWillExpand)
            this.treeNodeWillExpand.runWith([node, false]);

        if (!node._cell)
            return;

        if (this.treeNodeRender)
            this.treeNodeRender.runWith([node, node._cell]);

        var cc: Controller = node._cell.getController("expanded");
        if (cc)
            cc.selectedIndex = 0;

        if (node._cell.parent)
            this.hideFolderNode(node);
    }

    public _afterMoved(node: GTreeNode): void {
        var startIndex: number = this.getChildIndex(node._cell);
        var endIndex: number;
        if (node.isFolder)
            endIndex = this.getFolderEndIndex(startIndex, node.level);
        else
            endIndex = startIndex + 1;
        var insertIndex: number = this.getInsertIndexForNode(node);
        var i: number;
        var cnt: number = endIndex - startIndex;
        var obj: GObject;
        if (insertIndex < startIndex) {
            for (i = 0; i < cnt; i++) {
                obj = this.getChildAt(startIndex + i);
                this.setChildIndex(obj, insertIndex + i);
            }
        }
        else {
            for (i = 0; i < cnt; i++) {
                obj = this.getChildAt(startIndex);
                this.setChildIndex(obj, insertIndex);
            }
        }
    }

    private getFolderEndIndex(startIndex: number, level: number): number {
        var cnt: number = this.numChildren;
        for (var i: number = startIndex + 1; i < cnt; i++) {
            var node: GTreeNode = this.getChildAt(i)._treeNode;
            if (node.level <= level)
                return i;
        }

        return cnt;
    }

    private checkChildren(folderNode: GTreeNode, index: number): Promise<number> {
        return new Promise((resolve, reject) => {
            var cnt: number = folderNode.numChildren;
            const fun0 = (i: number) => {
                if (i >= cnt) {
                    resolve(index);
                    return;
                }
                index++;
                var node: GTreeNode = folderNode.getChildAt(i);
                if (!node._cell) {
                    this.createCell(node).then(() => {
                        fun1(node.cell, index);
                        if (node.isFolder && node.expanded) {
                            fun2(node, index).then((index) => {
                                fun0(++i);
                            });
                        } else {
                            fun0(++i);
                        }
                    });
                } else {
                    fun1(node.cell, index);
                    if (node.isFolder && node.expanded) {
                        fun2(node, index).then((index) => {
                            fun0(++i);
                        });
                    } else {
                        fun0(++i);
                    }
                }
            };

            const fun1 = (cell, index) => {
                if (!cell.parent)
                    this.addChildAt(cell, index);
            };

            const fun2 = (node, index): Promise<number> => {
                return new Promise((resolve, reject) => {
                    this.checkChildren(node, index).then((newIndex) => {
                        resolve(newIndex);
                    });
                });
            }


            fun0(0);
        });


        // for (var i: number = 0; i < cnt; i++) {
        //     index++;
        //     var node: GTreeNode = folderNode.getChildAt(i);
        //     if (!node._cell) {
        //         this.createCell(node).then(() => {
        //             fun1();
        //         });
        //     }

        //     if (!node._cell.parent)
        //         this.addChildAt(node._cell, index);

        //     if (node.isFolder && node.expanded)
        //         index = this.checkChildren(node, index);
        // }



        // return index;
    }

    private hideFolderNode(folderNode: GTreeNode): void {
        var cnt: number = folderNode.numChildren;
        for (var i: number = 0; i < cnt; i++) {
            var node: GTreeNode = folderNode.getChildAt(i);
            if (node._cell)
                this.removeChild(node._cell);
            if (node.isFolder && node.expanded)
                this.hideFolderNode(node);
        }
    }

    private removeNode(node: GTreeNode): void {
        if (node._cell) {
            if (node._cell.parent)
                this.removeChild(node._cell);
            this.returnToPool(node._cell);
            node._cell._treeNode = null;
            node._cell = null;
        }

        if (node.isFolder) {
            var cnt: number = node.numChildren;
            for (var i: number = 0; i < cnt; i++) {
                var node2: GTreeNode = node.getChildAt(i);
                this.removeNode(node2);
            }
        }
    }

    private __cellMouseDown(evt: Phaser.Input.Pointer, curTarget): void {
        const owner: GObject = GObject.cast(curTarget);
        if (!owner) return;
        var node: GTreeNode = owner._treeNode;
        if (!node) return;
        this._expandedStatusInEvt = node.expanded;
    }

    private __expandedStateChanged(cc: Controller): void {
        var node: GTreeNode = cc.parent._treeNode;
        node.expanded = cc.selectedIndex == 1;
    }

    protected dispatchItemEvent(item: GObject, evt: any): void {
        if (this._clickToExpand != 0) {
            var node: GTreeNode = item._treeNode;
            if (node && node.isFolder && this._expandedStatusInEvt == node.expanded) {
                if (this._clickToExpand == 2) {
                    //if (evt.clickCount == 2)
                    // node.expanded = !node.expanded;
                }
                else
                    node.expanded = !node.expanded;
            }
        }

        super.dispatchItemEvent(item, evt);
    }

    public setup_beforeAdd(buffer: ByteBuffer, beginPos: number): Promise<void> {
        return new Promise((resolve, reject) => {
            buffer.seek(beginPos, 0);
            buffer.skip(5);

            var f1: number;
            var f2: number;

            this._id = buffer.readS();
            this._name = buffer.readS();
            f1 = buffer.readInt();
            f2 = buffer.readInt();
            this.setXY(f1, f2);

            if (buffer.readBool()) {
                this.initWidth = buffer.readInt();
                this.initHeight = buffer.readInt();
            }

            if (buffer.readBool()) {
                this.minWidth = buffer.readInt();
                this.maxWidth = buffer.readInt();
                this.minHeight = buffer.readInt();
                this.maxHeight = buffer.readInt();
            }

            if (buffer.readBool()) {
                f1 = buffer.readFloat();
                f2 = buffer.readFloat();
                this.setScale(f1, f2);
            }

            if (buffer.readBool()) {
                f1 = buffer.readFloat();
                f2 = buffer.readFloat();
                this.setSkew(f1, f2);
            }

            if (buffer.readBool()) {
                f1 = buffer.readFloat();
                f2 = buffer.readFloat();
                this.setPivot(f1, f2, buffer.readBool());
            }

            f1 = buffer.readFloat();
            if (f1 != 1) {
                if (f1 > 1) f1 = 1;
                this.alpha = f1;
            }

            f1 = buffer.readFloat();
            if (f1 != 0)
                this.rotation = f1;

            if (!buffer.readBool())
                this.visible = false;
            // console.log("visible object ===>", this);
            if (!buffer.readBool()) {
                this.touchable = false;
            } else {
                this.touchable = true;
            }
            if (buffer.readBool())
                this.grayed = true;
            var bm: number = buffer.readByte();
            if (BlendMode[bm])
                this.blendMode = BlendMode[bm];

            var filter: number = buffer.readByte();
            if (filter == 1) {
                ToolSet.setColorFilter(this._displayObject,
                    [buffer.readFloat(), buffer.readFloat(), buffer.readFloat(), buffer.readFloat()]);
            }

            var str: string = buffer.readS();
            if (str != null)
                this.data = str;
            buffer.seek(beginPos, 5);

            var i1: number;

            this._layout = buffer.readByte();
            this._selectionMode = buffer.readByte();
            i1 = buffer.readByte();
            this._align = i1 == 0 ? "left" : (i1 == 1 ? "center" : "right");
            i1 = buffer.readByte();
            this._verticalAlign = i1 == 0 ? "top" : (i1 == 1 ? "middle" : "bottom");
            this._lineGap = buffer.readShort();
            this._columnGap = buffer.readShort();
            this._lineCount = buffer.readShort();
            this._columnCount = buffer.readShort();
            this._autoResizeItem = buffer.readBool();
            this._childrenRenderOrder = buffer.readByte();
            this._apexIndex = buffer.readShort();

            if (buffer.readBool()) {
                this._margin.top = buffer.readInt();
                this._margin.bottom = buffer.readInt();
                this._margin.left = buffer.readInt();
                this._margin.right = buffer.readInt();
            }

            var overflow: number = buffer.readByte();
            if (overflow == OverflowType.Scroll) {
                var savedPos: number = buffer.position;
                buffer.seek(beginPos, 7);
                this.setupScroll(buffer);
                buffer.position = savedPos;
            }
            else
                this.setupOverflow(overflow);

            if (buffer.readBool()) //clipSoftness
                buffer.skip(8);

            if (buffer.version >= 2) {
                this.scrollItemToViewOnClick = buffer.readBool();
                this.foldInvisibleItems = buffer.readBool();
            }

            buffer.seek(beginPos, 8);

            this._defaultItem = buffer.readS();
            this.readItems(buffer).then(() => {
                buffer.seek(beginPos, 9);

                this._indent = buffer.readInt();
                this._clickToExpand = buffer.readByte();
                resolve();
            });
        });
    }

    protected readItems(buffer: ByteBuffer): Promise<void> {
        return new Promise((resolve, reject) => {
            var cnt: number;
            var nextPos: number;
            var str: string;
            var isFolder: boolean;
            var lastNode: GTreeNode;
            var level: number;
            var prevLevel: number = 0;

            cnt = buffer.readShort();
            const fun0 = (i) => {
                if (i >= cnt) {
                    resolve();
                    return;
                }
                nextPos = buffer.readShort();
                nextPos += buffer.position;

                str = buffer.readS();
                if (str == null) {
                    str = this.defaultItem;
                    if (!str) {
                        buffer.position = nextPos;
                        fun0(++i);
                        return;
                    }
                }

                isFolder = buffer.readBool();
                level = buffer.readByte();

                var node: GTreeNode = new GTreeNode(isFolder, str);
                node.expanded = true;

                if (i == 0) {
                    this._rootNode.addChild(node).then(() => {
                        lastNode = node;
                        prevLevel = level;

                        this.setupItem(buffer, node.cell);

                        buffer.position = nextPos;
                        fun0(++i);
                    });
                } else {
                    if (level > prevLevel)
                        lastNode.addChild(node).then(() => {
                            lastNode = node;
                            prevLevel = level;

                            this.setupItem(buffer, node.cell);

                            buffer.position = nextPos;
                            fun0(++i);
                        });
                    else if (level < prevLevel) {
                        for (var j: number = level; j <= prevLevel; j++)
                            lastNode = lastNode.parent;
                        lastNode.addChild(node).then(() => {
                            lastNode = node;
                            prevLevel = level;

                            this.setupItem(buffer, node.cell);

                            buffer.position = nextPos;
                            fun0(++i);
                        });
                    }
                    else
                        lastNode.parent.addChild(node).then(() => {
                            lastNode = node;
                            prevLevel = level;

                            this.setupItem(buffer, node.cell);

                            buffer.position = nextPos;
                            fun0(++i);
                        });
                }
            };
            fun0(0);
            // for (i = 0; i < cnt; i++) {
            //     nextPos = buffer.readShort();
            //     nextPos += buffer.position;

            //     str = buffer.readS();
            //     if (str == null) {
            //         str = this.defaultItem;
            //         if (!str) {
            //             buffer.position = nextPos;
            //             continue;
            //         }
            //     }

            //     isFolder = buffer.readBool();
            //     level = buffer.readByte();

            //     var node: GTreeNode = new GTreeNode(isFolder, str);
            //     node.expanded = true;
            //     if (i == 0)
            //         this._rootNode.addChild(node);
            //     else {
            //         if (level > prevLevel)
            //             lastNode.addChild(node);
            //         else if (level < prevLevel) {
            //             for (var j: number = level; j <= prevLevel; j++)
            //                 lastNode = lastNode.parent;
            //             lastNode.addChild(node);
            //         }
            //         else
            //             lastNode.parent.addChild(node);
            //     }
            //     lastNode = node;
            //     prevLevel = level;

            //     this.setupItem(buffer, node.cell);

            //     buffer.position = nextPos;
            // }
        });
    }
}

var s_list: number[] = new Array<number>();
