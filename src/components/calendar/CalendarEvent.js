import React from 'react'

export const CalendarEvent = ({event}) => {
    
    const { title, user } = event;

    return (
        <div>
            <strong>{title}</strong>
            <p>{ user.name }</p>
        </div>
    )
}
