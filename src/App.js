import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RecipeDetails from "./pages/RecipeDetails";
import Recipes from "./pages/Recipes";
import Confirm from "./pages/auth/Confirm";
import Login from "./pages/auth/Login";
import Signin from "./pages/auth/Signin";
import Signup from "./pages/auth/Signup";

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
          <Route path="/email/confirmation/:token" element={<Confirm />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
