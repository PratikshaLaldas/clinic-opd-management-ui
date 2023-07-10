import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import doctorService from "../services/doctorService";
import NavbarComponent from "./NavbarComponent";
import FooterComponent from "./FooterComponent";
import "../Patient.css";
import "../Doctor.css";
const AllDoctorInfo = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = () => {
    doctorService
      .getAllDoctors()
      .then((response) => {
        setDoctors(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navigate = useNavigate();

  const goBack = () => {
    navigate("/DoctorHome"); // Navigate to the AllDoctorInfo page
  };

  const updateDoctor = () => {
    navigate("/UpdateDoctor"); // Navigate to the UpdateDoctor page
  };

  const deleteDoctor = (doctorId) => {
    doctorService
      .deleteDoctor(doctorId)
      .then(() => {
        setDoctors((prevDoctors) =>
          prevDoctors.filter((doctor) => doctor.doctorId !== doctorId)
        );
      })
      .catch((error) => {
        console.log(error);
        window.alert("Doctor deletion failed.");
      });
  };

  return (
    <div>
      <NavbarComponent /><br/>
      <h3 className="patientHome-h3">Doctor Details</h3>
      <div className="table-container">
        {doctors.length === 0 ? (
          <p>No doctors found.</p>
        ) : (
          <table className="table table-striped table-allDoctorInfo">
            <thead className="table-centre">
              <tr>
                <th>Doctor ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Contact Details</th>
                <th>Specialization</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {doctors.map((doctor) => (
                <tr key={doctor.doctorId}>
                  <td>{doctor.doctorId}</td>
                  <td>{doctor.firstName}</td>
                  <td>{doctor.lastName}</td>
                  <td>{doctor.contactDetails}</td>
                  <td>{doctor.specialization}</td>
                  <td>
                    <button onClick={updateDoctor} className="button-link update-message">
                      Update
                    </button>{" "}
                    &nbsp;
                    <button
                      onClick={() => deleteDoctor(doctor.doctorId)}
                      className="btn-delete-allappointment delete-message"
                    >
                      Delete
                    </button>{" "}
                    &nbsp;
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <button onClick={goBack} className="btn message">
        Back
      </button>
      <FooterComponent />
    </div>
  );
};

export default AllDoctorInfo;
