import { GPathPoint } from './GPathPoint';
export declare class GPath {
    private _segments;
    private _points;
    private _fullLength;
    constructor();
    get length(): number;
    create(pt1: Array<GPathPoint> | GPathPoint, pt2?: GPathPoint, pt3?: GPathPoint, pt4?: GPathPoint): void;
    private createSplineSegment;
    clear(): void;
    getPointAt(t: number, result?: Phaser.Geom.Point): Phaser.Geom.Point;
    get segmentCount(): number;
    getAnchorsInSegment(segmentIndex: number, points?: Array<Phaser.Geom.Point>): Array<Phaser.Geom.Point>;
    getPointsInSegment(segmentIndex: number, t0: number, t1: number, points?: Array<Phaser.Geom.Point>, ts?: Array<number>, pointDensity?: number): Array<Phaser.Geom.Point>;
    getAllPoints(points?: Array<Phaser.Geom.Point>, ts?: Array<number>, pointDensity?: number): Array<Phaser.Geom.Point>;
    private onCRSplineCurve;
    private onBezierCurve;
}
