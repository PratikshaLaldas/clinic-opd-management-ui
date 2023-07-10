import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import patientService from "../services/patientService";
import NavbarComponent from "./NavbarComponent";
import FooterComponent from "./FooterComponent";
import "../Bookappointment.css";

const AddAppointment = () => {
  const [appointment, setAppointment] = useState({
    patientId: "",
    doctorId: "",
    appointmentDate: "",
    appointmentTime: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setAppointment((prevAppointment) => ({
      ...prevAppointment,
      [name]: value,
    }));
  };

  const convertToDate = (dateString) => {
    const [day, month, year] = dateString.split("-");
    return `${year}-${month}-${day}`;
  };

  const addAppointment = (e) => {
    e.preventDefault();
    patientService
      .addAppointment(appointment)
      .then(() => {
        console.log("Appointment added successfully");
        window.alert("Appointment Booked Successfully!");
        navigate("/AllAppointment"); // Navigate to the desired page
      })
      .catch((error) => {
        console.log(error);
        if (
          error.response &&
          error.response.status === 404 &&
          error.response.data.message === "Patient not found"
        ) {
          window.alert("Patient not found. Please Register"); // Display the error message in a window alert
        } else if (
          error.response &&
          error.response.status === 404 &&
          error.response.data.message === "Doctor not found"
        ) {
          window.alert("Doctor not found");
        }
      });
  };

  const reset = (e) => {
    e.preventDefault();
    setAppointment({
      patientId: "",
      doctorId: "",
      appointmentDate: "",
      appointmentTime: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointment(e);
  };

  const goBack = () => {
    navigate("/PatientHome"); // Navigate to the PatientHome page
  };
  return (
    <div className="body">
      <NavbarComponent/>
      <div className="form-container">
        <div className="registerbox-appointment">
        <img src="images/appointmentlogo.jpg" alt="Avatar" className="avatar" />
          <h1>Book Appointment</h1>
          <form onSubmit={handleSubmit}>
            <p>Patient ID</p>
            <input
              type="text"
              name="patientId"
              value={appointment.patientId}
              onChange={handleChange}
              className="form-input"
              required
            />
            <p>Doctor Name</p>
            <select
              name="doctorId"
              value={appointment.doctorId}
              onChange={handleChange}
              className="form-select"
              required
            >
              <option value="">Select Doctor</option>
              <option value="1">Dr. Smith Johnson (Oncologist)</option>
              <option value="2">Dr. Emily Davis (Neurologist)</option>
              <option value="3">Dr. Robert Wilson (Pulmonologist)</option>
              <option value="4">Dr. Lisa Miller (Endocrinologist)</option>
              <option value="5">Dr. Shivani Soni (Opthalmology)</option>
              <option value="6">Dr. Akash Kumar (Dermatology)</option>
              <option value="7">Dr. Meera Naik (Orthopedic)</option>
              
            </select>
            <p>Appointment Date</p>
            <input
              type="date"
              name="appointmentDate"
              value={appointment.appointmentDate}
              onChange={handleChange}
              className="form-input"
              required
            />
            <p>Appointment Time</p>
            <select
              name="appointmentTime"
              value={appointment.appointmentTime}
              onChange={handleChange}
              className="form-select"
              required
            >
              <option value="">Select Time</option>
              <option value="09:00:00">09:00:00</option>
              <option value="09:15:00">09:15:00</option>
              <option value="10:00:00">10:00:00</option>
              <option value="10:15:00">10:15:00</option>
              <option value="11:15:00">11:15:00</option>
              <option value="01:00:00">01:00:00</option>
              <option value="02:00:00">02:00:00</option>
              <option value="03:00:00">03:00:00</option>
              <option value="03:15:00">03:15:00</option>
              <option value="07:00:00">07:00:00</option>
              <option value="07:15:00">07:15:00</option>
              
            </select>
            <div className="button-container">
              <button
                type="submit"
                className="book-button"
              >
                Book
              </button>
              <button
                onClick={reset}
                className="clear-button"
              >
                Clear
              </button>
              <button
                onClick={goBack}
                className="back-button"
              >
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


export default AddAppointment;
