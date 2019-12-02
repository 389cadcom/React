const path = require('path');
const {
	override,
	addBundleVisualizer,
	disableEsLint,
	addWebpackAlias,
	addDecoratorsLegacy,
} = require('customize-cra')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
/**
 * react-app-rewrited start/build
 * @babel/plugin-proposal-decorators
 */
const resolve = (dir) => path.resolve(__dirname, dir)

const rewiredMap = () => config => {
	config.devtool = config.mode === 'development' ? 'cheap-module-source-map' : false
	return config
}
const analyzer = () => config => {
	config.plugins.push(new BundleAnalyzerPlugin())
	return config
}

module.exports = override(
  disableEsLint(),
	addDecoratorsLegacy(),
	addWebpackAlias({
		['@']: resolve('src'),
		['@utils']: resolve('src/utils'),
  }),
  // analyzer()
  process.env.BUNDLE && addBundleVisualizer(),
)