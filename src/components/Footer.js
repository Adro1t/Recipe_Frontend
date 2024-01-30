import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import recipix from "../images/Recipix.png";
// import search from "../images/Search-icon.png";

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-column footer-col-1">
        <div className="logo-footer">
          <Link className="" to="/">
            <img className="img-logo-footer" src={recipix} alt=""></img>
            RecipiX
          </Link>
        </div>
        <ul>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/recipes">Recipe Index</a>
          </li>
          <li>
            <a href="/sponsored-content">Sponsored Content</a>
          </li>
          <li>
            <a href="/media-mentions">Media Mentions</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>FOOD & RECIPES</h3>
        <ul>
          <li>
            <a href="/sugar-free-january">Sugar Free</a>
          </li>
          <li>
            <a href="/quick-and-easy-recipes">Quick and Easy Recipes</a>
          </li>
          <li>
            <a href="/instant-pot-recipes">Instant Pot Recipes</a>
          </li>
          <li>
            <a href="/pasta-recipes">Pasta Recipes</a>
          </li>
          <li>
            <a href="/vegan-recipes">Vegan Recipes</a>
          </li>
          <li>
            <a href="/soup-recipes">Soup Recipes</a>
          </li>
          <li>
            <a href="/meal-prep-recipes">Meal Prep Recipes</a>
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
      <a href="/privacy-policy">Privacy Policy</a>
      <a href="/terms">Terms</a>
    </div>
  </footer>
);

export default Footer;
