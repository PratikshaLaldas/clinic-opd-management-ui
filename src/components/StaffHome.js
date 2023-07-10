import React from 'react';
import { Link } from 'react-router-dom';
import FooterComponent from './FooterComponent';
import NavbarComponent from './NavbarComponent';

const StaffHome = () => {
  return (

    <div>
    <NavbarComponent />
    <div className="container">
    <h2 className="text-center mt-4 patientHome-h3">Welcome Staff to Hope Health Hospital</h2>
    <div className="text-center mt-4">
        <div className="row">
        <div className="col-md-4 mb-4">
              <a href="/StaffAllAppointment" className="card card-link">
                <img src="/images/viewpatientappointment.jpg" className="card-img-top" alt="Staff" style={{ height: '200px' }} />
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                  <h5 className="card-title">View All Appointment</h5>
                </div>
              </a>
            </div>
        <div className="col-md-4 mb-4">
            <a href="/AddToQueue" className="card card-link">
            <img src="/images/addtoqueue.jpg" className="card-img-top" alt="Patient" style={{ height: '200px' }} />
            <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <h5 className="card-title">Add to Queue</h5>
            </div>
            </a>
        </div>
        <div className="col-md-4 mb-4">
            <a href="/AllQueueDetails" className="card card-link">
            <img src="/images/viewqueuedetails.webp" className="card-img-top" alt="Doctor" style={{ height: '200px' }} />
            <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <h5 className="card-title">View Queue Details</h5>
            </div>
            </a>
        </div>
        <div className="col-md-4 mb-4">
            <a href="/AddReminder" className="card card-link">
            <img src="/images/addreminder.jpg" className="card-img-top" alt="Staff" style={{ height: '200px' }} />
            <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <h5 className="card-title">Add Reminder</h5>
            </div>
            </a>
        </div>
        <div className="col-md-4 mb-4">
            <a href="/AllReminderDetails" className="card card-link">
            <img src="/images/viewscheduledetails.jpg" className="card-img-top" alt="Staff" style={{ height: '200px' }} />
            <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <h5 className="card-title">View Reminder Details</h5>
            </div>
            </a>
        </div>
        
        </div>
    </div>
    </div>
    <FooterComponent />
    </div>



  );
};

export default StaffHome;
