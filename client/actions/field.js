import * as types from './types';

export const changeFieldValue = ({ value = '', fieldName = '', path = '' }) => ({
  type: types.CHANGE_FIELD_VALUE,
  value,
  fieldName,
  path,
});

export const fieldOnFocus = ({ fieldName = '', path = '' }) => ({
  type: types.FIELD_ON_FOCUS,
  fieldName,
  path,
});

export const fieldOnBlur = ({ fieldName = '', path = '' }) => ({
  type: types.FIELD_ON_BLUR,
  fieldName,
  path,
});

export const resetFieldValue = ({ fieldName = '', path = '' }) => ({
  type: types.RESET_FIELD_VALUE,
  fieldName,
  path,
});

