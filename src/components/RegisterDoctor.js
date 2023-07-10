import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import doctorService from "../services/doctorService";
import "../RegisterDoctor.css";
import NavbarComponent from "./NavbarComponent";
import FooterComponent from "./FooterComponent";

const RegisterDoctor = () => {
  const [doctor, setDoctor] = useState({
    firstName: "",
    lastName: "",
    contactDetails: "",
    specialization: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctor((prevDoctor) => ({
      ...prevDoctor,
      [name]: value,
    }));
  };

  const registerDoctor = (e) => {
    e.preventDefault();
    doctorService.registerDoctor(doctor)
      .then(() => {
        console.log("Doctor registered successfully");
        window.alert("Doctor registered successfully");
        navigate("/AllDoctorInfo"); // Navigate to the desired page
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const reset = (e) => {
    e.preventDefault();
    setDoctor({
      firstName: "",
      lastName: "",
      contactDetails: "",
      specialization: "",
    });
  };

  const goBack = () => {
    navigate("/DoctorHome"); // Navigate to the DoctorHome page
  };

  return (
    <div className="body">
      <NavbarComponent />
      <div className="form-container">
        <div className="registerbox-doctor">
          <img src="images/avatar.jpg" alt="Avatar" className="avatar" />
          <h1>Register Doctor</h1>
          <form onSubmit={registerDoctor}>
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
              placeholder="Enter your Email"
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
      <FooterComponent/>
    </div>
  );
};

export default RegisterDoctor;
