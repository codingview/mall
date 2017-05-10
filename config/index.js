/**
 * Created by zrz on 2017/4/27.
 * Copyright© 2015-2020 occultskyrong (https://github.com/occultskyrong)
 * @version 0.0.1 created
 */

"use strict";

const _ = {
    development: {
        port: 80
        , host: ''
        , url: {
            api_server: ''
        }, redis: {
            host: '192.168.1.101'
            , port: 6379
            , db: 6
            , ttl: 86000
            , secret: "business_statistics_web"
            , key: "business_statistics_web"
        }
    }, test: {
        port: 30218
        , host: ''
        , url: {
            api_server: ''
        }, redis: {
            host: '192.168.1.101'
            , port: 6379
            , db: 6
            , ttl: 86000
            , secret: "business_statistics_web"
            , key: "business_statistics_web"
        }
    }, experience: {
        port: 30218
        , host: ''
        , url: {
            api_server: ''
        }, redis: {
            host: "127.0.0.1"
            , port: 6379
            , db: 6
            , ttl: 86000
            , secret: "business_statistics_web"
            , key: "business_statistics_web"
        }
    }, production: {
        port: 30218
        , host: ''
        , url: {
            api_server: ''
        }, redis: {
            host: "192.168.0.251"
            , port: 6379
            , db: 6
            , ttl: 86000
            , secret: "business_statistics_web"
            , key: "business_statistics_web"
        }
    }
};

module.exports = _[BSW.ENV];