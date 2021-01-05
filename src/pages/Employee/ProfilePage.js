import React from "react";
import "../../styles/ProfilePage.scss";
import EmployeeDashboardHeader from "../../components/EmployeeDashboardHeader";

const ProfilePage = (props) => {
  const { currentUser } = props;
  console.log("currentuser from Profile Page...", currentUser);

  if (currentUser !== null) {
    return (
      <div className="profilepage">
        <EmployeeDashboardHeader currentUser={currentUser} />
        <h1> Employee's Full Name: {currentUser.fullName} </h1>
        <h1> Employee's Email: {currentUser.email} </h1>
        <h1> Employee's Department: {currentUser.department} </h1>
        <h1> Employee's Supervisor: {currentUser.supervisor} </h1>
        <h1> Employee's Office: {currentUser.office} </h1>
      </div>
    );
  }
  return null;
};

export default ProfilePage;
