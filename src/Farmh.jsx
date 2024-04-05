import React from 'react'
import { assets } from './assets/assets'

function Farmh() {
    return (
        <div className='Farmh' style={{ marginTop: "160px" }}>
            <h1 style={{ color: "#15803D", fontSize: "15px" }}>FarmHub</h1>
            <img src={assets.Heading} alt="" />
            <div className="btnFar">
                <img src={assets.Button} alt="" />
            </div>
        </div>
    )
}

export default Farmh