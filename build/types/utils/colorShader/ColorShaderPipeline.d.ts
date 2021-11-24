/**
 * 贴图颜色滤镜 只适用于texture (Phaser.Image/Phaser.Sprite) 且同一时间只能实现一种变色效果
 */
export declare class ColorShaderPipeline extends Phaser.Renderer.WebGL.Pipelines.MultiPipeline {
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
