import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/SideBar.css"
function SideBar() {
  return (
    <div className="side-bar" >
      <NavLink to="/">home</NavLink>
      <NavLink to="/adopt">adopt</NavLink>
      <NavLink to="/about">about</NavLink>
      <NavLink to="/blogs">blogs</NavLink>
    </div>
  );
}

export default SideBar;
