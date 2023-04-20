import React from 'react'
import DoctorNavbar from './DoctorNavbar'
import Prescription from './Prescription'
import DoctorVideocall from './DoctorVideocall'

const DoctorConsultationPage = () => {
  return (
    <div className='bg-blue-50 h-screen'>
        <DoctorNavbar/>
        <div className='grid grid-cols-5 gap-4'>
          <div className='p-4' style={{ gridColumn: "1 / span 2" }}>
            <Prescription/>
          </div>
          <div className='p-4' style={{ gridColumn: "3 / span 3" }}>
            <DoctorVideocall/>
          </div>
        </div>
    </div>
  )
}

export default DoctorConsultationPage