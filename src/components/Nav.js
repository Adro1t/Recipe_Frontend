import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { isAuthenticated, signout } from "../pages/auth";
import "./Nav.css";
import search from "../images/Search-icon.png";
import user from "../images/user-icon.png";
import recipix from "../images/Recipix.png";

const Nav = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          {/* <img className="img-logo" src={recipix} alt=""></img> */}
          <Link className="" to="/">
            RecipiX
          </Link>
        </div>
        <div className="search-bar">
          <form className="example" action="action_page.php">
            <input type="text" placeholder="Search.." name="search" />
            <button type="submit">
              <img className="Search-icon" src={search} alt=""></img>
            </button>
          </form>
        </div>
        <div className="nav-pages">
          <ul className="nav-links">
            <li className="links">
              <Link className="" aria-current="page" to="#">
                Home
              </Link>
            </li>
            <li className="links">
              <Link className="" to="#">
                Explore
              </Link>
            </li>
            <li className="links">
              <Link className="" aria-disabled="true">
                Help
              </Link>
            </li>
          </ul>
        </div>

        <div className="User">
          {!isAuthenticated() && (
            <Link to="/login">
              <img src={user} alt="login" />
            </Link>
          )}
          {isAuthenticated() && (
            <button className="btn btn-warning" onClick={() => signout(() => navigate("/login"))}>
              Signout
            </button>
          )}
        </div>
      </nav>
    </>
  );
};

export default Nav;
