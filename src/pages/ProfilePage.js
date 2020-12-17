import React from "react";
import "../styles/ProfilePage.scss";

const ProfilePage = ({ currentUser }) => {
  console.log("currentuser from Profile Page...", currentUser);
  return <div>{currentUser.email}</div>;
};

export default ProfilePage;
