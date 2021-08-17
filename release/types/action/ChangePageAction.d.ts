import { ByteBuffer } from './../utils/ByteBuffer';
import { ControllerAction } from './ControllerAction';
import { Controller } from './../Controller';
export declare class ChangePageAction extends ControllerAction {
    objectId: string;
    controllerName: string;
    targetPage: string;
    constructor();
    protected enter(controller: Controller): void;
    setup(buffer: ByteBuffer): void;
}
