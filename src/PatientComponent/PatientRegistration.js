import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareMinus, faSquarePlus } from '@fortawesome/free-solid-svg-icons';

const PatientRegistration = () => {
    return (
        <div className='w-full p-8 items-center justify-center'>
            <form className='p-8 items-center justify-evenly'>
                <div class="grid md:grid-cols-3 md:gap-6 align-center justify-center">
                    <div class="relative z-0 w-full mb-6 group" >
                        {/* <label for="Title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label> */}
                        <select id="Title" class=" text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white">
                            <option>Title</option>
                            <option>Mr</option>
                            <option>Miss</option>
                            <option>Mrs</option>
                        </select>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="text" name="FirstName" id="FirstName" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="FirstName" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Firstname</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="text" name="LastName" id="LastName" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="LastName" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Lastname</label>
                    </div>

                </div>
                <div class="relative z-0 w-full mb-6 group">
                    <input type="text" name="symptom" id="symptom" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="symptom" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Symptom</label>
                </div>
                <div className='grid grid-cols-5 gap-4'>
                    <div class="col-span-4 grid md:grid-cols-3 md:gap-6" style={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gridColumnGap: "1.5rem" }}>
                        <div class="relative z-0 w-full mb-6 group" style={{ gridColumn: "1/3" }}>
                            <input type="text" name="Medicine" id="Medicine" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="Medicine" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Medicine</label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group" style={{ gridColumn: "3/5" }}>
                            <input type="text" name="Dosagee" id="Dosagee" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="Dosagee" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Dosage</label>
                        </div>
                        {/* <div class="relative z-0 w-full mb-6 group">
                            <div class="inline-block relative w-full">
                                <select class="block appearance-none w-full bg-transparent border border-gray-300 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline">
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                </select>
                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M14.706 7.706a1 1 0 00-1.414-1.414L10 9.586 6.708 6.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l4-4z" /></svg>
                                </div>
                            </div>
                        </div> */}
                        <div>
                            <label for="Title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                            <select id="Title" class=" text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white">
                                <option>Title</option>
                                <option>Mr</option>
                                <option>Miss</option>
                                <option>Mrs</option>
                            </select>
                        </div>
                    </div>
                    <div className='col-span-1'>
                        <button><FontAwesomeIcon icon={faSquarePlus} size='2xl' style={{ color: "#0c4ab6", }} /></button>
                    </div>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                    <input type="text" name="Remarks" id="Remarks" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="Remarks" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Remarks</label>
                </div>
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
        </div>
    )
}

export default PatientRegistration