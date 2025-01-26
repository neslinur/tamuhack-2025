import React from "react";
import "../css/EventCard.css";
import { useNavigate } from "react-router-dom";

function EventCard({ event }) {
  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const navigate = useNavigate()
  const date = event.time.split("T")[0];

  function onEventClick() {
    navigate(`/event/${event.event_id}`);
  }

  return (
    <div className="event-card" onClick={onEventClick}>
      <div className="event-picture">
        <img src={event.img || "/placeholder.svg"} alt={event.title} />
        <div className="event-overlay">
        </div>
      </div>
      <div className="event-info">
        <h3>{event.location} - {capitalizeFirstLetter(event.type)}</h3>
        <p className="event-time">{date}, {event.location}</p>
      </div>
    </div>
  );
}

export default EventCard;
