import { Pool } from "../../utils/Pool";
import { LineInfo } from "./WrapText";

var LinesPool = new Pool();

export function FreeLine(line) {
    if (!line) {
        return;
    }
    LinesPool.push(line);
}

export function FreeLines(lines) {
    if (!lines) {
        return;
    }
    LinesPool.pushMultiple(lines);
}

export function GetLine(text: string, width: number, newLineMode: number): LineInfo {
    var l = <LineInfo>LinesPool.pop();
    if (!l) {
        l = { text: "", width: 0, newLineMode: 0 };
    }
    l.text = text;
    l.width = width;
    l.newLineMode = newLineMode;
    return l;
}