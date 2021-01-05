import React, { Component } from "react";
import { db } from "../../firebase/firebase.utils";
import AdminDashboardHeader from "../../components/AdminDashboardHeader";

class ViewAllEmployeesDaysRequestedPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      absenceRequestDetails: [],
    };
  }

  async componentDidMount() {
    try {
      const absenceData = await db
        .collectionGroup("absenceRequestData")
        .orderBy("fullName")
        .get();

      const absenceCollectionData = absenceData.docs.map((doc) => doc.data());

      this.setState({
        absenceRequestDetails: absenceCollectionData,
      });
    } catch (error) {
      console.log("error is...", error);
    }
  }

  render() {
    console.log(
      "current user data in viewallemployeesdaysrequestedpage...",
      this.props.currentUser
    );
    console.log("state data...", this.state.absenceRequestDetails);

    return (
      <div>
        <AdminDashboardHeader />
        <h1>VIEW ALL EMPLOYEES VACATION DAYS</h1>
        {this.props.currentUser ? (
          this.state.absenceRequestDetails.map((absenceData, index) => (
            <div key={index}>
              <hr />
              <br />
              <h4>Employee's Name: {absenceData.fullName}</h4>
              <h4>Employee's Office: {absenceData.office}</h4>
              <h4>Employee's Department: {absenceData.department}</h4>

              <h4>
                Type of Absence Requested: {absenceData.typeOfAbsenceRequest}
              </h4>
              <h4>
                Number of days requested: {absenceData.numberOfDaysRequested}{" "}
              </h4>
              <h4>Absence Start Date: {absenceData.absenceStartDate} </h4>
              <h4>Absence End Date: {absenceData.absenceEndDate} </h4>
              <h4>Date of Return: {absenceData.dateOfReturn} </h4>
              <hr />
            </div>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
        <h1> {this.state.absenceEndDate}</h1>
      </div>
    );
  }
}

export default ViewAllEmployeesDaysRequestedPage;
