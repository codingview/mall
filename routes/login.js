/**
 * Created by zhangrz on 2017/5/12.
 * Copyright© 2015-2020 occultskyrong (https://github.com/occultskyrong)
 * @version 0.0.1 created
 */

"use strict";

const router = require('express').Router()
    , authService = require('../service').auth;

// 路由 - 登录 - 首页 >> 选择角色
router.get('/', (req, res)=>res.redirect('/login/role'));

// 路由 - 登录 - 选择角色
router.get('/role', (req, res)=>
    res.render('./web/login/role/view')
);


// 路由 - user - 登录 - 页面
router.get('/user', (req, res)=>
    res.render('./web/login/user/view', {
        title: '用户登录'
    })
);

// 路由 - admin - 登录 - 页面
router.get('/admin', (req, res)=>
    res.render('./web/login/admin/view', {
        title: '管理员登录'
    })
);

// 路由 - 登录 - 接口
router.post('/', (req, res)=> {
    const body = req.body;
    let _ = {};
    if ('uid' in body && body.uid) {
        _.username = body.uid;
    } else {
        return res.json(GLO.error('请输入用户名', -11));
    }
    if ('upw' in body && body.upw) {
        _.password = body.upw;
    } else {
        return res.json(GLO.error('请输入密码', -21));
    }
    // 权限 - 登录
    authService.userLogin(_, req, (error, result)=> {
        if (error) {
            return res.json(GLO.error(error, -31));
        } else {
            return res.json(GLO.success(result));
        }
    });
});

// 路由 - 注销 - 接口
router.get('/off', (req, res)=> {
    if ('session' in req && 'mall_user' in req.session) {
        req.session.destroy();
    }
    return res.redirect('/login');
});

module.exports = router;