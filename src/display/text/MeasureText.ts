const CanvasPool = Phaser.Display.Canvas.CanvasPool;
export function MeasureText(textStyle) {
    const canvas = CanvasPool.create(this);
    const context = canvas.getContext('2d');

    textStyle.syncFont(canvas, context);

    const metrics = context.measureText(textStyle.testString);

    if ('actualBoundingBoxAscent' in metrics) {
        const ascent = metrics.actualBoundingBoxAscent;
        const descent = metrics.actualBoundingBoxDescent;

        CanvasPool.remove(canvas);

        return {
            ascent: ascent,
            descent: descent,
            fontSize: ascent + descent
        };
    }

    // 此处将metrics定义为any的原因是，metrics可能为空，所以编译器认为获取width不应该被操作
    const width = Math.ceil((<any>metrics).width * textStyle.baselineX);
    let baseline = width;
    const height = 2 * baseline;

    baseline = baseline * textStyle.baselineY | 0;

    canvas.width = width;
    canvas.height = height;

    context.fillStyle = '#f00';
    context.fillRect(0, 0, width, height);

    context.font = textStyle._font;

    context.textBaseline = 'alphabetic';
    context.fillStyle = '#000';
    context.fillText(textStyle.testString, 0, baseline);

    const output = {
        ascent: 0,
        descent: 0,
        fontSize: 0
    };

    const imagedata = context.getImageData(0, 0, width, height);
    if (!imagedata) {
        output.ascent = baseline;
        output.descent = baseline + 6;
        output.fontSize = output.ascent + output.descent;

        CanvasPool.remove(canvas);

        return output;
    }

    const pixels = imagedata.data;
    const numPixels = pixels.length;
    const line = width * 4;
    let i;
    let j;
    let stop = false;
    let idx = 0;
    // ascent. scan from top to bottom until we find a non red pixel
    for (i = 0; i < baseline; i++) {
        for (j = 0; j < line; j += 4) {
            if (pixels[idx + j] !== 255) {
                stop = true;
                break;
            }
        }

        if (!stop) {
            idx += line;
        }
        else {
            break;
        }
    }

    output.ascent = baseline - i;

    idx = numPixels - line;
    stop = false;

    // descent. scan from bottom to top until we find a non red pixel
    for (i = height; i > baseline; i--) {
        for (j = 0; j < line; j += 4) {
            if (pixels[idx + j] !== 255) {
                stop = true;
                break;
            }
        }

        if (!stop) {
            idx -= line;
        }
        else {
            break;
        }
    }

    output.descent = (i - baseline);
    output.fontSize = output.ascent + output.descent;

    CanvasPool.remove(canvas);

    return output;
};