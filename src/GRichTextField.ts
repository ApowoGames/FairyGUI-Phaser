import { GBasicTextField } from './GBasicTextField';
export class GRichTextField extends GBasicTextField {

    constructor(scene: Phaser.Scene, type) {
        super(scene, type);
        this._text = "";
    }
    
}