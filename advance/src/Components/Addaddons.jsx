import React, { useState } from 'react';
import './AddOns.css'; // Import your CSS file for styling
import Sidebar from './Sidebar';

const AddOns = () => {
  const [addOnData, setAddOnData] = useState({
    addOnName: '',
    price: '',
    imageUrl: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddOnData({
      ...addOnData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(addOnData);
    // Reset form fields
    setAddOnData({
      addOnName: '',
      price: '',
      imageUrl: '',
    });
  };

  return (
    <div>
    <div><Sidebar/></div>
    <div className="add-ons-container">
      <h1>Add Add-Ons</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="addOnName">Add-Ons Name</label>
          <input type="text" id="addOnName" name="addOnName" value={addOnData.addOnName} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input type="text" id="price" name="price" value={addOnData.price} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="imageUrl">Image URL</label>
          <input type="text" id="imageUrl" name="imageUrl" value={addOnData.imageUrl} onChange={handleChange} />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default AddOns;
