const compression = require('compression');
const { requireAuth, requireLogin } = require('./auth');

module.exports = {
  requireAuth,
  requireLogin,
  compression: compression(),
};
