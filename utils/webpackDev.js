"use strict";
import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import webpackConfig from './webpackConfig'
import config from '../config'

const options = {
    proxy: {"**": config.backend_url},
};

const server = new WebpackDevServer(webpack(webpackConfig), options);
server.listen(webpackConfig.devServer.port, 'localhost', (err) => {
    if (err) throw err;
});