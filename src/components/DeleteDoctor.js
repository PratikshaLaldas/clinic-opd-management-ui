import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import doctorService from "../services/doctorService";
import NavbarComponent from "./NavbarComponent";
import FooterComponent from "./FooterComponent";

const DeleteDoctor = () => {
  const [doctorId, setDoctorId] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

 
 const deleteDoctor = () => {
    doctorService
      .deleteDoctor(doctorId)
      .then(() => {
        setSuccessMessage("Doctor deleted successfully");
        window.alert("Doctor deleted successfully");
        navigate("/AllDoctorInfo"); // Navigate to the desired page
      })
      .catch((error) => {
        console.log(error);
        if (
          error.response &&
          error.response.status === 404 &&
          error.response.data.message === "Doctor not found"
        ) {
          window.alert("Doctor not found"); // Display the error message in a window alert
        }
      });
  };

 {

  const handleInputChange = (e) => {
    setDoctorId(e.target.value);
  };

  const goBack = () => {
    navigate("/AllDoctorInfo"); // Navigate to the PatientHome page
  };


  return (
    <div>
      <NavbarComponent />
      <div>
        Enter Doctor ID:
        <input type="text" value={doctorId} onChange={handleInputChange} />
        <br /><br />
        <button onClick={deleteDoctor} disabled={!doctorId}>
          Delete
        </button>

        <button
            onClick={goBack}
            className="rounded text-whitefont-semibold py-2 px-6 back-button btn btn-secondary"
          >
            Back
          </button>

        {successMessage && <p>{successMessage}</p>}


      </div>
      <FooterComponent />
    </div>
  );
}
};

export default DeleteDoctor;