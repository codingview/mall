/**
 * Created by zhangrz on 2017/5/12.
 * Copyright© 2015-2020 occultskyrong (https://github.com/occultskyrong)
 * @version 0.0.1 created
 */

"use strict";

/* 权限 - 认证 - 服务 */

const _ = {
    // todo 权限 - 认证 - wbi
    wbi: (req, res, next)=> {
        return next();
    }

    // todo 权限 - 认证 - api
    , api: (req, res, next)=> {
        return next();
    }

    // todo 权限 - 认证 - web
    , web: (req, res, next)=> {
        if ('session' in req && 'm_user' in req.session) {
            return next();
        } else {
            return res.redirect('/login');
        }
    }

    // 权限 - 登录 - web
    ,userLogin:(data,req,callback)=>{
        //todo 查询db获取用户信息
    }
};

module.exports = _;