import React from 'react';
import '../styles/header.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";
import Home from './home';
import { ImHome, ImMap, ImAirplane, ImSearch } from "react-icons/im";
import { GiWorld, GiBookshelf } from "react-icons/gi";
import { BsQuestionCircleFill } from "react-icons/bs";
import { FaGlobeAmericas, FaGlobeAsia, FaGlobeAfrica, FaGlobeEurope } from 'react-icons/fa'
import WorldmapApp from './worldmap';




function WorldlaHeaderOG() {
  return (
    <div>
      <h1 className="logoHeader">Worldla</h1>
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="#lay1">How to Use</a></li>
        </ul>
    </div>
  )
}




// TODO Footer

function WorldlaHeader() {
  return (
    <Router>
      <nav className="backgroundGrad">
        <h1 className="logoHeader"><FaGlobeAmericas/> Worldla</h1>
        <Link to='/'><ImHome/> Home</Link>
        <Link to='/app'><ImMap/> Map</Link>
        <Link to='/resources'><GiBookshelf/> Resources</Link>
        <Link to='/about'><BsQuestionCircleFill/> About</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/app' element={<WorldmapApp/> }/>
        <Route path='/resources'/>
        <Route path='/about'/>
        {/* Redirect back to home */}
        <Route path='*' element={<Navigate to='/'/> }/>
      </Routes>


      <footer>
        
      </footer>
    </Router>
  )
}

export default WorldlaHeader;