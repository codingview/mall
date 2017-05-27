/**
 * Created by zrz on 2017/4/27.
 * Copyright© 2015-2020 occultskyrong (https://github.com/occultskyrong)
 * @version 0.0.1 created
 */

"use strict";

const ENV=process.env.NODE_ENV || 'development';

const _ = {
    development: {
        port: 3000                  // 监听端口
        , host: ''                  // 监听host
    }
};

module.exports = _[ENV];
