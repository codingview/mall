/**
 * Created by zhangrz on 2017/05/10.
 * Copyright© 2015-2020 occultskyrong (https://github.com/occultskyrong)
 * @version 0.0.1 created
 */

'use strict';

var path = require("path")
    , webpack = require('webpack')
    , BASE_URI = {
    }
    ;
module.exports = {
    entry: {    //输入文件
    }, output: {//输出文件
        path: path.join(__dirname, "public/src"),//主目录
        filename: '[name].min.js'
    }, resolve: {//自动识别的扩展名
        extensions: ['.js']
    }, module: {//引用的组件
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        }]
    }, plugins: [
        new webpack.optimize.UglifyJsPlugin({  // 开启代码压缩
            compress: {
                warnings: false
            }
        })
    ]
};