import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import patientService from "../services/patientService";
import NavbarComponent from "./NavbarComponent";
import FooterComponent from "./FooterComponent";
import "../RegisterPatient.css";

const RegisterPatient = () => {
  const [patient, setPatient] = useState({
    firstName: "",
    lastName: "",
    contactDetails: "",
    medicalHistory: "",
    insuranceDetails: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatient((prevPatient) => ({
      ...prevPatient,
      [name]: value,
    }));
  };

  const registerPatient = (e) => {
    e.preventDefault();
    patientService
      .registerPatient(patient)
      .then(() => {
        console.log("Patient registered successfully");
        window.alert("Patient registered successfully");
        navigate("/AllPatient"); // Navigate to the desired page
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const reset = (e) => {
    e.preventDefault();
    setPatient({
      firstName: "",
      lastName: "",
      contactDetails: "",
      medicalHistory: "",
      insuranceDetails: "",
    });
  };

  const goBack = () => {
    navigate("/PatientHome"); // Navigate to the PatientHome page
  };

  return (
    <div className="body">
      <NavbarComponent />
      <div className="form-container">
        <div className="registerbox">
          <img src="images/avatar.jpg" alt="Avatar" className="avatar" />
          <h1>Register</h1>
          <form onSubmit={registerPatient}>
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
              placeholder="Enter your Email"
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
                Register
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

export default RegisterPatient;
