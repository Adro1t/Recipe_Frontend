import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RecipeDetails from "./pages/RecipeDetails";
import Recipes from "./pages/Recipes";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminRoute from "./pages/auth/AdminRoute";
import Confirm from "./pages/auth/Confirm";
import Login from "./pages/auth/Login";
import PrivateRoute from "./pages/auth/PrivateRoute";
import Signin from "./pages/auth/Signin";
import Signup from "./pages/auth/Signup";
import ForgetPassword from "./pages/user/ForgetPassword";
import ResetPassword from "./pages/user/ResetPassword";
import UserDashboard from "./pages/user/UserDashboard";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/details" element={<RecipeDetails />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/reset/password/:token" element={<ResetPassword />} />
          <Route path="/email/confirmation/:token" element={<Confirm />} />

          {/* admin */}
          <Route path="/admin/" element={<AdminRoute />}>
            <Route path="dashboard" element={<AdminDashboard />} />
          </Route>

          {/* private */}
          <Route path="/user/" element={<PrivateRoute />}>
            <Route path="dashboard" element={<UserDashboard />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
