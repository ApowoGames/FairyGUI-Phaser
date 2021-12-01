/**
 * 贴图红色滤镜 只适用于texture
 */
export class RedShaderPipeline extends Phaser.Renderer.WebGL.Pipelines.MultiPipeline {
    protected _a: number;
    protected _r: number;
    protected _g: number;
    protected _b: number;
    protected renderBoo: boolean = false;
    constructor(game) {
        super({
            game,
            fragShader: `
            precision mediump float;
            
            uniform sampler2D uMainSampler[%count%];
            uniform float r;
            
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
                gl_FragColor.g = 0 * gl_FragColor.g;
                gl_FragColor.b = 0 * gl_FragColor.b;
                gl_FragColor.a = 1 * gl_FragColor.a;
            }
            `,
            // @ts-ignore
            uniforms: [
                'uProjectionMatrix',
                'uMainSampler',
                'r'
            ]
        });
        this.renderBoo = false;
    }

    onPreRender() {
        if (this.renderBoo) return;
        this.renderBoo = true;
        this.set1f("g", 1);
    }
}
