/**
 * Created by zhangrz on 2017/6/16.
 * Copyright© 2015-2020 DianDaInfo (https://github.com/diandainfo)
 * @version 0.0.1 created
 */

"use strict";

module.exports = {
    host: ''
    , port: 3000
    , check: true                               // 是否需要进行检查
    , check_ip: '192.168.1.92'                  // 需要进行检查的ip
    , es: {
        shards: 1
        , replicas: 0
        , log: 'trace'
        , data_node: {                              // data-node
            host: '192.168.1.180'
            , auth: 'elastic:changeme'
            , port: 9210
        }, master_node: {                           // master-node
            host: '192.168.1.180'
            , auth: 'elastic:changeme'
            , port: 9210
        }
    }, mysql: {
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
};