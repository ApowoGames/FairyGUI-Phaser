namespace fgui {

    export enum GRAPHICSTYPE {
        RECTANGLE = "rectangle",
        CIRCLE = "circle",
        POLY = "POLY",
        ELLIPSE = "ellipse",
    }
    export class Graphics extends Phaser.GameObjects.Graphics {
        // 默认矩形
        private _graphicsType: GRAPHICSTYPE = GRAPHICSTYPE.RECTANGLE;
        private _width: number = 0;
        private _height: number = 0;
        private _radius: number = 0;
        private _points: Phaser.Geom.Point[] = [];
        constructor(scene: Phaser.Scene) {
            super(scene);
        }

        public get width(): number {
            return this._width;
        }

        public get height(): number {
            return this._height;
        }

        public get radius(): number {
            return this._radius;
        }

        public get points(): Phaser.Geom.Point[] {
            return this._points;
        }

        public fillRect(x: number, y: number, width: number, height: number): this {
            this._graphicsType = GRAPHICSTYPE.RECTANGLE;
            this._width = width;
            this._height = height;
            return super.fillRect(x, y, width, height);
        }

        public fillCircle(x: number, y: number, radius: number): this {
            this._graphicsType = GRAPHICSTYPE.CIRCLE;
            this._radius = radius;
            return super.fillCircle(x, y, radius);
        }

        public fillTriangle(x0: number, y0: number, x1: number, y1: number, x2: number, y2: number): this {
            // 三角形是多边形
            // todo 扩展其他正多边形
            this._graphicsType = GRAPHICSTYPE.POLY;
            this._points = [new Phaser.Geom.Point(x0, y0), new Phaser.Geom.Point(x1, y1), new Phaser.Geom.Point(x2, y2)];
            return super.fillTriangle(x0, y0, x1, y1, x2, y2);
        }

        public fillEllipse(x: number, y: number, width: number, height: number, smoothness?: number): this {
            this._graphicsType = GRAPHICSTYPE.ELLIPSE;
            return super.fillEllipse(x, y, width, height, smoothness);
        }

        public get graphicsType(): GRAPHICSTYPE {
            return this._graphicsType;
        }
        public set graphicsType(value: GRAPHICSTYPE) {
            this._graphicsType = value;
        }

        public clear(): this {
            this._width = 0;
            this._height = 0;
            this._radius = 0;
            this._points = [];
            return super.clear();
        }



    }
}