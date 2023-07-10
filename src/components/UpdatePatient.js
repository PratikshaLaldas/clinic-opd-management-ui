import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import patientService from "../services/patientService";
import "../RegisterPatient.css";
import NavbarComponent from "./NavbarComponent";
import FooterComponent from "./FooterComponent";
import "../UpdatePatient.css";

const UpdatePatient = () => {
  const [patientId, setPatientId] = useState("");
  const [patient, setPatient] = useState({
    firstName: "",
    lastName: "",
    contactDetails: "",
    medicalHistory: "",
    insuranceDetails: "",
  });

  const navigate = useNavigate();

  const handleIdChange = (e) => {
    setPatientId(e.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatient((prevPatient) => ({
      ...prevPatient,
      [name]: value,
    }));
  };

  const updatePatient = (e) => {
    e.preventDefault();
    const { firstName, lastName, contactDetails, medicalHistory, insuranceDetails } = patient;
    const patientDto = {
      firstName,
      lastName,
      contactDetails,
      medicalHistory,
      insuranceDetails,
    };
    patientService
      .updatePatient(patientId, patientDto)
      .then(() => {
        console.log("Patient details updated successfully");
        window.alert("Patient details updated successfully");
        navigate("/AllPatient"); // Navigate to the desired page
      })
      .catch((error) => {
        console.log(error);
        if (
          error.response &&
          error.response.status === 404 &&
          error.response.data.message === "Patient not found"
        ) {
          window.alert("Patient not found"); // Display the error message in a window alert
        }
      });
  };

  const reset = (e) => {
    e.preventDefault();
    setPatientId("");
    setPatient({
      firstName: "",
      lastName: "",
      contactDetails: "",
      medicalHistory: "",
      insuranceDetails: "",
    });
  };

  const goBack = () => {
    navigate("/AllPatient"); // Navigate to the PatientHome page
  };

  return (
    <div className="body">
      <NavbarComponent />
      <div className="form-container">
        <div className="registerbox-update-patient">
          <img src="images/updatelogo.jpg" alt="Avatar" className="avatar" />
          <h1>Update Patient</h1>
          <form onSubmit={updatePatient}>
            <p>Patient ID</p>
            <input
              type="text"
              value={patientId}
              onChange={handleIdChange}
              placeholder="Enter Patient ID"
              required
            />
            <p>First Name</p>
            <input
              type="text"
              name="firstName"
              value={patient.firstName}
              onChange={handleChange}
              placeholder="Enter First Name"
              required
            />
            <p>Last Name</p>
            <input
              type="text"
              name="lastName"
              value={patient.lastName}
              onChange={handleChange}
              placeholder="Enter Last Name"
              required
            />
            <p>Contact Details</p>
            <input
              type="email"
              name="contactDetails"
              value={patient.contactDetails}
              onChange={handleChange}
              placeholder="Enter Contact Details"
              required
            />
            <p>Medical History</p>
            <input
              type="text"
              name="medicalHistory"
              value={patient.medicalHistory}
              onChange={handleChange}
              placeholder="Enter Medical History"
              required
            />
            <p>Insurance Details</p>
            <select
              type="text"
              name="insuranceDetails"
              value={patient.insuranceDetails}
              onChange={handleChange}
              className="form-select"
              required
            >
              <option value="">Select Insurance Type</option>
              <option value="Aetna Insurance">Aetna Insurance</option>
              <option value="Allstate Insurance">Allstate Insurance</option>
              <option value="Global Health Insurance">Global Health Insurance</option>
              <option value="Liberty Mutual Insurance">Liberty Mutual Insurance</option>
              <option value="United Insurance">United Insurance</option>
            </select> 
            <div className="button-container">
              <button type="submit" className="register-button">
                Update
              </button>
              <button onClick={reset} className="clear-button">
                Clear
              </button>
              <button onClick={goBack} className="back-button">
                Back
              </button>
            </div>
          </form>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};

export default UpdatePatient;