import { GBasicTextField } from '../GBasicTextField';
export declare class TextField extends Phaser.GameObjects.Text {
    protected _owner: GBasicTextField;
    protected _lock: boolean;
    protected _sizeDirty: boolean;
    protected _verticalAlign: "top" | "middle" | "bottom";
    constructor(owner: GBasicTextField);
    baseTypeset(): void;
    typeset(): void;
    setChanged(): void;
    protected set isChanged(value: boolean);
}
