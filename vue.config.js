module.exports = {
  //配置网页包
  configureWebpack: {
    resolve:{
      //别名
      alias:{
        'assets':'@/assets',
        'components':'@/components',
        'network':'@/network',
        'store':'@/store',
        'views':'@/views',
      }
    }
  }
}