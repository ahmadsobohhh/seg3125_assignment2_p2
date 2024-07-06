import React, { useEffect, useState } from 'react';
import '../styles/style.css';

function Confirmation() {
  const [appointmentData, setAppointmentData] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('appointmentData'));
    setAppointmentData(data);
  }, []);

  if (!appointmentData) {
    return <h1>Booking information could not be found. Please try submitting the form again.</h1>;
  }

  return (
    <div className="page3">
      <h1>Booking Confirmation</h1>
      <p><strong>Name:</strong> <span id="confirmName">{`${appointmentData.firstName} ${appointmentData.lastName}`}</span></p>
      <p><strong>Date:</strong> <span id="confirmDate">{appointmentData.appointmentDate}</span></p>
      <p><strong>Service:</strong> <span id="confirmService">{appointmentData.serviceType}</span></p>
      <p><strong>Email:</strong> <span id="confirmEmail">{appointmentData.email}</span></p>
      <p><strong>Phone:</strong> <span id="confirmPhone">{appointmentData.phoneNumber}</span></p>
      <p><strong>Dentist:</strong> <span id="confirmDentist">{appointmentData.dentist}</span></p>
      <p><strong>Additional Info:</strong> <span id="confirmInfo">{appointmentData.additionalInfo}</span></p>
      <div className="nav-link btn btn-primary text-white">
        <button onClick={() => window.history.back()}>Go Back</button>
      </div>
    </div>
  );
}

export default Confirmation;
