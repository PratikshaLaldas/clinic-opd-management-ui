import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import patientService from "../services/patientService";
import NavbarComponent from "./NavbarComponent";
import FooterComponent from "./FooterComponent";

const DeleteAppointment = () => {
  const [appointmentId, setAppointmentId] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate(); 

  const deleteAppointment = async () => {
    try {
      await patientService.deleteAppointment(appointmentId);
      window.alert("Appointment deleted successfully");
      navigate("/AllAppointment")
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

  return (
    <div>
      <NavbarComponent />
      <div>
        Enter Appointment ID:
        <input type="text" value={appointmentId} onChange={handleInputChange} />
        <br /><br />
        <button onClick={deleteAppointment} disabled={!appointmentId}>
          Delete
        </button>
        <button
          onClick={goBack}
          className="rounded text-white font-semibold py-2 px-6 back-button btn btn-secondary"
        >
          Back
        </button>
      </div>
      <FooterComponent />
    </div>
  );
};

export default DeleteAppointment;
