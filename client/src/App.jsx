import Home from "./pages/Home";
import Event from "./pages/Event";
import OfferHelp from "./pages/OfferHelp";
import {Routes, Route} from "react-router-dom"
import NavBar from "./components/NavBar";
import "./css/App.css";
import Housing from "./pages/Housing";
import Resources from "./pages/Resources";

function App() {
  return (
    <div>
      <NavBar />
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/event/:id" element={<Event />}/>
        <Route path="/offerhelp" element={<OfferHelp />}/>
        <Route path="/offerhelp/1" element={<Housing />}/>
        <Route path="/offerhelp/2" element={<Resources />}/>
      </Routes>
    </main>
    </div>
  );
}

export default App;
