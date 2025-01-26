import { Link } from "react-router-dom";
import "../css/NavBar.css";
import { useState, useEffect } from "react";

function NavBar() {
  const [userLocation, setUserLocation] = useState(null);
 
  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    }
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="head-nav-link">
          LifeSaver
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/offerhelp" className="nav-link">
          Offer Help
        </Link>
      </div>
      {/* delete later */}
      <div>
        {userLocation && (
          <div>
            <h2>User Location</h2>
            <p>Latitude: {userLocation.latitude}</p>
            <p>Longitude: {userLocation.longitude}</p>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
