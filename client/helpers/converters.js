export const getKcalFromArticle = (article = {}) => {
  const foundKcal = (article.nutrition || [])
    .find(({ name }) => name === 'Calories') || {};
  return foundKcal;
};

const loolupTimeUnits = {
  M: 'minutes',
  H: 'hours',
};

export const getPrepTimeFromArticle = (article = {}) => {
  const time = (article.prepTime || '')
    .match(/PT(\d+)(M|H)/);
  return {
    prepTime: time && time.length > 0 ? time[1] : '',
    prepTimeUnit: loolupTimeUnits[time && time.length > 1 ? time[2] : ''],
  };
};
