import { ITextStyle } from "../style/TextStyle";
declare type PropType = {
    b?: true;
    i?: true;
    size?: string;
    color?: string;
    stroke?: string | true;
    u?: string | true;
    shadow?: true;
    y?: number;
    img?: string | true;
    url?: string;
};
export declare class Parser {
    constructor();
    splitText(text: string, isPlainTextMode?: boolean): string[];
    tagTextToProp(text: string, prevProp: PropType): {
        text: any;
        prop: any;
    };
    propToContextStyle(defaultStyle: ITextStyle, prop: PropType): ITextStyle;
    propToTagText(text: string, prop: PropType, prevProp: any): string;
    protected updateProp(prop: any, op: any, key: string, value?: any): void;
    protected getFontStyle(isBold: boolean, isItalic: boolean): "" | "bold italic" | "bold" | "italic";
}
export {};
