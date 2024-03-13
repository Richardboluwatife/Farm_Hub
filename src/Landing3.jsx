import React from 'react'
import Our from './assets/Our story.png'

function Landing3() {
    return (
        <div>
            <div className="" >
                <img src={Our} alt="" srcset="" style={{ width: "100%", paddingTop:"50px"}} />
            </div>
            <div className="" style={{display:"flex", alignItems:"cemter", justifyContent:"center", backgroundcolor:"#30AD5D"}}>
                <button style={{ width:"100px", height:"30px", borderRadius:"50px", backgroundColor:"#30AD5D", border:"none"}}>Contact Us</button>
            </div>
        </div>
    )
}

export default Landing3