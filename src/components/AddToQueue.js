import React, { useState } from "react";
import staffService from "../services/staffService";
import { useNavigate } from "react-router-dom";
import FooterComponent from "./FooterComponent";
import NavbarComponent from "./NavbarComponent";
import "../AddtoQueue.css";
const AddToQueue = () => {
  const [queue, setQueue] = useState({
    appointmentId: "",
    queueNumber: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setQueue((prevQueue) => ({
      ...prevQueue,
      [name]: value,
    }));
  };

  const addToQueue = (e) => {
    e.preventDefault();
    staffService
      .addToQueue(queue)
      .then(() => {
        console.log("Added to queue successfully");
        window.alert("Appointment added to Queue Successfully")
        navigate("/AllQueueDetails");
        // Handle success, such as displaying a success message or navigating to another page
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage("Cannot add to queue. Appointment status is not confirmed.");
        window.alert("Cannot add to queue. Appointment status is not confirmed."); // Display the error message in a prompt box
      });
  };

  const goBack = () => {
    navigate("/StaffHome"); // Navigate to the DoctorHome page
  };

  const reset = () => {
    setQueue({
      appointmentId: "",
      queueNumber: "",
    });
  };
  
  return (
    <div className="body">
      <NavbarComponent />
      <div className="form-container">
        <div className="registerbox-queue-appointment">
          <img src="images/addtoqueuelogo.jpg" alt="Avatar" className="avatar" />
          <h1>Add to Queue</h1>
          <form onSubmit={addToQueue}>
            <p>Appointment ID</p>
            <input
              type="text"
              name="appointmentId"
              value={queue.appointmentId}
              onChange={handleChange}
              className="form-input"
              required
            />
            <p>Queue Number</p>
            <input
              type="text"
              name="queueNumber"
              value={queue.queueNumber}
              onChange={handleChange}
              className="form-input"
              required
            />
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

export default AddToQueue;
