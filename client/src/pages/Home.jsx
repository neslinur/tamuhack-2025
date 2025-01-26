import EventCard from "../components/EventCard";
import { useState, useEffect } from "react";
import "../css/Home.css";


function Home() {
  const [events, setEvent]= useState([]);
  useEffect(() => {
    fetch("http://localhost:4090")
      .then((res) => res.json())
      .then((data) => setEvent(data), console.log(events))
      .catch((err) => console.log(err));
  }, []);


  return (
    <div className="home">
      <div className="home-header">
        <h1 className="home-title">Emergency Events</h1>
        <p className="home-subtitle">
          Stay informed about recent emergencies in your area
        </p>
      </div>
      <div className="events-grid">
        {events.map((event) => (
          <EventCard event={event} key={event.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
