import React from 'react'
import { assets } from './assets/assets'

function Farmh() {
    return (
        <div className='Farmh' style={{ marginTop: "160px" }}>
            <h1 style={{ color: "#15803D" }}>FarmHub</h1>
            <img src={assets.Heading} alt="" className='Farmdes' />
            <img src={assets.online} alt="" className='Farmingmed'/>
            <button className="desktopMenuBtn" style={{ backgroundColor: "transparent", cursor:"pointer"}} onClick={() => {
                document.getElementById('waitlist').scrollIntoView({ behavior: "smooth" });
            }}>
                <img src={assets.Button} alt="" className="MenuImg" />
            </button>
        </div>
    )
}

export default Farmh