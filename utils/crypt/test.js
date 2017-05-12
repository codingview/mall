/**
 * Created by zhangrz on 2017/5/12.
 * Copyright© 2015-2020 occultskyrong (https://github.com/occultskyrong)
 * @version 0.0.1 created
 */

"use strict";

const bcrypt = require('bcrypt');

const salt = bcrypt.genSaltSync(1);

const pwd = bcrypt.hashSync('123456', salt);

console.info(bcrypt.compareSync('123456', pwd));

console.info(salt, pwd);