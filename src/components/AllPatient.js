import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import patientService from "../services/patientService";
import NavbarComponent from "./NavbarComponent";
import FooterComponent from "./FooterComponent";
import "../Patient.css";

const AllPatient = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = () => {
    patientService
      .getAllPatients()
      .then((response) => {
        setPatients(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navigate = useNavigate();

  const goBack = () => {
    navigate("/PatientHome"); // Navigate to the DoctorHome page
  };

  const handleUpdateSchedule = () => {
    navigate("/UpdatePatient"); // Navigate to the UpdateSchedule page
  };

  return (
    <div>
      <NavbarComponent /> <br/>
      <h3 className="patientHome-h3">Patient Details</h3>
      <div className="table-container">
        {patients.length === 0 ? (
          <p>No patients found.</p>
        ) : (
          <table className="table table-sm table-striped">
            <thead className="table-centre">
              <tr>
                <th>Patient ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Contact Details</th>
                <th>Medical History</th>
                <th>Insurance Details</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient) => (
                <tr key={patient.patientId}>
                  <td >{patient.patientId}</td>
                  <td>{patient.firstName}</td>
                  <td >{patient.lastName}</td>
                  <td>{patient.contactDetails}</td>
                  <td>{patient.medicalHistory}</td>
                  <td>{patient.insuranceDetails}</td>
                  <td>
                  <button
                      onClick={handleUpdateSchedule}
                      className="button-link update-message"
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
       
      </div>
      <button
          onClick={goBack}
          className="btn message"
        >
          Back
        </button>
      <FooterComponent />
    </div>
  );
};

export default AllPatient;