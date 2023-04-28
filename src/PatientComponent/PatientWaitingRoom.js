import React,{ useContext, useEffect, useState } from 'react'
import PatientNavbar from './PatientNavbar'
import namaste from '../components/images/7617.jpg'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { LoggedinUserContext } from '../context/LoggedinUserContext'

const PatientWaitingRoom = () => {

    const {loggedinuser, setLoggedinUser} = useContext(LoggedinUserContext)

    const navigate = useNavigate()
    const patient = JSON.parse(localStorage.getItem("patientDetails"))
    const patientId = patient.patientId
    const appointmentId = localStorage.getItem("ptAppointmentId")
    const [count, setCount] = useState(0);
    const [isAccepted, setIsAccepted] = useState(false)

    const fetchData = async () => {
        // const jwtToken=localStorage.getItem("jwtToken");
        axios.defaults.headers.common["Authorization"]=`Bearer ${loggedinuser.token}`
        await axios.get(`http://localhost:9090/appointment/waitingPatients/${appointmentId}`)
        .then((response) => {
            setCount(response.data)
            console.log("count", count);
        })
        .catch((error) => {
            console.log(error)
        })   
    };

    const fetchJoinRequest = async() => {
        // const jwtToken=localStorage.getItem("jwtToken");
        axios.defaults.headers.common["Authorization"]=`Bearer ${loggedinuser.token}`
        await axios.get(`http://localhost:9090/appointment/isAppointmentAccepted/${patientId}`)
        .then((response) => {
            console.log(response.data)
            setIsAccepted(response.data);
        })
        .catch((error) => {
            console.log(error)
        })
    }

    const deletePt = async() => {
        // const jwtToken=localStorage.getItem("jwtToken");
        axios.defaults.headers.common["Authorization"]=`Bearer ${loggedinuser.token}`
        await axios.delete(`http://localhost:9090/appointment/deleteAppointmentStatus/${patientId}`)
        .then((response) => {
            console.log(response.data)
        })
        .catch((error) => {
            console.log(error)
        } )
    }

    useEffect(() => {
        const fetchDataAndJoinRequest = async () => {
          await fetchData();
          await fetchJoinRequest();
        };
      
        fetchDataAndJoinRequest();
        const intervalId = setInterval(fetchDataAndJoinRequest, 5000);
      
        return () => {
          clearInterval(intervalId);
        };
      }, [fetchData, fetchJoinRequest]);
      

    const handleSubmit = async(event) => {
        event.preventDefault()
        console.log("aaa")
        await deletePt()
        console.log("pt deleted")
        navigate(`/patient/patientVideoCall`, { state: { appointmentId }})
    }

    return (
        <>
            <PatientNavbar />
            <div className='bg-blue-50 p-16 h-screen w-full items-center justify-center'>
                <h1 className='text-5xl font-serif text-center'>Waiting Area</h1><br />
                <h3 className='text-lg font-serif text-center'>Please wait here for your turn</h3>
                <div className='border-2 border-gray-500 rounded-lg h-4/5 flex flex-row items-center justify-center space-x-16 p-2'>
                    <div className='w-3/5 h-full'>
                        <img src={namaste} alt='logo' className='w-full h-full object-cover' />
                    </div>
                    <div className='justify-center items-center flex flex-col gap-8 h-full w-1/6 p-8'>
                        <div className='border-2 border-gray-300 text-center justify-center p-4'>
                            <h1 className='font-serif text-9xl'>{count}</h1>
                        </div>
                        <div className='items-center justify-center'>
                            <button type="button" className="text-white w-full bg-green-500 hover:bg-green-700 font-serif text-lg rounded-lg text-sm px-2 py-2 text-center mr-3 md:mr-0 transform transition duration-300 hover:scale-110" onClick={handleSubmit} disabled = {!isAccepted}>
                                Join Consultation
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PatientWaitingRoom