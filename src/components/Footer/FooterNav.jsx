import React from 'react'

import insta from './instagram.png'
import fb from './facebook.png'
import tweet from './twitter.png'
import ldin from './linkedin.png'


function FooterNav() {
  return (
    <div className='footernav'>

        <div className="navlogo">
        <img src="./logobgless.png"  alt="Logo"></img>
        </div>
       
        <ul className='footerNavlinks'>
            <li>
                Sitemap 
            </li>
            <li>
                Privacy Policy
            </li>
            <li>
                Cookie Policy
            </li>
            <li>
                Terms and conditions
            </li>
            <li>
                Follow us on
            </li>
        </ul>

        
            {/* <img src='twitter.png' alt="twitter"></img> */}
            <ul className='socialMediaIcons'>
                <li>
                    <img src={fb}></img>
                </li>
                <li>
                    <img src={tweet}></img>
                </li>
                <li>
                    <img src={insta}></img>
                </li>
                <li>
                    <img src={ldin}></img>
                </li>
            </ul>
        
    </div>
  )
}

export default FooterNav;