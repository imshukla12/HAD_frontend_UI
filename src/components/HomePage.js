import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import Stepper from "./StepperHomePage/Stepper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";
import {
  faComments,
  faEnvelope,
  faHeartPulse,
  faIndianRupeeSign,
  faPhone,
  faStethoscope,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";


const HomePage = () => {

  const navigate = useNavigate()
  const [totalConsult, setTotalConsult] = useState(0)
  const [onlineDr, setOnlineDr] = useState(0)
  const [count, setCount] = useState(0)
  const [countDr, setCountDr] = useState(0)

  const getStarted = () => {
    navigate('/login');
  }

  const fetchTotalConsult = async () => {
    await axios.get(`http://localhost:9090/consultation/getAllConsultationsCount`)
      .then((response) => {
        // console.log("response",response.data)
        setTotalConsult(response.data)
        // console.log("totalConsult",totalConsult)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const fetchOnlineDr = async () => {
    await axios.get(`http://localhost:9090/OnlineDoctors/totalOnline`)
      .then((response) => {
        setOnlineDr(response.data)
        // console.log("onlineDr",onlineDr)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    fetchTotalConsult()
    fetchOnlineDr()
    const countIntervalId = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= totalConsult) {
          clearInterval(countIntervalId);
          return prevCount;
        } else {
          return prevCount + 1;
        }
      });
    }, 50);

    const onlineDrIntervalId = setInterval(() => {
      setCountDr((prevCount) => {
        if (prevCount >= onlineDr) {
          clearInterval(onlineDrIntervalId);
          return prevCount;
        } else {
          return prevCount + 1;
        }
      });
    }, 50);

    return () => {
      clearInterval(countIntervalId);
      clearInterval(onlineDrIntervalId);
    };
  }, [totalConsult, onlineDr])

  // useEffect(() => {
  //   fetchTotalConsult()
  //   fetchOnlineDr()
  // },[])

  return (
    <div class="md:flex md:flex-col">
      {/* NavBar  */}
      <NavBar />
      {/* Page-1  */}
      <div class="bg-blue-900 p-4 md:flex md:flex-row">
        <div class="md:flex-1 md:w-1/2 p-4 md:flex md:flex-col md:items-center md:justify-center">
          <p class="text-white font-serif md:text-center">
            <span class="md:text-4xl leading-60 font-normal">
              Welcome to our
            </span>
            <br />
            <span class="md:text-4xl leading-60 font-normal">
              Tele-Consultation Platform
            </span>
            <br />
            <span class="md:text-lg leading-36">
              where healthcare meets convenience
            </span>
          </p>
          <div className="flex md:order-2 p-4">
            <button
              type="button"
              className="w-40 text-white bg-red-500 hover:bg-red-700 font-serif text-xl rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 transform transition duration-300 hover:scale-110"
              onClick={getStarted}
            >
              LogIn/SignUp
            </button>
          </div>
        </div>
        <div class="md:flex-1 md:w-1/2 p-4 md:flex md:items-center md:justify-center">
          <img
            src="./images/img1.png"
            alt="main-img1"
            class="max-h-full max-w-full"
          />
        </div>
      </div>
      {/* Page-2 */}
      <div class="md:flex md:flex-col md:h-full md:justify-between p-4">
        <div class="h-1/3 flex md:justify-center md:items-center">
          <h1 class="font-serif font-normal font-400 text-5xl md:text-5xl lg:text-7xl md:text-center md:justify-center text-blue-950 p-4">
            Why E-Aarogya?
          </h1>
        </div>
        <div className="p-10">
          <div class="md:h-1/3 md:flex md:flex-row md:justify-evenly md:items-center">
            <div class="md:flex md:flex-col md:items-center ">
              <div class="bg-blue-900 md:w-44 md:h-44 rounded-full md:flex md:items-center md:justify-center ">
                <FontAwesomeIcon
                  icon={faHeartPulse}
                  className="fa-5x"
                  style={{ color: "#ffffff" }}
                />
              </div>
              <p class="font-serif font-normal font-400 md:text-center text-blue-980 text-xl p-2">
                Online OPD
              </p>
            </div>
            <div class="md:flex md:flex-col md:items-center">
              <div class="bg-blue-900 md:w-44 md:h-44 rounded-full md:flex md:items-center md:justify-center ">
                <FontAwesomeIcon
                  icon={faClock}
                  className="fa-5x"
                  style={{ color: "#ffffff" }}
                />
              </div>
              <p class="font-serif font-normal font-400 md:text-center text-blue-980 text-xl p-2">
                Real Time Tele-medicine
              </p>
            </div>
            <div class="flex flex-col items-center">
              <div class="bg-blue-900 md:w-44 md:h-44 rounded-full md:flex md:items-center md:justify-center ">
                <FontAwesomeIcon
                  icon={faVideo}
                  className="fa-5x"
                  style={{ color: "#ffffff" }}
                />
              </div>
              <p class="font-serif font-normal font-400 md:text-center text-blue-980 text-xl p-2">
                Video Consultations
              </p>
            </div>
          </div>
        </div>
        <div class="p-10">
          <div class="md:h-1/3 md:flex md:flex-row md:justify-evenly md:items-center">
            <div class="md:flex md:flex-col md:items-center">
              <div class="bg-blue-900 md:w-44 md:h-44 rounded-full md:flex md:items-center md:justify-center ">
                <FontAwesomeIcon
                  icon={faComments}
                  className="fa-5x"
                  style={{ color: "#ffffff" }}
                />
              </div>
              <p class="font-serif font-normal font-400 md:text-center text-blue-980 text-xl p-2">
                Chat
              </p>
            </div>
            <div class="md:flex md:flex-col md:items-center">
              <div class="bg-blue-900 md:w-44 md:h-44 rounded-full md:flex md:items-center md:justify-center ">
                <FontAwesomeIcon
                  icon={faStethoscope}
                  className="fa-5x"
                  style={{ color: "#ffffff" }}
                />
              </div>
              <p class="font-serif font-normal font-400 md:text-center text-blue-980 text-xl p-2">
                Best Medical Specialists
              </p>
            </div>
            <div class="md:flex md:flex-col md:items-center">
              <div class="bg-blue-900 md:w-44 md:h-44 rounded-full md:flex md:items-center md:justify-center ">
                <FontAwesomeIcon
                  icon={faIndianRupeeSign}
                  className="fa-5x"
                  style={{ color: "#ffffff" }}
                />
              </div>
              <p class="font-serif font-normal font-400 md:text-center text-blue-980 text-xl p-2">
                Free Service
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Page-3 */}
      <div className="bg-gray-950 flex flex-row justify-evenly items-center">
        <div className="mt-8 mb-8 w-1/3">
          <p className="font-serif text-lg text-white mb-8 text-center">Steps for Consultation</p>
          <Stepper />
        </div>
        <div className="flex-col justify-evenly items-center w-2/3">
          <div className="flex flex-row items-center justify-evenly">
            <div class="bg-white font-serif md:w-60 md:h-40 rounded-lg md:flex md:flex-col md:items-center md:justify-center shadow-xl transform transition duration-300 hover:scale-110">
              <p className="text-7xl text-bold">{count}</p>
              <p>Total Consultations</p>
            </div>
            <div class="bg-white font-serif md:w-60 md:h-40 rounded-lg md:flex md:flex-col md:items-center md:justify-center shadow-xl transform transition duration-300 hover:scale-110">
              <p className="text-7xl text-bold">{countDr}</p>
              <p>Online Doctorrs</p>
            </div>
          </div>
          <div className="ml-4 mt-14 flex flex-row justify-evenly p-8">
            <div>
              <button
                type="button"
                className="w-36 text-black bg-white hover:bg-green-400 font-serif text-xl rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 transform transition duration-300 hover:scale-125"
                onClick={getStarted}
              >
                Get started
              </button>
            </div>
            <div className="flex flex-col justify-evenly space-y-8">
              <div className="flex flex-row font-serif space-x-4 items-center">
                <FontAwesomeIcon icon={faEnvelope} beat style={{ color: "#ffffff", }} />
                <p className="text-white text-lg">eaarogya@gmail.com</p>
              </div>
              <div className="flex flex-row font-serif space-x-4 items-center">
                <FontAwesomeIcon icon={faPhone} beat style={{ color: "#ffffff", }} />
                <p className="text-white text-lg">7020744562</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
