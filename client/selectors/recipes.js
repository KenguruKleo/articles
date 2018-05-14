export const getRatedRecipes = state => state.recipes.ratedRecipes;

export const getLikedRecipes = state => state.recipes.likedRecipes;

export const getRecipeRateInfo = (state, recipeId) => getRatedRecipes(state)[recipeId];

export const getIsLiked = (state, recipeId) => getLikedRecipes(state)[recipeId];
