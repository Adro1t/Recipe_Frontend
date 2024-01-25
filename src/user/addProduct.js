import React from "react";
import UserDashboard from "./UserDashboard";

const addProduct = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <UserDashboard />
          </div>
          <div className="col-md-9"></div>
        </div>
      </div>
    </>
  );
};

export default addProduct;
