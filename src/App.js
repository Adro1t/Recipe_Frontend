import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RecipeDetails from "./pages/RecipeDetails";
import Recipes from "./pages/Recipes";
import Confirm from "./pages/auth/Confirm";
// import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/details" element={<RecipeDetails />} />
          <Route path="/login" element={<Signup />} />
          <Route path="/email/confirmation/:token" element={<Confirm />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
