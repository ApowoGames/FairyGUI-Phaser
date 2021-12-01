/**
 * 贴图红色滤镜 只适用于texture
 */
export declare class RedShaderPipeline extends Phaser.Renderer.WebGL.Pipelines.MultiPipeline {
    protected _a: number;
    protected _r: number;
    protected _g: number;
    protected _b: number;
    protected renderBoo: boolean;
    constructor(game: any);
    onPreRender(): void;
}
