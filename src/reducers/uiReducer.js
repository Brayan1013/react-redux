/** @format */

const { types } = require("../types/types");

const initialState = {
  loading: false,
  msgError: null,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.setError:
      return {
        ...state,
        msgError: action.payload,
      };
    case types.unSetError:
      return {
        ...state,
        msgError: null,
      };
    case types.uiStarLoading:
      return {
        ...state,
        loading: true,
      };
    case types.uiFinishLoading:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
