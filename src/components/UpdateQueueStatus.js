import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import staffService from "../services/staffService";
import NavbarComponent from "./NavbarComponent";
import FooterComponent from "./FooterComponent";

const UpdateQueueStatus = () => {
  const [appointmentId, setAppointmentId] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const updateQueueStatus = async () => {
    
    try {
      await staffService.updateQueueStatus(appointmentId);
      setSuccessMessage("Queue status updated successfully");
      window.alert("Queue status updated successfully");
      navigate("/AllQueueDetails");
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data === "Queue not found") {
        window.alert(`Queue not found for Appointment ${appointmentId}`);
      } else if (error.response && error.response.data === "Appointment not found") {
        window.alert(`Appointment not found for appointment Id ${appointmentId}`);
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
    setSuccessMessage("");
  };

  return (
    <div className="body">
      <NavbarComponent />
      <div className="form-container">
        <div className="registerbox-cancel-appointment">
          <img src="images/updatelogo.jpg" alt="Avatar" className="avatar" />
          <h1>Update Queue Status</h1>
          <form>
            <p style={{ textAlign: "center" }}>Appointment ID</p>
            <input
              type="text"
              value={appointmentId}
              onChange={handleInputChange}
              className="form-input"
              required
            />
            <div className="button-container">
              <button type="button" onClick={updateQueueStatus} className="book-button">
                Update
              </button>
              <button type="button" onClick={resetForm} className="clear-button">
                Reset
              </button>
              <button onClick={goBack} className="back-button">
                Back
              </button>
            </div>
          </form>
          {successMessage && <p>{successMessage}</p>}
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};

export default UpdateQueueStatus;
