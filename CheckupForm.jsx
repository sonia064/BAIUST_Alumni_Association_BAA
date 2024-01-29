import React, { useState } from 'react';
import './CheckupForm.css'; 

const CheckupForm = ({ onClose, onCheckupSubmit }) => {
  const [name, setName] = useState('');
  const [baiustId, setBaiustId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform any additional validation if needed

    // Call the onCheckupSubmit function with the form data
    onCheckupSubmit({ name, baiustId });

    // Close the form
    onClose();
  };

  return (
    <div className="checkup-form-container">
      <div className="checkup-form-header">
        <h3>Details Check</h3>
        <button onClick={onClose} className="close-btn">
          X
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="baiustId">BAIUST ID:</label>
        <input
          type="text"
          id="baiustId"
          value={baiustId}
          onChange={(e) => setBaiustId(e.target.value)}
          required
        />

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CheckupForm;
