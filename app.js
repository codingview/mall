/**
 * Created by zhangrz on 2017/05/10.
 * Copyright© 2015-2020 occultskyrong (https://github.com/occultskyrong)
 * @version 0.0.1 created
 */

'use strict';

global.GLO = require('./utils/global');

//加载modules
const express = require('express')
    , session = require('express-session')
    , RedisStore = require('connect-redis')(session)
    , bodyParser = require('body-parser')
    , path = require('path')
    , serveFavicon = require('serve-favicon')
    , cookieParser = require('cookie-parser')
    , connectFlash = require('connect-flash')
    , config = require('./config')
    , redisConfig = require('./config/db')
    ;

require('events').EventEmitter.defaultMaxListeners = 0;

// 创建项目实例
const app = express();

app.set('views', path.join(__dirname, '/views'));                           // 设置模板地址
app.set('view engine', 'ejs');                                              // 设置模板引擎
app.set('view cache', !GLO.isDev());                                        // 设置模板缓存
app.use(serveFavicon(path.join(__dirname, '/public/favicon.ico')));         // 设置浏览器图标
app.use(bodyParser.json({limit: '50mb'}));                                  // 设置body结构体最大值
app.use(bodyParser.urlencoded({extended: true}));                           // 设置body结构体键值数据类型
app.use(cookieParser());                                                    // 加载cookie解析中间件
app.use(express.static(path.join(__dirname, 'public')));                    // 设置静态资源解析地址
app.use(connectFlash());                                                    // 加载flash中间件

// 配置session，放入redis
app.use(session({
    store: new RedisStore(redisConfig.redis)
    , resave: false
    , saveUninitialized: true
    , secret: redisConfig.redis.secret
    , key: redisConfig.redis.key              // key不同，基于redis的session不会出现多系统冲突
}));

// 加载路由
app.use('/', require('./routes'));

// 启动app监听
app.listen(config.port, ()=> {
    GLO.log(
        'Mall >> Mall - Http服务监听启动'
        + '  当前环境:' + GLO.ENV
        + '  监听端口:' + config.port
        , 'start'
    );
    require('./service').check();  // 启动检查
});