import "../css/Event.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import EventCard from "../components/EventCard";

function Event() {
  const { id } = useParams();
  const [event, setEvent] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4090/houses")
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
      <p>You are viewing details for event ID: {id}</p>
      {/* You can fetch or display event details based on the ID */}
      <div>House: Austin,Tx - Capacity: 6 - Contact info: 555-5555
      </div>
      <img src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
      <div>Food available</div>
      <div>Clothing available</div>
      <p>{event}</p>
    </div>
  );
}

export default Event;
