import { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Status from "./pages/Status.jsx";
import Weapon from "./pages/Weapon.jsx";
import Cargo from "./pages/Cargo.jsx";
import Passengers from "./pages/Passengers.jsx";
import About from "./pages/About.jsx";

class App extends Component {
    render() {
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
                <li><NavLink to="/about">Cargo and Inventory</NavLink></li>
            </ul>
            <div className="content">
                <Route exact path="/" component={Home}/>
                <Route path="/status" component={Status}/>
                <Route path="/weapon" component={Weapon}/>
                <Route path="/cargo" component={Cargo}/>
                <Route path="/passengers" component={Passengers}/>
                <Route path="/about" component={About}/>
            </div>
          </div>
        </HashRouter>
      );
    }
  }

export default App;