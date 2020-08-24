/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { loginwithEmailAndPassword, signInWithGoogle } from "../actions/auth";
import { useDispatch } from "react-redux";

export const LoginScreen = () => {
  const [values, handleChanges] = useForm({
    email: "brayan@gmail.com",
    password: "123456",
  });

  const { email, password } = values;
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginwithEmailAndPassword(email, password));
  };

  const handleSignInWithGoogle = () => {
    dispatch(signInWithGoogle());
  };
  return (
    <>
      <div className="form-container">
        <h1>Login screen</h1>
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={email}
            onChange={handleChanges}
            name="email"
            id="email"
          />
          <label htmlFor="password ">Password</label>
          <input
            type="password"
            value={password}
            onChange={handleChanges}
            name="password"
            id="password"
          />
          <button type="submit">Login</button>
        </form>
        <button onClick={handleSignInWithGoogle} className="google">
          <i className="fab fa-google"></i> Google
        </button>
        <Link className="register" to="/auth/register">
          Create an account
        </Link>
      </div>
    </>
  );
};
