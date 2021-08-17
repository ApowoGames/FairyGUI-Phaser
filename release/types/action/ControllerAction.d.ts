import { ByteBuffer } from './../utils/ByteBuffer';
import { Controller } from './../Controller';
export declare class ControllerAction {
    fromPage: string[];
    toPage: string[];
    static createAction(type: number): ControllerAction;
    constructor();
    run(controller: Controller, prevPage: string, curPage: string): void;
    protected enter(controller: Controller): void;
    protected leave(controller: Controller): void;
    setup(buffer: ByteBuffer): void;
}
