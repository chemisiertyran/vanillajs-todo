var debug = process.env.NODE_ENV !== "production";
var webpack = require("webpack");

module.exports = {
    context: __dirname,
    devtool: debug ? "inline-source-map" : null,
    entry: "./js/app.js",
    output: {
        path: __dirname + "/js",
        filename: "app.bundle.js"
    },
    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            mangle: false,
            sourcemap: false
        }),
    ],
};
