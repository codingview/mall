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
        if ('session' in req && 'user' in req.session) {
            return next();
        } else {
            res.status(403);
            return res.json(GLO.error('无权限访问此接口', -99));
        }
    }

    // todo 权限 - 认证 - api
    , api: (req, res, next)=> {
        return next();
    }

    // todo 权限 - 认证 - web
    , web: (req, res, next)=> {
        if ('session' in req && 'user' in req.session) {
            return next();
        } else {
            return res.redirect('/login');
        }
    }

    // 用户权限 - 分级认证
    , userCheck: (req, res, next, role)=> {
        if ('session' in req && 'user' in req.session) {
            const user = req.session.user;
            if ('role' in user && user.role === role) {
                return next();
            } else {
                req.flash('loginError', '权限角色不符');
                return res.redirect('/login?f=userCheck');
            }
        } else {
            req.flash('loginError', '无访问权限');
            return res.redirect('/login?f=');
        }
    }

    // 权限 - 认证 - admin 用户权限
    , admin: (req, res, next)=> _.userCheck(req, res, next, 'admin')

    // 权限 - 认证 - supplier 用户权限
    , supplier: (req, res, next)=> _.userCheck(req, res, next, 'supplier')

    // 权限 - 认证 - user 用户权限
    , user: (req, res, next)=> _.userCheck(req, res, next, 'user')

    // 权限 - 登录 - web
    , userLogin: (data, req, callback)=> {
        //todo 查询db获取用户信息
    }
};

module.exports = _;