import { TextField } from "../TextField";

export function TextWebGLRenderer (renderer: Phaser.Renderer.WebGL.WebGLRenderer, src: TextField, camera: Phaser.Cameras.Scene2D.Camera, parentMatrix: Phaser.GameObjects.Components.TransformMatrix) {
    if (src.width === 0 || src.height === 0) {
        return;
    }
    camera.addToRenderList(src);

    var frame = src.frame;
     var width = frame.width;
     var height = frame.height;
     var getTint = Phaser.Renderer.WebGL.Utils.getTintAppendFloatAlpha;
     var pipeline = <Phaser.Renderer.WebGL.Pipelines.MultiPipeline>renderer.pipelines.set(src.pipeline, src);
     var textureUnit = pipeline.setTexture2D(frame.glTexture);
 
     renderer.pipelines.preBatch(src);
 
     pipeline.batchTexture(
         src,
         frame.glTexture,
         width, height,
         src.x, src.y,
         width, height,
         src.scaleX, src.scaleY,
         src.rotation,
         src.flipX, src.flipY,
         src.scrollFactorX, src.scrollFactorY,
         src.displayOriginX, src.displayOriginY,
         0, 0, width, height,
         getTint(src.tintTopLeft, camera.alpha * src.alphaTL),
         getTint(src.tintTopRight, camera.alpha * src.alphaTR),
         getTint(src.tintBottomLeft, camera.alpha * src.alphaBL),
         getTint(src.tintBottomRight, camera.alpha * src.alphaBR),
         0,
         0, 0,
         camera,
         parentMatrix,
         false,
         textureUnit
     );
 
     renderer.pipelines.postBatch(src);
}