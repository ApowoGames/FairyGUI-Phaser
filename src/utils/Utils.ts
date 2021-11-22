export class Utils {
    /**@private */
    private static _gid: number = 1;
    /**@private */
    private static _pi: number = 180 / Math.PI;
    /**@private */
    private static _pi2: number = Math.PI / 180;

    public static FPSTarget = 60;
    /**@private */
    protected static _extReg: RegExp = /\.(\w+)\??/g;
    static toHexColor(color: number): string {
        if (color < 0 || isNaN(color)) return null;
        var str: string = color.toString(16);
        while (str.length < 6) str = "0" + str;
        return "#" + str;
    }

    /**
     * 必须是16进制的颜色值规范 “#xxxxxx”
     * @param color 
     * @returns 
     */
    static toNumColor(color: string): number {
        return parseInt(color.replace(/^#/, ''), 16)
    }


   




    /**
    * 角度转弧度。
    * @param	angle 角度值。
    * @return	返回弧度值。
    */
    static toRadian(angle: number): number {
        return angle * Utils._pi2;
    }
}
