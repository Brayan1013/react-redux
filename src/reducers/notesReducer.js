/** @format */

import { types } from "../types/types";

const initialState = {
  notes: [],
  active: null,
};
export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.noteActive:
      return {
        ...state,
        active: {
          ...action.payload,
        },
      };
    case types.noteAddExisting:
      return {
        ...state,
        notes: [...action.payload],
      };

    case types.noteInactive:
      return {
        ...state,
        active: null,
      };
    case types.noteAddUrlImage:
      return {
        ...state,
        active: {
          ...action.payload,
        },
      };
    case types.noteDelete:
      return {
        ...state,
        active: null,
        notes: state.notes.filter((note) => note.id !== action.payload),
      };
    default:
      return state;
  }
};
