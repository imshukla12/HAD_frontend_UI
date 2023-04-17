import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage'
import DoctorDashboard from './DoctorComponents/DoctorDashboard';
import PatientDashboard from './PatientComponent/PatientDashboard';


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<HomePage/>} />
        <Route path = "/login" element = {<LoginPage/>} />
        
        {/*                 Doctor Components               */}
        <Route path = "/doctor" element = { <DoctorDashboard/>} />

        {/*                 Patient Components               */}
        <Route path = "/patient" element = { <PatientDashboard/>} />

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App