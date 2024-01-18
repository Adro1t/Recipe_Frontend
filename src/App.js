import React, { Fragment } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RecipeDetails from "./pages/RecipeDetails";
import Recipes from "./pages/Recipes";
import AdminDashboard from "./pages/auth/AdminDashboard";
import AdminRoute from "./pages/auth/AdminRoute";
import Confirm from "./pages/auth/Confirm";
import Login from "./pages/auth/Login";
import Signin from "./pages/auth/Signin";
import Signup from "./pages/auth/Signup";

const App = () => {
  return (
    <>
      <Router>
        <Fragment>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/details" element={<RecipeDetails />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/login" element={<Login />} />
            <Route path="/email/confirmation/:token" element={<Confirm />} />

            {/* admin */}
            <Route path="/admin/" element={<AdminRoute />}>
              <Route path="dashboard" element={<AdminDashboard />} />
            </Route>
          </Routes>
        </Fragment>
      </Router>
    </>
  );
};

export default App;
