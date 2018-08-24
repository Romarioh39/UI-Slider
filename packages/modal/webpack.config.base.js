'use strict';

var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    library: 'UIModal',
    libraryTarget: 'umd',
    filename: 'index.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [new webpack.NoEmitOnErrorsPlugin()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-stage-2', '@babel/preset-react'],
            plugins: [
              require('babel-plugin-transform-export-extensions'),
              require('@babel/plugin-proposal-class-properties'),
            ],
          },
        },
      },
    ],
  },
  externals: ['react', 'react-dom', 'prop-types'],
};