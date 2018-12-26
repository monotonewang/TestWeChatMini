// 这里添加的属性，可以通过app.config 来访问
var config = {
  env: 'prd', // 在这里切换当前环境
  cdnBase: '',
  data: {//全局变量
    test: '123',
    mainColor:'#8EE5EE'
  }
};

config.apiBase = ENV_API[config.env];

module.exports = config;