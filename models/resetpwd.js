/**
 * Created by zhangrz on 2017/5/10.
 * Copyright© 2015-2020 occultskyrong (https://github.com/occultskyrong)
 * @version 0.0.1 created
 */

"use strict";

/* 重置密码表 */

module.exports = (DataTypes)=>({
    mod: {
        no: {
            type: DataTypes.INTEGER
            , primaryKey: true
            , autoIncrement: true
        }, loginName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }, token: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }, createTime: {
            type: DataTypes.DATE,
            allowNull: false,
            unique: false
        }
    }
});