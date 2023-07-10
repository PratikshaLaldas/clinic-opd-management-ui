import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import patientService from "../services/patientService";
import NavbarComponent from "./NavbarComponent";
import FooterComponent from "./FooterComponent";
import "../CancelAppointment.css";


const RescheduleComponent = () => {
  const [appointmentId, setAppointmentId] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const rescheduleAppointment = async (event) => {
    event.preventDefault(); // Prevent form submission and page refresh
    try {
      const appointmentDto = { appointmentId };
      await patientService.rescheduleAppointment(appointmentDto);
      const message = `Successfully Rescheduled Appointment with Appointment Id ${appointmentId}`;
      setSuccessMessage(message);
      window.alert(message);
      navigate("/AllAppointment");
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
            src="images/reschedulelogo.png"
            alt="Avatar"
            className="avatar"
          />
          <h1 >Reschedule Appointment</h1>
          <form onSubmit={rescheduleAppointment}>
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
                Reschedule
              </button>
              <button onClick={reset} className="clear-button">
                Clear
              </button>
              <button onClick={goBack} className="back-button">
                Back
              </button>
            </div>
          </form>
          <br />
          {successMessage && <p>{successMessage}</p>}
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};

export default RescheduleComponent;
