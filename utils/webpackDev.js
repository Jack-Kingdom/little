"use strict";
import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import webpackConfig from './webpackConfig'

const options = {
    proxy: {"**": "http://localhost:" + config.port},
};


const server = new WebpackDevServer(webpack(webpackConfig), options);
server.listen(webpackConfig.devServer.port, 'localhost', (err) => {
    if (err) throw err;
});