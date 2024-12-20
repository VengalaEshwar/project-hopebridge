import React from 'react'
import "../styles/NavBar.css"
import {Link,useNavigate} from 'react-router-dom'
function NavBar() {
    const navigate =  useNavigate();

  return (
    <div className='navbar'>
        <div className="logo" onClick={()=>navigate("/")}> logo</div>
        <div className="nav-items">
            <Link to="/">home</Link>
            <Link to="/adopt">adopt</Link>
            <Link to="/about">about</Link>
            <Link to="/blogs">blogs</Link>
        </div>
        <button onClick={()=>navigate("/donate") } className="donate-button">Donate</button>
    </div>
  )
}

export default NavBar