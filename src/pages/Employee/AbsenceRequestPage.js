import React, { useState } from "react";
import {
  auth,
  createUserAbsenceRequestDocument,
} from "../../firebase/firebase.utils";
import "../../styles/AbsenceRequestPage.scss";
import FormInput from "../../components/FormInput";
import CustomButton from "../../components/CustomButton";
import EmployeeDashboardHeader from "../../components/EmployeeDashboardHeader";

const AbsenceRequestPage = (props) => {
  const [absenceData, setAbsenceData] = useState({
    typeOfAbsenceRequest: "",
    numberOfDaysRequested: "",
    absenceStartDate: "",
    absenceEndDate: "",
    dateOfReturn: "",
    dateOfVacationRequest: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    //destructing these variables from the absenceData state object
    const {
      typeOfAbsenceRequest,
      numberOfDaysRequested,
      absenceStartDate,
      absenceEndDate,
      dateOfReturn,
      dateOfVacationRequest,
    } = absenceData;

    //adding the following profile details from the users firestore db collection docs
    //into the absenceRequestData firestore db collection docs
    const fullName = props.currentUser.fullName;
    const office = props.currentUser.office;
    const department = props.currentUser.department;
    const supervisor = props.currentUser.supervisor;

    try {
      await createUserAbsenceRequestDocument(auth.currentUser, {
        fullName,
        office,
        department,
        supervisor,
        typeOfAbsenceRequest,
        numberOfDaysRequested,
        absenceStartDate,
        absenceEndDate,
        dateOfReturn,
        dateOfVacationRequest,
      });

      setAbsenceData({
        typeOfAbsenceRequest: "",
        numberOfDaysRequested: "",
        absenceStartDate: "",
        absenceEndDate: "",
        dateOfReturn: "",
        dateOfVacationRequest: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setAbsenceData({ ...absenceData, [name]: value });
  };

  return (
    <div className="absence-page-container">
      <EmployeeDashboardHeader currentUser={props.currentUser} />
      <div className="absence-page-main">
        <h2 className="title">Absence Request Form</h2>
        <div className="absence-page-form-container">
          <form onSubmit={handleSubmit}>
            <select
              name="typeOfAbsenceRequest"
              value={absenceData.typeOfAbsenceRequest}
              onChange={handleChange}
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
              value={absenceData.numberOfDaysRequested}
              onChange={handleChange}
              label="How many days?"
            />
            <FormInput
              type="date"
              name="absenceStartDate"
              value={absenceData.absenceStartDate}
              onChange={handleChange}
              label="Absence Start Date:"
            />
            <FormInput
              type="date"
              name="absenceEndDate"
              value={absenceData.absenceEndDate}
              onChange={handleChange}
              label="Absence End Date:"
            />
            <FormInput
              type="date"
              name="dateOfReturn"
              value={absenceData.dateOfReturn}
              onChange={handleChange}
              label="Returning Date:"
            />
            <FormInput
              type="date"
              name="dateOfVacationRequest"
              value={absenceData.dateOfVacationRequest}
              onChange={handleChange}
              label="Date of Vacation Request:"
            />
            <CustomButton type="submit">SUBMIT</CustomButton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AbsenceRequestPage;
