const config = require('../webpack.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

config.plugins = [
  new MiniCssExtractPlugin({
    filename: 'static/styles.[chunkhash].css',
    publicPath: '/',
    allChunks: true,
  }),
  new HtmlWebpackPlugin({
    title: 'Recipes',
    template: 'client/index.html',
    filename: 'index.html',
    inject: 'body',
  }),
  new CopyWebpackPlugin([
    { from: './client/assets/favicon.ico' },
  ]),
  new CompressionPlugin({
    asset: '[path].gz[query]',
    algorithm: 'gzip',
    test: /\.(js|css)$/,
    threshold: 10240,
    minRatio: 0.8,
  }),
];

module.exports = config;
