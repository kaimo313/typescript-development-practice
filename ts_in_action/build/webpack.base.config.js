// 公共环境配置

// 下面这行用于 vscode 中智能化自动提示 webpack 配置项
/** @type {import('webpack').Configuration} */

const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
    entry: "./src/index.ts",
    output: {
        filename: "app.js"
    },
    resolve: {
        extensions: [".js", ".ts", ".tsx"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/i,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/tpl/index.html"
        })
    ]
};
module.exports = config;
