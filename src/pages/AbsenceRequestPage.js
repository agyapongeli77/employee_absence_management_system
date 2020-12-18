import React, { Component } from "react";
import "../styles/AbsenceRequestPage.scss";
import FormInput from "../components/FormInput";
import CustomButton from "../components/CustomButton";
import DashboardHeader from "../components/DashboardHeader";

class AbsenceRequestPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employeeName: "",
      department: "",
      supervisor: "",
      office: "",
      typeOfAbsenceRequest: "",
      numberOfDaysRequested: "",
      absenceStartDate: "",
      absenceEndDate: "",
      dateOfReturn: "",
    };
  }

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const {
      employeeName,
      department,
      supervisor,
      office,
      typeOfAbsenceRequest,
      numberOfDaysRequested,
      absenceStartDate,
      absenceEndDate,
      dateOfReturn,
    } = this.state;

    console.log("absence request currentuser props...", this.props);

    return (
      <div className="absence-page-container">
        <DashboardHeader currentUser={this.props.currentUser} />
        <div className="absence-page-main">
          <h2 className="title">Absence Request Form</h2>
          <div className="absence-page-form-container">
            <form onSubmit={this.handleSubmit}>
              <FormInput
                type="text"
                name="employeeName"
                value={employeeName}
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
                label="Office"
                required
              />
              <FormInput
                type="select"
                name="option"
                value={typeOfAbsenceRequest}
                onChange={this.handleChange}
                label="Type Of Absence Request"
                required
              />
              <FormInput
                type="number"
                name="numberOfDaysRequested"
                value={numberOfDaysRequested}
                onChange={this.handleChange}
                label="How many days?"
                required
              />
              <FormInput
                type="date"
                name="absenceStartDate"
                value={absenceStartDate}
                onChange={this.handleChange}
                label="Absence Start Date:"
                required
              />
              <FormInput
                type="date"
                name="absenceEndDate"
                value={absenceEndDate}
                onChange={this.handleChange}
                label="Absence End Date:"
                required
              />
              <FormInput
                type="date"
                name="absenceEndDate"
                value={dateOfReturn}
                onChange={this.handleChange}
                label="Returning Date: "
                required
              />

              <CustomButton type="submit">SUBMIT</CustomButton>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AbsenceRequestPage;
