const compression = require('compression');
const { passport, requireAuth, requireLogin } = require('./auth');

module.exports = {
  passport,
  requireAuth,
  requireLogin,
  compression: compression(),
};
