import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase/firebase.utils";
import "../styles/AdminDashboardHeader.scss";

const AdminDashboardHeader = () => {
  return (
    <div className="admin-dashboard-header">
      <div className="options">
        <Link className="option" to="/newemployeesignup">
          CREATE NEW EMPLOYEE ACCOUNT
        </Link>
        <Link className="option" to="/viewallemployeesvacationdays">
          VIEW EMPLOYEES DAYS OFF
        </Link>
        <Link className="option" to="/" onClick={() => auth.signOut()}>
          LOG OUT
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboardHeader;
