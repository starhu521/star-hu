const path = require('path')
const webpack = require('webpack')
const AssetsPlugin = require('assets-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const config = require('../config')
const env = config.build.env

const dllWebpackConfig = {
  entry: {
    libs: [
      'axios',
      'js-cookie',
      'element-ui',
      'vue/dist/vue.esm.js',
      'vue-router',
      'vuex'
    ]
  },
  output: {
    path: path.resolve(__dirname, '../libs'),
    filename: '[name].[chunkhash:7].js',
    library: '[name]_library',
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.resolve(__dirname, '../libs/[name]-manifest.json'),
      name: '[name]_library',
      context: __dirname, // 执行的上下文环境，对之后的DllReferencePlugin有用
    }),
    new ExtractTextPlugin('[name].[contenthash:7].css'),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
        drop_debugger: true
      }
    }),
    new AssetsPlugin({
      filename: 'bundle-config.json',
      path: './libs'
    }),
    new CleanWebpackPlugin(['libs'], {
      root: path.join(__dirname, '../'),
      verbose: true,
      dry: false
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [path.resolve(__dirname, '../node_modules/webpack-dev-server/client')]
      }
    ]
  }
}

module.exports = dllWebpackConfig