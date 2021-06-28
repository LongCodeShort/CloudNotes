module.exports = {
  publicPath: process.env.publicPath,
  outputDir: process.env.outputDir,
  productionSourceMap: false,
  devServer: {
    hot: true,
    open: false,
    port: 8080,
    host: 'localhost'
  },
  css: {
    sourceMap: process.env.NODE_ENV === 'development',
    requireModuleExtension: true,
    loaderOptions: {
      sass: {
        prependData: '@import "~@/assets/styles/variables.scss";'
      }
    }
  },
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: '云笔记'
    },
    error: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: '404.html',
      title: '云笔记'
    }
  }
}
