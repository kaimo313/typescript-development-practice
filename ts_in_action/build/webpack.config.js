// webpack 文件入口

// 下面这行用于 vscode 中智能化自动提示 webpack 配置项
/** @type {import('webpack').Configuration} */

const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.config");
const devConfig = require("./webpack.dev.config");
const proConfig = require("./webpack.pro.config");

const config = merge(baseConfig, process.NODE_ENV === "development" ? devConfig : proConfig);

module.exports = config;
