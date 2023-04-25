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
//       end: '2023-03-26',
//     },
//     {
//       title: "Event2",
//       description: "eventtt2",
//       start: '2023-04-18',
//       end: '2023-04-18',
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
//                   <Popover.Panel className="fixed text-center z-70 w-64 p-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 bg-blue-50 rounded-lg shadow-lg ring-1 ring-black ring-opacity-75" position="fixed">
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


import { Calendar } from '@mui/lab';
import { AdapterDateFns } from '@mui/lab/dateAdapter/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateFnsUtils from '@date-io/date-fns';

function MyCalendar() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} utils={DateFnsUtils}>
      <Calendar />
    </LocalizationProvider>
  );
}

export default MyCalendar;
