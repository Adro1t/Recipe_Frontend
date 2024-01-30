import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import khajaSet from "../../images/Khajaset.png";
import logo from "../../images/Recipix.png";

import background from "../../images/background.png";
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
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 p-5">
            <img src={logo} alt="logo" className="d-inline" width={"100px"} />
            <span>RECIPIX</span>
            <p className="text-center">WELCOME</p>
            <br />
            <Link to="/signin">Signin</Link>
            <Link to="/signup">Register</Link>
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
                Login
              </button>
              <Link to="/forgetpassword">Forget Password</Link>
            </form>
          </div>
          <div className="col-md-8">
            <img src={khajaSet} alt="khaja" className="w-50" />
            <img src={background} alt="..." className="w-50" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
