import React, { Component } from "react";
import { auth, createUserProfileDocument } from "../firebase/firebase.utils";
import FormInput from "../components/FormInput";
import CustomButton from "../components/CustomButton";
import "../styles/AdminPage.scss";
import Header from "../components/Header";

class AdminPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: "",
      department: "",
      supervisor: "",
      office: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const {
      fullName,
      department,
      supervisor,
      office,
      email,
      password,
      confirmPassword,
    } = this.state;

    if (password !== confirmPassword) {
      alert("password don't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, {
        fullName,
        department,
        supervisor,
        office,
      });

      //auth.signOut();

      this.setState({
        fullName: "",
        department: "",
        supervisor: "",
        office: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error);
    }

    //this sign out is called to prevent the default behaviour of
    //firebase authentication which keeps the user signed in after the account
    //has been created
    auth.signOut();
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const {
      fullName,
      department,
      supervisor,
      office,
      email,
      password,
      confirmPassword,
    } = this.state;

    return (
      <div className="admin-page-container">
        <Header />
        <div className="admin-page-main">
          <h2 className="title"> Admin Page</h2>
          <div className="admin-page-form-container">
            <span>Create account for employees in your department</span>
            <form onSubmit={this.handleSubmit}>
              <FormInput
                type="text"
                name="fullName"
                value={fullName}
                onChange={this.handleChange}
                label="Employee's Full Name"
                required
              />
              <FormInput
                type="text"
                name="department"
                value={department}
                onChange={this.handleChange}
                label="Employee's Department"
                required
              />
              <FormInput
                type="text"
                name="supervisor"
                value={supervisor}
                onChange={this.handleChange}
                label="Employee's Supervisor"
                required
              />
              <FormInput
                type="text"
                name="office"
                value={office}
                onChange={this.handleChange}
                label="Office (e.g. Colorado Office, NY Office)"
                required
              />
              <FormInput
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                label="Email"
                required
              />
              <FormInput
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
                label="Password"
                required
              />
              <FormInput
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={this.handleChange}
                label="Confirm Password"
                required
              />
              <CustomButton type="submit">CREATE ACCOUNT</CustomButton>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminPage;
