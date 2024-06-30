import "./Navbar.css";
import cromwellLogo from "../IMG/cromwell_logo.jpg";
import { Link } from "react-router-dom";

function Navbar({ userName, handleLogout }) {
  return (
    <nav>
      <div className="searchBar">
        <Link to="/">
          <img className="logo" src={cromwellLogo} alt="logo" />
        </Link>
        <input type="text" placeholder="Enter a keyword, item"></input>
      </div>

      <div className="icons">
        {userName ? (
          <>
            <span>Welcome {userName}</span>
            <Link to="/login" onClick={handleLogout}>
              Logout
            </Link>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
