import React from "react";

const Signup = () => {
  return (
    <>
      <div className="p-5">
        <h1>Signup Page</h1>
        <form>
          <label htmlFor="userName">Username:</label>
          <br />
          <input className="form-control" type="text" id="userName" name="userName" />
          <br />
          <label htmlFor="email">Email:</label>
          <br />
          <input className="form-control" type="text" id="email" name="email" />
          <br />
          <label htmlFor="password">Password:</label>
          <br />
          <input className="form-control" type="password" id="password" name="password" />
          <br />
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <br />
          <input className="form-control" type="password" id="password" name="password" />
          <br />
          <button className="btn btn-primary">Continue</button>
        </form>
      </div>
    </>
  );
};

export default Signup;
