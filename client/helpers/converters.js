export const getKcalFromRecipe = (recipe = {}) => {
  const foundKcal = (recipe.nutrition || [])
    .find(({ name }) => name === 'Calories') || {};
  return foundKcal;
};

const loolupTimeUnits = {
  M: 'minutes',
  H: 'hours',
};

export const getPrepTimeFromRecipe = (recipe = {}) => {
  const time = (recipe.prepTime || '')
    .match(/PT(\d+)(M|H)/);
  return {
    prepTime: time && time.length > 0 ? time[1] : '',
    prepTimeUnit: loolupTimeUnits[time && time.length > 1 ? time[2] : ''],
  };
};
