/**
 * Created by zhangrz on 2017/5/10.
 * Copyright© 2015-2020 occultskyrong (https://github.com/occultskyrong)
 * @version 0.0.1 created
 */

"use strict";

const router = require('express').Router()
    , authService = require('../service').auth
    , mLog = GLO.logger('router')
    , log4js = require('../utils/global/logger').log4js;

// 请求日志
router.use((req, res, next)=> {
    GLO.http(req);
    next();
});

// 响应日志
router.use(log4js.connectLogger(log4js.getLogger('access'), {
    level: 'INFO'
    , format: ':remote-addr  :method  :url  :status  :response-time' + 'ms'
}));

// todo 路由 - 错误页面

// 路由 - 登录
router.use('/login', require('./login'));

// todo 路由 - 接口
router.use('/api', authService.api, require('./api'));

// todo 路由 - web端接口
router.use('/wbi', authService.wbi, require('./wbi'));

// todo 路由 - 页面
router.use('/', authService.web, require('./web'));

/*jshint unused:false */
// 系统错误 - 返回
router.use((err, req, res, next) => {
    // http状态值
    res.status(err.status || 500);
    if (err.status !== 404) {
        mLog.error(err);
        return res.json(GLO.error(err, -99, ''));
    } else {
        return res.json(GLO.error(err, 404, '未找到请求地址'));
    }
});

module.exports = router;