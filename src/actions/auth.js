/** @format */
import Swal from "sweetalert2";
import { googleProvider, firebase } from "../firebase/firebase-config";
import { startLoading, finishLoading } from "./ui";
const { types } = require("../types/types");

export const loginwithEmailAndPassword = (email, password) => {
  return (dispatch) => {
    dispatch(startLoading());
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
        dispatch(finishLoading());
      })
      .catch((e) => {
        Swal.fire({
          title: "Error!",
          text: e.message,
          icon: "error",
          confirmButtonText: "Ok",
        });
        dispatch(finishLoading());
      });
  };
};

export const startWithEmailPasswordAndName = (email, password, name) => {
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({ displayName: name });
        dispatch(login(user.id, user.displayName));
      })
      .catch((e) => {
        Swal.fire({
          title: "Error!",
          text: e.message,
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
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

export const logoutFirebase = () => {
  return async (dispatch) => {
    await firebase.auth().signOut();
    dispatch(logout());
  };
};

export const logout = () => ({
  type: types.logout,
});
