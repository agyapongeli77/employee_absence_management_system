import React, { Component } from "react";
import {
  auth,
  createUserAbsenceRequestDocument,
} from "../firebase/firebase.utils";
import "../styles/AbsenceRequestPage.scss";
import FormInput from "../components/FormInput";
import CustomButton from "../components/CustomButton";
import DashboardHeader from "../components/DashboardHeader";

class AbsenceRequestPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      typeOfAbsenceRequest: "",
      numberOfDaysRequested: "",
      absenceStartDate: "",
      absenceEndDate: "",
      dateOfReturn: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const {
      typeOfAbsenceRequest,
      numberOfDaysRequested,
      absenceStartDate,
      absenceEndDate,
      dateOfReturn,
    } = this.state;

    try {
      await createUserAbsenceRequestDocument(auth.currentUser, {
        typeOfAbsenceRequest,
        numberOfDaysRequested,
        absenceStartDate,
        absenceEndDate,
        dateOfReturn,
      });

      this.setState({
        typeOfAbsenceRequest: "",
        numberOfDaysRequested: "",
        absenceStartDate: "",
        absenceEndDate: "",
        dateOfReturn: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const {
      typeOfAbsenceRequest,
      numberOfDaysRequested,
      absenceStartDate,
      absenceEndDate,
      dateOfReturn,
    } = this.state;

    console.log("currentuser from auth.currentuser is...", auth.currentUser);
    console.log("absence request currentuser props...", this.props);

    return (
      <div className="absence-page-container">
        <DashboardHeader currentUser={this.props.currentUser} />
        <div className="absence-page-main">
          <h2 className="title">Absence Request Form</h2>
          <div className="absence-page-form-container">
            <form onSubmit={this.handleSubmit}>
              <select
                name="typeOfAbsenceRequest"
                value={typeOfAbsenceRequest}
                onChange={this.handleChange}
                required
              >
                <option value="nothing">
                  Please select type of absence request
                </option>
                <option value="Sick Day">Sick Day</option>
                <option value="Personal Day">Personal Day</option>
                <option value="Vacation">Vacation</option>
                <option value="Bereavement">Bereavement</option>
              </select>

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
                name="dateOfReturn"
                value={dateOfReturn}
                onChange={this.handleChange}
                label="Returning Date:"
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
