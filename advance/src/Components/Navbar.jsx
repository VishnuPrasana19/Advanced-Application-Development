import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/home" className="navbar-link">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/book" className="navbar-link">Book Themes</Link>
          </li>
          <li className="navbar-item">
            <Link to="/view" className="navbar-link">View Booked Themes</Link>
          </li>
          <li className="navbar-item logout">
          <Link to="/">
          <button className="logout-button">Logout</button></Link>
          </li>
          </ul>
          </nav>
          </div>
          );
        }
        
        export default Navbar;
        
        // <li className="navbar-item">
        //   <Link to="/viewbookedthemes" className="navbar-link">View Booked Themes</Link>
        // </li>