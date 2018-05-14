export const createNamedWrapperReducer = (reducerFunction, { path, fieldName, defaultValue }) => ( // eslint-disable-line
  (state, action = {}) => {
    if (state === undefined) return defaultValue;

    if (action.fieldName === undefined && action.path === undefined) return state;

    if (action.path !== path || action.fieldName !== fieldName) return state;

    return reducerFunction(state, action);
  }
);
