import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";
import { isAuthenticated } from "./index";

const AdminRoute = () =>
  isAuthenticated() && isAuthenticated().user.role === 1 ? (
    <>
      <AdminDashboard />
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );

export default AdminRoute;
