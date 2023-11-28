// 生产环境配置

// 下面这行用于 vscode 中智能化自动提示 webpack 配置项
/** @type {import('webpack').Configuration} */

const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const config = {
    plugins: [new CleanWebpackPlugin()]
};

module.exports = config;
