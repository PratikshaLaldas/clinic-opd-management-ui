import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import staffService from "../services/staffService";
import FooterComponent from "./FooterComponent";
import NavbarComponent from "./NavbarComponent";
import "../Patient.css";
import "../Doctor.css";

const AllQueueDetails = () => {
  const [queueDetails, setQueueDetails] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchQueueDetails();
  }, []);

  const fetchQueueDetails = () => {
    staffService
      .getAllQueueDetails()
      .then((response) => {
        setQueueDetails(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleUpdateQueue = () => {
    navigate(`/UpdateQueueStatus`);
  };

  const handleDeleteQueue = () => {
    navigate(`/RemoveFromQueue`);
  };

  const goBack = () => {
    navigate("/StaffHome"); // Navigate to the StaffHome page
  };


  return (
    <div>
      <NavbarComponent /><br/>
      <h3 className="patientHome-h3">Queue Details</h3>
      <div className="table-container">
        {queueDetails.length === 0 ? (
          <p>No queue details found.</p>
        ) : (
          <table className="table table-striped">
            <thead className="table-centre">
              <tr>
                <th>Queue ID</th>
                <th>Queue Number</th>
                <th>Appointment ID</th>
                <th>Queue Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {queueDetails.map((queue) => (
                <tr key={queue.queueId}>
                  <td>{queue.queueId}</td>
                  <td>{queue.queueNumber}</td>
                  <td>{queue.appointmentId}</td>
                  <td>{queue.queueStatus}</td>
                  <td>
                    <button
                      onClick={handleUpdateQueue}
                      className="button-link update-message"
                    >
                      Update Queue
                    </button>{" "}
                    &nbsp;
                    <button
                      onClick={handleDeleteQueue}
                      className="btn-delete-allappointment delete-message"
                    >
                      Delete Queue
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

export default AllQueueDetails;
