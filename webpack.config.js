const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: path.resolve(__dirname, '/client/index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        ],
      },
      {
        test: /\.(css|scss)/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: './index.html'})],
  devServer: {
    host: 'localhost',
    port: 8080,
    hot: true,
    static: {
      publicPath: '/build',
      directory: path.resolve(__dirname, 'build')
    },
    proxy: {
      '/images/*' : 'http://localhost:3000',
      '/' : 'http://localhost:3000/images/'
    }
  }
}