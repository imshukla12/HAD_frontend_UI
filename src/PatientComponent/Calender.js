// import React, { useState } from 'react'
// import FullCalendar from '@fullcalendar/react' 
// import dayGridPlugin from '@fullcalendar/daygrid'
// import { Popover } from '@headlessui/react'
// import './Calendar.css'

// const Calender = () => {
//   const [events, setEvents] = useState([
//     {
//       title: "Event1",
//       description: "event111",
//       start: '2023-03-26',
//       // end: '2023-03-26',
//     },
//     {
//       title: "Event2",
//       description: "eventtt2",
//       start: '2023-04-18',
//       // end: '2023-04-18',
//     },
//   ]);

//   return (
//     <div className='container mx-auto font-serif' style={{ height: "100%", width: "100%", marginTop: "0" }}>
//       <FullCalendar
//         plugins={[dayGridPlugin]}
//         initialView="dayGridMonth"
//         headerToolbar={{
//           left: 'title',
//           right: 'prevYear,prev,next,nextYear'
//         }}
//         backgroundColor='#ffffff'
//         events={events}
//         eventBackgroundColor='#172554'
//         eventDisplay='background'
//         // height={"auto"}
//         aspectRatio={1}
//         contentHeight={'auto'}
//         weekNumberCalculation={'auto'}
//         buttonIcons={{
//           prevYear: 'chevrons-left', 
//           nextYear: 'chevrons-right' 
//         }}
//         themeSystem={'standard'}
//         showNonCurrentDates={false}
//         eventDidMount={(info) => {
//           const popover = document.querySelector(`[aria-describedby='${info.event.id}']`);
//           if (popover) {
//             popover.classList.add("popoverStyle");
//             popover.style.zIndex = 1000;  
//           }
//         }}
//         eventContent={(eventInfo) => {
//           return (
//             <Popover className="relative">
//               {({ open }) => (
//                 <>
//                   <Popover.Button className="inline-flex justify-center w-full text-sm font-medium text-blue-950 hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-0">
//                     {eventInfo.event.title}
//                   </Popover.Button>
//                   <Popover.Panel className="absolue text-center z-70 w-44 p-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 bg-blue-50 rounded-lg shadow-lg ring-1 ring-black ring-opacity-75" position="absolute">
//                     <p>{eventInfo.event.extendedProps.description}</p>
//                   </Popover.Panel>
//                 </>
//               )}
//             </Popover>
//           );
//         }}
//       />
//     </div>
//   )
// }

// export default Calender


// import { Calendar } from '@mui/lab';
// import { AdapterDateFns } from '@mui/lab/dateAdapter/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import DateFnsUtils from '@date-io/date-fns';

// function MyCalendar() {
//   return (
//     <LocalizationProvider dateAdapter={AdapterDateFns} utils={DateFnsUtils}>
//       <Calendar />
//     </LocalizationProvider>
//   );
// }

// export default MyCalendar;

import React, { useEffect, useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import Modal from 'react-modal';
import './Calendar.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { responsiveFontSizes } from '@mui/material';
// import { useToasts } from 'react-toast-notifications';

Modal.setAppElement('#root');

const Calendar = () => {

  const patient = JSON.parse(localStorage.getItem("patientDetails"))
  const patientId = patient.patientId
  const [events, setEvents] = useState([])
  // const [events, setEvents] = useState([
  //   {
  //     title: "Event1",
  //     description: "event111",
  //     start: '2023-03-26',
  //   },
  //   {
  //     title: "Event2",
  //     description: "eventtt2",
  //     start: '2023-04-18',
  //   },
  // ]);

  // const { addToast } = useToasts()
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  // const [toast, setToast] = useState(false)

  const handleEventClick = (info) => {
    setSelectedEvent(info.event);
    setModalIsOpen(true);
  };

  const handleModalClose = () => {
    setModalIsOpen(false);
    setSelectedEvent(null);
  };

  const handleButton = () => {
    handleModalClose()
    // addToast('Successfully added.', {
    //   appearance: 'success',
    //   autoDismiss: true,
    // })
    // toast('Successfully added.');
    alert("added to calender")
    // setToast(true)
  }

  const fetchFollowUp = async() => {
    await axios.get(`http://localhost:9090/patient/getFollowUp/${patientId}`)
    .then((response) => {
      const formattedEvents = response.data.map((event) => ({
        title: `${event.departmentName}`,
        start: event.followUpDate,
        description: event.observation,
        id: Math.random().toString(36).substring(7),
      }));
      setEvents(formattedEvents)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  useEffect(() => {
    fetchFollowUp()
  },[])

  return (
    <div className='container mx-auto font-serif' style={{ height: "100%", width: "100%", marginTop: "0" }}>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: 'title',
          right: 'prevYear,prev,next,nextYear'
        }}
        // backgroundColor='#ffffff'
        events={events}
        // eventBackgroundColor='#172554'
        // eventDisplay='background'
        aspectRatio={1}
        contentHeight={'auto'}
        weekNumberCalculation={'auto'}
        buttonIcons={{
          prevYear: 'chevrons-left',
          nextYear: 'chevrons-right'
        }}
        themeSystem={'standard'}
        showNonCurrentDates={false}
        eventDidMount={(info) => {
          const popover = document.querySelector(`[aria-describedby='${info.event.id}']`);
          if (popover) {
            popover.classList.add("popoverStyle");
            popover.style.zIndex = 1000;
          }
        }}
        eventContent={(eventInfo) => {
          return (
            <div
              className="inline-flex justify-center w-full text-sm font-medium text-blue-950 hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-0"
              onClick={() => handleEventClick(eventInfo)}
            >
              {eventInfo.event.title}
            </div>
          );
        }}
      />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleModalClose}
        shouldCloseOnOverlayClick={true}
        className="bg-white border-2 border-blue-200 p-4 rounded-md shadow-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        overlayClassName="fixed z-10 inset-0 bg-blue-50 bg-opacity-80"
      >
        {selectedEvent && (
          <div className='flex flex-col justify-center items-center space-y-2'>
            <h2 className="text-2xl font-bold mb-2">{selectedEvent.title}</h2>
            <p>{selectedEvent.extendedProps.description}</p>
            <button type='submit' className='bg-blue-400 rounded-lg px-2 py-2' onClick={handleButton}>Add to google Calender</button>
          </div>
        )}
      </Modal>
      {/* {toast && (<div id="toast-default" class="flex items-center w-full max-w-xs p-4 text-gray-500 bg-blue-100 rounded-lg shadow dark:text-gray-400 dark:bg-white" role="alert">
        <div class="ml-3 text-sm font-normal">successfully added.</div>
        <button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-default" aria-label="Close">
          <span class="sr-only">Close</span>
          <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
      </div>)} */}
    </div>
  )
}

export default Calendar;
