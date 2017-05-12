/**
 * Created by zhangrz on 2017/5/12.
 * Copyright© 2015-2020 occultskyrong (https://github.com/occultskyrong)
 * @version 0.0.1 created
 */

"use strict";

/* 数据库初始化 */

const mysql = require('./mysql')
    , models = require('../../models')
    ;

// var promise = new Promise(function(resolve, reject) {
//     // ... some code
//
//     if (/* 异步操作成功 */){
//         resolve(value);
//     } else {
//         reject(error);
//     }
// });

const init = (callback)=> {
    if (Object.keys(models).length > 0) {
        let tables=[];
        // 循环初始化表实例
        for (let k in models) {
            if (models.hasOwnProperty(k)) {
                const model = models[k](mysql.Sequelize) // 实体
                    , table = mysql.sequelize.define(k, model.mod)  // 表 - 实例
                    ;
                tables.push(table);
            }
        }
        // 
    } else {
        callback('无models', null);
    }
};

module.exports = init;