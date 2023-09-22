const { defineConfig } = require('@vue/cli-service')
module.exports = {
  transpileDependencies: true,
  lintOnSave:false,
  publicPath:'./',
  devServer:{
    client:{
      overlay:false
    }
  }
}
