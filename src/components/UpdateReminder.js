import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import staffService from "../services/staffService";
import NavbarComponent from "./NavbarComponent";
import FooterComponent from "./FooterComponent";

const UpdateReminder = () => {
  const [reminderId, setReminderId] = useState("");
  const [reminderType, setReminderType] = useState("");
  const [reminderDate, setReminderDate] = useState("");
  const navigate = useNavigate();

  const handleIdChange = (e) => {
    setReminderId(e.target.value);
  };

  const handleTypeChange = (e) => {
    setReminderType(e.target.value);
  };

  const handleDateChange = (e) => {
    const date = e.target.value;
    const formattedDate = formatDate(date);
    setReminderDate(formattedDate);
  };

  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split("-");
    return `${year}-${month}-${day}`;
  };

  const updateReminder = (e) => {
    e.preventDefault();
    const reminderDto = {
      reminderType,
      reminderDate,
    };
    staffService
      .updateReminder(reminderId, reminderDto)
      .then(() => {
        console.log("Reminder updated successfully");
        navigate("/AllReminderDetails"); // Navigate to the desired page
      })
      .catch((error) => {
        console.log(error);
        if (
          error.response &&
          error.response.status === 500 &&
          error.response.data.message === "Reminder date cannot be after the appointment date"
        ) {
          window.alert("Appointment cannot be set after the appointment date");
        }
      });
  };
  

  const reset = (e) => {
    e.preventDefault();
    setReminderId("");
    setReminderType("");
    setReminderDate("");
  };

  const goBack = () => {
    navigate("/AllReminderDetails"); // Navigate to the AllReminders page
  };

  return (
    <div className="body"> 
      <NavbarComponent />
      <div className="form-container">
        <div className="registerbox-appointment">
          <img src="images/updatelogo.jpg" alt="Avatar" className="avatar" />
          <h1>Update Reminder</h1>
          <form onSubmit={updateReminder}>
            <p>Reminder ID</p>
            <input
              type="text"
              value={reminderId}
              onChange={handleIdChange}
              required
              className="form-input"
            />
            <p>Reminder Type</p>
            <select
              name="reminderType"
              value={reminderType}
              onChange={handleTypeChange}
              required
              className="form-select"
            >
              <option value="">Select Reminder Type</option>
              <option value="Email">Email</option>
            </select>
            <p>Reminder Date</p>
            <input
              type="date"
              value={reminderDate}
              onChange={handleDateChange}
              required
              className="form-input"
            />
            <div className="button-container">
              <button type="submit" className="book-button">
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


export default UpdateReminder;
