// import React, { useState } from 'react';
// import './Navbar.css';
// import { assets } from './assets/assets';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const [menu, setMenu] = useState("whyus");

//   return (
//     <div className='navbar'>
//       <Link to='/'><img className='logo' src={assets.BG} alt="" /></Link>
//       <ul className="navbar-menu">
//         <a href='#c' onClick={() => setMenu("whyus")} className={menu === "whyus" ? "active" : ""}>Why FarmHub</a>
//         <a href='#testimonials' onClick={() => setMenu("testimonials")} className={menu === "testimonials" ? "active" : ""}>Testimonials</a>
//         <a href='#faq' onClick={() => setMenu("faq")} className={menu === "faq" ? "active" : ""}>FAQs</a>
//       </ul>
//     </div>
//   );
// };

// export default Navbar;


import React, { useState } from 'react'
import './Navbar.css'
import { assets } from './assets/assets'
import { Link } from 'react-router-dom';
// import { StoreContext } from './StoreContext';

const Navbar = () => {

  const [menu, setMenu] = useState("whyus");

  // const {getTotalCartAmount} =useContext(StoreContext)

  return (
    <div className='navbar'>
      <Link to='/'><img className='logo' src={assets.Logo} alt="" /></Link>
      <ul className="navbar-menu">
        {/* <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link> */}
        <a href='#whyus' onClick={() => setMenu("whyus")} className={menu === "whyus" ? "active" : ""}>Why FarmHub</a>
        <a href='#testimonials' onClick={() => setMenu("testimonials")} className={menu === "testimonials" ? "active" : ""}>Testimonials</a>
        <a href='#faq' onClick={() => setMenu("faq")} className={menu === "faq" ? "active" : ""}>FAQs</a>
      </ul>
      <Link to='/'><img className='logo' src={assets.NavBtn} alt="" /></Link>
    </div>
  )
}

export default Navbar