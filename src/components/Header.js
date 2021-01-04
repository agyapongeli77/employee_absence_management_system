import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="options">
        <Link className="option" to="/adminlogin">
          ADMIN SIGN IN
        </Link>
        <Link className="option" to="/">
          EMPLOYEE SIGN IN
        </Link>
      </div>
    </div>
  );
};

export default Header;
