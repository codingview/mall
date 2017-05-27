/**
 * Created by zhangrz on 2017/5/11.
 * Copyright© 2015-2020 occultskyrong (https://github.com/occultskyrong)
 * @version 0.0.1 created
 */

"use strict";

/* 使用Sequelize实现SQL数据库连接 */

const Sequelize = require('sequelize')
    , dbConfig = require('../../config/db')
    , mysql = dbConfig.mysql
    ;

const sequelize =
    (config = mysql.write)=>
        new Sequelize(
            config.database
            , config.username
            , config.password
            , {
                dialect: config.dialect
                , host: config.host
                , port: config.port
                , timezone: "+08:00"
                , logging: 'logging' in config ? config.logging : console.log
                , define: {
                    // 字段以 true:下划线（_）来分割（默认是false:驼峰命名风格）
                    underscored: false
                }
            }
        );

module.exports = {
    // mysql数据库实例
    sequelize: sequelize()

    // Sequelize对象
    , Sequelize: Sequelize

    // 读 实例
    , read: sequelize(mysql.read)

    // 写 实例
    , write: sequelize()
};