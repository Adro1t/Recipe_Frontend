import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import UserDashboard from "../../user/UserDashboard";
import { isAuthenticated } from "./index";

const PrivateRoute = () =>
  isAuthenticated() && isAuthenticated().user.role === 0 ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );

export default PrivateRoute;
