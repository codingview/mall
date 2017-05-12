/**
 * Created by zhangrz on 2017/5/10.
 * Copyright© 2015-2020 occultskyrong (https://github.com/occultskyrong)
 * @version 0.0.1 created
 */

"use strict";

module.exports = (DataTypes)=>({
    mod: {
        id: {
            type: DataTypes.INTEGER
            , primaryKey: true
            , autoIncrement: true
        }, name: {
            type: DataTypes.STRING
        }
    }
});