import React from "react";
import { Link } from "react-router-dom";
import recipix from "../images/Recipix.png";
import "./Footer.css";
// import search from "../images/Search-icon.png";

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-column">
        <div className="logo-footer">
          <Link className="" to="/">
            <img className="img-logo" src={recipix} alt=""></img>
            RecipiX
          </Link>
        </div>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/recipes">Recipe Index</Link>
          </li>
          <li>
            <Link to="/sponsored-content">Sponsored Content</Link>
          </li>
          <li>
            <Link to="/media-mentions">Media Mentions</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>FOOD & RECIPES</h3>
        <ul>
          <li>
            <Link to="/sugar-free-january">Sugar Free</Link>
          </li>
          <li>
            <Link to="/quick-and-easy-recipes">Quick and Easy Recipes</Link>
          </li>
          <li>
            <Link to="/instant-pot-recipes">Instant Pot Recipes</Link>
          </li>
          <li>
            <Link to="/pasta-recipes">Pasta Recipes</Link>
          </li>
          <li>
            <Link to="/vegan-recipes">Vegan Recipes</Link>
          </li>
          <li>
            <Link to="/soup-recipes">Soup Recipes</Link>
          </li>
          <li>
            <Link to="/meal-prep-recipes">Meal Prep Recipes</Link>
          </li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>SIGN UP FOR EMAIL UPDATES</h3>
        <p>Get free weekly recipes, meal plans, and tips!</p>
        <form>
          <input type="text" placeholder="First Name" />
          <input type="email" placeholder="Email" />
          <button type="submit">GO</button>
        </form>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; 2024 RecipiX. All Rights Reserved.</p>
      <Link to="/privacy-policy">Privacy Policy</Link>
      <Link to="/terms">Terms</Link>
    </div>
  </footer>
);

export default Footer;
