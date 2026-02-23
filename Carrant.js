import React, { useState } from 'react';
import './App.css';

function CarRegistration() {
  const [formData, setFormData] = useState({
    ownerName: '',
    carMake: '',
    carModel: '',
    year: '',
    licensePlate: '',
    color: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Car Registration Submitted:', formData);
    alert('Car registered successfully!');
    // Reset form
    setFormData({
      ownerName: '',
      carMake: '',
      carModel: '',
      year: '',
      licensePlate: '',
      color: ''
    });
  };

  return (
    <div className="car-registration">
      <h2>Car Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="ownerName">Owner Name:</label>
          <input
            type="text"
            id="ownerName"
            name="ownerName"
            value={formData.ownerName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="carMake">Car Make:</label>
          <input
            type="text"
            id="carMake"
            name="carMake"
            value={formData.carMake}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="carModel">Car Model:</label>
          <input
            type="text"
            id="carModel"
            name="carModel"
            value={formData.carModel}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="year">Year:</label>
          <input
            type="number"
            id="year"
            name="year"
            value={formData.year}
            onChange={handleChange}
            min="1900"
            max="2025"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="licensePlate">License Plate:</label>
          <input
            type="text"
            id="licensePlate"
            name="licensePlate"
            value={formData.licensePlate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="color">Color:</label>
          <input
            type="text"
            id="color"
            name="color"
            value={formData.color}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn">Register Car</button>
      </form>
    </div>
  );
}

export default CarRegistration;
