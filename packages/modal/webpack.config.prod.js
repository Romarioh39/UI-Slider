'use strict';

var webpack = require('webpack');
var config = require('./webpack.config.base');

config.plugins.push(new webpack.NoEmitOnErrorsPlugin());

module.exports = config;