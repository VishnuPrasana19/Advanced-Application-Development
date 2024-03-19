import React from 'react';
import './Sidebar.css'; // Import your CSS file for styling
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <div className="sidebar-container">
    <div className="welcome-admin"><b>Welcome, Admin</b></div>
      <div className="sidebar-header">Dashboard</div>
      <ul className="sidebar-menu">
      <Link to="/addtheme">
        <li className="sidebar-item">Add-Themes</li></Link>
        <Link to="/edittheme">
        <li className="sidebar-item">Edit-Themes</li></Link>
        <Link to="/add-add-ons">
        <li className="sidebar-item">Add-Add-ons</li></Link>
        <Link to="/edit-add-ons">
        <li className="sidebar-item">Edit-Add-ons</li></Link>
        <Link to="/adminview">
        <li className="sidebar-item">View Booked Events</li></Link>
        
      </ul>
      <Link to="/">
      <button className="logo-button">Logout</button></Link>
    </div>
  );
};

export default Sidebar;
