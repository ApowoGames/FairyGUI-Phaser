import { DisplayObjectEvent } from '..';
import { AutoSizeType } from '../FieldTypes';
import { GBasicTextField } from '../GBasicTextField';

export class TextField extends Phaser.GameObjects.Text {
    protected _owner: GBasicTextField;
    protected _lock: boolean;
    protected _sizeDirty: boolean;
    protected _verticalAlign: "top" | "middle" | "bottom";
    constructor(owner: GBasicTextField) {
        super(owner.scene, 0, 0, "", undefined);
        this._owner = owner; 
    }

    public baseTypeset(): void {
        this._lock = true;
        this.typeset();
        this._lock = false;
    }

    public typeset(): void {
        // this._sizeDirty = true; //阻止SIZE_DELAY_CHANGE的触发
        // super.typeset();
        // if (!this._lock)
        //     this._owner.typeset();
        // if (this._isChanged) {
        //     Laya.timer.clear(this, this.typeset);
        //     this._isChanged = false;
        // }
        this._sizeDirty = false;
        this.setChanged();
    }

    public setChanged(): void {
        this.isChanged = true;
    }

    protected set isChanged(value: boolean) {
        if (value && !this._sizeDirty) {
            if (this._owner.autoSize != AutoSizeType.None && this._owner.parent) {
                this._sizeDirty = true;
                this.emit(DisplayObjectEvent.SIZE_DELAY_CHANGE);
            }
        }

        super["isChanged"] = value;
    }
}