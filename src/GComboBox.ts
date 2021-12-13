import { ByteBuffer } from './utils/ByteBuffer';
import { GButton } from './GButton';
import { GLabel } from './GLabel';
import { GTextField } from './GTextField';
import { UIConfig } from './UIConfig';
import { Controller } from './Controller';
import { PopupDirection, ObjectPropID } from './FieldTypes';
import { GList } from './GList';
import { GObject } from './GObject';
import { GComponent } from "./GComponent";
import { DisplayObjectEvent, GGroup, GRoot, InteractiveEvent, RelationType, UIPackage } from '.';
import { Events } from './Events';

export class GComboBox extends GComponent {
    public dropdown: GComponent;

    protected _titleObject: GObject;
    protected _iconObject: GObject;
    protected _list: GList;

    protected _items: string[];
    protected _icons?: string[];
    protected _values: string[];
    protected _popupDirection: PopupDirection;

    private _visibleItemCount: number;
    private _itemsUpdated: boolean;
    private _selectedIndex: number;
    private _buttonController: Controller;
    private _selectionController?: Controller;

    private _down: boolean = false;
    private _over: boolean = false;

    constructor(scene: Phaser.Scene, type) {
        super(scene, type);
        this._visibleItemCount = UIConfig.defaultComboBoxVisibleItemCount;
        this._itemsUpdated = true;
        this._selectedIndex = -1;
        this._popupDirection = 0;
        this._items = [];
        this._values = [];
    }

    public setSize(wv: number, hv: number, ignorePivot?: boolean): void {
        if (this._rawWidth != wv || this._rawHeight != hv) {
            this._rawWidth = wv;
            this._rawHeight = hv;
            if (wv < this.minWidth)
                wv = this.minWidth;
            if (hv < this.minHeight)
                hv = this.minHeight;
            if (this.maxWidth > 0 && wv > this.maxWidth)
                wv = this.maxWidth;
            if (this.maxHeight > 0 && hv > this.maxHeight)
                hv = this.maxHeight;
            var dWidth: number = wv - this._width;
            var dHeight: number = hv - this._height;
            this._width = wv;
            this._height = hv;

            this.handleSizeChanged();
            if (this._pivotX != 0 || this._pivotY != 0) {
                if (!this._pivotAsAnchor) {
                    if (!ignorePivot)
                        this.setXY(this.x - this._pivotX * dWidth, this.y - this._pivotY * dHeight);
                    this.updatePivotOffset();
                }
                else
                    this.applyPivot();
            }

            if (this instanceof GGroup)
                (<GGroup>this).resizeChildren(dWidth, dHeight);

            this.updateGear(2);

            if (this._parent) {
                this._relations.onOwnerSizeChanged(dWidth, dHeight, this._pivotAsAnchor || !ignorePivot);
                this._parent.setBoundsChangedFlag();
                if (this._group)
                    this._group.setBoundsChangedFlag();
            }

            this.displayObject.emit(DisplayObjectEvent.SIZE_CHANGED);
        }
    }

    public get text(): string {
        if (this._titleObject)
            return this._titleObject.text;
        else
            return null;
    }

    public set text(value: string) {
        if (this._titleObject)
            this._titleObject.text = value;
        this.updateGear(6);
    }

    public get titleColor(): string {
        var tf: GTextField = this.getTextField();
        if (tf)
            return tf.color;
        else
            return "#000000";
    }

    public set titleColor(value: string) {
        var tf: GTextField = this.getTextField();
        if (tf)
            tf.color = value;
        this.updateGear(4);
    }

    public get titleFontSize(): number {
        var tf: GTextField = this.getTextField();
        if (tf)
            return tf.fontSize;
        else
            return 0;
    }

    public set titleFontSize(value: number) {
        var tf: GTextField = this.getTextField();
        if (tf)
            tf.fontSize = value;
    }

    public get icon(): string {
        if (this._iconObject)
            return this._iconObject.icon;
        else
            return null;
    }

    public set icon(value: string) {
        if (this._iconObject)
            this._iconObject.icon = value;
        this.updateGear(7);
    }

    public get visibleItemCount(): number {
        return this._visibleItemCount;
    }

    public set visibleItemCount(value: number) {
        this._visibleItemCount = value;
    }

    public get popupDirection(): number {
        return this._popupDirection;
    }

    public set popupDirection(value: number) {
        this._popupDirection = value;
    }

    public get items(): string[] {
        return this._items;
    }

    public set items(value: string[]) {
        if (!value)
            this._items.length = 0;
        else
            this._items = value.concat();
        if (this._items.length > 0) {
            if (this._selectedIndex >= this._items.length)
                this._selectedIndex = this._items.length - 1;
            else if (this._selectedIndex == -1)
                this._selectedIndex = 0;

            this.text = this._items[this._selectedIndex];
            if (this._icons && this._selectedIndex < this._icons.length)
                this.icon = this._icons[this._selectedIndex];
        }
        else {
            this.text = "";
            if (this._icons)
                this.icon = null;
            this._selectedIndex = -1;
        }
        this._itemsUpdated = true;
    }

    public get icons(): string[] {
        return this._icons;
    }

    public set icons(value: string[]) {
        this._icons = value;
        if (this._icons && this._selectedIndex != -1 && this._selectedIndex < this._icons.length)
            this.icon = this._icons[this._selectedIndex];
    }

    public get values(): string[] {
        return this._values;
    }

    public set values(value: string[]) {
        if (!value)
            this._values.length = 0;
        else
            this._values = value.concat();
    }

    public get selectedIndex(): number {
        return this._selectedIndex;
    }

    public set selectedIndex(val: number) {
        if (this._selectedIndex == val)
            return;

        this._selectedIndex = val;
        if (this._selectedIndex >= 0 && this._selectedIndex < this._items.length) {
            this.text = this._items[this._selectedIndex];
            if (this._icons && this._selectedIndex < this._icons.length)
                this.icon = this._icons[this._selectedIndex];
        }
        else {
            this.text = "";
            if (this._icons)
                this.icon = null;
        }

        this.updateSelectionController();
    }

    public get value(): string {
        return this._values[this._selectedIndex];
    }

    public set value(val: string) {
        var index: number = this._values.indexOf(val);
        if (index == -1 && val == null)
            index = this._values.indexOf("");
        this.selectedIndex = index;
    }

    public getTextField(): GTextField {
        if (this._titleObject instanceof GTextField)
            return this._titleObject;
        else if ((this._titleObject instanceof GLabel) || (this._titleObject instanceof GButton))
            return this._titleObject.getTextField();
        else
            return null;
    }

    protected setState(val: string): void {
        if (this._buttonController)
            this._buttonController.selectedPage = val;
    }

    public get selectionController(): Controller {
        return this._selectionController;
    }

    public set selectionController(value: Controller) {
        this._selectionController = value;
    }

    public handleControllerChanged(c: Controller): void {
        super.handleControllerChanged(c);

        if (this._selectionController == c)
            this.selectedIndex = c.selectedIndex;
    }

    private updateSelectionController(): void {
        if (this._selectionController && !this._selectionController.changing
            && this._selectedIndex < this._selectionController.pageCount) {
            var c: Controller = this._selectionController;
            this._selectionController = null;
            c.selectedIndex = this._selectedIndex;
            this._selectionController = c;
        }
    }

    public dispose(): void {
        if (this.dropdown) {
            this.dropdown.dispose();
            this.dropdown = null;
        }

        this._selectionController = null;

        super.dispose();
    }

    public getProp(index: number): any {
        switch (index) {
            case ObjectPropID.Color:
                return this.titleColor;
            case ObjectPropID.OutlineColor:
                {
                    var tf: GTextField = this.getTextField();
                    if (tf)
                        return tf.strokeColor;
                    else
                        return 0;
                }
            case ObjectPropID.FontSize:
                {
                    tf = this.getTextField();
                    if (tf)
                        return tf.fontSize;
                    else
                        return 0;
                }
            default:
                return super.getProp(index);
        }
    }

    public setProp(index: number, value: any): void {
        switch (index) {
            case ObjectPropID.Color:
                this.titleColor = value;
                break;
            case ObjectPropID.OutlineColor:
                {
                    var tf: GTextField = this.getTextField();
                    if (tf)
                        tf.strokeColor = value;
                }
                break;
            case ObjectPropID.FontSize:
                {
                    tf = this.getTextField();
                    if (tf)
                        tf.fontSize = value;
                }
                break;
            default:
                super.setProp(index, value);
                break;
        }
    }

    protected constructExtension(buffer: ByteBuffer): Promise<void> {
        return new Promise((resolve, reject) => {
            var str: string;

            this._buttonController = this.getController("button");
            this._titleObject = this.getChild("title");
            this._iconObject = this.getChild("icon");

            str = buffer.readS();
            if (str) {
                UIPackage.createObjectFromURL(str).then((obj) => {
                    this.dropdown = <GComponent>obj;
                    if (!this.dropdown) {
                        console.log("下拉框必须为元件");
                        return;
                    }
                    this.dropdown.name = "this._dropdownObject";
                    this._list = <GList>this.dropdown.getChild("list");
                    if (!this._list) {
                        console.log(this.resourceURL + ": 下拉框的弹出元件里必须包含名为list的列表");
                        return;
                    }
                    this._list.on(Events.CLICK_ITEM, this.__clickItem, this);

                    this._list.addRelation(this.dropdown, RelationType.Width);
                    this._list.removeRelation(this.dropdown, RelationType.Height);

                    this.dropdown.addRelation(this._list, RelationType.Height);
                    this.dropdown.removeRelation(this._list, RelationType.Width);

                    // 销毁
                    this.dropdown.displayObject.on("destroy", this.__popupWinClosed, this);
                    resolve();
                });
            } else {
                resolve();
            }
        });
    }

    private addListen() {
        this.on(InteractiveEvent.GAMEOBJECT_OVER, this.__rollover, this);
        this.on(InteractiveEvent.GAMEOBJECT_OUT, this.__rollout, this);
        this.on(InteractiveEvent.GAMEOBJECT_DOWN, this.__mousedown, this);
    }

    private removeListen() {
        this.off(InteractiveEvent.GAMEOBJECT_OVER, this.__rollover, this);
        this.off(InteractiveEvent.GAMEOBJECT_OUT, this.__rollout, this);
        this.off(InteractiveEvent.GAMEOBJECT_DOWN, this.__mousedown, this);
    }

    public setup_afterAdd(buffer: ByteBuffer, beginPos: number): void {
        super.setup_afterAdd(buffer, beginPos);

        if (!buffer.seek(beginPos, 6))
            return;

        if (buffer.readByte() != this.packageItem.objectType)
            return;

        var i: number;
        var iv: number;
        var nextPos: number;
        var str: string;
        var itemCount: number = buffer.readShort();
        for (i = 0; i < itemCount; i++) {
            nextPos = buffer.readShort();
            nextPos += buffer.position;

            this._items[i] = buffer.readS();
            this._values[i] = buffer.readS();
            str = buffer.readS();
            if (str != null) {
                if (!this._icons)
                    this._icons = [];
                this._icons[i] = str;
            }

            buffer.position = nextPos;
        }

        str = buffer.readS();
        if (str != null) {
            this.text = str;
            this._selectedIndex = this._items.indexOf(str);
        }
        else if (this._items.length > 0) {
            this._selectedIndex = 0;
            this.text = this._items[0];
        }
        else
            this._selectedIndex = -1;

        str = buffer.readS();
        if (str != null)
            this.icon = str;

        if (buffer.readBool())
            this.titleColor = buffer.readColorS();
        iv = buffer.readInt();
        if (iv > 0)
            this._visibleItemCount = iv;
        this._popupDirection = buffer.readByte();

        iv = buffer.readShort();
        if (iv >= 0) this._selectionController = this.parent.getControllerAt(iv);
        this.addListen();
    }

    protected showDropdown(): Promise<void> {
        return new Promise((resolve, reject) => {
            if (this._itemsUpdated) {
                this._itemsUpdated = false;

                this._list.removeChildrenToPool();
                var cnt: number = this._items.length;
                const fun0 = (i: number) => {
                    if (i >= cnt) {
                        this._list.resizeToFit(this._visibleItemCount);
                        this._list.selectedIndex = -1;
                        this.dropdown.width = this.width;
                        this._list.ensureBoundsCorrect();

                        var downward: any = null;
                        if (this._popupDirection == PopupDirection.Down)
                            downward = true;
                        else if (this._popupDirection == PopupDirection.Up)
                            downward = false;

                        this.root.togglePopup(this.dropdown, this, downward);
                        if (this.dropdown.parent)
                            this.setState(GButton.DOWN);
                        resolve();
                        return;
                    }
                    this._list.addItemFromPool().then((obj) => {
                        const item: GObject = obj;
                        item.name = i < this._values.length ? this._values[i] : "";
                        item.text = this._items[i];
                        item.icon = (this._icons && i < this._icons.length) ? this._icons[i] : null;
                        fun0(++i);
                    })
                }
                fun0(0);
            } else {
                this._list.selectedIndex = -1;
                this.dropdown.width = this.width;
                this._list.ensureBoundsCorrect();

                var downward: any = null;
                if (this._popupDirection == PopupDirection.Down)
                    downward = true;
                else if (this._popupDirection == PopupDirection.Up)
                    downward = false;

                this.root.togglePopup(this.dropdown, this, downward);
                if (this.dropdown.parent)
                    this.setState(GButton.DOWN);
                resolve();
            }
        });
    }

    private __popupWinClosed(): void {
        if (this._over)
            this.setState(GButton.OVER);
        else
            this.setState(GButton.UP);
    }

    private __clickItem(itemObject: GObject, evt: any): void {
        this.__clickItem2(this._list.getChildIndex(itemObject), evt);
        //Laya.timer.callLater(this, this.__clickItem2, [this._list.getChildIndex(itemObject), evt])
    }

    private __clickItem2(index: number, evt: any): void {
        if (this.dropdown.parent instanceof GRoot)
            this.dropdown.parent.hidePopup();
        this._selectedIndex = -1;
        this.selectedIndex = index;

        Events.dispatch(Events.STATE_CHANGED, this.displayObject, evt);

    }

    private __rollover(): void {
        this._over = true;
        if (this._down && this.dropdown)
            return;

        this.setState(GButton.OVER);
    }

    private __rollout(): void {
        this._over = false;
        if (this._down && this.dropdown)
            return;
        this.setState(GButton.UP);
    }

    private __mousedown(evt: any): void {
        // if (evt.target instanceof Laya.Input)
        //     return;

        this._down = true;
        GRoot.inst.checkPopups(<Phaser.GameObjects.Container>this.displayObject);


        if (this.dropdown) {
            this.showDropdown().then(() => {
                this.scene.input.off(InteractiveEvent.POINTER_UP, this.__mouseup, this);
                this.scene.input.on(InteractiveEvent.POINTER_UP, this.__mouseup, this);
            });
        }

    }

    private __mouseup(pointer, gameObject): void {
        if (this._down) {
            if (this.dropdown) {
                // fairgui 没有处理未点击到combox时列表是否缩起的处理
                if (!this.dropdown.parent) {
                    this._down = false;
                    this.scene.input.off(InteractiveEvent.POINTER_UP, this.__mouseup, this);
                    if (this._over) {
                        this.setState(GButton.OVER);
                    }
                    else {
                        this.setState(GButton.UP);
                    }
                }
            }
        }
    }
}
