import { Pool } from "../../../utils/Pool";
import { Parser } from "../bbcode/Parser";
import { HitAreaManager } from "../hitareamanager/HitAreaManager";
import { Pen } from "../penmanager/Pen";
import { PenManager } from "../penmanager/PenManager";
import { UpdatePenManager } from "../penmanager/UpdatePenManager";
import { ITextStyle } from "../style/TextStyle";
import { TextField } from "../TextField";
import { WrapMode } from "../WrapText";
import { Draw } from "./DrawMethods";

export class CanvasText {
    public hitAreaManager: HitAreaManager;
    private _parent: TextField;
    private _context: CanvasRenderingContext2D;
    private _canvas: HTMLCanvasElement;
    private _parser: Parser;
    private defaultStyle: ITextStyle;
    private autoRound: boolean;
    private penPool: Pool<Pen>;
    private _penManager: PenManager;
    private _tmpPenManager: PenManager;
    private getTextWidth: Function;

    constructor(config) {
        this._parent = config.parent;
        this._context = config.context;
        this._canvas = config.canvas;
        this._parser = config.parse;
        this.defaultStyle = this._parent.style;
        this.autoRound = true;

        this.penPool = config.pensPool ? config.pensPool : new Pool<Pen>();
        this._tmpPenManager = null;

        this._penManager = new PenManager({ penPool: this.penPool });

        const context = this._context;
        this.getTextWidth = function (text) {
            return context.measureText(text).width;
        }
    }

    public updatePenManager(text: string, wrapMode: WrapMode, wrapWidth: number, penManager?: PenManager) {
        if (penManager === undefined) {
            penManager = this._penManager;
        }
        return UpdatePenManager(this._penManager, text, this, wrapMode, wrapWidth);
    }

    public draw(x: number, y: number, width: number, height: number, textScrollX: number = 0, textScrollY: number = 0) {
        Draw(this, x, y, width, height, textScrollX, textScrollY);

        return this;
    }

    destroy() {
        this._context = undefined;
        this._canvas = undefined;
        this._parser = undefined;
        this.defaultStyle = undefined;

        if (this._penManager) {
            this._penManager.destroy();
            this._penManager = undefined;
        }

        if (this._tmpPenManager) {
            this._tmpPenManager.destroy();
            this._tmpPenManager = undefined;
        }

        if (this.hitAreaManager) {
            this.hitAreaManager.destroy();
            this.hitAreaManager = undefined;
        }
    }

    getPlainText(text: string, start: number, end: number) {
        let plainText: string;
        if (!text) {
            plainText = this._penManager.plainText;
        } else {
            plainText = this._parser.splitText(text, true).join("");
        }

        if ((start != null) || (end != null)) {
            if (start == null) {
                start = 0;
            }
            if (end == null) {
                end = plainText.length;
            }
            plainText = plainText.substring(start, end);
        }

        return plainText;
    }

    getPenManager(text, retPenManager) {
        if (!text) {
            return this.clonePenManager(retPenManager, this._penManager);
        }
        if (!retPenManager) {
            retPenManager = new PenManager({penPool: this.penPool});
        }
        const defaultStyle = this.defaultStyle;
        this.updatePenManager(text,
            defaultStyle.wrapMode,
            defaultStyle.wrapWidth,
            retPenManager
        );
        return retPenManager;
    }

    getText(text: string, start: number, end: number, wrap?: boolean) {
        if (text == null) {
            return this._penManager.getSliceTagText(this._parser.propToTagText, this._parser, start, end, wrap);
        }
        const penManager = this._tmpPenManager;
        const defaultStyle = this.defaultStyle;
        this.updatePenManager(text, defaultStyle.wrapMode, defaultStyle.wrapWidth, penManager);

        return penManager.getSliceTagText(this._parser.propToTagText, this._parser, start, end, wrap);
    }

    clonePenManager(ret: PenManager, src: PenManager) {
        if (src === undefined) {
            src = this._penManager;
        }
        return src.clone(ret);
    }

    getLastPen(penManager?: PenManager) {
        if (penManager === undefined) {
            penManager = this._penManager;
        }
        return penManager.lastPen;``
    }

    setInteractive() {
        const parent = this.parent;
        if (!parent) {
            return;
        }
        parent.off(Phaser.Input.Events.POINTER_DOWN, this.pointerDownHandler, this);
        parent.off(Phaser.Input.Events.POINTER_UP, this.pointerDownHandler, this);

        parent.on(Phaser.Input.Events.POINTER_DOWN, this.pointerDownHandler, this);
        parent.on(Phaser.Input.Events.POINTER_UP, this.pointerUpHandler, this);
    }

    clear() {
        const canvas = this._canvas;
        this._context.clearRect(0, 0, canvas.width, canvas.height);
    }

    protected pointerDownHandler(pointer: Phaser.Input.Pointer, localX: number, localY: number, event) {
        this.fireEvent("areadown", pointer, localX, localY);
    }

    protected pointerUpHandler(pointer: Phaser.Input.Pointer, localX: number, localY: number, event) {
        this.fireEvent("areaup", pointer, localX, localY);
    }

    protected fireEvent(eventName: string, pointer: Phaser.Input.Pointer, localX: number, localY: number) {
        if (!this.hitAreaManager) {
            return;
        }
        const area = this.hitAreaManager.getFirstHitArea(localX, localY);
        if (!area) {
            return;
        }
        const key = area.key;
        this.parent.emit(`${eventName}-${key}`, pointer, localX, localY);
        this.parent.emit(eventName, key, pointer, localX, localY);
    }

    get imageManager() {
        return this.parent.imageManager;
    }

    get startXOffset() {
        return this.defaultStyle.strokeThickness / 2;
    }

    get startYOffset() {
        const defaultStyle = this.defaultStyle;
        return defaultStyle.strokeThickness / 2 + defaultStyle.metrics.ascent;
    }

    get lines() {
        return this._penManager.lines;
    }

    get context() {
        return this._context;
    }

    get canvas() {
        return this._canvas;
    }

    get penManager() {
        return this._penManager;
    }

    get textWidth() {
        return this.penManager.maxLineWidth;
    }

    get textHeight() {
        return this.penManager.totalLineHeight;
    }

    get parent() {
        return this._parent;
    }

    get parser() {
        return this._parser;
    }
}