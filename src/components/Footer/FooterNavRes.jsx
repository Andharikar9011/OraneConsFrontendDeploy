import { Grid } from '@mui/material'
import React from 'react'
import insta from "./instagram.png";
import fb from "./facebook.png";
import tweet from "./twitter.png";
import ldin from "./linkedin.png";

export const FooterNavRes = () => {
  return (
    <div>
        <Grid container className='footernav' >
            {/* logo */}
            <Grid item >
                <div className="navlogo" >
                    <img src="./logobgless.png" alt="Logo"></img>
                </div>
            </Grid>

            {/* navlinks */}
            <Grid item >
            <Grid container className="footerNavlinks"> 
                {/* <ul className="footerNavlinks"> */}

                    <Grid item  xs={12} md  className="footerNavlinksLists">
                        Sitemap
                    </Grid>

                    <Grid item xs={12} md  className="footerNavlinksLists">
                        Privacy Policy
                    </Grid>

                    <Grid item xs={12} md  className="footerNavlinksLists">
                        Cookie Policy

                    </Grid>

                    <Grid item xs={12} md  className="footerNavlinksLists">
                        Terms and conditions

                    </Grid>

                    <Grid item xs={12} md  className="footerNavlinksLists">
                        Follow us on

                    </Grid>
                       
                        
                    {/* </ul> */}
           
                
            </Grid>
            
            </Grid>

            {/* social icons */}
            <Grid item >
            <ul className="socialMediaIcons">
                <li>
                <img src={fb} alt="fb"></img>
                </li>
                <li>
                <img src={tweet} alt="tweeet"></img>
                </li>
                <li>
                <img src={insta} alt="insta"></img>
                </li>
                <li>
                <img src={ldin} alt="lkdn"></img>
                </li>
            </ul>
            </Grid>
        </Grid>
    </div>
  )
}
