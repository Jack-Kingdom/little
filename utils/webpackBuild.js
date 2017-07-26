"use strict";
import webpack from 'webpack'
import UglifyJSPlugin from 'uglifyjs-webpack-plugin'
import webpackConfig from './webpackConfig'

// minimize and compress javascript
webpackConfig.plugins.push(new UglifyJSPlugin());

webpack(webpackConfig, (err, stats) => {
    if (err) throw err;
    console.log(stats.toString());
});