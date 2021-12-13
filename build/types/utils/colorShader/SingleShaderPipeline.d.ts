export declare class SingleShaderPipeline extends Phaser.Renderer.WebGL.Pipelines.SinglePipeline {
    protected _a: number;
    protected _r: number;
    protected _g: number;
    protected _b: number;
    protected renderBoo: boolean;
    constructor(game: Phaser.Game);
    onPreRender(): void;
    set r(value: any);
    set g(value: any);
    set b(value: any);
    set a(value: any);
}
