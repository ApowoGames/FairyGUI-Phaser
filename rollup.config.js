import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from "rollup-plugin-typescript"
const extensions = ['.js', '.jsx', '.ts', '.tsx'];
export default {
    input: "src/index.ts",
    output: [
        {
            file: "build/fairygui.js",
            format: "umd",
            name: "fgui",
            sourcemap: true,
        },
        {
            file: "build/fairygui.esm.js",
            format: "esm",
            name: "fgui",
            sourcemap: true
        }],
    plugins: [
        nodeResolve({ extensions, }),
        typescript()],
    external: ["tooqingphaser"]
}