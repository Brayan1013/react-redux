/** @format */

import React from "react";
import { Sidebar } from "./Sidebar";
// import { NothingToShow } from "./NothingToShow";
import { NoteScreen } from "../notes/NotesScreen";

export const JournalScreen = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main-container">
        {/* <NothingToShow /> */} <NoteScreen />
      </div>
    </div>
  );
};
