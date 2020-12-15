import React, { Component } from "react";
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
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
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
      email,
      password,
      confirmPassword,
    } = this.state;

    return (
      <div>
        <Header />
        <div className="admin-page">
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
