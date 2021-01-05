import React, { Component } from "react";
import { db } from "../../firebase/firebase.utils";
import EmployeeDashboardHeader from "../../components/EmployeeDashboardHeader";

class ViewDaysRequestedPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      absenceRequestDetails: [],
    };
  }

  async componentDidMount() {
    try {
      const absenceData = await db
        .collection("users")
        .doc(`${this.props.currentUser.id}`)
        .collection("absenceRequestData")
        .orderBy("absenceStartDate")
        .get();

      const absenceCollectionData = absenceData.docs.map((doc) => doc.data());

      this.setState({
        absenceRequestDetails: absenceCollectionData,
      });
    } catch (error) {
      console.log("error is...", error.message);
    }
  }

  render() {
    console.log(
      "current user data in viewdaysrequestedpage...",
      this.props.currentUser
    );
    console.log("state data...", this.state.absenceRequestDetails);

    let sumOfNumberOfDaysOfRequested = 0;
    this.state.absenceRequestDetails.forEach((abscenceRequestDetail) => {
      sumOfNumberOfDaysOfRequested += parseInt(
        abscenceRequestDetail.numberOfDaysRequested
      );
    });

    // let sumOfRemainingNumberOfDaysOfRequested = 0;
    // sumOfRemainingNumberOfDaysOfRequested = parseInt(this.props.currentUser.vacationDaysEarned) - sumOfNumberOfDaysOfRequested;
    // console.log(sumOfRemainingNumberOfDaysOfRequested)

    return (
      <div>
        <EmployeeDashboardHeader currentUser={this.props.currentUser} />
        <h1> LIST OF DAYS REQUESTED </h1>
        {this.props.currentUser ? (
          <div>
            <h4>
              Years in the company: {this.props.currentUser.yearsInCompany}
            </h4>
            <h4>
              Vacation Days earned: {this.props.currentUser.vacationDaysEarned}
            </h4>
            <h4>
              Total Number of Days requested: {sumOfNumberOfDaysOfRequested}
            </h4>
            <h4>
              Remaining Number of Days:
              {parseInt(this.props.currentUser.vacationDaysEarned) -
                sumOfNumberOfDaysOfRequested}
            </h4>

            {this.state.absenceRequestDetails.map((absenceData, index) => (
              <div key={index}>
                <hr />
                <br />
                <h4>
                  {" "}
                  Type of Absence Requested: {absenceData.typeOfAbsenceRequest}
                </h4>
                <h4>
                  Number of days requested: {absenceData.numberOfDaysRequested}
                </h4>
                <h4>Absence Start Date: {absenceData.absenceStartDate} </h4>
                <h4>Absence End Date: {absenceData.absenceEndDate} </h4>
                <h4>Date of Return: {absenceData.dateOfReturn} </h4>
                <h4>Date of Request: {absenceData.dateOfVacationRequest} </h4>
                <hr />
              </div>
            ))}
          </div>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    );
  }
}

export default ViewDaysRequestedPage;
