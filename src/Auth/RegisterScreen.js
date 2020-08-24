/** @format */

import React, { useState } from "react";
import { useForm } from "../hooks/useForm";

export const RegisterScreen = () => {
  const [isValid, setIsValid] = useState(true);
  const [value, handleChange] = useForm({
    name: "brayan",
    email: "brayan@gmail.com",
    password: "123456",
    password2: "123456",
  });

  const handleSubmitRegister = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="form-container">
        <h1>Login screen</h1>
        <form onSubmit={handleSubmitRegister}>
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
            className={value.password !== value.password2 ? "error" : null}
            value={value.password2}
            onChange={handleChange}
            type="password"
            name="password2"
            id="password2"
          />
          {value.password !== value.password2 && (
            <span>The passwords are not the same</span>
          )}
          <button
            disabled={value.password !== value.password2}
            className="sign-up"
          >
            Sing up
          </button>
        </form>
      </div>
    </>
  );
};
