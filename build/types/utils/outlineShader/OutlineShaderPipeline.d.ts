export declare class OutlinePostFxPipeline extends Phaser.Renderer.WebGL.Pipelines.PostFXPipeline {
    private thickness;
    private _outlineColor;
    private renderBoo;
    constructor(game: any);
    resetFromJSON(o: any): this;
    onPreRender(): void;
    setThickness(value: any): this;
    get outlineColor(): any;
    set outlineColor(value: any);
    setOutlineColor(value: any): this;
}
