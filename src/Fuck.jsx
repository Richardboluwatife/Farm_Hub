import React from 'react'
import { Carousel } from "./components/Carousel";
import { slides } from "./data/carouselData.json";
import Farmh from './Farmh';
import { assets } from './assets/assets';

function Fuck() {
    return (
        <>
        <div style={{ display: "flex", maxWidth:"90%", marginLeft:"60px", gap:"40px", border: "black 1px solid", marginBottom:"30px", borderRadius:"20px", height: "570px", marginTop:"85px"}}>
            <Carousel data={slides} />
            <Farmh />
            <div className="">
                <img src={assets.object} alt="" />
            </div>
        </div>
        </>
    )
}

export default Fuck