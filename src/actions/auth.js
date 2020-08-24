/** @format */
import { googleProvider, firebase } from "../firebase/firebase-config";
const { types } = require("../types/types");

export const loginwithEmailAndPassword = (email, password) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(login(123, "elBrayan"));
    }, 3000);
  };
};

export const signInWithGoogle = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
      });
  };
};

export const login = (uid, username) => ({
  type: types.login,
  payload: {
    uid,
    username,
  },
});
