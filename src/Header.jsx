import React from 'react'
import { assets } from './assets/assets'

function Header() {
  return (
    <div className='Header'>
      <img src={assets.BG}alt="" />
      <div className="dot">
        <button>join waitlist</button>
      </div>
    </div>
  )
}

export default Header