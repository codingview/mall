/**
 * Created by zhangrz on 2017/5/12.
 * Copyright© 2015-2020 occultskyrong (https://github.com/occultskyrong)
 * @version 0.0.1 created
 */

"use strict";

/* 测试demo实体 */

/**
 * 表实体
 * @param DataTypes 数据类型，即Sequelize，参见 http://docs.sequelizejs.com/variable/index.html#static-variable-DataTypes
 */
module.exports = (DataTypes)=>({
    mod: {
        no: {
            type: DataTypes.INTEGER,
             primaryKey: true,
             autoIncrement: true
        }, loginname: {
            type: DataTypes.STRING,              // 字段类型
            allowNull: false ,                 // 是否允许为NULL
            unique: true                      // 字段是否UNIQUE
        }, nickName: {
            type: DataTypes.CHAR(10),
            allowNull: false
        }, passwd: {
            type: DataTypes.STRING(64),
            allowNull: false
        }, img :{
            type: DataTypes.char(255),
            allowNull: false
        },openid :{
            type: DataTypes.char(255),
            allowNull: true
        },id : {
            type: DataTypes.char(255),
            allowNull: false
        },email:{
            type: DataTypes.char(255),
            allowNull: false
        },phone{
            type: DataTypes.char(255),
            allowNull: false
        },status:{
            type: DataTypes.char(255),
            allowNull: false
        },address:{
            type: DataTypes.char(255),
            allowNull: false
        },scores:{
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, option: {                                //xxx 此为默认设置，可以直接不填
        freezeTableName: true                   // 锁定表名
        , tableName: 'demo'                     // 表名，不指定表名，则Sequelize会增加复数s
    }
});