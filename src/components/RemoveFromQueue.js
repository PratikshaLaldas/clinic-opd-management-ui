import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import staffService from "../services/staffService";
import NavbarComponent from "./NavbarComponent";
import FooterComponent from "./FooterComponent";

const RemoveFromQueue = () => {
  const [appointmentId, setAppointmentId] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const removeFromQueue = async () => {
    try {
      await staffService.removeFromQueue(appointmentId);
      setSuccessMessage("Patient removed from queue successfully");
      window.alert("Patient removed from queue successfully");
      navigate("/AllQueueDetails");
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data === "Appointment not found") {
        setErrorMessage("Appointment not found");
        window.alert("Appointment not Found")
      } else if (error.response && error.response.data === "Queue not found") {
        window.alert(`Queue not Found for the Appointment ${appointmentId}`)
      }
    }
  };

  const handleInputChange = (e) => {
    setAppointmentId(e.target.value);
  };

  const goBack = () => {
    navigate("/AllQueueDetails"); // Navigate to the StaffHome page
  };

  const resetForm = () => {
    setAppointmentId("");
    setErrorMessage("");
    setSuccessMessage("");
  };
  return (
    <div className="body">
      <NavbarComponent />
      <div className="form-container">
        <div className="registerbox-cancel-appointment">
          <img src="images/deletequeuelogo.jpg" alt="Avatar" className="avatar" />
          <h1 >Remove From Queue</h1>
          <form>
            <p style={{textAlign:"center"}}>Appointment ID</p>
            <input
              type="text"
              value={appointmentId}
              onChange={handleInputChange}
              className="form-input"
              required
            />
            <div className="button-container">
              <button type="button" onClick={removeFromQueue} className="book-button">
                Remove
              </button>
              <button type="button" onClick={resetForm} className="clear-button">
                Reset
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

export default RemoveFromQueue;
