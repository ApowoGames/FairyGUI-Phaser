import { ByteBuffer } from './../utils/ByteBuffer';
import { Controller } from './../Controller';
import { ControllerAction } from './ControllerAction';
export declare class PlayTransitionAction extends ControllerAction {
    transitionName: string;
    playTimes: number;
    delay: number;
    stopOnExit: boolean;
    private _currentTransition?;
    constructor();
    protected enter(controller: Controller): void;
    protected leave(controller: Controller): void;
    setup(buffer: ByteBuffer): void;
}
