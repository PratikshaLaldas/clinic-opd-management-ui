import React, { useEffect, useState } from "react";
import doctorService from "../services/doctorService";
import { useNavigate } from "react-router-dom";
import FooterComponent from "./FooterComponent";
import NavbarComponent from "./NavbarComponent";

const GetPatientDetails = () => {
  const [loading, setLoading] = useState(true);
  const [doctorId, setDoctorId] = useState("");
  const [patientDetails, setPatientDetails] = useState([]);
  const navigate = useNavigate();
  const doctorOptions = [
    { id: "1", name: "Dr. Smith Johnson (Oncologist)" },
    { id: "2", name: "Dr. Emily Davis (Neurologist)" },
    { id: "3", name: "Dr. Robert Wilson (Pulmonologist)" },
    { id: "4", name: "Dr. Lisa Miller (Endocrinologist)"},
    { id: "5", name: "Dr. Shivani Soni (Opthalmology)"},
    { id: "6", name: "Dr. Akash Kumar (Dermatology)" },
    { id: "7", name: "Dr. Meera Naik (Orthopedics)" }
  ];

  const fetchPatientDetails = async (doctorId) => {
    setLoading(true);
    try {
      const response = await doctorService.getPatientDetails(doctorId);
      setPatientDetails(response.data);
    } catch (error) {
      console.log(error);
      if (
        error.response &&
        error.response.status === 404 &&
        error.response.data.message === "Appointment not found"
      ) {
        setPatientDetails([]); // Set patientDetails as an empty array
        window.alert("Appointment not found");
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    if (doctorId) {
      fetchPatientDetails(doctorId);
    }
  }, [doctorId]);

  const handleDoctorIdChange = (e) => {
    setDoctorId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (doctorId) {
      fetchPatientDetails(doctorId);
    }
  };

  const goBack = () => {
    navigate("/DoctorHome"); // Navigate to the PatientHome page
  };

  return (
    <div>
      <NavbarComponent /><br/>
      <h2 style={{ textAlign: "center" }} className="patientHome-h3">Patient Details for Doctor ID: {doctorId}</h2>
      <div className="form-container">
        
        <form onSubmit={handleSubmit}>
          <div className="form-group" style={{ marginLeft: "60px", marginTop:"-30px"}}>
            <label htmlFor="doctorId">Doctor Name</label>
            <select
              id="doctorId"
              value={doctorId}
              onChange={handleDoctorIdChange}
              className="form-control"
            >
              <option value="">Select</option>
              {doctorOptions.map((doctor) => (
                <option key={doctor.id} value={doctor.id}>
                  {doctor.name}
                </option>
              ))}
            </select>
          </div>
        </form>
        <div style={{ marginTop: "20px", marginLeft:"-325px"}} className="table table-container">
          {loading ? (
            <p>Loading patient details...</p>
          ) : (
            <>
              {patientDetails.length === 0 ? (
                <p>No patients found.</p>
              ) : (
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Patient ID</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Contact Details</th>
                      <th>Medical History</th>
                      <th>Insurance Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {patientDetails.map((patient) => (
                      <tr key={patient.patientId}>
                        <td>{patient.patientId}</td>
                        <td>{patient.firstName}</td>
                        <td>{patient.lastName}</td>
                        <td>{patient.contactDetails}</td>
                        <td>{patient.medicalHistory}</td>
                        <td>{patient.insuranceDetails}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </>
          )}
        </div>
      </div>
      <button onClick={goBack} className="btn message" style={{marginLeft:"111px"}}>
        Back
      </button>
      <FooterComponent/>
    </div>
  );
};
export default GetPatientDetails;
