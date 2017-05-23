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
    ;

require('events').EventEmitter.defaultMaxListeners = 0;

// 创建项目实例
const app = express();
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.set('view cache', !GLO.isDev());
app.use(serveFavicon(path.join(__dirname, '/public/favicon.ico')));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(connectFlash());
// 配置session，放入redis
app.use(session({
    store: new RedisStore(config.redis)
    , resave: false
    , saveUninitialized: true
    , secret: config.redis.secret
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
    require('./service').check();
});