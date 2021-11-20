export enum WrapMode {
    none = 0,
    word = 1,
    char = 2
}

export enum NewLineMode {
    none = 0,
    raw = 1,
    wrapped = 2
}

export type LineInfo = {
    text: string,
    width: number,
    newLineMode: NewLineMode;
}

export type GetTextWidthCallbackType = (text: string, context?: unknown) => number;

export const SplitTextRegExp = /(?:\r\n|\r|\n)/;

export function WrapText(
    text: string,
    getTextWidthCallback: GetTextWidthCallbackType,
    context: unknown,
    wrapMode: WrapMode,
    wrapWidth: number,
    offset: number = 0
): LineInfo[] {

    if (wrapWidth <= 0) {
        wrapMode = WrapMode.none;
    }

    let result: LineInfo[] = [];

    if (!text || !text.length) {
        return result;
    }

    let lines = text.split(SplitTextRegExp);
    let lastLineIdx = lines.length - 1;
    if (text.slice(-1) === '\n') {
        lines.length -= 1;
    }

    let remainWidth: number;
    for (let i = 0, lineCnt = lines.length; i < lineCnt; i++) {
        let line = lines[i];
        let newLineMode = (i === lastLineIdx) ? NewLineMode.none : NewLineMode.raw;

        if (wrapMode === WrapMode.none) {
            result.push(
                CreateLineInfo(line, getTextWidthCallback(line, context), newLineMode)
            );
            continue;
        }

        if (i === 0) {
            remainWidth = wrapWidth - offset;
        } else {
            remainWidth = wrapWidth;
        }

        // Short string testing
        if (line.length <= 100) {
            let textWidth = getTextWidthCallback(line, context);
            if (textWidth <= remainWidth) {
                result.push(
                    CreateLineInfo(line, textWidth, newLineMode)
                );
                continue;
            }
        }

        // Character mode
        let tokenArray: string[] | string;
        if (wrapMode === WrapMode.word) { // Word mode            
            tokenArray = line.split(' ');
        } else {
            tokenArray = line;
        }
        let curLineText = '',
            lineText = '',
            lineWidth = 0;
        for (let j = 0, tokenLen = tokenArray.length; j < tokenLen; j++) {
            let token = tokenArray[j];

            if (wrapMode === WrapMode.word) {
                curLineText += token;

                if (j < (tokenLen - 1)) {
                    curLineText += ' ';
                }
            } else {
                curLineText += token;
            }

            let currLineWidth = getTextWidthCallback(curLineText, context);
            if (currLineWidth > remainWidth) {
                // new line
                if (j === 0) {
                    result.push(
                        CreateLineInfo('', 0, NewLineMode.wrapped)
                    );
                } else {
                    result.push(
                        CreateLineInfo(lineText, lineWidth, NewLineMode.wrapped)
                    );
                    curLineText = token;
                    if (wrapMode === WrapMode.word) {
                        if (j < (tokenLen - 1)) {
                            curLineText += ' ';
                        }
                    }
                    currLineWidth = getTextWidthCallback(curLineText, context);
                }

                remainWidth = wrapWidth;
            }

            lineText = curLineText;
            lineWidth = currLineWidth;
        } // For token in tokenArray

        // Flush remain text
        result.push(
            CreateLineInfo(lineText, lineWidth, newLineMode)
        );

    } // For each line in lines

    return result;
};

let CreateLineInfo = function (
    text: string,
    width: number,
    newLineMode: NewLineMode
): LineInfo {
    return { text: text, width: width, newLineMode: newLineMode }
}