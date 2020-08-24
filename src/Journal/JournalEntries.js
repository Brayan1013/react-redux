/** @format */

import React from "react";
import { JournalEntrie } from "./JournalEntrie";

export const JournalEntries = () => {
  const numberEntries = [1, 2];
  return (
    <div className="journal-entries">
      {numberEntries.map((value) => {
        return <JournalEntrie key={value} />;
      })}
    </div>
  );
};
