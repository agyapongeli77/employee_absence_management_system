import React, { Component } from "react";
import "../../styles/EmployeeSignInPage.scss";
import { auth } from "../../firebase/firebase.utils";
import { withRouter } from "react-router-dom";
import FormInput from "../../components/FormInput";
import CustomButton from "../../components/CustomButton";
import Header from "../../components/Header";

class EmployeeSignInPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });

      //sends the user to the profile page when sign is successful
      //react router withRouter High Order Component(HOC) makes it possible
      //to access the history prop in this component
      this.props.history.push("/profile");
    } catch (error) {
      console.log("error signing in", error);
      alert("Incorrect email or password");
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <Header />
        <div className="employee-sign-in-page">
          <h1 className="title">Employee Absence Management System</h1>
          <div className="sign-in-page-form-container">
            <h2 className="sub-title">Employee Sign In</h2>
            <span>Please log in with your work email</span>
            <form onSubmit={this.handleSubmit}>
              <FormInput
                type="email"
                value={this.state.email}
                name="email"
                onChange={this.handleChange}
                id="email"
                label="Email"
                required
              />
              <FormInput
                type="password"
                value={this.state.password}
                name="password"
                onChange={this.handleChange}
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
  }
}

export default withRouter(EmployeeSignInPage);
