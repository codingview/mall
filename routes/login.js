/**
 * Created by zhangrz on 2017/5/12.
 * Copyright© 2015-2020 DianDaInfo (https://github.com/diandainfo)
 * @version 0.0.1 created
 */

"use strict";

const router = require('express').Router();

// 路由 - 登录 - 页面
router.get('/', (req, res)=>
    res.render('./web/login/view', {
        title: '登录'
    })
);

module.exports = router;