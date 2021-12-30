import { Pen } from "../penmanager/Pen";
import { PenManager } from "../penmanager/PenManager";
import { CanvasText } from "./CanvasText";
export declare function Draw(canvasText: CanvasText, drawBoundX: number, drawBoundY: number, drawBoundWidth: number, drawBoundHeight: number, textScrollX?: number, textScrollY?: number, penManager?: PenManager): Promise<void>;
export declare function DrawPen(canvasText: CanvasText, pen: Pen, offsetX: number, offsetY: number): Promise<void>;
