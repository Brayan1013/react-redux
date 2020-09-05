/** @format */

import { types } from "../types/types";

export const setError = (msgError) => ({
  type: types.setError,
  payload: msgError,
});

export const unsetError = () => ({
  type: types.unSetError,
});

export const startLoading = () => ({
  type: types.uiStarLoading,
});

export const finishLoading = () => ({
  type: types.uiFinishLoading,
});
