/**
 * Created by zrz on 2017/4/27.
 * Copyright© 2015-2020 DianDaInfo (https://github.com/diandainfo)
 * @version 0.0.1 created
 */

"use strict";

// 标准方法
module.exports = {
    /**
     * nginx转发后获取实际IP信息
     * @param req
     * @returns {*}
     */
    ip: (req)=> {
        let ip = req.get('x-forwarded-for'); // 获取代理前的ip地址
        if (ip && ip.split(',').length > 0) {
            ip = ip.split(',')[0];
        } else {
            ip = req.connection.remoteAddress;
        }
        const ipArr = ip.match(/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/g);
        return ipArr && ipArr.length > 0 ? ipArr[0] : '127.0.0.1';
    }
};