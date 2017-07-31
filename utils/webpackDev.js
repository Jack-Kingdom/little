"use strict";
import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import webpackConfig from './webpackConfig'
import config from '../config'

// add hot reload support
webpackConfig.entry.app.unshift('webpack-dev-server/client?http://localhost:8080/');
// add source map support
webpackConfig.devtool = 'inline-source-map';

const options = {
    proxy: {
        "/graphql": config.backend_url,
    },
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },
};

const server = new WebpackDevServer(webpack(webpackConfig), options);
server.listen(webpackConfig.devServer.port, 'localhost', (err) => {
    if (err) throw err;
});