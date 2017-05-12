/**
 * Created by zhangrz on 2017/5/12.
 * Copyright© 2015-2020 occultskyrong (https://github.com/occultskyrong)
 * @version 0.0.1 created
 */

"use strict";

/* 数据库初始化 */

// 将表结构绑定到Sequelize实例上
require('./models');

const mysql = require('./mysql');

// 获取mysql实例并创建表结构
mysql.sequelize
    .sync()
    .then(()=> {
        console.info('表结构创建成功');
    });