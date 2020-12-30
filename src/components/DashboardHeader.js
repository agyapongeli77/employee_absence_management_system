import React from "react";
import { Link, withRouter } from "react-router-dom";
import { auth } from "../firebase/firebase.utils";
import "../styles/DashboardHeader.scss";
import profilePic from "../assets/profilepic.png";
import logoutLogo from "../assets/logout.png";

const DashboardHeader = ({ currentUser }) => {
  return (
    <div className="dashboard-header">
      <div className="dashboard-header-top">
        <div className="dashboard-header-options-top">
          <Link className="dashboard-header-option-top" to="/profile">
            COMPANY LOGO
          </Link>
          <Link className="dashboard-header-option-top" to="/profile">
            {currentUser && currentUser.fullName}
            <img
              className="dashboard-header-profilepic"
              src={profilePic}
              alt="profile-pic"
            />
          </Link>
          <Link
            className="dashboard-header-option-top"
            to="/"
            onClick={() => auth.signOut()}
          >
            <img
              className="dashboard-header-logoutLogo"
              src={logoutLogo}
              alt="profile-pic"
            />
            LOG OUT
          </Link>
        </div>
      </div>
      <div className="dashboard-header-bottom">
        <div className="dashboard-header-options-bottom">
          <Link className="dashboard-header-option-bottom" to="/profile">
            PROFILE
          </Link>
          <Link
            className="dashboard-header-option-bottom"
            to="/absence-request"
          >
            REQUEST DAYS OFF
          </Link>
          <Link className="dashboard-header-option-bottom" to="/viewdaysoff">
            VIEW DAYS OFF
          </Link>
        </div>
      </div>
    </div>
  );
};

export default withRouter(DashboardHeader);
