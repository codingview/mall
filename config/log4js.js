/**
 * Created by zrz on 2017/4/27.
 * Copyright© 2015-2020 occultskyrong (https://github.com/occultskyrong)
 * @version 0.0.1 created
 */

"use strict";

module.exports = {
    development: {
        appenders: [{
            type: "console"
        }, {
            type: "clustered"
            , appenders: [{
                "type": "dateFile",
                "filename": "./logs/http/http.log",//请求日志
                "pattern": "-yyyy-MM-dd",
                "category": "http"
            }, {
                "type": "file",
                "filename": "./logs/app.log",//运行日志
                "maxLogSize": 10485760,
                "numBackups": 3
            }, {
                "type": "logLevelFilter",
                "level": "ERROR",
                "appender": {
                    "type": "file",
                    "filename": "./logs/errors.log"//错误日志
                }
            }]
        }]
    },test: {
        appenders: [{
            type: "console"
        }, {
            type: "clustered"
            , appenders: [{
                "type": "dateFile",
                "filename": "./logs/http/http.log",//请求日志
                "pattern": "-yyyy-MM-dd",
                "category": "http"
            }, {
                "type": "file",
                "filename": "./logs/app.log",//运行日志
                "maxLogSize": 10485760,
                "numBackups": 3
            }, {
                "type": "logLevelFilter",
                "level": "ERROR",
                "appender": {
                    "type": "file",
                    "filename": "./logs/errors.log"//错误日志
                }
            }]
        }]
    },experience: {
        appenders: [{
            type: "console"
        }, {
            type: "clustered"
            , appenders: [{
                "type": "dateFile",
                "filename": "./logs/http/http.log",//请求日志
                "pattern": "-yyyy-MM-dd",
                "category": "http"
            }, {
                "type": "file",
                "filename": "./logs/app.log",//运行日志
                "maxLogSize": 10485760,
                "numBackups": 3
            }, {
                "type": "logLevelFilter",
                "level": "ERROR",
                "appender": {
                    "type": "file",
                    "filename": "./logs/errors.log"//错误日志
                }
            }]
        }]
    },production: {
        appenders: [{
            type: "console"
        }, {
            type: "clustered"
            , appenders: [{
                "type": "dateFile",
                "filename": "./logs/http/http.log",//请求日志
                "pattern": "-yyyy-MM-dd",
                "category": "http"
            }, {
                "type": "file",
                "filename": "./logs/app.log",//运行日志
                "maxLogSize": 10485760,
                "numBackups": 3
            }, {
                "type": "logLevelFilter",
                "level": "ERROR",
                "appender": {
                    "type": "file",
                    "filename": "./logs/errors.log"//错误日志
                }
            }]
        }]
    }
};