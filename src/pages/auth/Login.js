import React from "react";
import Signin from "./Signin";
import Signup from "./Signup";

const Login = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <Signin />
        <Signup />
      </div>
    </>
  );
};

export default Login;
