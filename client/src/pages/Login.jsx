import React, { useState } from "react";
import "../styles/Login.css"; // Include the CSS file
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login ,logout} from "../redux/slices/authSlice";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role : "user",
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
      const response = await dispatch(login(formData));
      if(response?.payload?.data?.success)
        navigate("/");
    } catch (error) {
      console.log(error);
    }
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
            <option value="user">User</option>
            <option value="orphanage">Orphanage</option>
          </select>
        </div>
          <button type="submit" className="login-button">Login</button>
          <p>create new account<Link className="text-blue-700" to="/signup">sign up</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
