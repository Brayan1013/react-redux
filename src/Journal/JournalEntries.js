/** @format */

import React from "react";
import { JournalEntrie } from "./JournalEntrie";
import { useSelector } from "react-redux";
export const JournalEntries = () => {
  const { notes } = useSelector((state) => state.notes);
  return (
    <div className="journal-entries">
      {notes.map((note) => {
        return <JournalEntrie key={note.id} {...note} />;
      })}
    </div>
  );
};
