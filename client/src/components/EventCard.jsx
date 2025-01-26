import React from "react";
import "../css/EventCard.css";
import { useNavigate } from "react-router-dom";

function EventCard({ event }) {
  const navigate = useNavigate();

  function onEventClick() {
    navigate(`/event/${event.id}`);
  }

  return (
    <div className="event-card" onClick={onEventClick}>
      <div className="event-picture">
        <img src={event.url || "/placeholder.svg"} alt={event.title} />
        <div className="event-overlay">
          <h3>{event.title}</h3>
        </div>
      </div>
      <div className="event-info">
        <h3>{event.title}</h3>
        <p className="event-time">{event.time}</p>
      </div>
    </div>
  );
}

export default EventCard;
