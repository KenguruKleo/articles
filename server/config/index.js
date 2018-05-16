const fs = require('fs');
const path = require('path');

let devConfig = {};

if (fs.existsSync(path.resolve(__dirname, './config.dev.js'))) {
  devConfig = require('./config.dev'); // eslint-disable-line
}

module.exports = {
  APP_PORT: devConfig.APP_PORT || process.env.PORT || 5000,
  logLevel: devConfig.logLevel || process.env.APP_LOG_LEVEL || 'info',
  jwt_secret: devConfig.jwt_secret || process.env.APP_JWT_SECRET || 'you must specify JWT secret',
  NEWS_API_KEY: devConfig.NEWS_API_KEY || process.env.NEWS_API_KEY || 'you must specify newsapi.org KEY',
  newsResourceURL: devConfig.newsResourceURL || 'https://newsapi.org/v2',
};
