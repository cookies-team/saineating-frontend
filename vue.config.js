const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  // publicPath: process.env.NODE_ENV === 'production'
  //   ? '/iter2'
  //   : '/',
  devServer: {
    host: '0.0.0.0',
    port: 8081,
    https: true,
    allowedHosts: 'all',
  }
})
