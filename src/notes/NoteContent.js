/** @format */

import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "../hooks/useForm";
import { noteActive, deleteNote } from "../actions/notes";

export const NoteContent = () => {
  const { active: note } = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const [values, handleChanges, updateState] = useForm(note);
  const noteId = useRef(note.id);
  const handleDeleteClick = () => {
    dispatch(deleteNote(note.id));
  };

  useEffect(() => {
    if (noteId.current !== note.id) {
      updateState();
      noteId.current = note.id;
    }
  }, [note, updateState]);

  useEffect(() => {
    dispatch(noteActive(noteId.current, { ...values }));
  }, [values, dispatch]);

  return (
    <div className="note-content">
      <form>
        <input
          value={values.title}
          onChange={handleChanges}
          name="title"
          placeholder="type something awesome"
        />
        <textarea
          value={values.body}
          onChange={handleChanges}
          name="body"
          rows="10"
          cols="50"
        ></textarea>
      </form>
      <div className="img-note">
        {note.url && <img src={note.url} alt={note.title} />}
      </div>

      <button onClick={handleDeleteClick} className="btn-delete">
        Delete
      </button>
    </div>
  );
};
