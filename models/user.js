/**
 * Created by zhangrz on 2017/5/12.
 * Copyright© 2015-2020 occultskyrong (https://github.com/occultskyrong)
 * @version 0.0.1 created
 */

"use strict";

/* 用户表 */

module.exports = (DataTypes)=>({
    mod: {
        no: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }, loginName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }, nickName: {
            type: DataTypes.CHAR(10),
            allowNull: false
        }, password: {
            type: DataTypes.STRING(64),
            allowNull: false
        }, img: {
            type: DataTypes.CHAR(255),
            allowNull: false
        }, openid: {
            type: DataTypes.CHAR(255),
            allowNull: true
        }, idCard: {            // 身份证
            type: DataTypes.CHAR(255),
            allowNull: false
        }, email: {
            type: DataTypes.CHAR(255),
            allowNull: false
        }, phone: {
            type: DataTypes.CHAR(255),
            allowNull: false
        }, status: {
            type: DataTypes.CHAR(255),
            allowNull: false
        }, address: {
            type: DataTypes.CHAR(255),
            allowNull: false
        }, scores: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }
});