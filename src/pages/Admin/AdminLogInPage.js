import React, { useState } from "react";
import "../../styles/AdminLogInPage.scss";
import { auth } from "../../firebase/firebase.utils";
import { useHistory } from "react-router-dom";
import FormInput from "../../components/FormInput";
import CustomButton from "../../components/CustomButton";
import Header from "../../components/Header";

const AdminLogInPage = () => {
  const [admin, setAdmin] = useState({ email: "", password: "" });

  //declaration of react router useHistory HOC(High Order Component)
  //which works with only react hooks
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (admin.email !== "admin@company.com") {
      alert("You are not an admin");
      setAdmin({ email: "", password: "" });
      return;
    }

    try {
      await auth.signInWithEmailAndPassword(admin.email, admin.password);
      setAdmin({ email: "", password: "" });

      //logs the admin in and sends them to the new employee sign up page when sign is successful
      //react router withHistory High Order Component(HOC) makes it possible
      //to access the history prop in this component
      history.push("/newemployeesignup");
    } catch (error) {
      console.log("error signing in", error);
      alert("Incorrect admin password");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAdmin({ ...admin, [name]: value });
  };

  return (
    <div>
      <Header />
      <div className="admin-login-page">
        <h1 className="title">Employee Absence Management System</h1>
        <div className="login-page-form-container">
          <h2 className="sub-title">Admin Sign In</h2>
          <span>Please log in with your admin credentials</span>
          <form onSubmit={handleSubmit}>
            <FormInput
              type="email"
              value={admin.email}
              name="email"
              onChange={handleChange}
              id="email"
              label="Email"
              required
            />
            <FormInput
              type="password"
              value={admin.password}
              name="password"
              onChange={handleChange}
              id="password"
              label="Password"
              required
            />
            <CustomButton type="submit">SIGN IN</CustomButton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogInPage;
