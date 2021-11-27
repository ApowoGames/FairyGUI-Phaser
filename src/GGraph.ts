import { ByteBuffer } from './utils/ByteBuffer';
import { ObjectPropID } from './FieldTypes';
import { GObject } from './GObject';
import { HitArea, ToolSet } from '.';
import { Utils } from './utils/Utils';
export class GGraph extends GObject {
    private _type: number;
    private _lineSize: number;
    private _lineColor: string;
    private _fillColor: string;
    private _cornerRadius?: number[];
    private _hitArea?: any;
    private _sides?: number;
    private _startAngle?: number;
    private _polygonPoints?: number[];
    private _distances?: number[];

    private _graphics: Phaser.GameObjects.Graphics;
    constructor(scene: Phaser.Scene, type) {
        super(scene, type);

        this._type = 0;
        this._lineSize = 1;
        this._lineColor = "#000000"
        this._fillColor = "#FFFFFF";
    }

    public drawRect(lineSize: number, lineColor: string, fillColor: string, cornerRadius?: number[]): void {
        this._type = 1;
        this._lineSize = lineSize;
        this._lineColor = lineColor;
        this._fillColor = fillColor;
        this._cornerRadius = cornerRadius;
        this.updateGraph();
    }

    public drawEllipse(lineSize: number, lineColor: string, fillColor: string): void {
        this._type = 2;
        this._lineSize = lineSize;
        this._lineColor = lineColor;
        this._fillColor = fillColor;
        this.updateGraph();
    }

    public drawRegularPolygon(lineSize: number, lineColor: string, fillColor: string, sides: number, startAngle?: number, distances?: number[]): void {
        this._type = 4;
        this._lineSize = lineSize;
        this._lineColor = lineColor;
        this._fillColor = fillColor;
        this._sides = sides;
        this._startAngle = startAngle || 0;
        this._distances = distances;
        this.updateGraph();
    }

    public drawPolygon(lineSize: number, lineColor: string, fillColor: string, points: number[]): void {
        this._type = 3;
        this._lineSize = lineSize;
        this._lineColor = lineColor;
        this._fillColor = fillColor;
        this._polygonPoints = points;
        this.updateGraph();
    }

    public get distances(): number[] {
        return this._distances;
    }

    public set distances(value: number[]) {
        this._distances = value;
        if (this._type == 3)
            this.updateGraph();
    }

    public get color(): string {
        return this._fillColor;
    }

    public set color(value: string) {
        this._fillColor = value;
        this.updateGear(4);
        if (this._type != 0)
            this.updateGraph();
    }

    private updateGraph(): void {
        this._displayObject.mouseEnabled = this.touchable;
        if (this._graphics) this._graphics.clear();
        this._graphics = this.scene.make.graphics(undefined, false);
        if (this._skewX != 0 || this._skewY != 0) {
            this.setSkew(this._skewX, this._skewY);
        }
        var w: number = this.width;
        var h: number = this.height;
        if (w == 0 || h == 0)
            return;

        let fillColor;
        let lineColor;
        if (this._lineColor) lineColor = Utils.toNumColor(this._lineColor);
        // ============= rgba颜色值转换
        if (/*Render.isWebGL &&*/ ToolSet.startsWith(this._fillColor, "rgba")) {
            //webgl下laya未支持rgba格式
            var arr: any[] = this._fillColor.substring(5, this._fillColor.lastIndexOf(")")).split(",");
            var a: number = parseFloat(arr[3]);
            if (a == 0)
                fillColor = null;
            else {
                fillColor = Utils.toNumColor(Utils.toHexColor((parseInt(arr[0]) << 16) + (parseInt(arr[1]) << 8) + parseInt(arr[2])));
                this.alpha = a;
            }
        } else {
            fillColor = Utils.toNumColor(this._fillColor);
        }
        this._graphics.fillStyle(fillColor, this.alpha);
        if (this._lineSize && lineColor) this._graphics.lineStyle(this._lineSize, lineColor);
        if (this._type == 1) {
            // 画圆角
            if (this._cornerRadius) {
                var paths: any[] = [

                    ["moveTo", this._cornerRadius[0], 0],
                    ["lineTo", w - this._cornerRadius[1], 0],
                    ["arcTo", w, 0, w, this._cornerRadius[1], this._cornerRadius[1]],
                    ["lineTo", w, h - this._cornerRadius[3]],
                    ["arcTo", w, h, w - this._cornerRadius[3], h, this._cornerRadius[3]],
                    ["lineTo", this._cornerRadius[2], h],
                    ["arcTo", 0, h, 0, h - this._cornerRadius[2], this._cornerRadius[2]],
                    ["lineTo", 0, this._cornerRadius[0]],
                    ["arcTo", 0, 0, this._cornerRadius[0], 0, this._cornerRadius[0]],
                    ["closePath"]
                ];

                this._graphics.fillRoundedRect(0, 0, w, h, this._cornerRadius[0]);
                if (this._lineSize > 0) {
                    this._graphics.strokeRoundedRect(0, 0, w, h, this._cornerRadius[0]);
                }
                // gr.drawPath(0, 0, paths, fillColor ? { fillStyle: fillColor } : null, this._lineSize > 0 ? { strokeStyle: lineColor, lineWidth: this._lineSize } : null);
            }
            else
                this._graphics.fillRect(0, 0, w, h);
            if (this._lineSize > 0) {
                this._graphics.strokeRect(0, 0, w, h);
            }
            // gr.drawRect(0, 0, w, h, fillColor, this._lineSize > 0 ? lineColor : null, this._lineSize);
        } else if (this._type == 2) {
            this._graphics.fillCircle(w / 2, h / 2, w / 2);
            if (this._lineSize > 0) {
                this._graphics.strokeCircle(w / 2, h / 2, w / 2);
            }
            // gr.drawCircle(w / 2, h / 2, w / 2, fillColor, this._lineSize > 0 ? lineColor : null, this._lineSize);
        }
        else if (this._type == 3) {
            // ==== 优先处理点数据 偏移量，并以点形式保存
            this.dealWithPolyPoints(0, 0);


            // gr.drawPoly(0, 0, this._polygonPoints, fillColor, this._lineSize > 0 ? lineColor : null, this._lineSize);
        }
        else if (this._type == 4) {
            if (!this._polygonPoints)
                this._polygonPoints = [];
            var radius: number = Math.min(this._width, this._height) / 2;
            this._polygonPoints.length = 0;
            var angle: number = Utils.toRadian(this._startAngle);
            var deltaAngle: number = 2 * Math.PI / this._sides;
            var dist: number;
            for (var i: number = 0; i < this._sides; i++) {
                if (this._distances) {
                    dist = this._distances[i];
                    if (isNaN(dist))
                        dist = 1;
                }
                else
                    dist = 1;

                var xv: number = radius + radius * dist * Math.cos(angle);
                var yv: number = radius + radius * dist * Math.sin(angle);
                this._polygonPoints.push(xv, yv);

                angle += deltaAngle;
            }
            this.dealWithPolyPoints(0, 0);
            // gr.drawPoly(0, 0, this._polygonPoints, fillColor, this._lineSize > 0 ? lineColor : null, this._lineSize);
        }

        // this._displayObject.repaint();
        this._displayObject.addAt(this._graphics);
    }

    public dealWithPolyPoints(basePosX: number = 0, basePosY: number = 0) {
        var offset = (this._lineSize >= 1 && this._lineColor) ? (this._lineSize % 2 === 0 ? 0 : 0.5) : 0;
        const points = this._polygonPoints;
        const points1 = [];
        var ci: number = 0;
        for (var i: number = 0, sz: number = points.length / 2; i < sz; i++) {
            var x1: number = points[ci] + basePosX + offset, y1: number = points[ci + 1] + basePosY + offset;
            points[ci] = x1;
            points[ci + 1] = y1;
            const point = new Phaser.Geom.Point(x1, y1);
            points1.push(point);
            ci += 2;
        }
        // ==== 开始画点路径
        this._graphics.beginPath();
        for (let i: number = 0; i < points1.length; i++) {
            const point = points1[i];
            this._graphics.moveTo(0, 0);
            this._graphics.lineTo(point.x, point.y);
        }
        this._graphics.fillPath();
        if (this._lineSize > 0) {
            this._graphics.strokePath();
        }
        this._graphics.closePath();
    }

    public replaceMe(target: GObject): void {
        // if (!this._parent)
        //     throw "parent not set";

        // target.name = this.name;
        // target.alpha = this.alpha;
        // target.rotation = this.rotation;
        // target.visible = this.visible;
        // target.touchable = this.touchable;
        // target.grayed = this.grayed;
        // target.setXY(this.x, this.y);
        // target.setSize(this.width, this.height);

        // var index: number = this._parent.getChildIndex(this);
        // this._parent.addChildAt(target, index);
        // target.relations.copyFrom(this.relations);

        // this._parent.removeChild(this, true);
    }

    public addBeforeMe(target: GObject): void {
        if (!this._parent)
            throw "parent not set";

        // var index: number = this._parent.getChildIndex(this);
        // this._parent.addChildAt(target, index);
    }

    public addAfterMe(target: GObject): void {
        if (!this._parent)
            throw "parent not set";

        // var index: number = this._parent.getChildIndex(this);
        // index++;
        // index++;
        // this._parent.addChildAt(target, index);
    }

    public setNativeObject(obj: any): void {
        this._type = 0;
        // this._displayObject.mouseEnabled = this.touchable;
        this._displayObject.graphics.clear();
        this._displayObject.addChild(obj);
    }

    public createDisplayObject(): void {
        super.createDisplayObject();
        (<Phaser.GameObjects.Container>this._displayObject).disableInteractive();
        (<Phaser.GameObjects.Container>this._displayObject).removeInteractive();
        // this._hitArea = new HitArea();
        // this._hitArea.hit = this._displayObject.graphics;
        // this._displayObject.hitArea = this._hitArea;
    }

    public getProp(index: number): any {
        if (index == ObjectPropID.Color)
            return this.color;
        else
            return super.getProp(index);
    }

    public setProp(index: number, value: any): void {
        if (index == ObjectPropID.Color)
            this.color = value;
        else
            super.setProp(index, value);
    }

    protected handleSizeChanged(): void {
        super.handleSizeChanged();

        if (this._type != 0)
            this.updateGraph();
    }

    public setSkew(sx: number, sy: number): void {
        // if (this._skewX != sx || this._skewY != sy) {
        this._skewX = sx;
        this._skewY = sy;
        if (this._graphics) {
            this._displayStyle.skewX = (-sx * Math.PI) / 180;
            this._displayStyle.skewY = (sy * Math.PI) / 180;
            this._graphics.skewX = this._displayStyle.skewX;
            this._graphics.skewY = this._displayStyle.skewY;
            this.applyPivot();
        }
        // }
    }

    public setup_beforeAdd(buffer: ByteBuffer, beginPos: number): void {
        super.setup_beforeAdd(buffer, beginPos);

        buffer.seek(beginPos, 5);

        this._type = buffer.readByte();
        if (this._type != 0) {
            var i: number;
            var cnt: number;

            this._lineSize = buffer.readInt();
            this._lineColor = buffer.readColorS(true);
            this._fillColor = buffer.readColorS(true);
            if (buffer.readBool()) {
                this._cornerRadius = [];
                for (i = 0; i < 4; i++)
                    this._cornerRadius[i] = buffer.readFloat();
            }

            if (this._type == 3) {
                cnt = buffer.readShort();
                this._polygonPoints = [];
                this._polygonPoints.length = cnt;
                for (i = 0; i < cnt; i++)
                    this._polygonPoints[i] = buffer.readFloat();
            }
            else if (this._type == 4) {
                this._sides = buffer.readShort();
                this._startAngle = buffer.readFloat();
                cnt = buffer.readShort();
                if (cnt > 0) {
                    this._distances = [];
                    for (i = 0; i < cnt; i++)
                        this._distances[i] = buffer.readFloat();
                }
            }

            this.updateGraph();
        }
        this._touchable = false;
    }
}
