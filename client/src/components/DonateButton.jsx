import React from 'react'
import { useNavigate } from 'react-router-dom'

function DonateButton() {
    const navigate = useNavigate();
  return (
    <button className='donate-button' onClick={()=>navigate("/donate")}><i class="fa-solid fa-plus"></i><pre> Donate</pre></button>
  )
}

export default DonateButton