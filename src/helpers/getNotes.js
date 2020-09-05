/** @format */

import { db } from "../firebase/firebase-config";

export const getNotes = async (uid) => {
  let notes = [];
  const response = await db.collection(`${uid}/journal/notes`).get();
  response.docs.forEach((doc) => {
    notes.push({ id: doc.id, ...doc.data() });
  });
  return notes;
};
