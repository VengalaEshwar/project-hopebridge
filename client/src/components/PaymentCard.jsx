import React from 'react'
import { NavLink } from 'react-router-dom'

function PaymentCard() {
  return (
    <div className='flex-col flex py-20 items-center bg-green-200 rounded-lg'>
        <i className="fa-solid fa-circle-check text-green-600 text-6xl"></i>
        <p className='font-medium text-3xl'>Payment Done!</p>
        <p className="text-gray-500">Thanks for you for your donation and helping the needy</p>
        <p className="text-xl">Have a great day</p>
        <NavLink to="/" className="text-blue-600 ">go back</NavLink>
    </div>
  )
}

export default PaymentCard