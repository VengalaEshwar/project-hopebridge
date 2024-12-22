import React from 'react'
import "../styles/Logo.css"
function Logo({onClick}) {
    const path="../images/logo.png"
    return (
      <div className ='logo-div' onClick={onClick}>
        HOPE<span className='logo'/>BRIDGE
      </div>
  )
}

export default Logo