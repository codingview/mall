

# Mall
- 一个基于NodeJS的开源项目

### 开源协议
- 基础架构遵循开源协议，定制功能和内容不提供开源
- 基于MIT开源协议,具体见[LICENSE](./LICENSE)

### 安装与运行
- 下载源代码：`git clone https://github.com/codingview/mall.git`
- 安装必备`node-module`：在项目所在目录，执行`npm install`
- 修改部分配置信息（mysql、redis）
  - 配置MySQL : 在 [/config/index.js](./config/index.js) 中修改账号、密码
  - 初始化MySQL数据库 : DB相关操作，见 [/utils/model](./utils/model)
- 运行：`node app.js`或`pm2 start app.js`


### 路线图

|序号|功能点简述|优先级|实现时间|备注|
|--:|:--|--:|--:|:--|
|0|项目整体结构|0|2017年05月10日21:24:21||
|0.0|最小可运行集|0|2017年5月11日21:50:45||
|0.1|配置mysql、redis|0|||
|1|项目路由结构|1|||
|2|MySQL初始化与启动检查|1|||
|3|基础实现业务功能需求梳理|2|||
|4|表关系梳理|1|||


### 主要功能点
