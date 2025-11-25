import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { addHours } from 'date-fns'
// Asumo que corriges el nombre a Navbar

import './calendar-styles.css'; // Importaremos nuestros estilos personalizados aquí
import { Navar } from '../index';
import './calendar-styles.css';
import { localizer } from '../../helpers/calendarLocalizer';
import { getMessages } from '../../helpers/getMessages';
import { CalendarEvent } from '../components/CalendarEvent';
import { useState } from 'react';


// 2. Traducción de los botones y textos del calendario


const events = [
  {
    title: 'Cumpleaños del jefe',
    notes: 'Hay que comprar el pastel',
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: '#fafafa',
    user: {
      _id: '123',
      name: 'Fernando'
    }
  }
]

export const CalendarPages = () => {

  const [lastView,seletView] = useState(localStorage.getItem('lastView')||'week');

  // 3. Estilo personalizado para cada evento (la cajita de color)
  const eventStyleGetter = (_event: any, _start: Date, _end: Date, _isSelected: boolean) => {
    const style = {
      backgroundColor: '#347CF7', // Azul estilo iOS/Mac
      borderRadius: '5px',
      opacity: 0.8,
      color: 'white',
      border: '0px',
      display: 'block'
    }

    return {
      style
    }
  }

  const onDoubleClick = (event:any)=>{
    console.log({doubleClick:event});
  }

  const Onselect = (event:any) =>{
    console.log({click: event});
  }

  const onViewChange = ( event:any )=>{
    console.log({viewChanged: event});
    localStorage.setItem('lastview', event)
    seletView(event);
    
  }


  return (
    // LAYOUT PRINCIPAL: h-screen para ocupar toda la pantalla y overflow-hidden para evitar scroll
    <div className="h-screen flex flex-col overflow-hidden bg-gray-50">

      <Navar />
      <div className="flex-grow p-5 mt-16 w-full h-full relative">
        <div className="bg-white rounded-2xl shadow-xl h-full p-4 border border-gray-100">
          <Calendar
            culture='es' // Definimos la cultura a español
            localizer={localizer}
            events={events}
            defaultView ={lastView}
            startAccessor="start"
            endAccessor="end"
            messages={getMessages} // Pasamos las traducciones
            eventPropGetter={eventStyleGetter}
            components={{
              event: CalendarEvent
            }}
            onDoubleClickEvent={onDoubleClick}
            onSelectEvent={Onselect}
            onView={onViewChange}

          />
        </div>
      </div>
    </div>
  )
}