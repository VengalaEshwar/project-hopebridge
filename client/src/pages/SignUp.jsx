import React, { useState } from "react";
import axios from "axios";
import "../styles/SignUp.css" // Include the CSS file
import { Link } from "react-router-dom";
const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    role: "donor",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // alert("form submitted");
    alert(JSON.stringify(formData));
    // try {
    //   const response = await axios.post("#", formData);
    //   alert("Signup successful: " + response.data.message);
    // } catch (error) {
    //   alert("Signup failed: " + error.response.data.error);
    // }
  };

  return (
   <div className="sign-up-main">
    <img src="images/signup-left.svg" alt="signup" className="signup-left"/>
     <div className="signup-container">
      <h1 className="signup-title">Sign Up</h1>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        

        <button type="submit" className="signup-button">Sign Up</button>
        <p>if already existing user <Link className="text-blue-700" to="/login">login</Link></p>
      </form>
    </div>
   </div>
  );
};

export default Signup;
