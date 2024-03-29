import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AddCategory from "./admin/AddCategory";
import AddRecipe from "./admin/AddRecipe";
import AdminDashboard from "./admin/AdminDashboard";
import AllRecipe from "./admin/AllRecipe";
import Home from "./pages/Home";
import RecipeDetails from "./pages/RecipeDetails";
import Recipes from "./pages/Recipes";
import AdminRoute from "./pages/auth/AdminRoute";
import Confirm from "./pages/auth/Confirm";
import PrivateRoute from "./pages/auth/PrivateRoute";
import Signin from "./pages/auth/Signin";
import Signup from "./pages/auth/Signup";
import ForgetPassword from "./user/ForgetPassword";
import ResetPassword from "./user/ResetPassword";
import UserDashboard from "./user/UserDashboard";

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
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/reset/password/:token" element={<ResetPassword />} />
          <Route path="/email/confirmation/:token" element={<Confirm />} />

          {/* admin */}
          <Route path="/admin/" element={<AdminRoute />}>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="addcategory" element={<AddCategory />} />
            <Route path="addrecipe" element={<AddRecipe />} />
            <Route path="recipes" element={<AllRecipe />} />
          </Route>

          {/* private */}
          <Route path="/user/" element={<PrivateRoute />}>
            <Route path="dashboard" element={<UserDashboard />} />
            <Route path="addrecipe" element={<AddRecipe />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
