import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import doctorService from "../services/doctorService";
import NavbarComponent from "./NavbarComponent";
import FooterComponent from "./FooterComponent";
import "../UpdateSchedule.css";
const UpdateSchedule = () => {
  const [doctorId, setDoctorId] = useState("");
  const [scheduleId, setScheduleId] = useState("");
  const [schedule, setSchedule] = useState({
    dayOfWeek: "",
    timeSlot: "",
    availability: "",
  });

  const navigate = useNavigate();

  const handleDoctorIdChange = (e) => {
    setDoctorId(e.target.value);
  };

  const handleScheduleIdChange = (e) => {
    setScheduleId(e.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSchedule((prevSchedule) => ({
      ...prevSchedule,
      [name]: value,
    }));
  };

  const updateSchedule = (e) => {
    e.preventDefault();
    doctorService
      .updateSchedule(doctorId, scheduleId, schedule)
      .then(() => {
        console.log("Schedule updated successfully");
        window.alert("Schedule updated successfully");
        navigate("/AllSchedules"); // Navigate to the desired page
      })
      .catch((error) => {
        console.log(error);
        if (
          error.response &&
          error.response.status === 404 &&
          error.response.data.message === "Doctor not found"
        ) {
          window.alert("Doctor not found"); // Display the error message in a window alert
        } else if (
          error.response &&
          error.response.status === 404 &&
          error.response.data.message === "Schedule not found"
        ) {
          window.alert("Schedule not found"); // Display the error message in a window alert
        }
      });
  };

  const reset = (e) => {
    e.preventDefault();
    setDoctorId("");
    setScheduleId("");
    setSchedule({
      dayOfWeek: "",
      timeSlot: "",
      availability: "",
    });
  };

  const goBack = () => {
    navigate("/AllSchedules"); // Navigate to the DoctorHome page
  };

  return (
    <div className="body">
      <NavbarComponent />
      <div className="form-container">
        <div className="registerbox-update-schedule">
          <img src="images/updatelogo.jpg" alt="Avatar" className="avatar" />
          <h1>Update Schedule</h1>
          <form onSubmit={updateSchedule}>
            <p>Doctor Name</p>
            <select
              name="doctorId"
              value={doctorId}
              onChange={handleDoctorIdChange}
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
            <p>Schedule ID</p>
            <input
              type="text"
              name="scheduleId"
              value={scheduleId}
              onChange={handleScheduleIdChange}
              required
            />
            <p>Day of Week</p>
            <select
              name="dayOfWeek"
              value={schedule.dayOfWeek}
              onChange={handleChange}
              required
            >
              <option value="">Select Day</option>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
              <option value="Sunday">Sunday</option>
            </select>
            <p>Time Slot</p>
            <select
              name="timeSlot"
              value={schedule.timeSlot}
              onChange={handleChange}
              required
            >
              <option value="">Select Time Slot</option>
              <option value="09:00 AM - 12:00 PM">09:00 AM - 12:00 PM</option>
              <option value="12:00 PM - 02:00 PM">12:00 PM - 02:00 PM</option>
              <option value="02:00 PM - 05:00 PM">02:00 PM - 05:00 PM</option>
              <option value="05:00 PM - 07:00 PM">05:00 PM - 07:00 PM</option>
              <option value="07:00 PM - 10:00 PM">07:00 PM - 10:00 PM</option>
            </select>
            <p>Availability</p>
            <select
              name="availability"
              value={schedule.availability}
              onChange={handleChange}
              required
            >
              <option value="">Select Availability</option>
              <option value="1">Available</option>
              <option value="0">Not Available</option>
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


export default UpdateSchedule;
