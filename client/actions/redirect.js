import * as types from './types';

export const goToLogin = () => ({
  type: types.GO_TO_LOGIN,
});

export const goToRoot = () => ({
  type: types.GO_TO_ROOT,
});

export const goToPage = path => ({
  type: types.GO_TO_PAGE,
  path,
});
