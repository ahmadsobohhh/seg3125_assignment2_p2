import React from 'react';
import '../styles/style.css';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <img src="./assets/Logo.png" alt="Logo" className="navbar-brand-image" />
      <a className="navbar-brand" href="#home">Pearson Hardman</a>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-link" href="#home">Home</a>
          <a className="nav-link" href="#servicesAndImage">Services</a>
          <a className="nav-link" href="#history">About</a>
          <a className="nav-link" href="#dentists">Search</a>
          <a className="nav-link" href="#contact">Contact</a>
          <a className="nav-link" href="#appointmentPage">Book Appointment</a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
