import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage'
import DoctorDashboard from './DoctorComponents/DoctorDashboard';
import PatientDashboard from './PatientComponent/PatientDashboard';
import DoctorConsultationPage from './DoctorComponents/DoctorConsultationPage';
import DoctorProfile from './DoctorComponents/DoctorProfile';
import Prescription from './DoctorComponents/Prescription';
import DoctorVideocall from './DoctorComponents/DoctorVideocall';
import PatientRegistration from './PatientComponent/PatientRegistration';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<HomePage/>} />
        <Route path = "/login" element = {<LoginPage/>} />
        
        {/*                 Doctor Components               */}
        <Route path = "/doctor" element = { <DoctorDashboard/>} />
        <Route path = "/doctor/consultationpage" element = { <DoctorConsultationPage/> } />
        <Route path = "/doctor/profile" element = { <DoctorProfile/> } /> 
        <Route path = "/doctor/prescription" element = { <Prescription/> } />  {/* isko htana h baad me */}
        <Route path = "/doctor/videocall" element = { <DoctorVideocall/> } />   {/* isko htana h baad me */}

        {/*                 Patient Components               */}
        <Route path = "/patient" element = { <PatientDashboard/>} />
        <Route path='/register' element = { <PatientRegistration/> } />  

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App