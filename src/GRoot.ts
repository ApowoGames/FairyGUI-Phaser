namespace fgui {
    export class GRootMouseStatus {
        public touchDown: boolean = false;
        public mouseX: number = 0;
        public mouseY: number = 0;
    }

    export enum UISceneDisplay {
        LAYER_ROOT,
        LAYER_UI,
        LAYER_DIALOG,
        LAYER_TOOLTIPS,
        LAYER_MASK
    }

    /**
     * gui根对象（逻辑对象）
     */
    export class GRoot extends GComponent {

        private static _inst: GRoot;
        private static _gmStatus = new GRootMouseStatus();
        private _uiStage: UIStage;
        private _modalLayer: GGraph;
        private _popupStack: GObject[];
        private _justClosedPopups: GObject[];
        private _modalWaitPane: GObject;
        private _tooltipWin: GObject;
        private _defaultTooltipWin: GObject;
        private _checkPopups: boolean;
        constructor() {
            super();
        }

        public get displayObject(): Phaser.GameObjects.Container {
            return this._container;
        }

        public static get inst(): GRoot {
            if (GRoot._inst == null)
                new GRoot();
            return GRoot._inst;
        }

        /**
        * the current mouse/pointer data
        */
        public static get globalMouseStatus(): GRootMouseStatus {
            return GRoot._gmStatus;
        }

        public get focus(): GObject {
            return null;
        }

        public set focus(value: GObject) {
            this.setFocus(value);
        }

        private setFocus(value: GObject): void {
        }

        /**
         * 游戏/编辑器启动ui入口,注入uiScene
         * @param scene 
         * @param stageOptions 
         */
        public attachTo(scene: Phaser.Scene, stageOptions?: UIStageOptions): void {

            this._scene = scene;
            this.createDisplayObject();
            // todo deal stageoptions
            if (this._uiStage) {
                this.removeListen();
                this._uiStage.removeChild(this._container, UISceneDisplay.LAYER_ROOT);
                this._uiStage.destroy();
            }

            this._uiStage = new UIStage(scene);
            this._uiStage.addChild(this._container, UISceneDisplay.LAYER_ROOT);
            this.addListen();
        }

        public addListen() {
            this.removeListen();
            this._uiStage.on(DisplayObjectEvent.SIZE_CHANGED, this.$winResize, this);
            this._uiStage.nativeStage.on("pointerdown", this.onStageDown, this);
            this._uiStage.nativeStage.on("pointerup", this.onStageUp, this);
            this._uiStage.nativeStage.on("pointermove", this.onStageMove, this);
        }

        public removeListen() {
            this._uiStage.off(DisplayObjectEvent.SIZE_CHANGED, this.$winResize, this);
            this._uiStage.nativeStage.off("pointerdown", this.onStageDown, this);
            this._uiStage.nativeStage.off("pointerup", this.onStageUp, this);
            this._uiStage.nativeStage.off("pointermove", this.onStageMove, this);
        }

        public addTimeEvent(timeEvent: Phaser.Time.TimerEvent): Phaser.Time.TimerEvent {
            return this.scene.time.addEvent(timeEvent);
        }

        public removeTimeEvent(timeEvent: Phaser.Time.TimerEvent) {
            if (timeEvent) timeEvent.remove();
        }
        public createDisplayObject() {
            this._container = this._scene.add.container(0, 0);
        }

        private onStageDown(pointer: Phaser.Input.Pointer) {
            GRoot._gmStatus.mouseX = pointer.worldX;
            GRoot._gmStatus.mouseY = pointer.worldY;
            GRoot._gmStatus.touchDown = true;
        }

        private onStageUp(pointer: Phaser.Input.Pointer) {
            GRoot._gmStatus.touchDown = false;
        }

        private onStageMove(pointer: Phaser.Input.Pointer) {
            GRoot._gmStatus.mouseX = pointer.worldX;
            GRoot._gmStatus.mouseY = pointer.worldY;
        }

        private $winResize(stage: UIStage): void {
            this._container.setSize(stage.stageWidth, stage.stageHeight);
        }
    }
}