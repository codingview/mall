/**
 * Created by zhangrz on 2017/5/12.
 * Copyright© 2015-2020 occultskyrong (https://github.com/occultskyrong)
 * @version 0.0.1 created
 */

"use strict";

const router = require('express').Router()
    , authService = require('../../service').auth;

// 管理员 - 页面
router.use('/admin', require('./admin'));

// 经营者 - 页面
router.use('/supplier', require('./supplier'));

// 用户 - 页面
router.use('/user', require('./user'));

module.exports = router;