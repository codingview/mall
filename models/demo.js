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
        id: {
            type: DataTypes.INTEGER
            , primaryKey: true
            , autoIncrement: true
        }, name: {
            type: DataTypes.STRING              // 字段类型
            , allowNull: false                  // 是否允许为NULL
            , unique: true                      // 字段是否UNIQUE
        }, nickName: {
            type: DataTypes.CHAR(10)
            , allowNull: false
        }, department: {
            type: DataTypes.STRING(64),
            allowNull: true
        }
    }, option: {                                //xxx 此为默认设置，可以直接不填
        freezeTableName: true                   // 锁定表名
        , tableName: 'demo'                     // 表名，不指定表名，则Sequelize会增加复数s
    }
});