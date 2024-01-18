import React from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{ width: "280px" }}>
          <Link href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
            <span className="fs-4">Dashboard</span>
          </Link>
          <hr />
          <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
              <Link href="#" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="nav-link text-white">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="#" className="nav-link text-white">
                Orders
              </Link>
            </li>
            <li>
              <Link href="#" className="nav-link text-white">
                Products
              </Link>
            </li>
            <li>
              <Link href="#" className="nav-link text-white">
                Customers
              </Link>
            </li>
          </ul>
          <hr />
          <div className="dropdown">
            <Link
              href="#"
              className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false">
              <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
              <strong>mdo</strong>
            </Link>
            <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
              <li>
                <Link className="dropdown-item" href="#">
                  New project...
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="#">
                  Settings
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="#">
                  Profile
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <Link className="dropdown-item" href="#">
                  Sign out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
