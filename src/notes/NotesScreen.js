/** @format */

import React from "react";
import { NoteAppNavbar } from "./NoteAppNavbar";
import { NoteContent } from "./NoteContent";

export const NoteScreen = () => {
  return (
    <div className="note-container">
      <NoteAppNavbar />
      <NoteContent />
    </div>
  );
};
