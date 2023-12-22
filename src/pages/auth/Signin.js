import React from "react";

const Signin = () => {
  return (
    <>
      <div className="p-5">
        <h1>Signin Page</h1>
        <form>
          <label htmlFor="email">Email:</label>
          <br />
          <input className="form-control" type="text" id="email" name="email" />
          <br />
          <label htmlFor="password">Password:</label>
          <br />
          <input className="form-control" type="password" id="password" name="password" />
          <br />
          <button className="btn btn-primary">Continue</button>
        </form>
      </div>
    </>
  );
};

export default Signin;
