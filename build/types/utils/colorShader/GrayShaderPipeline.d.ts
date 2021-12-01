/**
 * 贴图灰色滤镜 只适用于texture
 */
export declare class GrayShaderPipeline extends Phaser.Renderer.WebGL.Pipelines.MultiPipeline {
    protected renderBoo: boolean;
    private _a;
    constructor(game: any);
    onPreRender(): void;
    set a(value: any);
}
