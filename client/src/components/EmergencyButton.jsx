import React from 'react'
import { useNavigate } from 'react-router-dom'

function EmergencyButton() {
    const navigate = useNavigate();
  return (
    <button className='emergency-button' onClick={()=>navigate("/emergency")}><i className="fa-regular fa-bell"></i>&nbsp;Emergency</button>
  )
}

export default EmergencyButton