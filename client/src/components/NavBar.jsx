import React, { useState } from "react";
import "../styles/NavBar.css";
import { NavLink, useNavigate,Link } from "react-router-dom";
import Logo from "./Logo";
import DonateButton from "./DonateButton";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slices/authSlice";

function NavBar() {
  const dispatch = useDispatch();
  const handleLogout = (e) => {
      e.preventDefault();
      dispatch(logout()); // ✅ Dispatch first
      // navigate("/");      // ✅ Navigate after state update
    };
  const role = useSelector((state) => state.auth.role);
  const isLoggin = useSelector((state) => state.auth.isLoggin);
  const navigate = useNavigate();
  const isHome = location.pathname === "/";
  return (
    <div
      className="navbar"
      style={isHome ? { color: "yellow" } : { color: "black" }}
    >
      <Logo onClick={() => navigate("/")} />
      <div className="nav-items">
        <NavLink to="/">home</NavLink>
        <NavLink to="/adopt">adopt</NavLink>
        <NavLink to="/blogs">blogs</NavLink>
        {role=='orphanage' && <NavLink to="/orphanage">orphange</NavLink>}
        {role=='user' && <NavLink to="/profile">profile</NavLink>}
        <NavLink to="/about">about</NavLink>
        {isLoggin ? <Link to="/"  onClick={handleLogout}> log out</Link>: <Link to="/login" > login</Link>}
      </div>
      <DonateButton />
    </div>
  );
}

export default NavBar;