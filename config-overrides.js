const path = require('path')
const {
  override,
  fixBabelImports,
  addBundleVisualizer,
  disableEsLint,
  addWebpackAlias,
  addDecoratorsLegacy,
} = require('customize-cra')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

/**
 * react-app-rewired customize-cra
 * react-app-rewrited start/build @babel/plugin-proposal-decorators
 */
const resolve = (dir) => path.resolve(__dirname, dir)

const rewiredMap = () => (config) => {
  config.devtool = config.mode === 'development' ? 'cheap-module-source-map' : false
  return config
}
const analyzer = () => (config) => {
  config.plugins.push(new BundleAnalyzerPlugin())
  return config
}

//sass全局设置
const sassResources = () => (config) => {
  const loaders = config.module.rules.find((rule) => Array.isArray(rule.oneOf)).oneOf
  let sassLoader = loaders.find((loader) => {
    if (!Array.isArray(loader.test) && loader.test && loader.test.exec('.scss')) {
      return loader
    }
  })
  sassLoader.use.push({
    loader: 'sass-resources-loader',
    options: {
      resources: [resolve('./src/utils.scss')],
    },
  })
  return config
}
//别名设置
const webpackAlias = () => ({
  ['@']: resolve('src'),
  ['@utils']: resolve('src/utils'),
})

module.exports = override(
  disableEsLint(),
  addDecoratorsLegacy(),
  addWebpackAlias(webpackAlias),
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css'
  }),
  // analyzer()
  process.env.BUNDLE && addBundleVisualizer()
)
