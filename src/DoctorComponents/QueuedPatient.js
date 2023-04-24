import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios'
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';

const QueuedPatient = () => {
    const [count, setCount] = useState(0);
    const doctorDetails = JSON.parse(localStorage.getItem("doctorDetails"));
    const [queuedPt, setQueuedPt] = useState([]);
    const [isRotating, setIsRotating] = useState(false);
    var appointmentId;
    const navigate = useNavigate();

    function timeout(delay) {
        return new Promise( res => setTimeout(res, delay) );
    }
    const handleClick = async() => {
        setIsRotating(true)
        await fetchQueuePt();
        await timeout(1000);
        handleAnimationEnd();
    }

    const handleAnimationEnd = () => {
        setIsRotating(false);
    };

    const fetchQueuePt = async () => {
        await axios.get(`http://localhost:9090/appointment/getAllAppointments/${doctorDetails.departmentName}`)
            .then((response) => {
                setQueuedPt(response.data);
                // console.log(queuedPt);
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const deletePt = async () => {
        console.log("inside deletePt", appointmentId);
        await axios.delete(`http://localhost:9090/appointment/deleteAppointment/${appointmentId}`)
            .then((response) => {
                console.log("Delete successful");
                setCount(count + 1);
                navigate(`/doctor/consultationpage`);
            })
            .catch((error) => {
                console.log(`Error: ${error.message}`);
                console.error("There was an error!", error);
            })
    }

    useEffect(() => {
        fetchQueuePt()
    }, [count])

    return (
        <div className='absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 font-serif sm:px-2 sm:py-2 md:px-4 md:py-8 items-center justify-center float-right shadow-lg shadow-blue-500 shadow-opacity-70'>
            <div className='flex flex-row items-center space-x-2 px-8'>
                <h2 className='py-2 text-md'>Queued Patients</h2>
                <button onClick={handleClick}>
                    <FontAwesomeIcon icon={faArrowsRotate} className={`text-gray-600 ${isRotating ? "animate-spin" : ""}`} />
                </button>
            </div>
            <div className='border-b-2 border-gray-500'></div>
            {queuedPt.length ? (
                queuedPt.map((p, index) => {
                    return (
                        <div key={index} className='px-2 py-2 flex flex-row items-center justify-evenly '>
                            PatientId : {p.patientId}
                            <button
                                className="menu-item bg-green-400 hover:bg-green-600 rounded-lg px-2"
                                onClick={() => {
                                    appointmentId = p.appointmentId;
                                    localStorage.setItem("patientId", p.patientId);
                                    console.log("appointmentId: ", appointmentId);
                                    deletePt();
                                }}
                            >
                                Accept
                            </button>
                        </div>
                    );
                })
            ) : (
                <h1>No Patients Waiting</h1>
            )}
        </div>
    )
}

export default QueuedPatient