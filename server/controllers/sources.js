const articlesService = require('../services/news-origin');

module.exports = {
  async list(req, res) {
    try {
      const queryParams = req.query || {};
      const sources = await articlesService.fetchSources(queryParams);
      res.send(sources);
    } catch (err) {
      res.status(500).end(`Error: ${err}`);
    }
  },
};
