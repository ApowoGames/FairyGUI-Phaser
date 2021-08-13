namespace fgui {
    let _func: Function = HitArea["_isHitGraphic"];

    export class ChildHitArea extends HitArea {

        private _child: GObject;
        private _reversed: boolean;
        private _tPos: Phaser.Geom.Point = new Phaser.Geom.Point();;

        constructor(child: GObject, reversed?: boolean) {
            super();

            this._child = child;
            this._reversed = reversed;

            if (this._reversed)
                this.unHit = child.hitArea.hit;
            else
                this.hit = child.hitArea.hit;
        }

        public contains(x: number, y: number): boolean {
            var tPos: Phaser.Geom.Point;
            tPos = this._tPos;
            tPos.setTo(0, 0);
            tPos = this._child.toParentPoint(tPos);
            if (this._reversed)
                return !_func(x - tPos.x, y - tPos.y, this.unHit);
            else
                return _func(x - tPos.x, y - tPos.y, this.hit);
        }
    }
}