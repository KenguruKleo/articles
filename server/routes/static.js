// const express = require('express');
const expressStaticGzip = require('express-static-gzip');
const fallback = require('express-history-api-fallback');
const path = require('path');

module.exports = router => {
  router.get('/index.js.html', (req, res) => res.redirect('/'));
  const root = path.resolve(__dirname, '..', '..', 'dist');
  // router.use('/', express.static(root));
  router.use('/', expressStaticGzip(root));
  router.use(fallback('index.html', { root }));


  router.use((req, res) => {
    res
      .status(404)
      .end('Not Found');
  });
};
