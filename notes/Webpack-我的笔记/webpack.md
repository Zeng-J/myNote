2019/5/25 18:21:42 

## webpack模板

```javascript
const path = require('path')
//const webpack = require('webpack')

const htmlWebpackPlugin = require('html-webpack-plugin')
	
module.exports = {
    entry: path.join(__dirname, './src/main.js'),
    output:{
        path:path.join(__dirname, './dist'),
        filename:'bundle.js'
    },
    // 以下二选一 要么在package.json文件中写在脚本命令里(推荐)，要么使用第二种方法，在本文件里写devServer
    // 1.
    // package.json内 
    // "server": "webpack-dev-server --open --port 3000 --contentBase src --hot",
    // 2.
    // devServer:{
    //     open:true, // 自动打开浏览器
    //     port:8081,
    //     contentBase:'src', // 指定托管的根目录
    //     hot:true  // 启用热更新
    // },
    plugins:[
        // new webpack.HotModuleReplacementPlugin(), // 好像新版本不需要new这个插件了，内置有了
        new htmlWebpackPlugin({
            template:path.join(__dirname, './src/index.html'),
            filename:'index.html'
        })
    ],
    module:{ // 这个节点，用于配置所有第三方模块 加载器
        rules: [
            { test:/\.css$/, use:['style-loader', 'css-loader'] },
            { test:/\.less$/, use:['style-loader', 'css-loader', 'less-loader'] },
            { test:/\.scss$/, use:['style-loader', 'css-loader', 'sass-loader'] }
        ]
    }
}

```