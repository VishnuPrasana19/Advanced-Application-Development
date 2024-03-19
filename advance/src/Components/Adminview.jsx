import React from 'react';
import './Adminview.css';
import Sidebar from './Sidebar'; // Import your CSS file for styling

const ViewBookedEvents = () => {
  return (
    <div>
    <div><Sidebar/></div>
    <div className="admin-container">
      <h1>View Booked Events</h1>
      <div className="event-card">
        <div className="user-profile">
          <img src="https://static.vecteezy.com/system/resources/previews/029/271/069/original/avatar-profile-icon-in-flat-style-female-user-profile-illustration-on-isolated-background-women-profile-sign-business-concept-vector.jpg" alt="Profile Avatar" className="avatar" />
          <div className="user-details">
            <h2>User Name</h2>
            <p>Email: user@example.com</p>
            <p>Address: 123 Main Street</p>
          </div>
        </div>
        <div className="event-details">
          <p>Date: January 1, 2025</p>
          <p>Place: Event Venue</p>
          <p>Event Booked: Birthday Party</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ViewBookedEvents;
