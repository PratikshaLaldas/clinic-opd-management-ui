import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import doctorService from "../services/doctorService";
import NavbarComponent from "./NavbarComponent";
import FooterComponent from "./FooterComponent";

const AllSchedules = () => {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    fetchSchedules();
  }, []);

  const fetchSchedules = () => {
    doctorService
      .getAllschedules()
      .then((response) => {
        setSchedules(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navigate = useNavigate();

  const goBack = () => {
    navigate("/DoctorHome"); // Navigate to the DoctorHome page
  };

  const handleUpdateSchedule = () => {
    navigate("/UpdateSchedule"); // Navigate to the UpdateSchedule page
  };


  return (
    <div>
      <NavbarComponent /><br/>
      <h3 className="patientHome-h3">Schedule Details</h3>
      <div className="table-container">
        {schedules.length === 0 ? (
          <p>No schedules found.</p>
        ) : (
          <table className="table table-sm table-striped">
            <thead className="table-centre">
              <tr>
                <th>Schedule ID</th>
                <th>Doctor ID</th>
                <th>Day of Week</th>
                <th>Time Slot</th>
                <th>Availability</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {schedules.map((schedule) => (
                <tr key={schedule.scheduleId}>
                  <td>{schedule.scheduleId}</td>
                  <td>{schedule.doctorId}</td>
                  <td>{schedule.dayOfWeek}</td>
                  <td>{schedule.timeSlot}</td>
                  <td>{schedule.availability}</td>
                  <td>
                  <button
                      onClick={handleUpdateSchedule}
                      className="button-link update-message"
                    >
                      Update
                    </button>
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


export default AllSchedules;
