import React, { useState } from "react";
import "../styles/SignUp.css" // Include the CSS file
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signUp } from "../redux/slices/authSlice";
const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
    try {
      const response = await dispatch(signUp(formData));
      if(response.payload.data.success)
      {
        navigate("/login");
      }
    } catch (error) {
     console.log(error);
    }
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
        <p>sign up as <Link className="text-blue-700" to="/create-orphanage"> orphanage</Link></p>
      </form>
    </div>
   </div>
  );
};

export default Signup;
