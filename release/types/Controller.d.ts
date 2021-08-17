import { ByteBuffer } from './utils/ByteBuffer';
import { GComponent } from "./GComponent";
export declare class Controller extends Phaser.Events.EventEmitter {
    private _selectedIndex;
    private _previousIndex;
    private _pageIds;
    private _pageNames;
    private _actions?;
    name: string;
    parent: GComponent;
    autoRadioGroupDepth?: boolean;
    changing: boolean;
    constructor();
    dispose(): void;
    get selectedIndex(): number;
    set selectedIndex(value: number);
    /**
     * 功能和设置selectedIndex一样，但不会触发事件
     */
    setSelectedIndex(value: number): void;
    get previsousIndex(): number;
    get selectedPage(): string;
    set selectedPage(val: string);
    /**
     * 功能和设置selectedPage一样，但不会触发事件
     */
    setSelectedPage(value: string): void;
    get previousPage(): string;
    get pageCount(): number;
    getPageName(index: number): string;
    addPage(name: string): void;
    addPageAt(name: string, index: number): void;
    removePage(name: string): void;
    removePageAt(index: number): void;
    clearPages(): void;
    hasPage(aName: string): boolean;
    getPageIndexById(aId: string): number;
    getPageIdByName(aName: string): string;
    getPageNameById(aId: string): string;
    getPageId(index: number): string;
    get selectedPageId(): string;
    set selectedPageId(val: string);
    set oppositePageId(val: string);
    get previousPageId(): string;
    runActions(): void;
    setup(buffer: ByteBuffer): void;
}
