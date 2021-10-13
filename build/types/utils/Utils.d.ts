export declare class Utils {
    /**@private */
    private static _gid;
    /**@private */
    private static _pi;
    /**@private */
    private static _pi2;
    /**@private */
    protected static _extReg: RegExp;
    static toHexColor(color: number): string;
    /**
     * 必须是16进制的颜色值规范 “#xxxxxx”
     * @param color
     * @returns
     */
    static toNumColor(color: string): number;
    /**
    * 角度转弧度。
    * @param	angle 角度值。
    * @return	返回弧度值。
    */
    static toRadian(angle: number): number;
}
