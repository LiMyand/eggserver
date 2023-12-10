/* eslint valid-jsdoc: "off" */
const { Op, col } = require('sequelize')
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_none';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
config.sequelize = {
  dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
  database: 'fc',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '123456',
  // 配置数据库时间为东八区北京时间
  timezone: '+08:00',
  // 使用默认运算符别名
  operatorsAliases: {
    $like: Op.like,
    $not: Op.not,
    $col: col
  },
  define: {
    // model的全局配置
    timestamps: true, // 不添加create,update,delete时间戳
    // 字段生成软删除时间戳 deleted_at
    paranoid: false,
    createdAt: 'created_time',
    updatedAt: 'updated_time',
    // deletedAt: 'deleted_at',
    freezeTableName: true, // 防止修改表名为复数
    underscored: false // 防止驼峰式字段被默认转为下划线
  },
  // 打印日志
  logging: true,
  // 时间格式化
  dialectOptions: {
    // 让读取date类型数据时返回时间戳而不是UTC时间
    dateStrings: true,
    typeCast: true
  },
  // 连接池
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
}
config.security = {
  csrf: {
    enable: false
  },
  // 跨域白名单：网页端基地址
  domainWhiteList: []
}
config.cors = {
  origin: '*',
  allowMethods: 'GET, PUT, POST, DELETE, PATCH'
}
config.middleware = ['errorHandler']

config.valparams = {
  locale: 'zh-cn',
  throwError: true
}