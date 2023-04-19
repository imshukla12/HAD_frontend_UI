import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DoctorNavbar from './DoctorNavbar'
import QueuedPatient from './QueuedPatient'
import Infographics from './Infographics'
import axios from 'axios'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'

const DoctorDashboard = () => {
  const [dailyLog, setDailyLog] = useState();
  const doctorDetails = JSON.parse(localStorage.getItem("doctorDetails"));

  const fetchDailyLog = async () => {
    await axios.get(`http://localhost:9090/doctor/doctorDailyLog/${doctorDetails.doctorId}`)
      .then((response) => {
        setDailyLog(response.data)
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    fetchDailyLog()
  }, [])

  return (
    <div className='bg-blue-50 flex flex-col justify-evenly'>
      <div>
        <DoctorNavbar />
      </div>
      <div className='flex flex-row'>
        <div className='w-1/6 h-screen relative'>
          <QueuedPatient />
        </div>
        <div className='flex-grow flex flex-row p-8 justify-between'>
          <div className='w-1/2 flex flex-col items-center space-y-24'>
            <div className='flex flex-row justify-between p-8 w-full space-x-6'>
              <div className='w-1/2 p-4 border-t-4 border-blue-900 shadow-lg font-serif rounded-lg flex flex-col justify-evenly transition-transform duration-500 transform-gpu hover:scale-110'>
                <p>Total Consultations</p>
                <p className='text-5xl text-center'>1020</p>
              </div>
              <div className='w-1/2 p-4 border-t-4 border-blue-900 shadow-lg font-serif rounded-lg flex flex-col justify-evenly transition-transform duration-500 transform-gpu hover:scale-110'>
                <p>Today's Consultations</p>
                <p className='text-5xl text-center'>1000</p>
              </div>
            </div>
            <div className='shadow-lg p-6 w-3/5 border-t-4 border-blue-900 rounded-lg'>
              <table className="table-auto w-full mx-auto">
                <caption className="caption-top font-serif text-2xl p-2">
                  Daily Log
                </caption>
                <thead className='font-serif text-lg'>
                  <tr>
                    <th>Pt.Id</th>
                    <th>Observation</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className='font-serif text-md text-center'>
                  {dailyLog ? (
                    dailyLog.map((p,index) => (
                      <tr key={index}>
                        <td>{p.patientId}</td>
                        <td>{p.observation}</td>
                        <td><FontAwesomeIcon icon={faCircleCheck} beatFade style={{color: "#3ee302",}} /></td>
                      </tr>
                    ))
                  ) : (
                  <tr></tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
          <div className='w-1/2 relative'>
            <Infographics />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoctorDashboard