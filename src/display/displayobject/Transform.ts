export function GetLocalTransformMatrix(tempMatrix?: Phaser.GameObjects.Components.TransformMatrix) {
    if (!tempMatrix) {
        tempMatrix = new Phaser.GameObjects.Components.TransformMatrix();
    }
    return tempMatrix.applyITRS(this.x, this.y, this._rotation, this.scaleX, this.scaleY);
}

export function GetWorldTransformMatrix(tempMatrix?: Phaser.GameObjects.Components.TransformMatrix, parentMatrix?: Phaser.GameObjects.Components.TransformMatrix) {
    if (!tempMatrix) {
        tempMatrix = new Phaser.GameObjects.Components.TransformMatrix();
    }
    if (!parentMatrix) {
        parentMatrix = new Phaser.GameObjects.Components.TransformMatrix();
    }

    let parent = this.parentContainer;
    if (!parent) {
        return this.getLocalTransformMatrix(tempMatrix);
    }
    tempMatrix.applyITRS(this.x, this.y, this._rotation, this._scaleX, this._scaleY);

    while (parent) {
        parentMatrix.applyITRS(parent.x, parent.y, parent.rotation, parent.scaleX, parent.scaleY);

        parentMatrix.multiply(tempMatrix, tempMatrix);

        parent = parent.parentContainer;
    }
    return tempMatrix;
}

export function GetLocalPoint(x: number, y: number, point: Phaser.Math.Vector2, camera: Phaser.Cameras.Scene2D.Camera) {
    if (!point) point = new Phaser.Math.Vector2();
    if (!camera) camera = this.scene.sys.cameras.main;
    
    const csx = camera.scrollX;
    const csy = camera.scrollY;

    const px = x + (csx * this.scrollFactorX) - csx;
    const py = y + (csy * this.scrollFactorY) - csy;
    if (this.parentContainer) {
        this.getWorldTransformMatrix().applyInverse(px, py, point);
    } else {
        Phaser.Math.TransformXY(px, py, this.x, this.y, this._rotation, this.scaleX, this.scaleY, point);
    }

    //  Normalize origin
    if (this._originComponent) { 
        point.x += this._displayOriginX;
        point.y += this._displayOriginY;
    }
    return point;
}