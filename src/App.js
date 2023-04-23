import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage'
import DoctorDashboard from './DoctorComponents/DoctorDashboard';
import DoctorConsultationPage from './DoctorComponents/DoctorConsultationPage';
import DoctorProfile from './DoctorComponents/DoctorProfile';
import Prescription from './DoctorComponents/Prescription';
// import DoctorVideocall from './DoctorComponents/DoctorVideocall';
import PatientDashboard from './PatientComponent/PatientDashboard';
import PatientRegistration from './PatientComponent/PatientRegistration';
import PatientWaitingRoom from './PatientComponent/PatientWaitingRoom';
import FollowUp from './PatientComponent/FollowUp';
import Calender from './PatientComponent/Calender'
import Appointment from './PatientComponent/Appointment';
import PatientHistory from './PatientComponent/PatientHistory';
import PatientUpdateProfile from './PatientComponent/PatientUpdateProfile';
import PatientVideoCallPage from './PatientComponent/PatientVideoCallPage';
// import Appp from './PatientComponent/Appp';

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
        <Route path = "/doctor/prescription" element = { <Prescription/> } />  isko htana h baad me
        {/* <Route path = "/doctor/videocall" element = { <DoctorVideocall/> } />   isko htana h baad me */}

        {/*                 Patient Components               */}
        <Route path = "/patient" element = { <PatientDashboard/>} />
        <Route path='/register' element = { <PatientRegistration/> } />  
        <Route path='/patient/waitingroom' element = { <PatientWaitingRoom/> } />
        <Route path='/patient/followUp' element = { <FollowUp/> } />   {/* isko htana h baad me */}
        <Route path='/calender' element = { <Calender/>} />           {/* isko htana h */}
        <Route path = '/app' element = { <Appointment/> } />       {/* htana h */}
        <Route path='/history' element = { <PatientHistory/> } />   {/* htana h */}
        <Route path='/patient/updateProfile' element = { <PatientUpdateProfile/> } />
        <Route path= '/patient/patientVideoCall' element = {<PatientVideoCallPage/>} />

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App