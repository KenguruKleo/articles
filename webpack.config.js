const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const cssLocalIdentName = '[name]__[local]_[hash:base64:5]';

module.exports = {
  entry: [
    './client/index.jsx',
  ],
  output: {
    filename: 'static/bundle.[hash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  resolve: {
    modules: [
      path.resolve(__dirname),
      'node_modules',
    ],
    extensions: ['.js', '.jsx', '.json', '.css'],
  },
  devServer: {
    disableHostCheck: true,
    contentBase: 'dist',
    stats: {
      chunks: false,
      children: false,
    },
    historyApiFallback: true,
    proxy: [
      {
        context: ['/api', '/auth', '/favicon.ico'],
        target: 'http://localhost:5000',
      },
    ],
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)?$/,
        exclude: /(node_modules)/,
        enforce: 'pre',
        use: 'eslint-loader',
        include: path.join(__dirname, 'client'),
      },
      {
        test: /\.(jsx|js)?$/,
        exclude: /(node_modules)/,
        use: 'babel-loader',
        include: [
          path.join(__dirname, 'client'),
        ],
      },
      {
        test: /\.s?css$/,
        include: path.resolve(__dirname, 'client'),
        exclude: /(node_modules)/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: cssLocalIdentName,
            },
          },
          { loader: 'postcss-loader' },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.(png|gif|jpe?g|svg|ttf|otf|eot|woff2?)$/,
        loader: 'file-loader?name=static/files/[name][hash:base64:5].[ext]',
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'static/styles.[chunkhash].css',
      publicPath: '/',
      allChunks: true,
    }),
    new HtmlWebpackPlugin({
      title: 'Articles',
      template: 'client/index.html',
      filename: 'index.html',
      inject: 'body',
    }),
    new CopyWebpackPlugin([
      { from: './client/assets/favicon.ico' },
    ]),
  ],
};
