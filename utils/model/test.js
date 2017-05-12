/**
 * Created by zhangrz on 2017/5/10.
 * Copyright© 2015-2020 occultskyrong (https://github.com/occultskyrong)
 * @version 0.0.1 created
 */

"use strict";

const model = require('./mysql');

const User = require('../../models').User;

const createUser = (callback)=>User(model.Sequelize, (mod)=> callback(model.sequelize.define('user', mod)));

model.sequelize
    .sync()
    .then(function () {
        return createUser((User)=> {
            User.create({
                name: 'zz'
            });
        });
    })
    .then(function (data) {
        console.info(data);
    });