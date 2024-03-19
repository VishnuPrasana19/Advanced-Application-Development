// ViewBookedEvents.jsx

import React from 'react';
import './ViewBookedEvents.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

function ViewBookedEvents() {
  return (
    <div>
    <div><Navbar/></div>
    <div className="view-booked-events-container">
      <h1>View Booked Events</h1>
      <table className="event-table">
        <thead>
          <tr>
            <th>Event Name</th>
            <th>Place</th>
            <th>Date</th>
            <th>Time</th>
            <th>Total Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Sample data, replace with actual booked events data */}
          <tr>
            <td>John's Birthday Party</td>
            <td>Main Hall</td>
            <td>2024-05-20</td>
            <td>15:00</td>
            <td>$500</td>
            <td>
              <span className="edit-icon">&#9998;</span>
              <span className="delete-icon">&#128465;</span>
            </td>
          </tr>
          <Link to="/book">
          <button className="class-button">Back</button></Link>
          {/* Add more rows for additional booked events */}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default ViewBookedEvents;
