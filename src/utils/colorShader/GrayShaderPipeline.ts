/**
 * 贴图灰色滤镜 只适用于texture
 */
export class GrayShaderPipeline extends Phaser.Renderer.WebGL.Pipelines.MultiPipeline {
    protected renderBoo: boolean = false;
    private _a: number = 1;
    constructor(game) {
        super({
            game,
            fragShader: `
            precision mediump float;
            
            uniform sampler2D uMainSampler[%count%];
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
                gl_FragColor.rgb = mix(gl_FragColor.rgb,vec3(0.2126 * gl_FragColor.r + 0.7152 * gl_FragColor.g + 0.0722 * gl_FragColor.b),a);
            }
            `,
            // @ts-ignore
            uniforms: [
                'uProjectionMatrix',
                'uMainSampler',
                'a',
            ]
        });
        this.renderBoo = false;
    }

    onPreRender() {
        if (this.renderBoo) return;
        this.renderBoo = true;
        this.set1f("a", this._a);
    }

    set a(value) {
        this._a = value;
        this.renderBoo = false;
    }
}
