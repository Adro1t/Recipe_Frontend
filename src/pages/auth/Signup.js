import React, { useState } from "react";
import { signup } from "./index";

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { name, email, password, confirmPassword, error, success } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    // if (password === confirmPassword) {
    //Signup function
    signup({ name, email, password }).then((data) => {
      if (data && data.error) {
        setValues({ ...values, error: data.error, success: false });
      } else {
        setValues({ ...values, name: "", email: "", password: "", confirmPassword: "", success: true });
      }
    });
    // }
  };

  //to show error message
  const showError = () => (
    <div className="alert alert-danger" style={{ display: error ? "" : "none" }}>
      {error}
    </div>
  );

  //to show success message
  const showSuccess = () => (
    <div className="alert alert-info" style={{ display: success ? "" : "none" }}>
      New Account Created, verify your account before login
    </div>
  );

  return (
    <>
      <div className="p-5">
        <h1>Signup Page</h1>
        <form>
          {showError()}
          {showSuccess()}
          <label htmlFor="userName">Username:</label>
          <br />
          <input
            className="form-control"
            type="text"
            id="userName"
            name="userName"
            onChange={handleChange("name")}
            value={name}
          />
          <br />
          <label htmlFor="email">Email:</label>
          <br />
          <input
            className="form-control"
            type="text"
            id="email"
            name="email"
            onChange={handleChange("email")}
            value={email}
          />
          <br />
          <label htmlFor="password">Password:</label>
          <br />
          <input
            className="form-control"
            type="password"
            id="password"
            name="password"
            onChange={handleChange("password")}
            value={password}
          />
          <br />
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <br />
          <input
            className="form-control"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            onChange={handleChange("confirmPassword")}
            value={confirmPassword}
          />
          <br />
          <button className="btn btn-primary" onClick={clickSubmit}>
            Continue
          </button>
        </form>
      </div>
    </>
  );
};

export default Signup;
