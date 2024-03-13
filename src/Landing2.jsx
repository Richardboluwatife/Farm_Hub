import React from 'react'
import Partners from './assets/Partners.png'
import Bulk from './assets/Bulk card.png'
import Community from './assets/Community pools.png'
import Seasonal from './assets/Seasonal card.png'

function Landing2() {
    return (
        <div className="">
            <div>
                <h3 style={{ textAlign: "center" }}>Trusted by various partners</h3>
            </div>
            <div className="" >
                <img src={Partners} alt="" srcset="" style={{ width: "100%" }} />
            </div>
            <div className="">
                <h3 style={{ textAlign: "center", paddingTop: "40px" }}>Why Chose FarmHub?</h3>
            </div>
            <div className="" style={{ display: "flex" }}>
                <img src={Bulk} alt="" srcset="" style={{ width: "440px", height: "440px" }} />
                <img src={Seasonal} alt="" srcset="" style={{ width: "440px", paddingTop: "200px" }} />
                <img src={Community} alt="" srcset="" style={{ width: "440px", height: "440px" }} />
            </div>
            <div className="" style={{ display: "flex", alignItems: "cemter", justifyContent: "center", backgroundcolor: "#30AD5D" }}>
                <button style={{ width: "100px", height: "30px", borderRadius: "50px", backgroundColor: "#30AD5D", border: "none" }}>Contact Us</button>
            </div>
        </div>
    )
}

export default Landing2