import React from 'react'
import './Video.css'
import Bgvideo from '../src/assets/Bgvideo.mp4'

function Backv() {
    return (
        <div className="Main">
            <video src={Bgvideo} autoPlay loop muted/>
        </div>
    )
}

export default Backv