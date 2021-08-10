namespace fgui {
    export class UIContainer extends Phaser.GameObjects.Container implements IUIObject {
        public UIOwner: GObject;
        constructor(scene: Phaser.Scene, x?: number, y?: number, children?: Phaser.GameObjects.GameObject[], owner?: GObject) {
            super(scene, x, y, children);
            this.UIOwner = owner;
        }

        public get scrollRect(): Phaser.Geom.Rectangle {
            return null;
        }

        public set scrollRect(rect: Phaser.Geom.Rectangle) {
            
        }
    }
}