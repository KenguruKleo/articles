const recipesController = require('../controllers/recipes');
const cuisinesController = require('../controllers/cuisines');
const { compression } = require('../middlewares');

module.exports = router => {
  router.get('/api/recipes', compression, recipesController.list);
  router.get('/api/recipes/:id', compression, recipesController.item);
  router.get('/api/cuisines', compression, cuisinesController.list);
};
