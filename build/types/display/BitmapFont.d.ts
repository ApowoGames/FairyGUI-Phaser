export declare class BitmapFont {
    id: string;
    size: number;
    ttf?: boolean;
    glyphs: {
        [index: string]: BMGlyph;
    };
    resizable?: boolean;
    tint?: boolean;
    constructor();
}
export interface BMGlyph {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    advance?: number;
    lineHeight?: number;
    channel?: number;
    texture?: Phaser.Textures.Texture;
}
