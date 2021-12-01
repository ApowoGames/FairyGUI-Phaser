/**
 * 贴图通用蓝色滤镜 只适用于texture (Phaser.Image/Phaser.Sprite) 且同一时间只能实现一种变色效果
 */
export declare class BlueShaderPipeline extends Phaser.Renderer.WebGL.Pipelines.MultiPipeline {
    protected _a: number;
    protected _r: number;
    protected _g: number;
    protected _b: number;
    protected renderBoo: boolean;
    constructor(game: any);
    onPreRender(): void;
}
