import { MovieClip } from './../display/MovieClip';
import { ColorMatrix } from './ColorMatrix';
import { GObject } from './../GObject';
import { ColorShaderPipeline } from "./colorShader/ColorShaderPipeline";
import { GLoader, GRoot, Image } from '..';
import { GrayShaderPipeline } from './colorShader/GrayShaderPipeline';
export class ToolSet {
    //
    public static Color: string = "color";
    public static Gray: string = "gray";
    public static Red: string = "red";
    public static Green: string = "green";
    public static Blue: string = "blue";
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
        var tp: string = typeof (color);
        const renderer = (<Phaser.Renderer.WebGL.WebGLRenderer>GRoot.inst.scene.renderer);
        let colorPipeLine;
        let name: string;
        if (tp == "boolean") //gray
        {
            if (tp) {
                name = ToolSet.Gray;
                colorPipeLine = <GrayShaderPipeline>renderer.pipelines.get(name);
                if (!colorPipeLine) {
                    colorPipeLine = <GrayShaderPipeline>renderer.pipelines.add(name, new GrayShaderPipeline(GRoot.inst.scene.game));
                }
            } else {
                // 传入false，则表示不是灰色，后续操作直接return
                return;
            }
        } else {
            // @ts-ignore
            const rgbStr = ToolSet.colorRgb(color);
            const rgbList = rgbStr.substring(4, rgbStr.lastIndexOf(")")).split(",");
            name = ToolSet.Color;
            colorPipeLine = <ColorShaderPipeline>renderer.pipelines.get(name);
            if (!colorPipeLine) {
                colorPipeLine = <ColorShaderPipeline>renderer.pipelines.add(name, new ColorShaderPipeline(GRoot.inst.scene.game));
                colorPipeLine.a = 1;
            }
            colorPipeLine.r = parseInt(rgbList[0]) / 255;
            colorPipeLine.g = parseInt(rgbList[1]) / 255;
            colorPipeLine.b = parseInt(rgbList[2]) / 255;
        }
        if (obj.list && obj.list.length > 0) {
            if (obj instanceof Image) {
                (<Phaser.GameObjects.Image>obj.list[0]).setPipeline(colorPipeLine);
            } else if (obj["$owner"] instanceof GLoader) {
                (<MovieClip>obj.list[0]).setFilter(colorPipeLine);
            }
        }
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
