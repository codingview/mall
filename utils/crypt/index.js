/**
 * Created by zhangrz on 2017/5/12.
 * Copyright© 2015-2020 occultskyrong (https://github.com/occultskyrong)
 * @version 0.0.1 created
 */

"use strict";

const Bcrypt = require('bcrypt');

const _ = {
    /**
     * 加盐 - 加密
     * @param password          明文
     * @returns {{pwd, salt}}   密文+盐
     */
    encode: (password)=> {
        const salt = Bcrypt.genSaltSync(10)
            , pwd = Bcrypt.hashSync(password, salt);
        return {pwd, salt};
    }

    /**
     * 比对 - 密文
     * @param password      明文
     * @param pwd           密文
     */
    , equal: (password, pwd)=>Bcrypt.compareSync(password, pwd)
};

module.exports = _;