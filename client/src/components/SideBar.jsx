import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/SideBar.css"
import { logout } from "../redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
function SideBar() {
  const dispatch = useDispatch(); 
  const navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout()); // ✅ Dispatch first
    navigate("/");      // ✅ Navigate after state update
  };
  const [side,setSide]= useState(false);
    const handleSideNav = ()=>{
     const sideNav= document.getElementsByClassName("side-bar")[0];
      setSide(!side);
     sideNav.style.display=side?"none":"flex";
    }
  const [isLoggin,setIsLoggin] = useState(useSelector((state)=>state?.auth?.isLoggin));
  const role = useSelector((state)=>state?.auth?.role);
  return (
    <div className="side-bar" >
      <NavLink to="/" className="md:hidden" onClick={handleSideNav}>home</NavLink>
      <NavLink to="/adopt" className="md:hidden" onClick={handleSideNav}>adopt</NavLink>
      <NavLink to="/about" className="md:hidden" onClick={handleSideNav}>about</NavLink>
      <NavLink to="/blogs" className="md:hidden" onClick={handleSideNav}>blogs</NavLink>
      <NavLink to="/orphanage" className="md:hidden" onClick={handleSideNav}>orphanage</NavLink>
      {isLoggin && <NavLink to="/profile" className="md:hidden" onClick={handleSideNav}>profile</NavLink>}
      <NavLink to="/"  className="md:hidden" onClick={handleLogout} >Log Out</NavLink> 
    </div>
  );
}

export default SideBar;
