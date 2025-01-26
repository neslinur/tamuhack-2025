import "../css/Event.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Event() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  useEffect(() => {
    fetch("http://localhost:4090")
      .then((res) => res.json())
      .then(
        (data) => (
          setEvent(data[0].event_id), console.log(data), console.log(event)
        )
      )
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Event Details</h1>
      <p>You are viewing details for event ID: {event}</p>
      {/* You can fetch or display event details based on the ID */}
      <p>{event}</p>
    </div>
  );
}

export default Event;
