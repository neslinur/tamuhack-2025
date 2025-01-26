import React from 'react'
import "../css/EventCard.css"


function EventCard({event}) {

    function onEventClick() {
        alert("clicked")
    }

    return (
        <div className="event-card">
            <div className="event-picture">
                <img src={event.url} alt={event.title}/>
                <div className="event-overlay">
                    <button className="event-btn" onClick={onEventClick}>
                        Get Help
                    </button>
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
