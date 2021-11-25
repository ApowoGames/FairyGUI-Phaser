import { GRoot } from './../GRoot';
import { GObject } from "..";
import { Image } from "./Image";

export class MovieClip extends Image {

    public swing: boolean;
    public repeatDelay: number = 0;
    public timeScale: number = 1;
    private _interval: number = 70;
    private _endHandler?: () => void;

    private _frameElapsed: number = 0; //当前帧延迟
    private _reversed: boolean;
    private _repeatedCount: number = 0;
    private _curKey: string;

    private _sprite: Phaser.GameObjects.Sprite;
    private _image: Phaser.GameObjects.Image;
    private _sourceWidth: number = 0;
    private _sourceHeight: number = 0;
    // private _movieUpdateEvent: any;
    // private _movieTime: Phaser.Time.TimerEvent;

    constructor(scene: Phaser.Scene) {
        super(scene);

        // this.mouseEnabled = false;
        // this.setPlaySettings();
        // this._movieUpdateEvent = { delay: this.interval, callback: this.update, callbackScope: this }
        // this.on(Laya.Event.DISPLAY, this, this.__addToStage);
        // this.on(Laya.Event.UNDISPLAY, this, this.__removeFromStage);
    }

    public set interval(val) {
        this._interval = val;
        // this._movieUpdateEvent = { delay: this._interval, callback: this.update, callbackScope: this, loop: true}
    }

    public get interval(): number {
        return this._interval;
    }

    public get frames(): Phaser.Textures.Frame[] {
        return this._frames;
    }

    public set frames(value: Phaser.Textures.Frame[]) {
        this._frames = value;
        if (value) {
            const owner: GObject = this["$owner"];
            let pivotX = 0;
            let pivotY = 0;
            const frame: Phaser.Textures.Frame = value[0];
            if (value.length > 1) {
                const key = frame.texture.key;
                const len = value.length;
                const name = frame.name.split("_")[0];
                const repeat = this._times > 0 ? this._times : -1;
                this._curKey = key + "_mc";
                const frameRate = 1000 / this._interval;
                if (!this._sprite) this._sprite = this.scene.make.sprite(undefined, false);
                (<Phaser.GameObjects.Sprite>this._sprite).anims.create({ key: this._curKey, frames: this._sprite.anims.generateFrameNames(key, { prefix: name + "_", start: 0, end: len - 1 }), frameRate, repeat });
                // this._sprite.x += Math.abs(pivotX - 0.5) * this["$owner"].initWidth;
                // this._sprite.y += Math.abs(pivotY - 0.5) * this["$owner"].initHeight;
                // this._sprite.setOrigin(pivotX, pivotY);
                this.add(this._sprite);
                this.checkTimer();
            } else {
                if (owner) {
                    if (owner.parent) {
                        if (owner.parent.parent) {
                            if (owner.parent.parent instanceof GRoot) {
                                pivotX = owner.pivotX;
                                pivotY = owner.pivotY;
                            } else {
                                pivotX = owner.parent.pivotX;
                                pivotY = owner.parent.pivotY;
                            }
                        }
                    }
                }
                const key = frame.texture.key;
                if (!this._image) {
                    this._image = new Phaser.GameObjects.Image(this.scene, 0, 0, key, frame.name);
                } else {
                    this._image.setTexture(key, frame.name);
                }
                // this._image.setOrigin(pivotX, pivotY);
                //this._image.setPosition(0, 0);
                this.add(this._image);
            }
        } else {
            if (this._sprite) {
                this._sprite.stop();
                this.remove(this._sprite);
            }
            if (this._image) {
                this.remove(this._image);
            }
            this.checkTimer(false);
        }
    }

    public get frameCount(): number {
        return this._frameCount;
    }

    public get frame(): number {
        return this._frame;
    }

    public set frame(value: number) {
        if (this._frame != value) {
            if (this._frames && value >= this._frameCount)
                value = this._frameCount - 1;

            this._frame = value;
            this._frameElapsed = 0;
            this.drawFrame();
        }
    }

    public get playing(): boolean {
        return this._playing;
    }

    public set playing(value: boolean) {
        if (this._playing != value) {
            this._playing = value;
            this.checkTimer(value);
        }
    }

    //从start帧开始，播放到end帧（-1表示结尾），重复times次（0表示无限循环），循环结束后，停止在endAt帧（-1表示参数end）
    // public rewind(): void {
    //     this._frame = 0;
    //     this._frameElapsed = 0;
    //     this._reversed = false;
    //     this._repeatedCount = 0;

    //     this.drawFrame();
    // }

    // public syncStatus(anotherMc: MovieClip): void {
    //     this._frame = anotherMc._frame;
    //     this._frameElapsed = anotherMc._frameElapsed;
    //     this._reversed = anotherMc._reversed;
    //     this._repeatedCount = anotherMc._repeatedCount;

    //     this.drawFrame();
    // }

    public advance(timeInMiniseconds: number): void {
        //     var beginFrame: number = this._frame;
        //     var beginReversed: boolean = this._reversed;
        //     var backupTime: number = timeInMiniseconds;
        //     while (true) {
        //         var tt: number = this.interval + this._frames[this._frame]["addDelay"];
        //         if (this._frame == 0 && this._repeatedCount > 0)
        //             tt += this.repeatDelay;
        //         if (timeInMiniseconds < tt) {
        //             this._frameElapsed = 0;
        //             break;
        //         }

        //         timeInMiniseconds -= tt;

        //         if (this.swing) {
        //             if (this._reversed) {
        //                 this._frame--;
        //                 if (this._frame <= 0) {
        //                     this._frame = 0;
        //                     this._repeatedCount++;
        //                     this._reversed = !this._reversed;
        //                 }
        //             }
        //             else {
        //                 this._frame++;
        //                 if (this._frame > this._frameCount - 1) {
        //                     this._frame = Math.max(0, this._frameCount - 2);
        //                     this._repeatedCount++;
        //                     this._reversed = !this._reversed;
        //                 }
        //             }
        //         }
        //         else {
        //             this._frame++;
        //             if (this._frame > this._frameCount - 1) {
        //                 this._frame = 0;
        //                 this._repeatedCount++;
        //             }
        //         }

        //         if (this._frame == beginFrame && this._reversed == beginReversed) //走了一轮了
        //         {
        //             var roundTime: number = backupTime - timeInMiniseconds; //这就是一轮需要的时间
        //             timeInMiniseconds -= Math.floor(timeInMiniseconds / roundTime) * roundTime; //跳过
        //         }
        //     }

        //     this.drawFrame();
    }

    //从start帧开始，播放到end帧（-1表示结尾），重复times次（0表示无限循环），循环结束后，停止在endAt帧（-1表示参数end）
    // public setPlaySettings(start?: number, end?: number, times?: number, endAt?: number, endHandler?: () => void): void {
    //     if (start == undefined) start = 0;
    //     if (end == undefined) end = -1;
    //     if (times == undefined) times = 0;
    //     if (endAt == undefined) endAt = -1;

    //     this._start = start;
    //     this._end = end;
    //     if (this._end == -1 || this._end > this._frameCount - 1)
    //         this._end = this._frameCount - 1;
    //     this._times = times;
    //     this._endAt = endAt;
    //     if (this._endAt == -1)
    //         this._endAt = this._end;
    //     this._status = 0;
    //     this._endHandler = endHandler;
    //     this.frame = start;
    // }

    // public update(): void {
    //     if (!this._playing || this._frameCount == 0 || this._status == 3)
    //         return;

    //     var frameRate: number = this.scene.game.config.fps.target;
    //     var dt: number = frameRate;//Laya.timer.delta;
    //     if (dt > 100)
    //         dt = 100;
    //     if (this.timeScale != 1)
    //         dt *= this.timeScale;

    //     this._frameElapsed += dt;
    //     var tt: number = this.interval + this._frames[this._frame]["addDelay"];
    //     if (this._frame == 0 && this._repeatedCount > 0)
    //         tt += this.repeatDelay;
    //     if (this._frameElapsed < tt)
    //         return;

    //     this._frameElapsed -= tt;
    //     if (this._frameElapsed > this.interval)
    //         this._frameElapsed = this.interval;

    //     if (this.swing) {
    //         if (this._reversed) {
    //             this._frame--;
    //             if (this._frame <= 0) {
    //                 this._frame = 0;
    //                 this._repeatedCount++;
    //                 this._reversed = !this._reversed;
    //             }
    //         }
    //         else {
    //             this._frame++;
    //             if (this._frame > this._frameCount - 1) {
    //                 this._frame = Math.max(0, this._frameCount - 2);
    //                 this._repeatedCount++;
    //                 this._reversed = !this._reversed;
    //             }
    //         }
    //     }
    //     else {
    //         this._frame++;
    //         if (this._frame > this._frameCount - 1) {
    //             this._frame = 0;
    //             this._repeatedCount++;
    //         }
    //     }

    //     if (this._status == 1) //new loop
    //     {
    //         this._frame = this._start;
    //         this._frameElapsed = 0;
    //         this._status = 0;
    //     }
    //     else if (this._status == 2) //ending
    //     {
    //         this._frame = this._endAt;
    //         this._frameElapsed = 0;
    //         this._status = 3; //ended

    //         //play end
    //         if (this._endHandler) {
    //             var handler = this._endHandler;
    //             this._endHandler = null;
    //             handler();
    //         }
    //     }
    //     else {
    //         if (this._frame == this._end) {
    //             if (this._times > 0) {
    //                 this._times--;
    //                 if (this._times == 0)
    //                     this._status = 2;  //ending
    //                 else
    //                     this._status = 1; //new loop
    //             }
    //             else {
    //                 this._status = 1; //new loop
    //             }
    //         }
    //     }

    //     this.drawFrame();
    // }

    private drawFrame(): void {
        if (this._frames && this._frameCount > 0 && this._frame < this._frames.length) {
            var frame: Phaser.Textures.Frame = this._frames[this._frame];
            this.texture = frame.texture;
        }
        else
            this.texture = null;
        this.rebuild();
    }

    protected rebuild(): void {
    }

    public destroy() {
        // if (this._movieTime) {
        //     this._movieTime.remove(false);
        //     this._movieTime = null;
        // }
        super.destroy();
    }

    private checkTimer(playBoo: boolean = true): void {
        if (!this._sprite) return;
        if (playBoo) {
            if (this._sprite.anims.isPlaying) return;
            this._sprite.play(this._curKey);
        } else {
            this._sprite.stop();
        }

        // if (this._playing && this._frameCount > 0 && GRoot.inst.scene != null) {
        //     if (!this._movieTime) this._movieTime = this.scene.time.addEvent(this._movieUpdateEvent);
        // } else {
        //     if (this._movieTime) {
        //         this._movieTime.remove(false);
        //         this._movieTime = null;
        //     }
        // }
        //  throw new Error("TODO");
        // if (this._playing && this._frameCount > 0 && GRoot.inst.scene != null)
        //     Laya.timer.frameLoop(1, this, this.update);
        // else
        //     Laya.timer.clear(this, this.update);
    }

    // private __addToStage(): void {
    //     throw new Error("TODO");
    //     if (this._playing && this._frameCount > 0)
    //         Laya.timer.frameLoop(1, this, this.update);
    // }

    // private __removeFromStage(): void {
    //     throw new Error("TODO");
    //     Laya.timer.clear(this, this.update);
    // }
}
