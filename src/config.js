import path from 'path'
import logger from './logic/logger';

let developmentConfig = {
    // modified it to false on development environment
    debug: true,
    // backend port, used to test
    port: 3000,
    // app's base dir
    appRoot: path.join(__dirname, '..'),
};

let productionConfig = {
    debug: false,
};

let config = developmentConfig;
logger.info(`config set to ${process.env.NODE_ENV || 'development'}`);
if (process.env.NODE_ENV === 'production') {
    for (let attr in productionConfig) {
        config[attr] = productionConfig[attr]
    }
}

export default config;