const authController = require('../controllers/auth');
const { requireAuth, requireLogin } = require('../middlewares');

module.exports = router => {
  router.post('/auth/login', requireLogin, authController.getToken);
  router.post('/auth/signup', authController.signup);
  router.post('/auth/token', requireAuth, authController.getToken);
  router.get('/auth/logout', authController.logout);
};
