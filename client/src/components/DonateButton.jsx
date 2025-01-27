import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function DonateButton() {
  const [side,setSide]= useState(false);
  const handleSideNav = ()=>{
   const sideNav= document.getElementsByClassName("side-bar")[0];
    setSide(!side);
   sideNav.style.display=side?"none":"flex";
   console.log(sideNav);
  }
    const navigate = useNavigate();
  return (
    <div className='flex justify-center items-center'>
    <button className='donate-button' onClick={()=>navigate("/donate")}><i className="fa-solid fa-plus"></i><pre> Donate</pre></button>
    <button onClick={()=>handleSideNav()}><i className="fa-solid fa-bars side-nav-icon " ></i></button></div>
  )
}

export default DonateButton