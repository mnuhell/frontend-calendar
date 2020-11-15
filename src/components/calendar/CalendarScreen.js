import React, { useState }from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { Navbar } from '../ui/Navbar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { messages } from '../helpers/calendar-messages-es';
import 'moment/locale/es';
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';

moment().locale('es');
const localizer = momentLocalizer(moment);


const eventStyleGetter = (event, start, end, isSelected) => {
    
    const style = {
        backgroundColor: 'red',
        borderRadius: '0px',
        opacity: 0.8,
        display: 'block',
        color: 'white'
    }

    return {
        style
    }
}

const events = [{
    title: 'Dia del jefe',
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate(),
    bgcolor: '#000',
    user: {
        _uid: 12121,
        name: 'Manuel'
    }
}]

export const CalendarScreen = () => {

    const [lastView, setlastView] = useState(localStorage.getItem('lastView') || 'month')

    const onDoubleClick = (e) => {
        console.log( e)
    }

    const onSelectEvent = (e) => {

        console.log(e)
    }

    const onViewChange = (e) => {
        setlastView(e)
        localStorage.setItem('lastView', e)
    }

    return (
        <div className="calendar-screen">
            <Navbar />
            
            <Calendar
                localizer={localizer}
                events={ events }
                startAccessor="start"
                endAccessor="end"
                messages={messages}
                eventPropGetter={eventStyleGetter}
                onDoubleClickEvent={onDoubleClick}
                onSelectEvent={onSelectEvent}
                onView={onViewChange}
                view={ lastView }
                components={{
                    event: CalendarEvent
                }}
            />

            <CalendarModal />
        </div>

    )
}
