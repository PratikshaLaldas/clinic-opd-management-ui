import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import patientService from "../services/patientService";
import FooterComponent from "./FooterComponent";
import NavbarComponent from "./NavbarComponent";

const StaffAllAppointment = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = () => {
    patientService
      .viewPatientAppointment()
      .then((response) => {
        setAppointments(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navigate = useNavigate();

  const goBack = () => {
    navigate("/StaffHome"); // Navigate to the PatientHome page
  };



  return (
    <div>
    <NavbarComponent /><br/>
    <h3 className="patientHome-h3">Appointments Details</h3>
    <div className="table-container">
      {appointments.length === 0 ? (
        <p>No appointments found.</p>
      ) : (
        <table className="table table-striped table-allappointment">
          <thead className="table-centre">
            <tr>
              <th>Appointment ID</th>
              <th>Patient ID</th>
              <th>Doctor ID</th>
              <th>Appointment Date</th>
              <th>Appointment Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment.appointmentId}>
                <td>{appointment.appointmentId}</td>
                <td>{appointment.patientId}</td>
                <td>{appointment.doctorId}</td>
                <td>{appointment.appointmentDate}</td>
                <td>{appointment.appointmentTime}</td>
                <td>{appointment.status}</td>
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
    <FooterComponent/>
    </div>
  );
};

export default StaffAllAppointment;
