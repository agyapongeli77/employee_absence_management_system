import React from 'react'
import '../styles/DashboardHeader.scss';

export const DashboardHeader = () = (
    <div className="dashboard-header">
    <div className="dashboard-header-options">
      <Link className="dashboard-header-option" to="/profile">
        PROFILE
      </Link>
      <Link className="option" to="/">
       REQUEST DAY OFF
      </Link>
      <Link className="option" to="/">
       VIEW DAYS OFF
      </Link>
    </div>
  </div>
)

