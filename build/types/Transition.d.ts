import { ByteBuffer } from './utils/ByteBuffer';
import { GObject } from './GObject';
import { GComponent } from "./GComponent";
export declare class Transition {
    name: string;
    private _owner;
    private _ownerBaseX;
    private _ownerBaseY;
    private _items;
    private _totalTimes;
    private _totalTasks;
    private _playing;
    private _paused;
    private _onComplete;
    private _options;
    private _reversed;
    private _totalDuration;
    private _autoPlay;
    private _autoPlayTimes;
    private _autoPlayDelay;
    private _timeScale;
    private _startTime;
    private _endTime;
    constructor(owner: GComponent);
    checkItemInTransition(id: string): boolean;
    play(onComplete?: () => void, times?: number, delay?: number, startTime?: number, endTime?: number): void;
    playReverse(onComplete?: () => void, times?: number, delay?: number, startTime?: number, endTime?: number): void;
    changePlayTimes(value: number): void;
    setAutoPlay(value: boolean, times?: number, delay?: number): void;
    private _play;
    stop(setToComplete?: boolean, processCallback?: boolean): void;
    private stopItem;
    setPaused(paused: boolean): void;
    dispose(): void;
    get playing(): boolean;
    setValue(label: string, ...args: any[]): void;
    setHook(label: string, callback: (label?: string) => void): void;
    clearHooks(): void;
    setTarget(label: string, newTarget: GObject): void;
    setDuration(label: string, value: number): void;
    getLabelTime(label: string): number;
    get timeScale(): number;
    set timeScale(value: number);
    updateFromRelations(targetId: string, dx: number, dy: number): void;
    onOwnerAddedToStage(): void;
    onOwnerRemovedFromStage(): void;
    private onDelayedPlay;
    private internalPlay;
    private playItem;
    private skipAnimations;
    private onDelayedPlayItem;
    private onTweenStart;
    private onTweenUpdate;
    private onTweenComplete;
    private onPlayTransCompleted;
    private callHook;
    private checkAllComplete;
    private applyValue;
    setup(buffer: ByteBuffer): void;
    private decodeValue;
}
