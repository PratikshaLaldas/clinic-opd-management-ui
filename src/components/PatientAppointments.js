import React, { useEffect, useState } from "react";
import patientService from "../services/patientService";
import { useNavigate } from "react-router-dom";
import FooterComponent from "./FooterComponent";
import NavbarComponent from "./NavbarComponent";

const PatientAppointments = () => {
  const [loading, setLoading] = useState(true);
  const [patientId, setPatientId] = useState("");
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setPatientId(e.target.value);
  };

  const fetchAppointments = async (patientId) => {
    setLoading(true);
    try {
      const response = await patientService.viewPatientAppointments(patientId);
      setAppointments(response.data);
    } catch (error) {
      console.log(error);
      if (
        error.response &&
        error.response.status === 404 &&
        error.response.data.message === "Appointment not found"
      ) {
        window.alert("Appointment not found");
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    if (patientId) {
      fetchAppointments(patientId);
    }
  }, [patientId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (patientId) {
      fetchAppointments(patientId);
    }
  };

  const goBack = () => {
    navigate("/PatientHome"); // Navigate to the PatientHome page
  };

  return (
    <div>
      <NavbarComponent /><br/>
      <h2 style={{textAlign:"center"}} className="patientHome-h3">Your Appointments</h2>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
         <div style={{ marginLeft: "60px", marginTop:"-30px"}}>
            <label >Patient ID:</label>
            <input type="text" value={patientId} onChange={handleInputChange} />
          </div>
          
        </form>
        <div className="table table-container " style={{marginLeft:"-310px"}}>
        {loading ? (
          <p>Loading appointments...</p>
        ) : (
          <table className="table table-striped table-allappointment">
            <thead>
              <tr>
                <th>Appointment ID</th>
                <th>Patient ID</th>
                <th>Doctor ID</th>
                <th>Appointment Date</th>
                <th>Appointment Time</th>
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
                </tr>
              ))}
            </tbody>
          </table>
        )}
        
      </div>
      </div>
      <button onClick={goBack} className="btn message" style={{marginLeft:"108px"}}>Back</button>
      <FooterComponent />
    </div>
  );
};

export default PatientAppointments;
