import React, { useState } from "react";
import "../styles/Login.css"; // Include the CSS file
import { Link } from "react-router-dom";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role : "",
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
    alert(JSON.stringify(formData));
    // alert("Login submitted");
    // try {
    //   const response = await axios.post("#", formData);
    //   alert("Login successful: " + response.data.message);
    // } catch (error) {
    //   alert("Login failed: " + error.response.data.error);
    // }
  };

  return (
    <div className="login-main">
      <img src="images/signup-left.svg" alt="login" className="login-left" />
      <div className="login-container">
        <h1 className="login-title">Login</h1>
        <form className="login-form" onSubmit={handleSubmit}>
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
          <label htmlFor="role">Role</label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="donor">Donor</option>
            <option value="orphanage">orphanage</option>
          </select>
        </div>
          <button type="submit" className="login-button">Login</button>
          <p>create new account <Link className="text-blue-700" to="/signup">sign up</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
