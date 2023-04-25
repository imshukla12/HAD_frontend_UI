import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons'

const FileUpload = () => {

  const [isRotating, setIsRotating] = useState(false)

  function timeout(delay) {
    return new Promise(res => setTimeout(res, delay))
  }
  const handleClick = async () => {
    setIsRotating(true)
    // await fetchQueuePt()
    await timeout(1000)
    handleAnimationEnd()
  }

  const handleAnimationEnd = () => {
    setIsRotating(false)
  }

  const handleFileUpload = (event) => {
    const files = event.target.files;
    console.log(files)
  }

  return (
    <div className="w-full h-screen flex flex-col">
      <div className="flex flex-col items-center justify-center space-y-8 p-8">
        <p className="font-serif text-2xl font-bold text-blue-900">Upload Records</p>
        <label
          className="w-44 flex flex-col items-center px-4 py-4 bg-white text-blue-600 rounded-lg shadow-lg tracking-wide uppercase border border-blue-600 cursor-pointer hover:bg-blue-600 hover:text-white"
        >
          <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path
              d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"
            />
          </svg>
          <span className="font-serif text-lg">Select a file</span>
          <input type="file" className="hidden" onChange={handleFileUpload} multiple />
        </label>
      </div>
      <div className="p-4">
        <div className=" flex flex-col border-2 rounded-lg border-blue-300 items-center justify-center p-4">
          <div className='flex flex-row items-center space-x-2 px-8'>
            <h2 className='py-2 text-md font-serif'>Uploaded Records</h2>
            <button onClick={handleClick}>
              <FontAwesomeIcon icon={faArrowsRotate} className={`text-gray-600 ${isRotating ? "animate-spin" : ""}`} />
            </button>
          </div>
          <div className="flex items-center justify-center space-y-4"><p className="text-sm text-zinc-400 font-serif">No records found</p></div>
        </div>
      </div>
    </div>
  );
}

export default FileUpload;
