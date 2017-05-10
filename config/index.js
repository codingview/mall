/**
 * Created by zrz on 2017/4/27.
 * Copyright© 2015-2020 occultskyrong (https://github.com/occultskyrong)
 * @version 0.0.1 created
 */

"use strict";

const _ = {
    development: {
        port: 80                    // 监听端口
        , host: ''                  // 监听host
        , mysql: {
            database: "mall"
            , host: "127.0.0.1"
            , username: "root"
            , password: "123456"
            , dialect: "mysql"
        }, redis: {
            host: '192.168.1.101'
            , port: 6379
            , db: 6
            , ttl: 86000
            , secret: "mall"
            , key: "mall"
        }
    }
};

module.exports = _[process.env.NODE_ENV || 'development'];