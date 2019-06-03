const merge = require('webpack-merge');
const production = require('./prod.webpack.config.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
 
module.exports = merge(production, {
  plugins: [
    new BundleAnalyzerPlugin()
  ]
});