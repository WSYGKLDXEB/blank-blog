const {
  defineConfig
} = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: './',
  transpileDependencies: true,
  devServer: {
    host: 'localhost',
    //  port: 8080,//本地运行的端口
    // 配置自动启动浏览器
    open: true,
    //  hotOnly:false,
    // 接口代理
    proxy: {
      '/shop': {
        // target: 'http://127.0.0.1:8888/api/private/v1/', // 设置要代理访问的接口
        target: 'https://lianghj.top:8888/api/private/v1/', // 设置要代理访问的接口
        changeOrigin: true,
        pathRewrite: {
          '^/shop': '' // 重写访问地址，在请求时可以省略target的地址，直接以/shop开头
        }
      }
    }
  }
})
