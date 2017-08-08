"use strict";

import webpack from 'webpack';
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';
import CompressionPlugin from 'compression-webpack-plugin';
import webpackConfig from './webpackConfig';

// minimize and compress javascript
webpackConfig.plugins.push(new UglifyJSPlugin());

// compress
// todo compress resource
webpackConfig.plugins.push(new CompressionPlugin({
    asset: "[path].gz[query]",
    algorithm: "gzip",
    test: /\.(js|html)$/,
    threshold: 10240,
    minRatio: 0.8,
    // deleteOriginalAssets: true,
}));

webpack(webpackConfig, (err, stats) => {
    if (err) throw err;
    console.log(stats.toString());
});