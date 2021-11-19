import { GBasicTextField } from './GBasicTextField';
export class GRichTextField extends GBasicTextField {

    constructor(scene: Phaser.Scene, type) {
        super(scene, type);
        this._text = "";
    }

    // public createDisplayObject(): void {
        // this._displayObject = this._div = new Laya.HTMLDivElement();
        // this._displayObject.mouseEnabled = true;
        // this._displayObject["$owner"] = this;
    // }

    // public set text(value: string) {
    //     this._text = value;
    //     this._displayObject.setText = value;
    //     var text2: string = this._text;
    //     if (this._templateVars)
    //         text2 = this.parseTemplate(text2);
    //     try {
    //         this._div.size(this._width, this._height);
    //         if (this._ubbEnabled)
    //             this._div.innerHTML = UBBParser.inst.parse(text2);
    //         else
    //             this._div.innerHTML = text2;

    //         if (this._widthAutoSize || this._heightAutoSize) {
    //             var w: number, h: number = 0;
    //             if (this._widthAutoSize) {
    //                 w = this._div.contextWidth;
    //                 if (w > 0)
    //                     w += 8;
    //             }
    //             else
    //                 w = this._width;

    //             if (this._heightAutoSize)
    //                 h = this._div.contextHeight;
    //             else
    //                 h = this._height;

    //             this._updatingSize = true;
    //             this.setSize(w, h);
    //             this._updatingSize = false;
    //         }
    //     }
    //     catch (err) {
    //         console.log("laya reports html error:" + err);
    //     }
    // }

    // public get text(): string {
    //     return this._text;
    // }

    // public get font(): string {
    //     return this._div.style.font;
    // }

    
}