import React from "react";
import { Navigate } from "react-router-dom";
import AdminDashboard from "../admin/AdminDashboard";
import { isAuthenticated } from "./index";

const AdminRoute = () =>
  isAuthenticated() && isAuthenticated().user.role === 1 ? (
    <>
      <AdminDashboard />
    </>
  ) : (
    <Navigate to="/login" />
  );

export default AdminRoute;
