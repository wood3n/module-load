const webpack = require('webpack');

module.exports = {
  // 关闭 CSS 单独打包，动态注入到 JavaScript 中的 inline 代码
  css: {
    extract: false,
    sourceMap: false,
  },
  configureWebpack: {
    devtool: 'none',
    output: {
      filename: 'vueapp.js',
      library: 'vueapp',
      libraryTarget: 'window'
    },
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1
      })
    ]
  }
}