import React from "react";
import { Navigate } from "react-router-dom";
import UserDashboard from "../../user/UserDashboard";
import { isAuthenticated } from "./index";

const PrivateRoute = () =>
  isAuthenticated() && isAuthenticated().user.role === 0 ? (
    <>
      <UserDashboard />
    </>
  ) : (
    <Navigate to="/login" />
  );

export default PrivateRoute;
