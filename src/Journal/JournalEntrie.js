/** @format */

import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { noteActive } from "../actions/notes";

export const JournalEntrie = ({ id, date, body, title, url }) => {
  const actualDate = moment(date);
  const dispatch = useDispatch();
  const handleNoteSelected = () => {
    dispatch(noteActive(id, { date, body, title, url }));
  };
  return (
    <>
      <div onClick={handleNoteSelected} className="journal-entrie">
        {url && (
          <div className="image-entrie">
            <img src={url} alt="Mario" />
          </div>
        )}
        <div className="content">
          <h1>{title}</h1>
          <p>{body}</p>
          <span>{`${actualDate.format("dddd")}/${actualDate.format(
            "M"
          )}/${actualDate.format("YYYY")}`}</span>
        </div>
      </div>
    </>
  );
};
