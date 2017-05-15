/**
 * Created by zhangrz on 2017/5/12.
 * Copyright© 2015-2020 occultskyrong (https://github.com/occultskyrong)
 * @version 0.0.1 created
 */

"use strict";

const router = require('express').Router()
    ,authService=require('../service').auth;

// 路由 - 登录 - 页面
router.get('/', (req, res)=>
        res.render('./web/login/view', {
            title: '登录'
        })
);

// 路由 - 登录 - 接口
router.post('/', (req, res)=> {
    const body = req.body;
    let _={    };
    if('uid' in body&&body.uid){
        _.username=body.uid;
    }else{
        return res.json(Mall.error('请输入用户名',-11));
    }
    if('upw' in body&&body.upw){
        _.password=body.upw;
    }else{
        return res.json(Mall.error('请输入密码',-21));
    }
    // 权限 - 登录
    authService.userLogin(_,req,(error,result)=>{
        if(error){
            return res.json(Mall.error(error,-31));
        }else{
            return res.json(Mall.success(result));
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