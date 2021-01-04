import React, { Component } from "react";
import firebase, { auth, db } from "../firebase/firebase.utils";
import EmployeeDashboardHeader from "../components/EmployeeDashboardHeader";

class ViewDaysRequestedPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      absenceRequestData: [
        {
          absenceStartDate: "",
          absenceEndDate: "",
          dateOfReturn: "",
          numberOfDaysRequested: "",
          typeOfAbsenceRequest: "",
        },
      ],
      absence: [],
    };
  }

  //   async componentDidUpdate() {
  //     if (auth.currentUser) {
  //       const absenceData = await db
  //         .collection("users")
  //         .doc(`${auth.currentUser.uid}`)
  //         .collection("absenceRequestData")
  //         .get();

  //       //console.log(absenceData.forEach((data) => console.log(data.data())));
  //       //console.log(absenceData.docs.map((doc) => doc.data()));
  //       const absenceCollectionData = absenceData.docs.map((doc) => doc.data());

  //       console.log("data is....", absenceCollectionData);
  //     }
  //   }

  async componentDidMount() {
    try {
      const data = [];
      if (this.props.currentUser) {
        db.collectionGroup("absenceRequestData")
          .where("fullName", "==", "Susan Ana")
          .get()
          .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
              // doc.data() is never undefined for query doc snapshots
              //console.log("Doc data is....", doc.data());
              data.push(doc.data());
            });
            console.log(data);
          })
          .catch(function (error) {
            console.log("Error getting documents: ", error);
          });

        const absenceData = await db
          .collection("users")
          .doc(`${auth.currentUser.uid}`)
          .collection("absenceRequestData")
          .orderBy("absenceStartDate")
          .get();

        //console.log(absenceData.forEach((data) => console.log(data.data())));
        //console.log(absenceData.docs.map((doc) => doc.data()));
        const absenceCollectionData = absenceData.docs.map((doc) => doc.data());

        //   console.log("DOCS ID...", absenceCollectionData);

        this.setState({
          absence: absenceCollectionData,
        });

        //console.log(this.state.absenceEndDate);
      }
    } catch (error) {
      console.log("error is...", error);
    }
  }

  render() {
    console.log(
      "current user data in viewdaysrequestedpage...",
      this.props.currentUser
    );
    console.log("state data...", this.state.absence);

    // db.collectionGroup("users")
    //   .where("fullName", "==", "kofi")
    //   .get()
    //   .then(function (querySnapshot) {
    // querySnapshot.forEach(function (doc) {
    //   // doc.data() is never undefined for query doc snapshots
    //   console.log("Doc data is....", doc.data());
    // });
    //   })
    //   .catch(function (error) {
    //     console.log("Error getting documents: ", error);
    //   });

    return (
      <div>
        <EmployeeDashboardHeader currentUser={this.props.currentUser} />
        <h1> LIST OF DAYS REQUESTED </h1>
        {this.props.currentUser &&
          this.state.absence.map((absenceData, index) => (
            <div key={index}>
              <hr />
              <h4>
                {`At index: ${index + 1}`}
                <br />
                Type of Absence Requested: {absenceData.typeOfAbsenceRequest}
              </h4>
              <h4>
                Number of days requested: {absenceData.numberOfDaysRequested}
              </h4>
              <h4>Absence Start Date: {absenceData.absenceStartDate} </h4>
              <h4>Absence End Date: {absenceData.absenceEndDate} </h4>
              <h4>Date of Return: {absenceData.dateOfReturn} </h4>
              <hr />
            </div>
          ))}
        <h1> {this.state.absenceEndDate}</h1>
      </div>
    );
  }
}

export default ViewDaysRequestedPage;
