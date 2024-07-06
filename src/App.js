import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import AppointmentForm from './components/AppointmentForm';
import Confirmation from './components/Confirmation';
import './styles/style.css';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/appointment" element={<AppointmentForm />} />
          <Route path="/" element={<AppointmentForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
