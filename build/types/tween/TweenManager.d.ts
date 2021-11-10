import { GTweener } from './GTweener';
export declare class TweenManager {
    private static updateTween;
    static createTween(): GTweener;
    static isTweening(target: any, propType: any): boolean;
    static killTweens(target: any, completed: boolean, propType: any): boolean;
    static getTween(target: any, propType: any): GTweener;
    static update(): void;
}
