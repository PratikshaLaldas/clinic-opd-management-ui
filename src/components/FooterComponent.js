import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';
import '../App.css';
const FooterComponent = () => {
  return (
    <footer className="mt-4 footer-bg">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <br/>
            <h5>Contact Us</h5>
            <hr className="short-hr" />
            <p className="footer-text">
              Hillside Avenue,<br />
              Hiranandani Gardens<br />
              Powai, Mumbai - 400075<br/><br/>
              wecare@hopehealth.org

            </p>
          </div>
          <div className="col-md-3">
          <br/>
            <h5>Specialities</h5>
            <hr className="short-hr" />
            <p className="footer-text">Cancer Care Centre<br/> 
            Cardiology <br/> 
            Neurology Hospital <br/> 
             Urology Hospital <br/>
             Asthma Hospital <br/>
             Diabetes Hospital <br/>
             Orthopedic Hospital
             </p>
          </div>

          <div className="col-md-3">
          <br/>
            <h5>Treatments</h5>
            <hr className="short-hr" />
            <p className="footer-text">
            Hip Replacement Surgery<br/>
            HPB Surgery<br/>
            High Risk Pregnancy<br/>
            CVTS (Cardiovascular and Thoracic Surgery)<br/>
            Knee Replacement Surgery<br/>
            Brain Stroke Treatment<br/>
            Liver Cirrhosis<br/>
            Specialized Clinics<br/>
        
             </p>
          </div>

          
          <div className="col-md-3">
          <br/>
            <h5>Our Certificates:</h5>
            <hr className="short-hr footer-text" />
            <FontAwesomeIcon icon={faCertificate} size="lg" />
            <FontAwesomeIcon icon={faCertificate} size="lg" />
            <FontAwesomeIcon icon={faCertificate} size="lg" />
          </div>
          <p className="footer-copyright">
      &copy; 2022 Hope Health Hospital. All Rights Reserved.</p>
        </div>
        </div>
        
    </footer>
  );
};

export default FooterComponent;
