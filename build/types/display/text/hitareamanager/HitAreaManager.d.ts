export declare class HitAreaManager {
    private hitAreas;
    constructor();
    destroy(): void;
    clear(): this;
    add(key: string, x: number, y: number, width: number, height: number): this;
    getFirstHitArea(x: number, y: number): HitAreaRectangle;
}
declare class HitAreaRectangle extends Phaser.Geom.Rectangle {
    key: string;
}
export {};
