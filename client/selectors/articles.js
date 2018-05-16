export const getRatedArticles = state => state.articles.ratedArticles;

export const getLikedArticles = state => state.articles.likedArticles;

export const getArticleRateInfo = (state, articleId) => getRatedArticles(state)[articleId];

export const getIsLiked = (state, articleId) => getLikedArticles(state)[articleId];
