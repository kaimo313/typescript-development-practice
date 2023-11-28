## 初始化项目以及安装依赖

新建 `ts_in_action` 文件夾

```bash
npm init -y
```

安装好 `typescript`，就可以执行下面命令查看帮助信息

```bash
npm i typescript -g
tsc -h
```

创建配置文件，执行下面命令就会生成一个 `tsconfig.json` 文件

```bash
tsc --init
```

## 使用 tsc 编译一个 js 文件

新建 `src/index.ts`

```ts
let kaimo:string = "hello typescript"
```

执行下面命令编译该 ts 文件

```bash
tsc ./src/index.ts
```

编译结果如下：

```js
var kaimo = "hello typescript";
```

也可以使用 [https://www.typescriptlang.org/play](https://www.typescriptlang.org/play) 查看

## 配置构建工具 webpack 环境

### 安装依赖

```bash
npm i webpack@4.35.2 webpack-cli@3.3.5 webpack-dev-server@3.7.2 -D
npm i ts-loader@6.0.4 typescript@3.5.2 -D
npm i html-webpack-plugin@3.2.0 clean-webpack-plugin@3.0.0 webpack-merge@4.2.1 -D
```

### 配置相应的环境

基础配置：

```js
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

```

开发配置：

```js
// 开发环境配置

// 下面这行用于 vscode 中智能化自动提示 webpack 配置项
/** @type {import('webpack').Configuration} */

const config = {
    devtool: "cheap-module-eval-source-map"
};

module.exports = config;

```

生产配置：

```js
// 生产环境配置

// 下面这行用于 vscode 中智能化自动提示 webpack 配置项
/** @type {import('webpack').Configuration} */

const CleanWebpackPlugin = require("clean-webpack-plugin");

const config = {
    plugins: [new CleanWebpackPlugin()]
};

module.exports = config;

```

webpack 文件入口配置：

```js
// webpack 文件入口

// 下面这行用于 vscode 中智能化自动提示 webpack 配置项
/** @type {import('webpack').Configuration} */

const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.config");
const devConfig = require("./webpack.dev.config");
const proConfig = require("./webpack.pro.config");

const config = merge(baseConfig, process.NODE_ENV === "development" ? devConfig : proConfig);

module.exports = config;

```

`package.json` 脚本配置


```json
"scripts": {
    "start": "webpack-dev-server --mode=development --config ./build/webpack.config.js",
    "build": "webpack --mode=production --config ./build/webpack.config.js"
},
```

## 启动服务并且打包测试

添加模板

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>TypeScript in Action</title>
    </head>
    <body>
        <div class="app"></div>
    </body>
</html>
```

添加功能

```ts
let kaimo:string = "hello typescript";

document.querySelectorAll(".app")[0].innerHTML = kaimo;
```

启动服务 `npm run start`，访问 `http://localhost:8080/`

打包 `npm run build`



