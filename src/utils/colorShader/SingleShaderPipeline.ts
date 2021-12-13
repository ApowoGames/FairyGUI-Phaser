export class SingleShaderPipeline extends Phaser.Renderer.WebGL.Pipelines.SinglePipeline {
    protected _a: number;
    protected _r: number;
    protected _g: number;
    protected _b: number;
    protected renderBoo: boolean = false;
    constructor(game: Phaser.Game) {
        super({
            game, fragShader: `
              precision mediump float;
  
              uniform sampler2D uMainSampler;
              uniform vec4 rgba;

              varying vec2 outTexCoord;
              varying vec4 outTint;
  

              void main()
              {
                  vec4 texture = texture2D(uMainSampler, outTexCoord);
  
                  texture *= vec4(outTint.rgb * outTint.a, outTint.a);
  
                  gl_FragColor = texture;
                  gl_FragColor.r = rgba.x * gl_FragColor.r;
                  gl_FragColor.g = rgba.y * gl_FragColor.g;
                  gl_FragColor.b = rgba.z * gl_FragColor.b;
                  gl_FragColor.a = rgba.w * gl_FragColor.a;
              }
              `,
            // @ts-ignore
            uniforms: [
                'uProjectionMatrix',
                'uViewMatrix',
                'uModelMatrix',
                'uMainSampler',
                'rgba',
            ]
        });
        this._a = 0;
        this._b = 0;
        this._g = 0;
        this._r = 0;
        this.renderBoo = false;
    }

    onPreRender() {
        if (this.renderBoo) return;
        this.renderBoo = true;
        this.set4f("rgba", this._r, this._g, this._b, this._a);
    }

    set r(value) {
        this._r = value;
        this.renderBoo = false;
    }

    set g(value) {
        this._g = value;
        this.renderBoo = false;
    }

    set b(value) {
        this._b = value;
        this.renderBoo = false;
    }

    set a(value) {
        this._a = value;
        this.renderBoo = false;
    }
}
