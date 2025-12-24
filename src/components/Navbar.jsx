import React from "react";
import { useLocation, NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import '../styles/Navbar.css'

export default function Navbar() {
  const location = useLocation();
  const showAuthButtons = ["/", "/signup", "/login"].includes(location.pathname);

  return (
    <nav className="navbar navbar-expand-md bg-body-white">
      <div className="container-fluid">

        {/* Logo */}
        <NavLink className="navbar-brand ms-5" to="/">
          <img src={logo} alt="Logo" />
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* CENTER*/}
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-4">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About Us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/coding">Coding</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/mcq">MCQ's</NavLink>
            </li>
          </ul>

          {/* RIGHT*/}
          <div
            className={`d-flex gap-2 auth-buttons ${showAuthButtons ? "visible" : "invisible"
              }`}
          >
            <NavLink to="/signup" className="btn1 py-2 px-3">
              Sign Up
            </NavLink>
            <NavLink to="/login" className="btn2 py-2 px-3">
              Login
            </NavLink>
          </div>


        </div>
      </div>
    </nav>
  );
}
