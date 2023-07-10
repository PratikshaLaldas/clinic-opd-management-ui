import React from 'react';
import { Link } from 'react-router-dom';
import FooterComponent from './FooterComponent';
import NavbarComponent from './NavbarComponent';

const DoctorHome = () => {

  return (
      <div>
      <NavbarComponent />
      <div className="container">
        <h2 className="text-center mt-4 patientHome-h3">Welcome Doctor to Hope Health Hospital</h2>
        <div className="text-center mt-4">
          <div className="row">
            <div className="col-md-4 mb-4">
              <a href="/RegisterDoctor" className="card card-link">
                <img src="/images/register.jpg" className="card-img-top" alt="Patient" style={{ height: '200px' }} />
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                  <h5 className="card-title">Register</h5>
                </div>
              </a>
            </div>
            <div className="col-md-4 mb-4">
              <a href="/AllDoctorInfo" className="card card-link">
                <img src="/images/doctordetails.png" className="card-img-top" alt="Doctor" style={{ height: '200px' }} />
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                  <h5 className="card-title">View Doctor Details</h5>
                </div>
              </a>
            </div>
            <div className="col-md-4 mb-4">
              <a href="/AddSchedule" className="card card-link">
                <img src="/images/doctorschedule.jpg" className="card-img-top" alt="Staff" style={{ height: '200px' }} />
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                  <h5 className="card-title">Add Schedule</h5>
                </div>
              </a>
            </div>
            <div className="col-md-4 mb-4">
              <a href="/AllSchedules" className="card card-link">
                <img src="/images/viewscheduledetails.jpg" className="card-img-top" alt="Staff" style={{ height: '200px' }} />
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                  <h5 className="card-title">View Schedule Details</h5>
                </div>
              </a>
            </div>
            <div className="col-md-4 mb-4">
              <a href="/GetPatientDetails" className="card card-link">
                <img src="/images/viewpatientdetails.jpg" className="card-img-top" alt="Staff" style={{ height: '200px' }} />
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                  <h5 className="card-title">View Patient Details</h5>
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

export default DoctorHome;
