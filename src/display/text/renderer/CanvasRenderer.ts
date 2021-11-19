import { TextField } from "../TextField";

export function TextCanvasRenderer(renderer: Phaser.Renderer.Canvas.CanvasRenderer, src: TextField, camera: Phaser.Cameras.Scene2D.Camera, parentMatrix: Phaser.GameObjects.Components.TransformMatrix) {
    if (src.width === 0 || src.height === 0) {
        return;
    }

    camera.addToRenderList(src);

    renderer.batchSprite(src, src.frame, camera, parentMatrix);
}