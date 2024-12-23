import React from 'react';
import '../styles/Navbar.css'; // Assuming custom styles are in this file
import 'bootstrap-icons/font/bootstrap-icons.css';
import logo from "../Assets/logo.jpg";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        {/* Brand Logo */}
        <a className="navbar-brand d-flex align-items-center" href="#">
        <img src={logo}className=" me-2"/>
          
        </a>

        {/* Toggler Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
          
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="solutionsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Solutions
              </a>
              <ul className="dropdown-menu" aria-labelledby="solutionsDropdown">
                <li><a className="dropdown-item" href="#">Solution 1</a></li>
                <li><a className="dropdown-item" href="#">Solution 2</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="resourcesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Resources
              </a>
              <ul className="dropdown-menu" aria-labelledby="resourcesDropdown">
                <li><a className="dropdown-item" href="#">Resource 1</a></li>
                <li><a className="dropdown-item" href="#">Resource 2</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact Us</a>
            </li>
            <li className="nav-item" id="login">
              <a href="#">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
