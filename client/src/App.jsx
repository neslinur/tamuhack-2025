import Home from "./pages/Home";
import Event from "./pages/Event";
import OfferHelp from "./pages/OfferHelp";
import {Routes, Route} from "react-router-dom"
import NavBar from "./components/NavBar";
import "./css/App.css";

function App() {
  return (
    <div>
      <NavBar />
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/event" element={<Event />}/>
        <Route path="/offerhelp" element={<OfferHelp />}/>

      </Routes>
    </main>
    </div>
  );
}

export default App;
