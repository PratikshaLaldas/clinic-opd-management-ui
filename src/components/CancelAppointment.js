import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import patientService from "../services/patientService";
import NavbarComponent from "./NavbarComponent";
import FooterComponent from "./FooterComponent";
import "../CancelAppointment.css";
const CancelAppointment = ({ onAppointmentCancelled }) => {
  const [appointmentId, setAppointmentId] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const cancelAppointment = async (event) => {
    event.preventDefault(); // Prevent form submission and page refresh
    try {
      const appointmentDto = { appointmentId };
      await patientService.cancelAppointment(appointmentDto);
      const message = `Successfully Cancelled Appointment for Appointment Id ${appointmentId}`;
      setSuccessMessage(message);
      onAppointmentCancelled();
    } catch (error) {
      console.log(error);
      if (
        error.response &&
        error.response.status === 404 &&
        error.response.data.message === "Appointment not found"
      ) {
        window.alert("Appointment not found"); // Display the error message in a window alert
      }
    }
  };

  const handleInputChange = (e) => {
    setAppointmentId(e.target.value);
  };

  const goBack = () => {
    navigate("/AllAppointment"); // Navigate to the PatientHome page
  };

  const reset = () => {
    setAppointmentId("");
  };
  

  return (
    <div className="body">
      <NavbarComponent />
      <div className="form-container">
        <div className="registerbox-cancel-appointment">
          <img
            src="images/cancelappointmentlogo.jpg"
            alt="Avatar"
            className="avatar"
          />
          <h1>Cancel Appointment</h1>
          <form onSubmit={cancelAppointment}>
            <p style={{textAlign:"center"}}>Appointment ID</p>
            <input
              type="text"
              value={appointmentId}
              onChange={handleInputChange}
              className="form-input"
              required
            />
            <div className="button-container">
              <button type="submit" className="book-button">
                Cancel
              </button>
              <button onClick={reset} className="clear-button">
                Clear
              </button>
              <button onClick={goBack} className="back-button">
                Back
              </button>
            </div>
          </form>
          <br/>
          {successMessage && <p>{successMessage}</p>}
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};

export default CancelAppointment;
