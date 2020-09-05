/** @format */

import React from "react";
import { Sidebar } from "./Sidebar";
import { NothingToShow } from "./NothingToShow";
import { NoteScreen } from "../notes/NotesScreen";
import { useSelector } from "react-redux";

export const JournalScreen = () => {
  const { active } = useSelector((state) => state.notes);
  return (
    <div className="container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main-container">
        {active === null ? <NothingToShow /> : <NoteScreen />}
      </div>
    </div>
  );
};
