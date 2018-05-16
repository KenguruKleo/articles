const base64url = require('base64-url');

function getArticleId(article) {
  return base64url.encode(JSON.stringify({
    title: article.title,
    source: article.source.id,
  }));
}

function getArticleKeysFromId(id) {
  return JSON.parse(base64url.decode(id));
}

module.exports = {
  getArticleId,
  getArticleKeysFromId,
};
