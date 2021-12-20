export class ByteBuffer {
    public stringTable: Array<string>;
    public version: number = 0;
    public littleEndian: boolean;

    protected _view: DataView;
    protected _bytes: Uint8Array;
    protected _pos: number;
    protected _length: number;

    public constructor(buffer: ArrayBuffer, offset: number = 0, length: number = -1) {
        if (length == -1)
            length = buffer.byteLength - offset;

        this._bytes = new Uint8Array(buffer, offset, length);
        this._view = new DataView(this._bytes.buffer, offset, length);
        this._pos = 0;
        this._length = length;
    }

    public canRead(): boolean {
        return this._pos < this._length;
    }

    public get data(): Uint8Array {
        return this._bytes;
    }

    public get position(): number {
        return this._pos;
    }

    public set position(value: number) {
        if (value > this._length) throw "Out of bounds";
        this._pos = value;
    }

    public skip(count: number): void {
        this._pos += count;
    }

    private validate(forward: number): void {
        if (this._pos + forward > this._length) throw "Out of bounds";
    }

    public readByte(): number {
        this.validate(1);
        return this._view.getInt8(this._pos++);

    }

    public readUbyte(): number {
        return this._bytes[this._pos++];
    }

    public readBool(): boolean {
        return this.readByte() == 1;
    }

    public readShort(): number {
        this.validate(2);
        let ret: number = this._view.getInt16(this._pos, this.littleEndian);
        this._pos += 2;
        return ret;
    }

    public readUshort(): number {
        this.validate(2);
        let ret: number = this._view.getUint16(this._pos, this.littleEndian);
        this._pos += 2;
        return ret;
    }

    public readInt(): number {
        this.validate(4);
        let ret: number = this._view.getInt32(this._pos, this.littleEndian);
        this._pos += 4;
        return ret;
    }

    public readUint(): number {
        this.validate(4);
        let ret: number = this._view.getUint32(this._pos, this.littleEndian);
        this._pos += 4;
        return ret;
    }

    public readFloat(): number {
        this.validate(4);
        let ret: number = this._view.getFloat32(this._pos, this.littleEndian);
        this._pos += 4;
        return ret;
    }

    public readString(len?: number): string {
        if (len == undefined) len = this.readUshort();
        this.validate(len);

        let v: string = "", max: number = this._pos + len, c: number = 0, c2: number = 0, c3: number = 0, f: Function = String.fromCharCode;
        let u: Uint8Array = this._bytes, i: number = 0;
        let pos = this._pos;
        while (pos < max) {
            c = u[pos++];
            if (c < 0x80) {
                if (c != 0) {
                    v += f(c);
                }
            } else if (c < 0xE0) {
                v += f(((c & 0x3F) << 6) | (u[pos++] & 0x7F));
            } else if (c < 0xF0) {
                c2 = u[pos++];
                v += f(((c & 0x1F) << 12) | ((c2 & 0x7F) << 6) | (u[pos++] & 0x7F));
            } else {
                c2 = u[pos++];
                c3 = u[pos++];
                v += f(((c & 0x0F) << 18) | ((c2 & 0x7F) << 12) | ((c3 << 6) & 0x7F) | (u[pos++] & 0x7F));
            }
            i++;
        }
        this._pos += len;

        return v;
    }

    public readS(): string {
        var index: number = this.readUshort();
        if (index == 65534) //null
            return null;
        else if (index == 65533)
            return ""
        else
            return this.stringTable[index];
    }

    public readSArray(cnt: number): Array<string> {
        var ret: Array<string> = new Array<string>(cnt);
        for (var i: number = 0; i < cnt; i++)
            ret[i] = this.readS();

        return ret;
    }

    public writeS(value: string): void {
        var index: number = this.readUshort();
        if (index != 65534 && index != 65533)
            this.stringTable[index] = value;
    }

    public readColor(hasAlpha?: boolean): number {
        const r: number = this.readUbyte();
        const g: number = this.readUbyte();
        const b: number = this.readUbyte();
        const a: number = this.readUbyte();

        return (hasAlpha ? (a << 24) : 0) + (r << 16) + (g << 8) + b;
    }

    public readColorS(hasAlpha?: boolean): string {
        const r: number = this.readUbyte();
        const g: number = this.readUbyte();
        const b: number = this.readUbyte();
        const a: number = this.readUbyte();

        if (hasAlpha && a != 255)
            return "rgba(" + r + "," + g + "," + b + "," + (a / 255) + ")";
        else {
            var sr: string = r.toString(16);
            var sg: string = g.toString(16);
            var sb: string = b.toString(16);
            if (sr.length == 1)
                sr = "0" + sr;
            if (sg.length == 1)
                sg = "0" + sg;
            if (sb.length == 1)
                sb = "0" + sb;
            return "#" + sr + sg + sb;
        }
    }

    public readChar(): string {
        var i: number = this.readUshort();
        return String.fromCharCode(i);
    }

    public readBuffer(): ByteBuffer {
        var count: number = this.readUint();
        this.validate(count);
        var ba: ByteBuffer = new ByteBuffer(this._bytes.buffer, this._bytes.byteOffset + this._pos, count);
        ba.stringTable = this.stringTable;
        ba.version = this.version;
        this._pos += count;
        return ba;
    }

    public seek(indexTablePos: number, blockIndex: number): boolean {
        var tmp: number = this._pos;
        this._pos = indexTablePos;
        var segCount: number = this.readByte();
        if (blockIndex < segCount) {
            var useShort: boolean = this.readByte() == 1;
            var newPos: number;
            if (useShort) {
                this._pos += 2 * blockIndex;
                newPos = this.readUshort();
            }
            else {
                this._pos += 4 * blockIndex;
                newPos = this.readUint();
            }

            if (newPos > 0) {
                this._pos = indexTablePos + newPos;
                return true;
            }
            else {
                this._pos = tmp;
                return false;
            }
        }
        else {
            this._pos = tmp;
            return false;
        }
    }
}
