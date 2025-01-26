import EventCard from "../components/EventCard";
import { useState, useEffect } from "react";
import "../css/Home.css";

function Home() {
  useEffect(() => {
    fetch("http://localhost:4090")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);

  const events = [
    {
      id: 1,
      title: "Fire - Houston",
      time: "1 hour ago",
      url: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/rockcms/2025-01/250108-1920x1080-hollywood-hills-Sunset-Fire-helicopter-firefighting-ac-1107p-971930.jpg",
    },
    {
      id: 2,
      title: "Flood - Austin",
      time: "30 minutes ago",
      url: "https://publichealth.jhu.edu/sites/default/files/styles/article_feature/public/2024-07/flood-cat.jpg?h=6e972868&itok=ehw02rgv",
    },
    {
      id: 3,
      title: "Earthquake - Dallas",
      time: "1 day ago",
      url: "https://ca-times.brightspotcdn.com/dims4/default/21f650e/2147483647/strip/true/crop/5000x3333+0+0/resize/1200x800!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ffb%2F8c%2Fb6e8796e450885f50ea8bc22dbec%2Fap23037523545482.jpg",
    },
  ];
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
