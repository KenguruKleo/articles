module.exports = {
  APP_PORT: process.env.PORT || 5000,
  logLevel: process.env.APP_LOG_LEVEL || 'info',
  jwt_secret: process.env.APP_JWT_SECRET || 'you must specify JWT secret',
};
