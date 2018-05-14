const recipesService = require('../services/recipes-origin');

module.exports = {
  async list(req, res) {
    try {
      const queryParams = req.query || {};
      const recipes = await recipesService.fetchCuisines(queryParams);
      res.send(recipes);
    } catch (err) {
      res.status(500).end(`Error: ${err}`);
    }
  },
};
