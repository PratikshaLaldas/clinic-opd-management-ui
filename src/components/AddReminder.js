import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import staffService from "../services/staffService";
import NavbarComponent from "./NavbarComponent";
import FooterComponent from "./FooterComponent";

const AddReminder = () => {
  const [reminder, setReminder] = useState({
    appointmentId: "",
    reminderType: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setReminder((prevReminder) => ({
      ...prevReminder,
      [name]: value,
    }));
  };

  const addReminder = (e) => {
    e.preventDefault();
    staffService
      .addReminder(reminder)
      .then(() => {
        console.log("Reminder added successfully");
        window.alert("Reminder added successfully"); // Display success message in a window alert
        navigate("/AllReminderDetails");
      })
      .catch((error) => {
        console.error(error);
        window.alert("Cannot add reminder. Appointment Not Found"); // Display the error message in a window alert
      });
  };

  const goBack = () => {
    navigate("/StaffHome"); // Navigate to the StaffHome page
  };

  const reset = (e) => {
    e.preventDefault();
    setReminder({
      appointmentId: "",
      reminderType: "",
    });
  };

  return (
    <div className="body">
      <NavbarComponent />
      <div className="form-container">
        <div className="registerbox-appointment">
          <img src="images/reminderlogo.png" alt="Avatar" className="avatar" />
          <h1>Add Reminder</h1>
          <form onSubmit={addReminder}>
            <p>Appointment ID</p>
            <input
              type="text"
              name="appointmentId"
              value={reminder.appointmentId}
              onChange={handleChange}
              className="form-input"
              required
            />
            <p>Reminder Type</p>
            <select
              name="reminderType"
              value={reminder.reminderType}
              onChange={handleChange}
              className="form-select"
              required
            >
              <option value="">Select Reminder Type</option>
              <option value="Email">Email</option>
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
      <FooterComponent />
    </div>
  );
};

export default AddReminder;
