import React from 'react'
import { assets } from './assets/assets'

function Farmh() {
    return (
        <div className='Farmh' style={{ marginTop: "160px" }}>
            <h1 style={{ color: "#15803D", fontSize: "15px" }}>FarmHub</h1>
            <img src={assets.Heading} alt="" />
            <button className="desktopMenuBtn" style={{ backgroundColor: "transparent" }} onClick={() => {
                document.getElementById('waitlist').scrollIntoView({ behavior: "smooth" });
            }}>
                <img src={assets.Button} alt="" className="desktopMenuImg" />
            </button>
        </div>
    )
}

export default Farmh