import React from "react";
import "../styles/NavBar.css";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import DonateButton from "./DonateButton";

function NavBar() {
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
        <NavLink to="/orphanage">orphange</NavLink>
        <NavLink to="/about">about</NavLink>
      </div>
      <DonateButton />
    </div>
  );
}

export default NavBar;