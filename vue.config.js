const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // publicPath: '/rap/',
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: 'https://test.com', // 对应自己的接口
  //       changeOrigin: true,
  //       ws: true,
  //       pathRewrite: {
  //         '^/api': ''
  //       }
  //     }
  //   }
  // },

  // lintOnSave: true,

  // chainWebpack: (config) => {
  //   config.entry.app = ['babel-polyfill', './src/main.js']
  //   config.resolve.alias
  //     .set('@', resolve('src'))
  //     .set('@components', resolve('src/components'))
  //     .set('@common', resolve('src/common'))
  //     .set('@views', resolve('src/views'))
  //     .set('@images', resolve('src/assets/images'))
  // },
}
