/** @format */

import React from "react";
import { useDispatch } from "react-redux";
import { updateNote, uploadImage } from "../actions/notes";

export const NoteAppNavbar = () => {
  const dispatch = useDispatch();
  const handleSave = () => {
    dispatch(updateNote());
  };

  const handlePicture = () => {
    document.getElementById("image-input").click();
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      dispatch(uploadImage(file));
    }
  };
  return (
    <div className="note-app">
      <p>28/august/2020</p>
      <input
        id="image-input"
        type="file"
        name="files"
        onChange={handleChange}
        style={{ display: "none" }}
      />
      <div className="buttons">
        <button onClick={handlePicture} type="file" className="picture">
          Picture
        </button>
        <button onClick={handleSave} className="save">
          Save
        </button>
      </div>
    </div>
  );
};
