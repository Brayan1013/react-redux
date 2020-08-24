/** @format */

import React from "react";

export const NoteContent = () => {
  return (
    <div className="note-content">
      <form>
        <input placeholder="type something awesome" />
        <textarea rows="10" cols="50"></textarea>
      </form>
      <div className="img-note">
        <img
          src="https://img.unocero.com/2020/07/Super-Mario-Bros-verdadera-nacionalidad-1200x600.jpg"
          alt="mario"
        />
      </div>
    </div>
  );
};
