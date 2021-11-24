/**
 * 贴图颜色滤镜 只适用于texture
 */
export declare class GrayShaderPipeline extends Phaser.Renderer.WebGL.Pipelines.MultiPipeline {
    private _a;
    private _r;
    private _g;
    private _b;
    private renderBoo;
    constructor(game: any);
    onPreRender(): void;
    set r(value: any);
    set g(value: any);
    set b(value: any);
    set a(value: any);
}
