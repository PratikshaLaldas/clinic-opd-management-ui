import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import staffService from "../services/staffService";
import NavbarComponent from "./NavbarComponent";
import FooterComponent from "./FooterComponent";


const AllReminderDetails = () => {
  const [reminderDetails, setReminderDetails] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchReminderDetails();
  }, []);

  const fetchReminderDetails = () => {
    staffService
      .getAllReminderDetails()
      .then((response) => {
        setReminderDetails(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleUpdateReminder = () => {
    navigate(`/UpdateReminder`);
  };

  const handleDeleteReminder = (reminderId) => {
    staffService
      .deleteReminder(reminderId)
      .then(() => {
        setReminderDetails((prevReminderDetails) =>
          prevReminderDetails.filter((reminder) => reminder.reminderId !== reminderId)
        );
        console.log("Reminder Deleted successfully");
        window.alert("Reminder Deleted successfully");
      })
      .catch((error) => {
        console.log(error);
        window.alert("Reminder deletion failed.");
      });
  };

  const handleSendReminder = (reminderId) => {
    staffService
      .sendReminderMessage(reminderId)
      .then(() => {
        console.log("Reminder sent successfully");
        window.alert("Reminder sent successfully");
      })
      .catch((error) => {
        console.log(error);
        window.alert("Failed to send the reminder.");
      });
  };

  const goBack = () => {
    navigate("/StaffHome"); // Navigate to the StaffHome page
  };

  return (
    <div>
      <NavbarComponent /><br/>
      <h3 className="patientHome-h3">Reminder Details</h3>
      <div className="table-container">
        
        {reminderDetails.length === 0 ? (
          <p>No reminder details found.</p>
        ) : (
          <table className="table table-centre table-striped">
            <thead>
              <tr>
                <th>Reminder ID</th>
                <th>Appointment ID</th>
                <th>Reminder Type</th>
                <th>Reminder Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {reminderDetails.map((reminder) => (
                <tr key={reminder.reminderId}>
                  <td>{reminder.reminderId}</td>
                  <td>{reminder.appointmentId}</td>
                  <td>{reminder.reminderType}</td>
                  <td>{reminder.reminderDate}</td>
                  <td>
                    <button
                      onClick={handleUpdateReminder}
                      className="button-link update-message"
                    >
                      Update
                    </button>{" "}
                    &nbsp;
                    <button
                      onClick={() => handleDeleteReminder(reminder.reminderId)}
                      className="btn-delete-allappointment delete-message"
                    >
                      Delete 
                    </button>{" "}
                    &nbsp;
                    <button
                      onClick={() => handleSendReminder(reminder.reminderId)}
                      className="btn-cancel-allappointment cancel-message"
                    >
                      Send Reminder
                    </button>
                  </td>
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
      <FooterComponent />
    </div>
  );
};

export default AllReminderDetails;
