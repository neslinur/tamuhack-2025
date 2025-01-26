import "../css/Event.css";
import { useParams } from "react-router-dom";

function Event() {
  const { id } = useParams();

  return (
    <div>
      <h1>Event Details</h1>
      <p>You are viewing details for event ID: {id}</p>
      {/* You can fetch or display event details based on the ID */}
    </div>
  );
}

export default Event;
