const path = require("path");
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    entry: { "fairygui-phaser": path.join(__dirname, "./src/index.ts") },
    output: {
        path: path.resolve(__dirname, "dist"),
        library: "fairygui-phaser",
        libraryTarget: "umd",
        filename: "fairygui-phaser.js",
        globalObject: "this",
    },
    module: {
        rules: [
            // { test: /\.(gif|png|dbbin|ttf|jpe?g|svg|mp3|mp4|xml)$/i, loader: "file-loader", options: resourcesOut },
            { test: /\.ts$/, loader: "ts-loader", exclude: ["/node_modules/", "/src/"] },
        ],
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    externals: {
        "webworker-rpc": 'webworker-rpc',
    },
    optimization: {
        minimize: false,
        minimizer: [
            new TerserPlugin({
                sourceMap: true,
                terserOptions: {
                    parrallel: true,
                    ecma: undefined,
                    warnings: false,
                    parse: {},
                    compress: {},
                    mangle: true, // Note `mangle.properties` is `false` by default.
                    module: false,
                    output: null,
                    toplevel: false,
                    nameCache: null,
                    ie8: false,
                    keep_classnames: true,
                    keep_fnames: true,
                    safari10: false,
                },
            }),
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            WEBGL_RENDERER: true, // I did this to make webpack work, but I'm not really sure it should always be true
            CANVAS_RENDERER: true, // I did this to make webpack work, but I'm not really sure it should always be true
        })]
};
