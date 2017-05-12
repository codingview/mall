/**
 * Created by zhangrz on 2017/5/12.
 * Copyright© 2015-2020 DianDaInfo (https://github.com/diandainfo)
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
};

module.exports = _;