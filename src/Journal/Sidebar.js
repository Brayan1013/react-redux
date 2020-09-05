/** @format */

import React, { useEffect } from "react";
import { JournalEntries } from "./JournalEntries";
import { useDispatch, useSelector } from "react-redux";
import { logoutFirebase } from "../actions/auth";
import { addNewNote, getAllNotes } from "../actions/notes";

export const Sidebar = () => {
  const dispatch = useDispatch();
  const { user, uid } = useSelector((state) => state.auth);
  const handleLogout = () => {
    dispatch(logoutFirebase());
  };
  const handleAddNewNote = () => {
    dispatch(addNewNote());
  };
  useEffect(() => {
    dispatch(getAllNotes(uid));
  }, [uid, dispatch]);
  return (
    <div className="sidebar">
      <div className="sidebar-head">
        <p>
          <i className="fas fa-moon"></i> {user}
        </p>
        <div className="logout-button">
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
      <div className="history">
        <i
          onClick={handleAddNewNote}
          className="fas fa-calendar-plus fa-10x"
        ></i>
      </div>
      <JournalEntries />
    </div>
  );
};
