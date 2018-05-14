const auth = require('./auth');
const api = require('./api');
const staticRouts = require('./static');

module.exports = app => {
  [
    auth,
    api,
    staticRouts,
  ].forEach(router => router(app));
};
