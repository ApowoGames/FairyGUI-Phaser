/// <reference path="./GComponent.ts" />

namespace fgui {
    export class GObject extends Phaser.Events.EventEmitter {
        private _id: number;
        private _name: string;
        private _x: number;
        private _y: number;
        private _depth: number = 0;
        private _dpr: number = 1;
        private _scale: number = 1;
        private _width: number;
        private _height: number;
        private _angle: number = 0;
        private _origin: number = .5;
        private _visible: boolean = true;
        private _alpha: number = 1;
        private _blendMode: Phaser.BlendModes = Phaser.BlendModes.NORMAL;
        private _soundGroup: Map<string, Phaser.Sound.BaseSound>;
        private _displayObject: Phaser.GameObjects.Container;
        private _parentContainer: GComponent;
        private _group: GGroup;
        // 渲染顺序，与depth不同
        private _sortingOrder: number = 0;
        constructor(protected scene: Phaser.Scene) {
            super();
        }

        public set id(value: number) {
            this._id = value;
        }

        public get id(): number {
            return this._id;
        }

        public set x(value: number) {
            this._x = value;
        }

        public get x(): number {
            return this._x;
        }

        public set y(value: number) {
            this._y = value;
        }

        public get y(): number {
            return this._y;
        }

        public set name(value: string) {
            this._name = value;
        }

        public get name(): string {
            return this._name;
        }

        public get depth(): number {
            return this._depth;
        }

        public set depth(value: number) {
            this._depth = value;
        }

        public get dpr(): number {
            return this._dpr;
        }

        public set dpr(value: number) {
            this._dpr = value;
        }

        public get scale(): number {
            return this._scale;
        }

        public set scale(value: number) {
            this._scale = value;
        }

        public get width(): number {
            return this._width;
        }

        public set width(value: number) {
            this._width = value;
        }

        public get height(): number {
            return this._height;
        }

        public set height(value: number) {
            this._height = value;
        }

        public get angle(): number {
            return this._angle;
        }

        public set angle(value: number) {
            this._angle = value;
        }

        public get origin(): number {
            return this._origin;
        }

        public set origin(value: number) {
            this._origin = value;
        }

        public get visible(): boolean {
            return this._visible;
        }

        public set visible(value: boolean) {
            this._visible = value;
        }

        public get alpha(): number {
            return this._alpha;
        }
        public set alpha(value: number) {
            this._alpha = value;
        }

        public get blendMode(): Phaser.BlendModes {
            return this._blendMode;
        }
        public set blendMode(value: Phaser.BlendModes) {
            this._blendMode = value;
        }

        public get soundGroup(): Map<string, Phaser.Sound.BaseSound> {
            return this._soundGroup;
        }

        public set soundGroup(value: Map<string, Phaser.Sound.BaseSound>) {
            this._soundGroup = value;
        }

        public get displayObject(): Phaser.GameObjects.Container {
            return this._displayObject;
        }

        public set displayObject(value: Phaser.GameObjects.Container) {
            this._displayObject = value;
        }

        public get parentContainer(): GComponent {
            return this._parentContainer;
        }

        public set parentContainer(value: GComponent) {
            this._parentContainer = value;
        }

        public get group(): GGroup {
            return this._group;
        }

        public set group(value: GGroup) {
            this._group = value;
        }

        public get sortingOrder(): number {
            return this._sortingOrder;
        }

        public set sortingOrder(value: number) {
            if (value < 0)
                value = 0;
            if (this._sortingOrder != value) {
                let old: number = this._sortingOrder;
                this._sortingOrder = value;
                if (this.parentContainer != null)
                    this.parentContainer.childSortingOrderChanged(this, old, this.sortingOrder);
            }
        }

        public get inContainer(): boolean {
            return this.displayObject.parentContainer != null;
        }

        public setDisplayObject(value: Phaser.GameObjects.Container): void {
            this.displayObject = value;
        }

        public removeFromParent(): void {
            if (this.parentContainer)
                this.parentContainer.removeChild(this);
        }

        public destroy() {
            this.removeFromParent();
            this.removeAllListeners();
            // GRoot.inst.nativeStage.off(InteractiveEvents.Move, this.$moving, this);
            // GRoot.inst.nativeStage.off(InteractiveEvents.Up, this.$end, this);
            // GRoot.inst.nativeStage.off(InteractiveEvents.Move, this.$moving2, this);
            // GRoot.inst.nativeStage.off(InteractiveEvents.Up, this.$end2, this);
            this.displayObject.destroy();
            super.destroy();
        }

        protected createDisplayObject(): void {
        }
    }
}