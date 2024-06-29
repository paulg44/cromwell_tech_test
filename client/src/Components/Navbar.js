import "./Navbar.css";
import cromwellLogo from "../IMG/cromwell_logo.jpg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="searchBar">
        <Link to="/">
          <img className="logo" src={cromwellLogo} alt="logo" />
        </Link>
        <input type="text" placeholder="Enter a keyword, item"></input>
      </div>

      <div className="icons">
        <Link to="/login">Log In</Link>
        <Link to="register">Register</Link>
      </div>
    </nav>
  );
}

export default Navbar;
