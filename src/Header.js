import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png"; // Import your logo image
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container d-flex justify-content-between"> {/* Use d-flex and justify-content-between */}
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Your Logo" className="logo" />&nbsp;
          <span className="app-title text-white fw-bolder">Patient information</span>
        </Link>
        <button className="btn btn-danger">
          <Link  onClick={() => navigate("/login")} className="text-white text-decoration-none">
            Logout
          </Link>
        </button>
      </div>
    </nav>
  );
};

export default Header;
