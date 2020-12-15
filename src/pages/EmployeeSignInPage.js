import React, { Component } from "react";
import "../styles/EmployeeSignInPage.css";

class EmployeeSignInPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  render() {
    return (
      <div className="employee-sign-in-page">
        <h1 className="title">Employee Absence Management System</h1>
        <form className="sign-in-page-form">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={this.state.email}
            placeholder="Enter your work email"
            id="email"
            onChange={this.handleChange}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            placeholder="Enter your password"
            onChange={this.handleChange}
            required
          />
          <input type="submit" value="Sign In" />
        </form>
      </div>
    );
  }
}

export default EmployeeSignInPage;
