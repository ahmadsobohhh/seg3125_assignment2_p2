import React, { useState } from 'react';
import '../styles/style.css';

function AppointmentForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    appointmentDate: '',
    phoneNumber: '',
    email: '',
    serviceType: '',
    dentist: '',
    additionalInfo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('appointmentData', JSON.stringify(formData));
    window.location.href = '/confirmation';
  };

  return (
    <div className="appointmentLayout">
      <img src="./assets/SmilingDentist.png" alt="Appointment Setting" className="appointmentImage" />
      <form className="appointmentForm" onSubmit={handleSubmit}>
        <h2>Make An Appointment</h2>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />

        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />

        <label htmlFor="appointmentDate">Choose a date: </label>
        <input type="date" id="appointmentDate" name="appointmentDate" value={formData.appointmentDate} onChange={handleChange} required />

        <label htmlFor="phoneNumber">Phone Number:</label>
        <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

        <label htmlFor="serviceType">Type of Service:</label>
        <select id="serviceType" name="serviceType" value={formData.serviceType} onChange={handleChange}>
          <option value="Check Up">Check ups - $200</option>
          <option value="Emergencies">Emergencies - $500</option>
          <option value="Cosmetic Dentistry">Cosmetic dentistry - $900</option>
          <option value="Dental Implants">Dental implants - $5000</option>
          <option value="Orthodontics">Orthodontics - $5000</option>
          <option value="Children's Dentistry">Children’s dentistry - $200</option>
          <option value="Preventative Checks">Preventative checks - $150</option>
          <option value="Telephone Consultation">FREE Telephone consultations</option>
          <option value="Other">Other</option>
        </select>

        <label htmlFor="dentist">Specific Dentist:</label>
        <select id="dentist" name="dentist" value={formData.dentist} onChange={handleChange}>
          <option value="Dr. Ahmad Soboh">Dr. Ahmad Soboh</option>
          <option value="Dr. Pamir Habib">Dr. Pamir Habib</option>
          <option value="Dr. Abdu Barkhad">Dr. Abdu Barkhad</option>
          <option value="Dr. Tausif Islam">Dr. Tausif Islam</option>
        </select>

        <label htmlFor="additionalInfo">Additional Information:</label>
        <textarea id="additionalInfo" name="additionalInfo" rows="4" value={formData.additionalInfo} onChange={handleChange} placeholder="Describe your needs..."></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AppointmentForm;
