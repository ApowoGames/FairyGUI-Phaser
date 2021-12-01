import { GObject } from './../GObject';
export declare class ToolSet {
    static Color: string;
    static Gray: string;
    static Red: string;
    static Green: string;
    static Blue: string;
    static startsWith(source: string, str: string, ignoreCase?: boolean): boolean;
    static endsWith(source: string, str: string, ignoreCase?: boolean): boolean;
    static trimRight(targetString: string): string;
    static convertToHtmlColor(argb: number, hasAlpha?: boolean): string;
    static convertFromHtmlColor(str: string, hasAlpha?: boolean): number;
    static displayObjectToGObject(obj: any): GObject;
    static encodeHTML(str: string): string;
    static clamp(value: number, min: number, max: number): number;
    static clamp01(value: number): number;
    static lerp(start: number, end: number, percent: number): number;
    static repeat(t: number, length: number): number;
    static distance(x1: number, y1: number, x2: number, y2: number): number;
    static setColorFilter(obj: any, color?: string | number[] | boolean): void;
    /**
     * rgb值转换成十六进制
     * @param rgbStr
     * @returns
     */
    static colorHex(rgbStr: string): string;
    /**
     * 十六进制转换成rgb值
     * @param colorStr
     * @returns
     */
    static colorRgb(colorStr: string): string;
}
