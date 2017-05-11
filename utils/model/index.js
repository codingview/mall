/**
 * Created by zhangrz on 2017/5/11.
 * Copyright© 2015-2020 occultskyrong (https://github.com/occultskyrong)
 * @version 0.0.1 created
 */

"use strict";

const Sequelize = require('sequelize')
    , config = require('../../config')
    , mysql = config.mysql
    ;

const sequelize = new Sequelize(mysql.database, mysql.username, mysql.password, {
    dialect:mysql.dialect
    ,host:mysql.host
    ,port:mysql.port
    ,define:{

    }
});

module.exports = {
    // mysql数据库实例
    sequelize: sequelize
    // Sequelize对象
    , Sequelize: Sequelize
};