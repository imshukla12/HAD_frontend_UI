import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const Appointment = () => {
  const patientDetails = JSON.parse(localStorage.getItem("patientDetails"))
  const [departments, setDepartments] = useState()
  const languages = ["English", "Spanish", "French", "German", "Japanese"]
  const [show, setShow] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenLang, setIsOpenLang] = useState(false)
  const [selectedDepartment, setSelectedDepartment] = useState("")
  const [selectedLanguage, setSelectedLanguage] = useState("")
  const [prevAppointment, setPrevAppointment] = useState("false")
  const [count, setCount] = useState(0)

  const toggleModal = () => {
    setShow(!show);
  };

  const handleSelectDepartment = (department) => {
    setSelectedDepartment(department);
    setIsOpen(false);
  };

  const handleSelectLanguage = (lang) => {
    setSelectedLanguage(lang);
    setIsOpenLang(false);
  };

  const fetchDept = async () => {
    await axios.get(`http://localhost:9090/department/getDepartment`)
      .then((response) => {
        setDepartments(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const fetchPrevAppointment = async () => {
    await axios
      .get(
        `http://localhost:9090/appointment/checkAppointments/${patientDetails.patientId}`
      )
      .then((response) => {
        setPrevAppointment(response.data)
      })
      .catch((error) => {
        console.log("error", error)
      });
  }

  const submitHandler = async (event) => {
    // setShow(!show)
    event.preventDefault()
    await axios.post(`http://localhost:9090/appointment/requestAppointment`, {
      appointmentTimestamp: new Date(),
      patientId: patientDetails.patientId,
      departmentName: selectedDepartment,
      preferredLanguage: selectedLanguage
    })
      .then((response) => {
        localStorage.setItem("appointmentId", response.data)
      })
      .catch((error) => {
        console.log(error)
      })
    setShow(!show)
  }

  const deletePrevAppointment = async () => {
    await axios
      .delete(
        `http://localhost:9090/appointment/deleteAppointmentByPatientId/${patientDetails.patientId}`
      )
      .then((response) => {
        setCount(count + 1);
      })
      .catch((error) => {
        console.log(`Error: ${error.message}`);
        console.error("There was an error!", error);
      });
  }

  useEffect(() => {
    fetchDept()
    fetchPrevAppointment()
  }, [count])

  return (
    <>
      {/* Button to open modal */}
      {prevAppointment ?
        <button
          className="bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={deletePrevAppointment}
        >
          Revoke Consultation
        </button>

        : <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={toggleModal}
        >
          Open Modal
        </button>
      }
      {/* Modal */}
      {show && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
              {/* Modal content */}
              <div className="bg-white p-4">
                <h2 className="text-xl font-bold mb-2">Apply for Consultation</h2>
                {/* department button */}
                <div className="relative flex flex-col items-center w-[340px] rounded-lg">
                  <button
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="p-4 bg-blue-100 w-full flex items-center justify-between font-serif text-lg rounded-lg border-4 border-transparent active:border-blue-100 duration-300"
                  >
                    {selectedDepartment ? selectedDepartment : "Select Department"}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {isOpen && (
                    <div className="bg-blue-50 mt-2 top-full flex flex-col items-start p-2 w-[340px] rounded-lg overflow-y-auto max-h-56">
                      {departments.map((department, i) => (
                        <div
                          key={i}
                          className="flex w-full justify-between hover:bg-blue-100 p-2 cursor-pointer"
                          onClick={() => handleSelectDepartment(department.departmentName)}
                        >
                          <h3>{department.departmentName}</h3>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                {/* language button */}
                <div className="relative flex flex-col items-center w-[340px] rounded-lg">
                  <button
                    onClick={() => setIsOpenLang((prev) => !prev)}
                    className="p-4 bg-blue-100 w-full flex items-center justify-between font-serif text-lg rounded-lg border-4 border-transparent active:border-blue-100 duration-300"
                  >
                    {selectedLanguage ? selectedLanguage : "Select Language"}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {isOpenLang && (
                    <div className="bg-blue-50 mt-2 top-full flex flex-col items-start p-2 w-[340px] rounded-lg overflow-y-auto max-h-56">
                      {languages.map((lang, i) => (
                        <div
                          key={i}
                          className="flex w-full justify-between hover:bg-blue-100 p-2 cursor-pointer"
                          onClick={() => handleSelectLanguage(lang)}
                        >
                          <h3>{lang}</h3>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2"
                  onClick={submitHandler}
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Appointment;
