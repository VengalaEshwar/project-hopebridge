import React from 'react'
import { useNavigate } from 'react-router-dom'

function EmergencyButton() {
    const navigate = useNavigate();
  return (
    <button className='emergency-button' onClick={()=>navigate("/emergency")}>Emergency</button>
  )
}

export default EmergencyButton