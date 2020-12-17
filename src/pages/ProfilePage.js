import React from "react";
import "../styles/ProfilePage.scss";
import DashboardHeader from "../components/DashboardHeader";

const ProfilePage = (props) => {
  const { currentUser } = props;
  console.log("currentuser from Profile Page...", currentUser);
  return (
    <div className="profilepage">
      <DashboardHeader currentUser={currentUser} />
      <h1> Employee's Full Name: {currentUser && currentUser.fullName} </h1>
      <h1> Employee's Email: {currentUser && currentUser.email} </h1>
      <h1> Employee's Department: {currentUser && currentUser.department} </h1>
      <h1> Employee's Supervisore: {currentUser && currentUser.supervisor} </h1>
    </div>
  );
};

export default ProfilePage;
