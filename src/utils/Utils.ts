export class Utils {
    static toHexColor(color: number): string {
        if (color < 0 || isNaN(color)) return null;
        var str: string = color.toString(16);
        while (str.length < 6) str = "0" + str;
        return "#" + str;
    }
}
