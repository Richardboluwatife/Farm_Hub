import React from 'react';
import './Video.css';
import Bgvideo from '../src/assets/Bgvideo.mp4';

function Backv() {
    return (
        <div className="Main">
            <video src={Bgvideo} autoPlay loop muted />
            <div className="relative">
                <h3>POOL Purchase With Other on</h3>
                <h1>FarmHub</h1>
            </div>
        </div>
    );
}

export default Backv;
