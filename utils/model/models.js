/**
 * Created by zhangrz on 2017/5/12.
 * Copyright© 2015-2020 occultskyrong (https://github.com/occultskyrong)
 * @version 0.0.1 created
 */

"use strict";

/* 数据库 - 表实体 - 构造 */

const mysql = require('./mysql')
    , models = require('../../models')
    ;

const init = ()=> {
    let tables = [];
    if (Object.keys(models).length > 0) {
        // 循环初始化表实例
        for (let k in models) {
            if (models.hasOwnProperty(k)) {
                const model = models[k](mysql.Sequelize); // 实体
                if ('mod' in model) {
                    let option = {
                        freezeTableName: true           // 锁定表名
                        , tableName: k                  // 表名，不指定表名，则Sequelize会增加复数s
                    };
                    if ('option' in model) {
                        option = model.option;
                    }
                    const table = mysql.sequelize.define(k, model.mod, option); // 表 - 实例
                    tables.push(table);
                }
            }
        }
    }
    return tables;
};

module.exports = init();