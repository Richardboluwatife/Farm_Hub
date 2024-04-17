import React from 'react'
import { assets } from './assets/assets'

function Us() {
  return (
    <div className='whyus' id='whyus' >
      <div className="whyux" style={{ paddingTop: "1px", width: "99%" }}>
        <img src={assets.Whyus} alt="" />
      </div>
      <div className="mobwhy">
        <img src={assets.Frame1} alt="" style={{marginBottom:"40px"}}/>
        <img src={assets.Info} alt="" style={{marginBottom:"40px"}}/>
      </div>
    </div>
  )
}

export default Us