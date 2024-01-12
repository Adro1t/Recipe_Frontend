import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { authenticate, isAuthenticated, signin } from "./index";

const Signin = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    redirectToReferrer: false,
  });

  const { email, password, error, redirectToReferrer } = values;

  const { user } = isAuthenticated();

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signin({ email, password }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        authenticate(data, () => {
          setValues({ ...values, redirectToReferrer: true });
          redirectUser();
        });
      }
    });
  };

  //to show error message
  const showError = () => (
    <div className="alert alert-danger" style={{ display: error ? "" : "none" }}>
      {error}
    </div>
  );

  //to redirect User
  const redirectUser = () => {
    if (redirectToReferrer) {
      if (user && user.role === 1) {
        navigate("/admin/dashboard");
      } else {
        navigate("/user/dashboard");
      }
    }
    if (!isAuthenticated()) {
      navigate("/");
    }
  };

  return (
    <>
      <div className="p-5">
        <h1>Signin Page</h1>

        <form>
          {showError()}
          {/* {redirectUser()} */}
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
          <button className="btn btn-primary" onClick={clickSubmit}>
            Continue
          </button>
        </form>
      </div>
    </>
  );
};

export default Signin;
