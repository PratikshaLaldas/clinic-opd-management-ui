import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

const NavbarComponent = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-background navbar-height">
      <a className="navbar-brand" href="/Home">
        <img src="/images/logo1.png" alt="Hospital Logo" height="60" />
      </a>
      <div className="ml-auto">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link nav-margin navbar-text-white" href="/Home">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link navbar-text-white" href="#contact">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarComponent;
