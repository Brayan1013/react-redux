/** @format */

import React from "react";
import { useForm } from "../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import validator from "validator";
import { setError, unsetError } from "../actions/ui";
import { startWithEmailPasswordAndName } from "../actions/auth";

export const RegisterScreen = () => {
  const dispatch = useDispatch();
  const { msgError } = useSelector((state) => state.ui);
  const [value, handleChange] = useForm({
    name: "brayan",
    email: "brayan@gmail.com",
    password: "123456",
    password2: "123456",
  });
  const handleSubmitRegister = (e) => {
    e.preventDefault();
    if (validForm()) {
      dispatch(
        startWithEmailPasswordAndName(value.email, value.password, value.name)
      );
    }
  };
  const validForm = () => {
    if (value.name.trim().length < 1) {
      dispatch(setError("You need a name"));
      return false;
    } else if (!validator.isEmail(value.email)) {
      dispatch(setError("You need to give me a valid email"));
      return false;
    } else if (
      value.password !== value.password2 ||
      value.password.trim().length < 5
    ) {
      dispatch(setError("Password invalid"));
      return false;
    }

    dispatch(unsetError());

    return true;
  };
  return (
    <>
      <div className="form-container">
        <h1>Login screen</h1>
        <form onSubmit={handleSubmitRegister}>
          {msgError && <h4>{msgError}</h4>}
          <label htmlFor="name">Name</label>
          <input
            value={value.name}
            onChange={handleChange}
            type="text"
            name="name"
            id="name"
          />
          <label htmlFor="email">Email</label>
          <input
            value={value.email}
            onChange={handleChange}
            type="email"
            name="email"
            id="email"
          />
          <label htmlFor="password">Password</label>
          <input
            value={value.password}
            onChange={handleChange}
            type="password"
            name="password"
            id="password"
          />
          <label htmlFor="password2">Confirm password</label>
          <input
            value={value.password2}
            onChange={handleChange}
            type="password"
            name="password2"
            id="password2"
          />
          <button className="sign-up">Sing up</button>
        </form>
      </div>
    </>
  );
};
