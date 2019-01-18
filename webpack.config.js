const webpack = require('webpack');
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      "@vue":  path.resolve(__dirname, './vue')
    }
  },
  plugins: [
     new  htmlWebpackPlugin({
       filename: 'index.html',
       template: './index.html',
       inject: true
     })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    overlay: true
  }
};