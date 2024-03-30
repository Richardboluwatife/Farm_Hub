import React from 'react'
import { assets } from './assets/assets'
import './Navbar.css'

function Navbar() {
  return (
    <div className='Navbar'>
      <img className='im' src={assets.Logo} alt="" />
      <ul className='li'>
        <li>Why FarmHub</li>
        <li>Testimonials</li>
        <li>FAQs</li>
      </ul>
      <button>Join waitlist</button>
    </div>
  )
}

export default Navbar