import React, { useEffect } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../HospitalHome.css';
import NavbarComponent from './NavbarComponent';
import FooterComponent from './FooterComponent';

const HospitalHome = () => {
  useEffect(() => {
    // Initialize the carousel when the component mounts
    window.$('.carousel').carousel();
  }, []);

  const goToPreviousSlide = () => {
    window.$('.carousel').carousel('prev');
  };

  const goToNextSlide = () => {
    window.$('.carousel').carousel('next');
  };

  return (
    <div>
      <NavbarComponent />
      <div id="carouselExample" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100 carousel-image"
              src="/images/hospital1.jpg"
              alt="First slide"
            />
            <div className="carousel-caption caption-middle">
              <h3 className="carousel-text font-bold">Healthcare for Good<br />Today. Tomorrow. Always</h3>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 carousel-image"
              src="/images/hospital2.jpg"
              alt="Second slide"
            />
            <div className="carousel-caption caption-middle">
              <h3 className="carousel-text font-bold carousel-text-black">Healthcare for Good<br />Today. Tomorrow. Always</h3>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 carousel-image"
              src="/images/hospital3.jpg"
              alt="Third slide"
            />
            <div className="carousel-caption caption-middle">
              <h3 className="carousel-text font-bold carousel-text-black">Healthcare for Good<br />Today. Tomorrow. Always</h3>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExample"
          role="button"
          data-slide="prev"
          onClick={goToPreviousSlide}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExample"
          role="button"
          data-slide="next"
          onClick={goToNextSlide}
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </a>
      </div>
      <div className="text-center mt-4">
        <div className="row">
          <div className="col-md-4">
            <a href="/PatientHome" className="card card-link">
              <img src="/images/patient.jpg" className="card-img-top" alt="Patient" style={{ height: '200px' }} />
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <h5 className="card-title">Patient</h5>
            
              </div>
            </a>
          </div>
          <div className="col-md-4">
            <a href="/DoctorHome" className="card card-link">
              <img src="/images/doctor.jpg" className="card-img-top" alt="Doctor" style={{ height: '200px' }} />
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <h5 className="card-title">Doctor</h5>
              </div>
            </a>
          </div>
          <div className="col-md-4">
            <a href="/StaffHome" className="card card-link">
              <img src="/images/staff.jpg" className="card-img-top" alt="Staff" style={{ height: '200px' }} />
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <h5 className="card-title">Staff</h5>
              </div>
            </a>
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};

export default HospitalHome;
