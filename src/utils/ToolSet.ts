import { ColorMatrix } from './ColorMatrix';
import { GObject } from './../GObject';
import { ColorShaderPipeline } from "./colorShader/ColorShaderPipeline";
import { GRoot, Image } from '..';
export class ToolSet {
    //
    public static Color: string = "color";
    public static startsWith(source: string, str: string, ignoreCase?: boolean): boolean {
        if (!source)
            return false;
        else if (source.length < str.length)
            return false;
        else {
            source = source.substring(0, str.length);
            if (!ignoreCase)
                return source == str;
            else
                return source.toLowerCase() == str.toLowerCase();
        }
    }

    public static endsWith(source: string, str: string, ignoreCase?: boolean): boolean {
        if (!source)
            return false;
        else if (source.length < str.length)
            return false;
        else {
            source = source.substring(source.length - str.length);
            if (!ignoreCase)
                return source == str;
            else
                return source.toLowerCase() == str.toLowerCase();
        }
    }

    public static trimRight(targetString: string): string {
        var tempChar: string = "";
        for (var i: number = targetString.length - 1; i >= 0; i--) {
            tempChar = targetString.charAt(i);
            if (tempChar != " " && tempChar != "\n" && tempChar != "\r") {
                break;
            }
        }
        return targetString.substring(0, i + 1);
    }

    public static convertToHtmlColor(argb: number, hasAlpha?: boolean): string {
        var alpha: string;
        if (hasAlpha)
            alpha = (argb >> 24 & 0xFF).toString(16);
        else
            alpha = "";
        var red: string = (argb >> 16 & 0xFF).toString(16);
        var green: string = (argb >> 8 & 0xFF).toString(16);
        var blue: string = (argb & 0xFF).toString(16);
        if (alpha.length == 1)
            alpha = "0" + alpha;
        if (red.length == 1)
            red = "0" + red;
        if (green.length == 1)
            green = "0" + green;
        if (blue.length == 1)
            blue = "0" + blue;
        return "#" + alpha + red + green + blue;
    }

    public static convertFromHtmlColor(str: string, hasAlpha?: boolean): number {
        if (str.length < 1)
            return 0;

        if (str.charAt(0) == "#")
            str = str.substr(1);

        if (str.length == 8)
            return (parseInt(str.substr(0, 2), 16) << 24) + parseInt(str.substr(2), 16);
        else if (hasAlpha)
            return 0xFF000000 + parseInt(str, 16);
        else
            return parseInt(str, 16);
    }

    public static displayObjectToGObject(obj: any): GObject {
        // public static displayObjectToGObject(obj: Laya.Node): GObject {
        // while (obj && !(obj instanceof Laya.Stage)) {
        //     if (obj["$owner"])
        //         return obj["$owner"];

        //     obj = obj.parent;
        // }
        // TODO
        throw new Error("TODO");
        return null;
    }

    public static encodeHTML(str: string): string {
        if (!str)
            return "";
        else
            return str.replace(/&/g, "&amp;").replace(/</g, "&lt;")
                .replace(/>/g, "&gt;").replace(/'/g, "&apos;").replace(/"/g, "&quot;");
    }

    public static clamp(value: number, min: number, max: number): number {
        if (value < min)
            value = min;
        else if (value > max)
            value = max;
        return value;
    }

    public static clamp01(value: number): number {
        if (isNaN(value))
            value = 0;
        else if (value > 1)
            value = 1;
        else if (value < 0)
            value = 0;
        return value;
    }

    public static lerp(start: number, end: number, percent: number): number {
        return (start + percent * (end - start));
    }

    public static repeat(t: number, length: number): number {
        return t - Math.floor(t / length) * length;
    }

    public static distance(x1: number, y1: number, x2: number, y2: number): number {
        return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    }

    // color 默认是十六进制传入
    public static setColorFilter(obj: any, color?: string | number[] | boolean): void {
        // TODO
        var tp: string = typeof (color);
        if (tp == "boolean") //gray
        {
            if (tp) {
                color = "#C0C0C0";
            } else {
                // 传入false，则表示不是灰色，后续操作直接return
                return;
            }
        }

        // @ts-ignore
        const rgbStr = ToolSet.colorRgb(color);
        const rgbList = rgbStr.substring(4, rgbStr.lastIndexOf(")")).split(",");
        const renderer = (<Phaser.Renderer.WebGL.WebGLRenderer>GRoot.inst.scene.renderer);
        let colorPipeLine = renderer.pipelines.get(ToolSet.Color);
        if (!colorPipeLine) {
            // @ts-ignore
            colorPipeLine = renderer.pipelines.add(ToolSet.Color, new ColorShaderPipeline(GRoot.inst.scene.game));
        }
        (<ColorShaderPipeline>colorPipeLine).r = parseInt(rgbList[0]) / 255;
        (<ColorShaderPipeline>colorPipeLine).g = parseInt(rgbList[1]) / 255;
        (<ColorShaderPipeline>colorPipeLine).b = parseInt(rgbList[2]) / 255;
        if (obj instanceof Image && obj.list && obj.list.length > 0) (<Phaser.GameObjects.Image>obj.list[0]).setPipeline(colorPipeLine);
        // if (obj instanceof Phaser.GameObjects.Image || obj instanceof Phaser.GameObjects.Text) {
        //     (<any>obj).setTint(color);
        // }
        // console.log("todo color filter");
        // throw new Error("TODO");
        // var filter: Laya.ColorFilter = (<any>obj).$_colorFilter_; //cached instance
        // var filters: any[] = obj.filters;

        // var toApplyColor: any;
        // var toApplyGray: boolean;
        // var tp: string = typeof (color);
        // if (tp == "boolean") //gray
        // {
        //     toApplyColor = filter ? (<any>filter).$_color_ : null;
        //     toApplyGray = <boolean>color;
        // }
        // else {
        //     if (tp == "string") {
        //         var arr: any[] = Laya.ColorUtils.create(color).arrColor;
        //         if (arr[0] == 1 && arr[1] == 1 && arr[2] == 1)
        //             color = null;
        //         else {
        //             color = [arr[0], 0, 0, 0, 0,
        //                 0, arr[1], 0, 0, 0,
        //                 0, 0, arr[2], 0, 0,
        //                 0, 0, 0, 1, 0];
        //         }
        //     }
        //     toApplyColor = color;
        //     toApplyGray = filter ? (<any>filter).$_grayed_ : false;
        // }

        // if ((!toApplyColor && toApplyColor != 0) && !toApplyGray) {
        //     if (filters && filter) {
        //         let i: number = filters.indexOf(filter);
        //         if (i != -1) {
        //             filters.splice(i, 1);
        //             if (filters.length > 0)
        //                 obj.filters = filters;
        //             else
        //                 obj.filters = null;
        //         }
        //     }
        //     return;
        // }

        // if (!filter) {
        //     filter = new Laya.ColorFilter();
        //     (<any>obj).$_colorFilter_ = filter;
        // }
        // if (!filters)
        //     filters = [filter];
        // else {
        //     let i: number = filters.indexOf(filter);
        //     if (i == -1)
        //         filters.push(filter);
        // }
        // obj.filters = filters;

        // (<any>filter).$_color_ = toApplyColor;
        // (<any>filter).$_grayed_ = toApplyGray;

        // filter.reset();

        // if (toApplyGray)
        //     filter.gray();
        // else if (toApplyColor.length == 20)
        //     filter.setByMatrix(toApplyColor);
        // else
        //     filter.setByMatrix(getColorMatrix(toApplyColor[0], toApplyColor[1], toApplyColor[2], toApplyColor[3]));
    }


    /**
     * rgb值转换成十六进制
     * @param rgbStr 
     * @returns 
     */
    public static colorHex(rgbStr: string) {
        //十六进制颜色值的正则表达式
        var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
        // 如果是rgb颜色表示
        if (/^(rgb|RGB)/.test(rgbStr)) {
            var aColor = rgbStr.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
            var strHex = "#";
            for (var i = 0; i < aColor.length; i++) {
                var hex = Number(aColor[i]).toString(16);
                if (hex.length < 2) {
                    hex = '0' + hex;
                }
                strHex += hex;
            }
            if (strHex.length !== 7) {
                strHex = rgbStr;
            }
            return strHex;
        } else if (reg.test(rgbStr)) {
            var aNum = rgbStr.replace(/#/, "").split("");
            if (aNum.length === 6) {
                return rgbStr;
            } else if (aNum.length === 3) {
                var numHex = "#";
                for (var i = 0; i < aNum.length; i += 1) {
                    numHex += (aNum[i] + aNum[i]);
                }
                return numHex;
            }
        }
        return rgbStr;
    }

    /**
     * 十六进制转换成rgb值
     * @param colorStr 
     * @returns 
     */
    public static colorRgb(colorStr: string) {
        var sColor = colorStr.toLowerCase();
        //十六进制颜色值的正则表达式
        var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
        // 如果是16进制颜色
        if (sColor && reg.test(sColor)) {
            if (sColor.length === 4) {
                var sColorNew = "#";
                for (var i = 1; i < 4; i += 1) {
                    sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
                }
                sColor = sColorNew;
            }
            //处理六位的颜色值
            var sColorChange = [];
            for (var i = 1; i < 7; i += 2) {
                sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
            }
            return "RGB(" + sColorChange.join(",") + ")";
        }
        return sColor;
    };
}

let helper: ColorMatrix = new ColorMatrix();
function getColorMatrix(p_brightness: number, p_contrast: number, p_saturation: number, p_hue: number, result?: number[]): Array<number> {
    result = result || new Array<number>(ColorMatrix.length);
    helper.reset();
    helper.adjustColor(p_brightness, p_contrast, p_saturation, p_hue);
    helper.matrix.forEach((e, i) => result[i] = e);
    return result;
}
