module.exports = {
  // 修改的配置
  // 将baseUrl: '/api',改为baseUrl: '/',
  // baseUrl已被弃用
  publicPath: '/',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://www.douban.com',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-px2rem-exclude')({
            remUnit: 75
          })
        ]
      }
    }
  }
}
