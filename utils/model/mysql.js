/**
 * Created by zhangrz on 2017/5/11.
 * Copyright© 2015-2020 occultskyrong (https://github.com/occultskyrong)
 * @version 0.0.1 created
 */

"use strict";

/* 使用Sequelize实现SQL数据库连接 */

const Sequelize = require('sequelize')
    , config = require('../../config')
    , mysql = config.mysql
    ;

const sequelize = new Sequelize(mysql.database, mysql.username, mysql.password, {
    dialect: mysql.dialect
    , host: mysql.host
    , port: mysql.port
    , timezone: "+08:00"
    , define: {
        // 字段以 true:下划线（_）来分割（默认是false:驼峰命名风格）
        underscored: false
    }
});

module.exports = {
    // mysql数据库实例
    sequelize: sequelize
    // Sequelize对象
    , Sequelize: Sequelize
};