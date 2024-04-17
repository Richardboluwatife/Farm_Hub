import React from 'react'
import { assets } from './assets/assets'

function Choose() {
  return (
    <div style={{width:"99%"}}>
        <img src={assets.WhChoose} alt="" className='descho'/>
        <div className="mobcho">
          <img src={assets.Info1} alt="" />
          <img src={assets.Image} alt=""  className='relative'/>
        </div>
    </div>
  )
}

export default Choose