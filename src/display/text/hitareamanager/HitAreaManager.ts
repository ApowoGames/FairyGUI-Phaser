export class HitAreaManager {
    private hitAreas: HitAreaRectangle[];
    constructor() {
        this.hitAreas = [];
    }

    destroy() {
        this.clear();
    }

    clear() {
        return this;
    }

    add(key: string, x: number, y: number, width: number, height: number) {
        const rectangle = new HitAreaRectangle(x, y, width, height);
        rectangle.key = key;
        this.hitAreas.push(rectangle);
        return this;
    }

    getFirstHitArea(x: number, y: number) {
        for (const area of this.hitAreas) {
            if (area.contains(x, y)) {
                return area;
            }
        }
    }
}

class HitAreaRectangle extends Phaser.Geom.Rectangle {
    public key: string;
}