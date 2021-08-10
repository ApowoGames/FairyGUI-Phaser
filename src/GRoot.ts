namespace fgui {
    export class GRootMouseStatus {
        public touchDown: boolean = false;
        public mouseX: number = 0;
        public mouseY: number = 0;
    }

    /**
     * gui根对象（逻辑对象）
     */
    export class GRoot {
        private static _inst: GRoot;
        private static _gmStatus = new GRootMouseStatus();
        private _uiStage: UIStage;
        constructor() {
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
        /**
         * 游戏/编辑器启动ui入口,注入uiScene
         * @param scene 
         * @param stageOptions 
         */
        public attachTo(scene: Phaser.Scene, stageOptions?: UIStageOptions): void {

            // todo deal stageoptions
            if (this._uiStage) {
                this._uiStage.destroy();
            }

            this._uiStage = new UIStage(scene);
            this._uiStage.addChild(this.dis);

            this.addListen();
        }

        public addListen() {
            this.removeListen();
            this.scene.input.on("pointerdown", this.onStageDown, this);
            this.scene.input.on("pointerup", this.onStageUp, this);
            this.scene.input.on("pointermove", this.onStageMove, this);
        }

        public removeListen() {
            this.scene.input.off("pointerdown", this.onStageDown, this);
            this.scene.input.off("pointerup", this.onStageUp, this);
            this.scene.input.off("pointermove", this.onStageMove, this);
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
    }
}