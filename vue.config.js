module.exports = {
  publicPath: '/CloudNotes/',
  outputDir: 'docs',
  productionSourceMap: false,
  css: {
    extract: true,
    sourceMap: false,
    requireModuleExtension: true
  },
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Index Page'
    },
    error: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: '404.html',
      title: '404 Page'
    }
  }
}
