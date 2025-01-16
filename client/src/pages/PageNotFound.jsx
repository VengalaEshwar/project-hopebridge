import React from 'react'
import {NavLink} from "react-router-dom"
import "../styles/PageNotFound.css";
function PageNotFound() {
  return (
    <div className='error-page'>
        <div className="error-page-right"></div>
        <div className="error-page-left">
          <h1 className='error-404'>404</h1>
          <h1 className='error-404-some'>Something's is missing.</h1>
          <p>This page is missing or you assembled the link incorrectly</p>
          <NavLink to="/" className="text-xl text-sky-500 hover:underline">Go to home </NavLink>
          <h1></h1>
        </div>
    </div>
  )
}

export default PageNotFound