import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { isAuthenticated, signout } from "../pages/auth";
import "./Nav.css";

const Nav = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <Link className="" to="#">
            RecipiX
          </Link>
        </div>
        <div className="search-bar">
          <form class="example" action="action_page.php">
            <input type="text" placeholder="Search.." name="search" />
            <button type="submit">
            <img className="Search-icon" src="./Search-icon.png" alt=""></img>
            </button>
          </form>
          <div>
            {isAuthenticated() && (
              <button
                className="btn btn-warning"
                onClick={() => signout(() => navigate("/login"))}
              >
                Signout
              </button>
            )}
            {!isAuthenticated() && (
              <Link to="/login">
                <i className=""></i>
              </Link>
            )}
          </div>
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
          <img src="./user-icon.png" alt="image"></img>
        </div>
      </nav>
    </>
  );
};

export default Nav;
