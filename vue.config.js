const { defineConfig } = require('@vue/cli-service')
module.exports = {
  transpileDependencies: true,
  lintOnSave:false,
  publicPath:'./',
  outputDir:'dist',
  devServer:{
    client:{
      overlay:false
    }
  }
}
