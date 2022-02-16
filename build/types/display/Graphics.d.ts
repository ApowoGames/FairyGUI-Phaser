export declare enum GRAPHICSTYPE {
    RECTANGLE = "rectangle",
    CIRCLE = "circle",
    POLY = "POLY",
    ELLIPSE = "ellipse"
}
export declare class Graphics extends Phaser.GameObjects.Graphics {
    private _graphicsType;
    private _width;
    private _height;
    private _radius;
    private _points;
    constructor(scene: Phaser.Scene);
    get width(): number;
    get height(): number;
    get radius(): number;
    get points(): Phaser.Geom.Point[];
    fillRect(x: number, y: number, width: number, height: number): this;
    strokeRect(x: number, y: number, width: number, height: number): this;
    fillCircle(x: number, y: number, radius: number): this;
    strokeCircle(x: number, y: number, radius: number): this;
    fillTriangle(x0: number, y0: number, x1: number, y1: number, x2: number, y2: number): this;
    fillEllipse(x: number, y: number, width: number, height: number, smoothness?: number): this;
    fillRoundedRect(x: number, y: number, width: number, height: number, radius?: Phaser.Types.GameObjects.Graphics.RoundedRectRadius | number): this;
    strokeRoundedRect(x: number, y: number, width: number, height: number, radius?: Phaser.Types.GameObjects.Graphics.RoundedRectRadius | number): this;
    get graphicsType(): GRAPHICSTYPE;
    set graphicsType(value: GRAPHICSTYPE);
    clear(): this;
}
