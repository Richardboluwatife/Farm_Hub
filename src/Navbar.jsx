import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll'; // Importing ScrollLink from 'react-scroll'
import { assets } from './assets/assets';
import './Navbar.css';

const Navbar = () => {
  const [menu, setMenu] = useState("whyus");

  return (
    <div className="navbarmed">
      <div className='navbar'>
        {/* <RouterLink to='/'><img className='logo' src={assets.Logo} alt="" /></RouterLink> */}
        <button className="desktopMenuBtn" style={{ backgroundColor: "transparent", cursor:"pointer" }} onClick={() => {
          document.getElementById('Caro').scrollIntoView({ behavior: "smooth" });
        }}>
          <img src={assets.Logo} alt="" className="desktopMenuImg" />
        </button>
        <ul className="navbar-menu" style={{cursor:"pointer"}}>
          <ScrollLink to='whyus' smooth={true} duration={500}><a onClick={() => setMenu("whyus")} className={menu === "whyus" ? "active" : ""}>Why FarmHub</a></ScrollLink>
          <ScrollLink to='testimonials' smooth={true} duration={500}><a onClick={() => setMenu("testimonials")} className={menu === "testimonials" ? "active" : ""}>Testimonials</a></ScrollLink>
          <ScrollLink to='faq' smooth={true} duration={500}><a onClick={() => setMenu("faq")} className={menu === "faq" ? "active" : ""}>FAQs</a></ScrollLink>
        </ul>
        {/* <RouterLink to='/'><img className='logos' src={assets.NavBtn} alt="" /></RouterLink> */}

        <button className="desktopMenuBtn" style={{ backgroundColor: "transparent", cursor:"pointer" }} onClick={() => {
          document.getElementById('waitlist').scrollIntoView({ behavior: "smooth" });
        }}>
          <img src={assets.Button} alt="" className="desktopMenuImg" />
        </button>
      </div>
    </div>
  )
}

export default Navbar;





