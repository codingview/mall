/**
 * Created by zhangrz on 2017/5/10.
 * Copyright© 2015-2020 occultskyrong (https://github.com/occultskyrong)
 * @version 0.0.1 created
 */

"use strict";

/* 表名及表字段均使用驼峰规范 */

module.exports = {
    // 用户信息表
    user: require('./user')
    // 管理员信息表
    , admin: require('./admin')
    // 修改密码表
    , resetPwd: require('./resetPwd')
};
