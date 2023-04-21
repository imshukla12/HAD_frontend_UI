import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
// import '@fullcalendar/core/main.css';
// import '@fullcalendar/daygrid/main.css';

function Calendar() {
  return (
    <div className="w-64 h-64 bg-gray-100 rounded-lg shadow">
      <FullCalendar
        className="bg-white rounded-lg shadow"
        aspectRatio={1}
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        events={[
          // add your events here
        ]}
      />
    </div>
  );
}

export default Calendar;