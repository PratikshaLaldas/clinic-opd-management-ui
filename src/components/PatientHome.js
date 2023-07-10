import React from 'react';
import FooterComponent from './FooterComponent';
import NavbarComponent from './NavbarComponent';
import '../HospitalHome.css';

const PatientHome = () => {
  return (
    <div>
      <NavbarComponent />
      <div className="container">
        <h2 className="text-center mt-4 patientHome-h3">Welcome to Hope Health Hospital</h2>
        <div className="text-center mt-4">
          <div className="row">
            <div className="col-md-4 mb-4">
              <a href="/RegisterPatient" className="card card-link">
                <img src="/images/register.jpg" className="card-img-top" alt="Patient" style={{ height: '200px' }} />
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                  <h5 className="card-title">Register</h5>
                </div>
              </a>
            </div>
            <div className="col-md-4 mb-4">
              <a href="/AllPatient" className="card card-link">
                <img src="/images/patientdetails.jpg" className="card-img-top" alt="Doctor" style={{ height: '200px' }} />
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                  <h5 className="card-title">View Patient Details</h5>
                </div>
              </a>
            </div>
            <div className="col-md-4 mb-4">
              <a href="/AddAppointment" className="card card-link">
                <img src="/images/bookappointment.jpg" className="card-img-top" alt="Staff" style={{ height: '200px' }} />
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                  <h5 className="card-title">Book Appointment</h5>
                </div>
              </a>
            </div>
            <div className="col-md-4 mb-4">
              <a href="/AllAppointment" className="card card-link">
                <img src="/images/viewpatientappointment.jpg" className="card-img-top" alt="Staff" style={{ height: '200px' }} />
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                  <h5 className="card-title">View All Appointment</h5>
                </div>
              </a>
            </div>
            <div className="col-md-4 mb-4">
              <a href="/PatientAppointments" className="card card-link">
                <img src="/images/viewyourappointment.jpg" className="card-img-top" alt="Staff" style={{ height: '200px' }} />
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                  <h5 className="card-title">View Your Appointment</h5>
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

export default PatientHome;
