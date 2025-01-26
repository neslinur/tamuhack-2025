import { Link } from 'react-router-dom';
import "../css/NavBar.css"


function NavBar() {
    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/" className="nav-link">LifeSaver App</Link>
        </div>
        <div className="navbar-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/event" className="nav-link">Event</Link>
            <Link to="/offerhelp" className="nav-link">Offer Help</Link>
        </div>
    </nav>
}

export default NavBar