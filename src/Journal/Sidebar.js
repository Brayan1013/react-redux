/** @format */

import React from "react";
import { JournalEntries } from "./JournalEntries";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-head">
        <p>
          <i className="fas fa-moon"></i> Brayan Hernandez
        </p>
        <div className="logout-button">
          <button>Logout</button>
        </div>
      </div>
      <div className="history">
        <i className="fas fa-calendar-alt fa-10x"></i>
      </div>
      <JournalEntries />
    </div>
  );
};
