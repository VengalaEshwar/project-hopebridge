import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/SideBar.css"
function SideBar({onClick}) {
  return (
    <div className="side-bar" onClick={onClick}>
      <NavLink to="/">home</NavLink>
      <NavLink to="/adopt">adopt</NavLink>
      <NavLink to="/about">about</NavLink>
      <NavLink to="/blogs">blogs</NavLink>
    </div>
  );
}

export default SideBar;
