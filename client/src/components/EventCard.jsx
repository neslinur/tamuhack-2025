import React from 'react'
import "../css/EventCard.css"
import { useNavigate } from 'react-router-dom'; // Import useNavigate



function EventCard({event}) {
    const navigate = useNavigate(); // Initialize navigate

    function onEventClick() {
        navigate(`/event/${event.id}`); // Navigate to the specific event page
    }

    return (
        <div className="event-card" onClick={onEventClick}>
            <div className="event-picture">
                <img src={event.url} alt={event.title}/>
                <div className="event-overlay">
                </div>
            </div>
            <div className="event-info">
                <h3>{event.title}</h3>
                <p>{event.time}</p>
            </div>
        </div>
    )
}

export default EventCard
