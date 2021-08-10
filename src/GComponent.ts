namespace fgui {
    export class GComponent extends GObject {
        protected sortingChildCount: number = 0;
        protected children: GObject[];
        private _container: Phaser.GameObjects.Container;
        // todo scrollPane
        constructor(scene: Phaser.Scene) {
            super(scene);
        }

        public get displayListContainer(): Phaser.GameObjects.Container {
            return this._container;
        }

        public get numChildren(): number {
            return this.children.length;
        }

        public addChild(child: GObject): GObject {
            this.addChildAt(child, this.children.length);
            return child;
        }

        public addChildAt(child: GObject, index: number = 0): GObject {
            if (!child)
                throw new Error("Invalid child");
            let numChildren: number = this.children.length;
            if (index >= 0 && index <= numChildren) {
                if (child.parentContainer == this)
                    this.setChildIndex(child, index);
                else {
                    child.removeFromParent();
                    child.parentContainer = this;
                    let cnt: number = this.children.length;
                    if (child.sortingOrder != 0) {
                        this.sortingChildCount++;
                        index = this.getInsertPosForSortingChild(child);
                    }
                    else if (this.sortingChildCount > 0) {
                        if (index > (cnt - this.sortingChildCount))
                            index = cnt - this.sortingChildCount;
                    }
                    if (index == cnt)
                        this.children.push(child);
                    else
                        this.children.splice(index, 0, child);

                    this.childStateChanged(child);
                    this.setBoundsChangedFlag();
                }
                return child;
            }
            else
                throw new Error("Invalid child index");
        }

        public removeChild(child: GObject, dispose: boolean = false): GObject {
            let childIndex: number = this.children.indexOf(child);
            if (childIndex != -1)
                this.removeChildAt(childIndex, dispose);
            return child;
        }

        public removeChildAt(index: number, dispose: boolean = false): GObject {
            if (index >= 0 && index < this.numChildren) {
                let child: GObject = this.children[index];
                child.parentContainer = null;

                if (child.sortingOrder != 0)
                    this.sortingChildCount--;

                this.children.splice(index, 1);
                if (child.inContainer)
                    this._container.remove(child.displayObject);

                if (dispose === true)
                    child.destroy();

                this.setBoundsChangedFlag();

                return child;
            }
            else
                throw new Error("Invalid child index");
        }

        public removeChildren(beginIndex: number = 0, endIndex: number = -1, dispose: boolean = false): void {
            if (endIndex < 0 || endIndex >= this.numChildren)
                endIndex = this.numChildren - 1;

            for (let i: number = beginIndex; i <= endIndex; ++i)
                this.removeChildAt(beginIndex, dispose);
        }

        public childStateChanged(child: GObject): void {
            // todo 从xml构建显示对象列表
            // if (this.$buildingDisplayList)
            //     return;

            if (child instanceof GGroup) {
                this.children.forEach(g => {
                    if (g.group == child)
                        this.childStateChanged(g);
                }, this);
                return;
            }

            if (!child.displayObject)
                return;

            // todo 没有做controller，gearDisplay页面控制
            // if (child.finalVisible) { 
            if (child.visible) {
                if (!child.displayObject.parentContainer) {
                    let index: number = 0;
                    let len: number = this.children.length;
                    for (let i1: number = 0; i1 < len; i1++) {
                        let g = this.children[i1];
                        if (g == child)
                            break;

                        if (g.displayObject && g.displayObject.parentContainer)
                            index++;
                    }
                    this._container.addAt(child.displayObject, index);
                }
            }
            else {
                if (child.displayObject.parentContainer)
                    this._container.remove(child.displayObject);
            }
        }

        public setBoundsChangedFlag(): void {
            // todo scrollPane
            // if (!this.$scrollPane && !this.$trackBounds)
            //     return;
            // if (!this.$boundsChanged) {
            //     this.$boundsChanged = true;
            //     GTimer.inst.callLater(this.$validate, this);
            // }
        }

        public setChildIndex(child: GObject, index: number = 0): void {
            let oldIndex: number = this.children.indexOf(child);
            if (oldIndex == -1)
                throw new Error("no such child found");
            if (child.sortingOrder != 0) //no effect
                return;
            let cnt: number = this.children.length;
            if (this.sortingChildCount > 0) {
                if (index > (cnt - this.sortingChildCount - 1))
                    index = cnt - this.sortingChildCount - 1;
            }
            this.$setChildIndex(child, oldIndex, index);
        }

        public childSortingOrderChanged(child: GObject, oldValue: number, newValue: number = 0): void {
            if (newValue == 0) {
                this.sortingChildCount--;
                this.setChildIndex(child, this.children.length);
            }
            else {
                if (oldValue == 0)
                    this.sortingChildCount++;

                let oldIndex: number = this.children.indexOf(child);
                let index: number = this.getInsertPosForSortingChild(child);
                if (oldIndex < index)
                    this.$setChildIndex(child, oldIndex, index - 1);
                else
                    this.$setChildIndex(child, oldIndex, index);
            }
        }

        protected $setChildIndex(child: GObject, oldIndex: number, index: number = 0): number {
            let cnt: number = this.children.length;
            if (index > cnt)
                index = cnt;

            if (oldIndex == index)
                return oldIndex;

            this.children.splice(oldIndex, 1);
            this.children.splice(index, 0, child);

            if (child.inContainer) {
                let displayIndex: number = 0;
                let childCount: number = this._container.displayList.length;
                for (let i: number = 0; i < index; i++) {
                    let g: GObject = this.children[i];
                    if (g.inContainer)
                        displayIndex++;
                }
                if (displayIndex == childCount)
                    displayIndex--;
                this._container.moveTo(child.displayObject, displayIndex);
                this.setBoundsChangedFlag();
            }
            return index;
        }

        protected createDisplayObject() {
            const container = new UIContainer(this.scene);
            this.setDisplayObject(container);
            this._container = container;
        }

        private getInsertPosForSortingChild(target: GObject): number {
            let cnt: number = this.children.length;
            let i: number = 0;
            for (i = 0; i < cnt; i++) {
                let child: GObject = this.children[i];
                if (child == target)
                    continue;
                if (target.sortingOrder < child.sortingOrder)
                    break;
            }
            return i;
        }

    }
}