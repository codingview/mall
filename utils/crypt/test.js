/**
 * Created by zhangrz on 2017/5/27.
 * Copyright© 2015-2020 DianDaInfo (https://github.com/diandainfo)
 * @version 0.0.1 created
 */

"use strict";

const {encode, equal}=require('./index');

const password = '123456';

// const {pwd, salt} = encode(password);

// console.info(salt);

const pwd='$2a$10$czSd9qfuW03C491eJljiz.LRAwbGIuKtAya0G9ibG59OHYRJY.0Hu';

console.info(pwd, equal(password, pwd));
