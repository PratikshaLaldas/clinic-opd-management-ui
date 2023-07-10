import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import doctorService from "../services/doctorService";
import FooterComponent from "./FooterComponent";
import NavbarComponent from "./NavbarComponent";

const AddSchedule = () => {
  const [doctorId, setDoctorId] = useState("");
  const [schedule, setSchedule] = useState({
    dayOfWeek: "",
    timeSlot: "",
    availability: "",
  });

  const navigate = useNavigate();

  const handleDoctorIdChange = (e) => {
    setDoctorId(e.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSchedule((prevSchedule) => ({
      ...prevSchedule,
      [name]: value,
    }));
  };

  const addSchedule = (e) => {
    e.preventDefault();
    doctorService
      .addSchedule(doctorId, schedule)
      .then(() => {
        console.log("Schedule added successfully");
        window.alert("Schdeule added successfully");
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
        }
      });
  };

  const reset = (e) => {
    e.preventDefault();
    setDoctorId("");
    setSchedule({
      dayOfWeek: "",
      timeSlot: "",
      availability: "",
    });
  };

  const goBack = () => {
    navigate("/DoctorHome"); // Navigate to the DoctorHome page
  };

  return (
    <div className="body">
      <NavbarComponent />
      <div className="form-container">
        <div className="registerbox-appointment">
          <img src="images/addschedule.png" alt="Avatar" className="avatar" />
          <h1>Add Schedule</h1>
          <form onSubmit={addSchedule}>
            <p>Doctor ID</p>
            <input
              type="text"
              name="doctorId"
              value={doctorId}
              onChange={handleDoctorIdChange}
              className="form-input"
              required
            />
            <p>Day of Week</p>
            <select
              name="dayOfWeek"
              value={schedule.dayOfWeek}
              onChange={handleChange}
              className="form-select"
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
              className="form-select"
              required
            >
              <option value="">Select Time Slot</option>
              <option value="09:00 AM - 12:00 PM">09:00 AM - 12:00 PM</option>
              <option value="10:00 AM - 01:00 PM">10:00 AM - 01:00 PM</option>
              <option value="11:00 AM - 02:00 PM">11:00 AM - 02:00 PM</option>
              <option value="12:00 PM - 02:00 PM">12:00 PM - 02:00 PM</option>
              <option value="01:00 PM - 04:00 PM">01:00 PM - 04:00 PM</option>
              <option value="02:00 PM - 05:00 PM">02:00 PM - 05:00 PM</option>
              <option value="03:00 PM - 06:00 PM">03:00 PM - 06:00 PM</option>
              <option value="05:00 PM - 07:00 PM">05:00 PM - 07:00 PM</option>
              <option value="07:00 PM - 10:00 PM">07:00 PM- 10:00 PM</option>
            </select>
            <p>Availability</p>
            <select
              name="availability"
              value={schedule.availability}
              onChange={handleChange}
              className="form-select"
              required
            >
              <option value="">Select Availability</option>
              <option value="1">Available</option>
              <option value="0">Not Available</option>
            </select>
            <div className="button-container">
              <button type="submit" className="book-button">
                Add 
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
export default AddSchedule;
