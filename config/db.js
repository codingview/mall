/**
 * Created by zhangrz on 2017/5/27.
 * Copyright© 2015-2020 DianDaInfo (https://github.com/diandainfo)
 * @version 0.0.1 created
 */

"use strict";

const ENV = process.env.NODE_ENV || 'development';

const _ = {
    development: {
        mysql: {
            read: { // 读写分离
                database: "mall"
                , host: "127.0.0.1"
                , username: "root"      // 账号
                , password: "root"      // 密码
                , dialect: "mysql"
            }, write: {
                database: "mall"
                , host: "127.0.0.1"
                , username: "root"
                , password: "root"
                , dialect: "mysql"
            }
        }, redis: {
            host: 'localhost'
            , port: 6379
            , db: 6
            , ttl: 86000
            , secret: "mall"
            , key: "mall"
        }
    }
};

module.exports = _[ENV];
