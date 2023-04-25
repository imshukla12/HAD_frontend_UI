import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import Stepper from "./StepperHomePage/Stepper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import {
  faComments,
  faHeartPulse,
  faIndianRupeeSign,
  faStethoscope,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";


const HomePage = () => {
  
  const navigate = useNavigate();

  const getStarted = () =>{
    navigate('/login');
  }

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
      <div className="bg-black flex flex-row justify-evenly items-center">
        <div className="flex-col justify-evenly items-center">
          <div className="flex flex-row items-center">
            <div class="bg-blue-900 md:w-44 md:h-44 rounded-full md:flex md:items-center md:justify-center ">
              <FontAwesomeIcon
                icon={faComments}
                className="fa-5x"
                style={{ color: "#ffffff" }}
              />
            </div>
            <div class="bg-white md:w-44 md:h-44 rounded-full md:flex md:items-center md:justify-center ml-40">
              <p className="font-serif text-blue-700">10</p>
              <br/>
              <p className="font-serif text-blue-700">Online Doctors</p>
            </div>
          </div>
          <div className="ml-4 mt-14 justify-center">
            <button
              type="button"
              className="w-36 text-black bg-white hover:bg-red-400 font-serif text-xl rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 transform transition duration-300 hover:scale-125"
              onClick={getStarted}
            >
              Get started
            </button>
          </div>
        </div>
        <div className="mt-8 mb-8">
          <p className="font-serif text-lg text-white mb-8">Steps for Consultation</p>
          <Stepper />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
