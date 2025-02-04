import React, { useState } from "react";

function AdoptionForm() {
  const [formData, setFormData] = useState({
    adopterName: "",
    adopterEmail: "",
    childId: "",
    orphanageId: "",
    notes: "",
    phoneNo : ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="adoption-form-container">
      <h2>Adoption Form</h2>
      <form onSubmit={handleSubmit} className="adoption-form">
        <div className="form-group">
          <label htmlFor="adopterName">Your Name</label>
          <input
            type="text"
            id="adopterName"
            name="adopterName"
            value={formData.adopterName}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="adopterEmail">Your Email</label>
          <input
            type="email"
            id="adopterEmail"
            name="adopterEmail"
            value={formData.adopterEmail}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNo">Phone No</label>
          <input
            type="tel"
            id="phoneNo"
            name="phoneNo"
            value={formData.phoneNo}
            onChange={handleChange}
            placeholder="Enter the phone no"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="childId">Child ID</label>
          <input
            type="text"
            id="childId"
            name="childId"
            value={formData.childId}
            onChange={handleChange}
            placeholder="Enter the child's ID"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="orphanageId">Orphanage ID</label>
          <input
            type="text"
            id="orphanageId"
            name="orphanageId"
            value={formData.orphanageId}
            onChange={handleChange}
            placeholder="Enter the orphanage ID"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="notes">Notes</label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder="Add any additional notes (optional)"
          ></textarea>
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
}

export default AdoptionForm;