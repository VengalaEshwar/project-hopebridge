import React, { useState } from "react";
import { NavLink, useNavigate ,Link} from "react-router-dom";
import "../styles/SideBar.css"
import { logout, setSideDefault } from "../redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
function SideBar() {
  const dispatch = useDispatch(); 
  const navigate = useNavigate();
    const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout()); // ✅ Dispatch first
    navigate("/"); 
    dispatch(setSideDefault());     // ✅ Navigate after state update
  };
  const isLoggin =useSelector((state)=>state?.auth?.isLoggin);
  const role = useSelector((state)=>state?.auth?.role);
  return (
    <div className="side-bar" > 
      <NavLink to="/" className="md:hidden" onClick={()=>dispatch(setSideDefault())}>home</NavLink>
      <NavLink to="/adopt" className="md:hidden" onClick={()=>dispatch(setSideDefault())}>adopt</NavLink>
      <NavLink to="/about" className="md:hidden" onClick={()=>dispatch(setSideDefault())}>about</NavLink>
      <NavLink to="/blogs" className="md:hidden" onClick={()=>dispatch(setSideDefault())}>blogs</NavLink>
      {isLoggin && role=='orphanage' &&<NavLink to="/orphanage" className="md:hidden" 
      onClick={()=>dispatch(setSideDefault())} >orphanage</NavLink>}
      {isLoggin && role=='user'&&<NavLink to="/profile" className="md:hidden" 
      onClick={()=>dispatch(setSideDefault())}>profile</NavLink>}
      {isLoggin ? <Link to="/"  onClick={handleLogout}> log out</Link>: <Link to="/login" onClick={()=>dispatch(setSideDefault())}> login</Link>} 
    </div>
  );
}

export default SideBar;
