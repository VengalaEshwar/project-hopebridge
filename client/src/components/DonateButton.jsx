import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { setSide } from '../redux/slices/authSlice';

function DonateButton() {
  const dispatch = useDispatch();
  const handleSideNav = ()=>{
    dispatch(setSide());
  }
    const navigate = useNavigate();
  return (
    <div className='flex justify-center items-center'>
    <button className='donate-button' onClick={()=>navigate("/donate")}><i className="fa-solid fa-plus"></i><pre> Donate</pre></button>
    <button className='side-nav-button' onClick={()=>handleSideNav()}><i className="fa-solid fa-bars side-nav-icon " ></i></button></div>
  )
}

export default DonateButton