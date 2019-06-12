const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  lintOnSave: true,
  //配置文件夹别名
  chainWebpack: config => {
    config.resolve.alias
      .set('@$', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('api', resolve('src/api'))
      .set('router', resolve('src/router'))
      .set('common', resolve('src/common'))
      .set('store', resolve('src/store'))
      .set('views', resolve('src/views'))
      .set('request', resolve('src/request'))
  },
  devServer: {
    port: 8888 /* 端口号 */
  }
}
