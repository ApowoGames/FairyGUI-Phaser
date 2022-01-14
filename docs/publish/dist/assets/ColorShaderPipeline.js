const fragShader = `
precision mediump float;

uniform sampler2D uMainSampler[%count%];
uniform float r;
uniform float g;
uniform float b;
uniform float a;

varying vec2 outTexCoord;
varying float outTexId;
varying vec4 outTint;
varying vec2 fragCoord;

void main()
{
    vec4 texture;

    %forloop%

    gl_FragColor = texture;
    gl_FragColor.r = r * gl_FragColor.r;
    gl_FragColor.g = g * gl_FragColor.g;
    gl_FragColor.b = b * gl_FragColor.b;
    gl_FragColor.a = a * gl_FragColor.a;
}
`;

// gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(r * gl_FragColor.r + g * gl_FragColor.g + b * gl_FragColor.b+ a * gl_FragColor.a), color);
export default class ColorShaderPipeline extends Phaser.Renderer.WebGL.Pipelines.MultiPipeline {
    constructor(game) {
        super({
            game,
            fragShader,
            uniforms: [
                'uProjectionMatrix',
                'uMainSampler',
                'r',
                "g",
                "b",
                "a"
            ]
        });

        this._a = 1;
        this._b = 0;
        this._g = 0;
        this._r = 1;
        this.renderBoo = false;
    }

    startRender() {
        if (this.renderBoo) return;
        this.renderBoo = true;
        this.set1f("r", this._r);
        this.set1f("g", this._g);
        this.set1f("b", this._b);
        this.set1f("a", this._a);
    }

    set r(value) {
        this._r = value;
        this.renderBoo=false;
    }

    set g(value) {
        this._g = value;
        this.renderBoo=false;
    }

    set b(value) {
        this._b = value;
        this.renderBoo=false;
    }

    set a(value) {
        this._a = value;
        this.renderBoo=false;
    }

}
