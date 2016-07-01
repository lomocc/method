// var webpack = require("webpack");
var path = require("path");
module.exports = {
    entry:[path.resolve("src/Method.js")],
    output: {
        path: path.resolve("dist"),
        filename: "[name].js",
        libraryTarget:"umd"
    },
    // plugins: [
    //     new webpack.DefinePlugin({
    //         'process.env': {
    //             NODE_ENV: "'" + process.env.NODE_ENV + "'",
    //             VERSION: "'" + new Date().toLocaleString() + "'" // 加入时间戳作为版本识别
    //         }
    //     })
    // ],
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            // query: {
            //     "presets": [
            //         "es2015",
            //         "react",
            //         "stage-0"
            //     ]
            // }
        }]
    }
};