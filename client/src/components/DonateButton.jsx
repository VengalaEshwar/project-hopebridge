import React from 'react'
import { useNavigate } from 'react-router-dom'

function DonateButton() {
    const navigate = useNavigate();
  return (
    <div className='flex justify-center items-center'>
    <button className='donate-button' onClick={()=>navigate("/donate")}><i className="fa-solid fa-plus"></i><pre> Donate</pre></button>
    <i className="fa-solid fa-bars side-nav-icon " ></i></div>
  )
}

export default DonateButton