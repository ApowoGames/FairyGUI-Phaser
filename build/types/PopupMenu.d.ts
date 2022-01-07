import { PopupDirection } from './FieldTypes';
import { GButton } from './GButton';
import { GObject } from './GObject';
import { GList } from './GList';
import { GComponent } from "./GComponent";
export declare class PopupMenu {
    protected _scene: Phaser.Scene;
    private resourceURL?;
    protected _contentPane: GComponent;
    protected _list: GList;
    constructor(_scene: Phaser.Scene, resourceURL?: string);
    init(): Promise<void>;
    dispose(): void;
    /**
     * 一次创建一个item
     * @param caption
     * @param handler
     * @returns
     */
    addItem(caption: string, handler?: (item?: GObject, evt?: Event) => void): Promise<GButton>;
    /**
     * 一次创建多个items，由于异步问题，会导致promise返回后显示对象的添加的先后顺序错乱(index 5先被添加到0，0位置)
     * @param captions
     * @param handler
     * @returns
     */
    addItems(captions: string[], handler?: (item?: GObject, evt?: Event) => void): Promise<void>;
    addItemAt(caption: string, index: number, handler?: (item?: GObject, evt?: Event) => void): Promise<GButton>;
    addSeperator(): void;
    getItemName(index: number): string;
    setItemText(name: string, caption: string): void;
    setItemVisible(name: string, visible: boolean): void;
    setItemGrayed(name: string, grayed: boolean): void;
    setItemCheckable(name: string, checkable: boolean): void;
    setItemChecked(name: string, checked: boolean): void;
    isItemChecked(name: string): boolean;
    removeItem(name: string): boolean;
    clearItems(): void;
    get itemCount(): number;
    get contentPane(): GComponent;
    get list(): GList;
    show(target?: GObject, dir?: PopupDirection | boolean): void;
    private __clickItem;
    private __clickItem2;
}
