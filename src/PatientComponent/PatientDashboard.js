import React, { useState } from 'react'
import PatientNavbar from './PatientNavbar'
import Appointment from './Appointment'
import PatientHistory from './PatientHistory'
import Calender from './Calender'
import flow from './FLOW (1).png'
import calendar from './googletips_calendar_mini.jpg'

const PatientDashboard = () => {

  const [viewHistory, setViewHistory] = useState(false)

  const handleToggle = () => {
    setViewHistory(!viewHistory)
  }

  return (
    <div className='bg-gradient-to-r from-sky-200 via-blue-500 to-indigo-700 bg-opacity-50'>
      <PatientNavbar />
      <div className='flex flex-row w-full p-4 space-x-6'>
        <div className='bg-green-200 w-1/5'>
          <div className='bg-red-300'><img src={flow} alt='steps' className='w-full h-full object-cover rounded-md' /></div>
        </div>
        <div className='flex flex-col p-2 bg-red-200 w-4/5'>
          <div className='flex flex-row gap-2 p-2 bg-blue-200'>
            <div className='w-2/3 bg-red-600'><Appointment /></div>
            <div className='w-1/3 bg-red-900'><Calender/></div>
          </div>
          <div className='bg-yellow-100 p-2 relative z-0 w-full group'>
            <div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  value=""
                  className="sr-only peer"
                  checked={viewHistory}
                  onChange={handleToggle}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                  View History
                </span>
              </label>
            </div>
            {viewHistory && (
              <div>
                <PatientHistory />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PatientDashboard