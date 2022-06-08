// module.exports = {
//   devServer: {
//     port: 8081
//   }
// }

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Bkplay/'
    : '/' ,
    outputDir: "dist",
    lintOnSave: true,
    runtimeCompiler: false,
    productionSourceMap: false,
    devServer: {
      open: process.platform === "darwin",
      port: 8080,
      https: false,
      hotOnly: false,
      proxy: null,
      disableHostCheck: true,
    },

    transpileDependencies: [
      'vuetify'
    ]
}