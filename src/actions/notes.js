/** @format */

import { db } from "../firebase/firebase-config";
import { types } from "../types/types";
import { getNotes } from "../helpers/getNotes";
import Swal from "sweetalert2";
import { uploadFile } from "../helpers/uploadFile";

export const addNewNote = () => {
  return async (dispatch, getState) => {
    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };

    const { auth } = getState();
    const ref = await db.collection(`${auth.uid}/journal/notes`).add(newNote);
    console.log(ref.id);
    dispatch(noteActive(ref.id, newNote));
  };
};

export const noteActive = (id, note) => ({
  type: types.noteActive,
  payload: {
    id,
    ...note,
  },
});

export const getAllNotes = (id) => {
  return async (dispatch) => {
    const notes = await getNotes(id);
    dispatch(addExisting(notes));
  };
};

export const addExisting = (notes) => ({
  type: types.noteAddExisting,
  payload: [...notes],
});

export const updateNote = () => {
  return async (dispatch, getState) => {
    const { notes, auth } = getState();
    const { active } = notes;
    await db
      .collection(`${auth.uid}/journal/notes`)
      .doc(`/${active.id}`)
      .update(active);

    dispatch(getAllNotes(auth.uid));
    dispatch(inactiveNote());

    Swal.fire("Saved", "I was saved correctly", "success");
  };
};

export const inactiveNote = () => ({
  type: types.noteInactive,
});

export const uploadImage = (file) => {
  return async (dispatch, getState) => {
    const { active } = getState().notes;
    const url = await uploadFile(file);
    const updateNoteWithUrl = {
      ...active,
      url,
    };

    dispatch(updateUrlImageState(updateNoteWithUrl));
    dispatch(updateNote());
  };
};

export const updateUrlImageState = (noteUpdated) => ({
  type: types.noteAddUrlImage,
  payload: {
    ...noteUpdated,
  },
});

export const deleteNote = (idNote) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    await db.collection(`${uid}/journal/notes`).doc(`${idNote}`).delete();
    dispatch(deleteNoteFromState(idNote));
  };
};

export const deleteNoteFromState = (idNote) => ({
  type: types.noteDelete,
  payload: idNote,
});
