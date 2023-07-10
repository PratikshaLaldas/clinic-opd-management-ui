import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import staffService from "../services/staffService";
import NavbarComponent from "./NavbarComponent";
import FooterComponent from "./FooterComponent";

const SendReminderMessage = () => {
  const [reminderId, setReminderId] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const sendReminderMessage = async () => {
    try {
      await staffService.sendReminderMessage(reminderId);
      setSuccessMessage("Reminder message sent successfully");
    } catch (error) {
      console.log(error);
      if (
        error.response &&
        error.response.status === 404 &&
        error.response.data.message === "Reminder not found"
      ) {
        window.alert("Reminder not found");
      }
    }
  };

  const handleInputChange = (e) => {
    setReminderId(e.target.value);
  };

  const goBack = () => {
    navigate("/AllReminderDetails"); // Navigate to the StaffHome page
  };

  return (
    <div>
      <NavbarComponent />
      <div>
        Enter Reminder ID:
        <input type="text" value={reminderId} onChange={handleInputChange} />
        <br /><br />
        <button onClick={sendReminderMessage} disabled={!reminderId}>
          Send Reminder Message
        </button>
        <button
          onClick={goBack}
          className="rounded text-white font-semibold py-2 px-6 back-button btn btn-secondary"
        >
          Back
        </button>
        {successMessage && <p>{successMessage}</p>}
      </div>
      <FooterComponent />
    </div>
  );
};

export default SendReminderMessage;
