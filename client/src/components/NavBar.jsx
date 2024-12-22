import React from 'react'
import "../styles/NavBar.css"
import {NavLink,useNavigate} from 'react-router-dom'
import Logo from './Logo';
import DonateButton from './DonateButton';
function NavBar() {
    const navigate =  useNavigate();

  return (
    <div className='navbar'>
        <Logo onClick={()=>navigate("/")} />
        <div className="nav-items">
            <NavLink to="/">home</NavLink>
            <NavLink to="/adopt">adopt</NavLink>
            <NavLink to="/about">about</NavLink>
            <NavLink to="/blogs">blogs</NavLink>
        </div>
        {/* <button onClick={()=>navigate("/donate") } className="donate-button">Donate</button> */}
        <DonateButton/>
    </div>
  )
}

export default NavBar