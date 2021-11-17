const GetValue = Phaser.Utils.Objects.GetValue;
const IntegerToRGB = Phaser.Display.Color.IntegerToRGB;
const Color = Phaser.Display.Color;

export class OutlinePostFxPipeline extends Phaser.Renderer.WebGL.Pipelines.PostFXPipeline {
    private thickness: number = 0;
    private _outlineColor: Phaser.Display.Color;
    private renderBoo: boolean = false;
    constructor(game) {
        super({
            game: game,
            renderTarget: true,
            fragShader: `\
            #ifdef GL_FRAGMENT_PRECISION_HIGH
            #define highmedp highp
            #else
            #define highmedp mediump
            #endif
            precision highmedp float;
            // Scene buffer
            uniform sampler2D uMainSampler; 
            varying vec2 outTexCoord;
            // Effect parameters
            uniform vec2 texSize;
            uniform float thickness;
            uniform vec3 outlineColor;
            const float DOUBLE_PI = 3.14159265358979323846264 * 2.;
            void main() {
              vec4 front = texture2D(uMainSampler, outTexCoord);
              if (thickness > 0.0) {
                vec2 mag = vec2(thickness/texSize.x, thickness/texSize.y);
                vec4 curColor;
                float maxAlpha = front.a;
                vec2 offset;
                for (float angle = 0.; angle < DOUBLE_PI; angle += #{angleStep}) {
                    offset = vec2(mag.x * cos(angle), mag.y * sin(angle));        
                    curColor = texture2D(uMainSampler, outTexCoord + offset);
                    maxAlpha = max(maxAlpha, curColor.a);
                }
                vec3 resultColor = front.rgb + (outlineColor.rgb * (1. - front.a)) * maxAlpha;
                gl_FragColor = vec4(resultColor, maxAlpha);
              } else {
                gl_FragColor = front;
              }
            }
            `,
            // @ts-ignore
            uniforms: [
                'uProjectionMatrix',
                'uMainSampler',
                'thickness',
                "texSize",
                "outlineColor",
            ]
        });

        this.thickness = 0;
        this._outlineColor = new Color();
    }

    resetFromJSON(o) {
        this.setThickness(GetValue(o, "thickness", 3));
        this.setOutlineColor(GetValue(o, "outlineColor", 0xffffff));
        return this;
    }

    onPreRender() {
        if (this.renderBoo) return;
        this.renderBoo = true;
        this.set1f("thickness", this.thickness);
        this.set3f("outlineColor", this._outlineColor.redGL, this._outlineColor.greenGL, this._outlineColor.blueGL);
        this.set2f("texSize", this.renderer.width, this.renderer.height);
    }

    setThickness(value) {
        this.thickness = value;
        this.renderBoo = false;
        return this;
    }

    get outlineColor() {
        return this._outlineColor;
    }

    set outlineColor(value: any) {
        if (typeof (value) === "number") {
            value = IntegerToRGB(value);
        }
        this._outlineColor.setFromRGB(value);
        this.renderBoo = false;
    }

    setOutlineColor(value) {
        this.outlineColor = value;
        this.renderBoo = false;
        return this;
    }
}
