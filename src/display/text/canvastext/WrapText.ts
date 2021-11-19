import { CONST } from "../const";

const NO_NEWLINE = CONST.NO_NEWLINE;
const RAW_NEWLINE = CONST.RAW_NEWLINE;
const WRAPPED_NEWLINE = CONST.WRAPPED_NEWLINE;
const NO_WRAP = CONST.NO_WRAP;
const WORD_WRAP = CONST.WORD_WRAP;
const CHAR_WRAP = CONST.CHAR_WRAP;
const splitRegExp = CONST.SPLITREGEXP;

let WRAP_RESULT = [];
export function WrapText(text, getTextWidth, wrapMode, wrapWidth, offset) {
    // if (wrapWidth <= 0) {
    //     wrapMode = NO_WRAP;
    // }

    // const retLines = WRAP_RESULT;
    // LinesPool.pushMultiple(retLines);

    // if (!text || !text.length) {
    //     return retLines;
    // }

    // const lines = text.split(splitRegExp);
    // let line, remainWidth, newLineMode;
    // const lineslen = lines.length;
    // for (let i = 0; i < lineslen; i++) {
    //     line = lines[i];
    //     newLineMode = (i === (lineslen - 1)) ? NO_NEWLINE : RAW_NEWLINE;

    //     if (wrapMode === NO_WRAP) {
    //         const textWidth = getTextWidth(line);
    //         retLines.push(LinesPool.newline(line, textWidth, newLineMode));
    //         continue;
    //     } else {
    //         if (i === 0) {
    //             remainWidth = wrapWidth - offset;
    //         } else {
    //             remainWidth = wrapWidth;
    //         }
    //     }
    // }

    // // short string testing
    // if (line.length <= 100) {
    //     const textWidth = getTextWidth(line);
    //     if (textWidth <= remainWidth) {
    //         retLines.push(LinesPool.newline(line, textWidth, newLineMode));
    //     }
    // }

    // // character mode
    // let tokenArray = [];
    // if (wrapMode === WORD_WRAP) {
    //     tokenArray = line.split(" ");
    // } else {
    //     tokenArray = line;
    // }

    // let token;
    // let curLineText = "";
    // let lineText = "";
    // let currLineWidth = 0;
    // let lineWidth = 0;
    // const tokenLen = tokenArray.length;
    // for (let i = 0; i < tokenLen; i++) {
    //     token = tokenArray[i];

    //     if (wrapMode === WORD_WRAP) {
    //         curLineText += token;

    //         if (i < (tokenLen - 1)) {
    //             curLineText += " ";
    //         }
    //     } else {
    //         curLineText += token;
    //     }

    //     currLineWidth = getTextWidth(curLineText);
    //     if (currLineWidth > remainWidth) {
    //         if (i === 0) {
    //             retLines.push(LinesPool.newline("", 0, WRAPPED_NEWLINE));
    //         } else {
    //             retLines.push(LinesPool.newline(lineText, lineWidth, WRAPPED_NEWLINE));
    //             curLineText = token;
    //             if (wrapMode === WORD_WRAP) {
    //                 if (i < (tokenLen - 1)) {
    //                     curLineText += " ";
    //                 }
    //             }
    //             currLineWidth = getTextWidth(curLineText);
    //         }
    //         remainWidth = wrapWidth;
    //     }
    //     lineText = curLineText;
    //     lineWidth = currLineWidth;
    // }
    // retLines.push(LinesPool.newline(lineText, lineWidth, newLineMode));
}

// var LinesPool = new Pool();
// LinesPool.newline = function (text, width, newLineMode) {
//     var l = this.pop();
//     if (l === null) {
//         l = {};
//     }
//     l.text = text;
//     l.width = width;
//     l.newLineMode = newLineMode;
//     return l;
// };