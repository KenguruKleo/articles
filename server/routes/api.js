const articlesController = require('../controllers/articles');
const sourcesController = require('../controllers/sources');
const { compression } = require('../middlewares');

module.exports = router => {
  router.get('/api/articles', compression, articlesController.list);
  router.get('/api/articles/:id', compression, articlesController.item);
  router.get('/api/sources', compression, sourcesController.list);
};
