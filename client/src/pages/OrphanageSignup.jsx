import React, { useState } from "react";
import "../styles/SignUp.css"; // Include the CSS file
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signUpOrphanage } from "../redux/slices/authSlice";
import toast from "react-hot-toast";

const OrphanageSignup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    image: null,
    location: "",
    description: "",
    email: "",
    yoe: "",
    phone: "",
    password: "",
  });
  const [imageURL, setImageURL] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
      setImageURL(URL.createObjectURL(file));
    }
    else
    {
        toast.error("Please select an image.");
        return;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });
      const response = await dispatch(signUpOrphanage(data));
      if (response?.payload?.data?.success) {
        navigate("/login");
      }
    } catch (error) {
      console.log(error, "Signup error");
    }
  };

  return (
    <div className="sign-up-main ">
      <img src="images/signup-left.svg" alt="signup" className="signup-left " />
      <div className="signup-container">
        <h1 className="signup-title">Orphanage Sign Up</h1>
        <form className="signup-form " onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Orphanage Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="image">Upload Image</label>
            <input type="file" id="image" accept="image/*" onChange={handleFileChange} required />
            {imageURL && <img src={imageURL} alt="Preview" className="preview-image" />}
          </div>

          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea id="description" name="description" value={formData.description} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="yoe">Year of Establishment</label>
            <input type="number" id="yoe" name="yoe" value={formData.yoe} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
          </div>

          <button type="submit" className="signup-button">Sign Up</button>
          <p>Already registered? <Link className="text-blue-700" to="/login">Login</Link></p>
        </form>
      </div>
    </div>
  );
};

export default OrphanageSignup;