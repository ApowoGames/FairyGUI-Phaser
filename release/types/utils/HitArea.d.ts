import { Graphics } from "../display/Graphics";
/**
 * 鼠标点击区域，可以设置绘制一系列矢量图作为点击区域和非点击区域（目前只支持圆形，矩形，多边形）
 *
 */
export declare class HitArea {
    /**@private */
    private static _rect;
    /**@private */
    private static _ptPoint;
    /**@private */
    private _hit;
    /**@private */
    private _unHit;
    /**
     * 检测对象是否包含指定的点。
     * @param	x	点的 X 轴坐标值（水平位置）。
     * @param	y	点的 Y 轴坐标值（垂直位置）。
     * @return	如果包含指定的点，则值为 true；否则为 false。
     */
    contains(x: number, y: number): boolean;
    /**
     * @internal
     * 是否击中Graphic
     */
    static _isHitGraphic(x: number, y: number, graphic: Graphics): boolean;
    /**
     * @internal
     * 是否击中绘图指令
     */
    static _isHitCmd(x: number, y: number, g: Graphics): boolean;
    /**
     * @internal
     * 坐标是否在多边形内
     */
    static _ptInPolygon(x: number, y: number, areaPoints: any[]): boolean;
    /**
     * 可点击区域，可以设置绘制一系列矢量图作为点击区域（目前只支持圆形，矩形，多边形）
     */
    get hit(): Graphics;
    set hit(value: Graphics);
    /**
     * 不可点击区域，可以设置绘制一系列矢量图作为非点击区域（目前只支持圆形，矩形，多边形）
     */
    get unHit(): Graphics;
    set unHit(value: Graphics);
}
