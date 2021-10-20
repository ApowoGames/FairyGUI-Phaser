export declare class UBBParser {
    private _text;
    private _readPos;
    _handlers: {
        [index: string]: (tagName: string, end: boolean, attr: string) => string;
    };
    defaultImgWidth: number;
    defaultImgHeight: number;
    lastColor: string;
    lastSize: string;
    static inst: UBBParser;
    constructor();
    protected onTag_URL(tagName: string, end: boolean, attr: string): string;
    protected onTag_IMG(tagName: string, end: boolean, attr: string): string;
    protected onTag_B(tagName: string, end: boolean, attr: string): string;
    protected onTag_I(tagName: string, end: boolean, attr: string): string;
    protected onTag_U(tagName: string, end: boolean, attr: string): string;
    protected onTag_Simple(tagName: string, end: boolean, attr: string): string;
    protected onTag_COLOR(tagName: string, end: boolean, attr: string): string;
    protected onTag_FONT(tagName: string, end: boolean, attr: string): string;
    protected onTag_SIZE(tagName: string, end: boolean, attr: string): string;
    protected getTagText(remove?: boolean): string;
    parse(text: string, remove?: boolean): string;
}
