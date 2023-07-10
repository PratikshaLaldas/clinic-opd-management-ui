import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import doctorService from "../services/doctorService";
import NavbarComponent from "./NavbarComponent";
import FooterComponent from "./FooterComponent";

const UpdateDoctor = () => {
  const [doctorId, setDoctorId] = useState("");
  const [doctor, setDoctor] = useState({
    firstName: "",
    lastName: "",
    contactDetails: "",
    specialization: "",
  });

  const navigate = useNavigate();

  const handleIdChange = (e) => {
    setDoctorId(e.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctor((prevDoctor) => ({
      ...prevDoctor,
      [name]: value,
    }));
  };

  const updateDoctor = (e) => {
    e.preventDefault();
    const { firstName, lastName, contactDetails, specialization } = doctor;
    const doctorDto = {
      firstName,
      lastName,
      contactDetails,
      specialization,
    };
    doctorService
      .updateDoctor(doctorId, doctorDto)
      .then(() => {
        console.log("Doctor details updated successfully");
        window.alert("Doctor details updated successfully");
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

  const reset = (e) => {
    e.preventDefault();
    setDoctorId("");
    setDoctor({
      firstName: "",
      lastName: "",
      contactDetails: "",
      specialization: "",
    });
  };

  const goBack = () => {
    navigate("/AllDoctorInfo"); // Navigate to the DoctorHome page
  };

  return (
    <div className="body">
      <NavbarComponent />
      <div className="form-container">
        <div className="registerbox-update-patient">
          <img src="images/updatelogo.jpg" alt="Avatar" className="avatar" />
          <h1>Update Doctor</h1>
          <form onSubmit={updateDoctor}>
            <p>Doctor ID</p>
            <input
              type="text"
              value={doctorId}
              onChange={handleIdChange}
              placeholder="Enter Doctor ID"
              required
            />
            <p>First Name</p>
            <input
              type="text"
              name="firstName"
              value={doctor.firstName}
              onChange={handleChange}
              placeholder="Enter First Name"
              required
            />
            <p>Last Name</p>
            <input
              type="text"
              name="lastName"
              value={doctor.lastName}
              onChange={handleChange}
              placeholder="Enter Last Name"
              required
            />
            <p>Contact Details</p>
            <input
              type="email"
              name="contactDetails"
              value={doctor.contactDetails}
              onChange={handleChange}
              placeholder="Enter Contact Details"
              required
            />
            <p>Specialization</p>
            <select
              type="text"
              name="specialization"
              value={doctor.specialization}
              onChange={handleChange}
              placeholder="Enter Specialization"
              required
            >
            <option value="">Select Specialization</option>
            <option value="Oncologist">Oncologist</option>
            <option value="Neurologists">Neurologists</option>
            <option value="Pulmonologists">Pulmonologists</option>
            <option value="Endocrinologists">Endocrinologists</option>
            <option value="Ophthalmology">Ophthalmology</option>
            <option value="Dermatology">Dermatology</option>
            <option value="Orthopedics">Orthopedics</option>
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


export default UpdateDoctor;
