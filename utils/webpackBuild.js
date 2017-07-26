"use strict";
import webpack from 'webpack'
import webpackConfig from './webpackConfig'

webpack(webpackConfig, (err, stats) => {
    if (err) throw err;
    console.log(stats.toString());
});