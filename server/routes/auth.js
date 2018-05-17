const authController = require('../controllers/auth');
const { requireAuth, requireLogin } = require('../middlewares');

module.exports = router => {
  router.post('/auth/login', requireLogin, authController.getTokenWithUser);
  router.post('/auth/signup', authController.signup);
  router.get('/auth/token', requireAuth, authController.getTokenWithUser);
  router.get('/auth/get_state', requireAuth, authController.getState);
  router.get('/auth/logout', authController.logout);
};
