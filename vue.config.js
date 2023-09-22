const { defineConfig } = require('@vue/cli-service')
module.exports = {
  transpileDependencies: true,
  lintOnSave: false,
  publicPath: './',
  outputDir: 'docs',
  devServer: {
    // host:'0.0.0.0',
    port:8080,
    historyApiFallback: true,
    allowedHosts: "all",
  }
}
