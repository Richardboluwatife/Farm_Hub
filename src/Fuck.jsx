import React from 'react'
import { Carousel } from "./components/Carousel";
import { slides } from "./data/carouselData.json";
import Farmh from './Farmh';
import { assets } from './assets/assets';

function Fuck() {
    return (
        <div className='Caromed'>
            <div className='Caro' id='Caro' style={{ display: "flex", gap: "40px", border: "black 1px solid", marginBottom: "30px", borderRadius: "20px", height: "570px", marginTop: "85px" }}>
                <Carousel data={slides} />
                <div className="Farmhmed" >
                    <Farmh />
                </div>
                <div className="in">
                    <img src={assets.object} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Fuck