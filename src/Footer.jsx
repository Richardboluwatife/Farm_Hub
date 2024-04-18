import React from 'react'
import { assets } from './assets/assets'

function Footer() {
  return (
    <div className='Footer'>
      <div className="ter">
        <img src={assets.Logo} alt="" />
        <h4>The online farmers market for your Fresh Produce.</h4>
        <div className="foot">
          <a href="tel:+2348109427739" className='btn'  >(+234) 701 234 5678</a> Or <a href="mailto:Farmanigeria@gmail.com" class="topbar-item link">
            <div class="icon">
              <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>
            </div>

            <span class="span">Farmanigeria@gmail.com </span>
          </a>
        </div>
      </div>

      <div className="lninks">
        <a href='https://www.facebook.com/profile.php?id=100093047991970' style={{ display: 'block' }}>
          <img src={assets.SocialMedia} alt="" className="link" />
        </a>
        <a href='https://twitter.com/Official_Rickid' style={{ display: 'block' }}>
          <img src={assets.Twitter} alt="" className="link" />
        </a>
        <a href='https://www.youtube.com/channel/UC9IMcJL60IfUXVaHbWWpOOg' style={{ display: 'block' }}>
          <img src={assets.Media} alt="" className="link" />
        </a>
        <a href='https://mail.google.com/mail/u/0/#inbox' style={{ display: 'block' }}>
          <img src={assets.Social} alt="" className="link" />
        </a>
      </div>

      <div className="mobfooter">
        <img src={assets.FarmHub} alt="" style={{paddingLeft:"35px", width:"350px"}} />
        <div className="links" style={{width:"350px", paddingLeft:"40px"}}>
          <a href='https://www.facebook.com/profile.php?id=100093047991970' style={{ display: 'block' }}>
            <img src={assets.SocialMedia} alt="" className="link" />
          </a>
          <a href='https://twitter.com/Official_Rickid' style={{ display: 'block' }}>
            <img src={assets.Twitter} alt="" className="link" />
          </a>
          <a href='https://www.youtube.com/channel/UC9IMcJL60IfUXVaHbWWpOOg' style={{ display: 'block' }}>
            <img src={assets.Media} alt="" className="link" />
          </a>
          <a href='https://mail.google.com/mail/u/0/#inbox' style={{ display: 'block' }}>
            <img src={assets.Social} alt="" className="link" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer