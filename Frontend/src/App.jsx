import { Route, Routes, NavLink, HashRouter } from "react-router-dom";
import Navigation from "./pages/Navigation.jsx";
import Status from "./pages/Status.jsx";
import Weapon from "./pages/Weapon.jsx";
import Cargo from "./pages/Cargo.jsx";
import Passengers from "./pages/Passengers.jsx";
import About from "./pages/About.jsx";
import './App.css';

function App() {
  return (
      <HashRouter>
      <div className="App">
        <h1>SSV Normandy Control Interface</h1>
        <ul className="header">
            <li><NavLink to="/">Navigation</NavLink></li>
            <li><NavLink to="/status">Status/Monitoring</NavLink></li>
            <li><NavLink to="/weapon">Weapon and Defense Systems</NavLink></li>
            <li><NavLink to="/cargo">Cargo and Inventory</NavLink></li>
            <li><NavLink to="/passengers">Passengers</NavLink></li>
            <li><NavLink to="/about">About the Ship</NavLink></li>
        </ul>
        <div className="content">
        <Routes>
            <Route path="/" element={<Navigation />} />
            <Route path="/status" element={<Status />} />
            <Route path="/weapon" element={<Weapon />} />
            <Route path="/cargo" element={<Cargo />} />
            <Route path="/passengers" element={<Passengers />} />
            <Route path="/about" element={<About />} />
        </Routes>
        </div>
        <div className="centered">Made for GCS Aksantara by 13523011</div>
      </div>
    </HashRouter>
  )
}

export default App
