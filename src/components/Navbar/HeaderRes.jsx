import React from 'react'
import { Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./header_style.css";


const HeaderRes = () => {
  return (
    <>
        <Grid container className="navContainer" >
            <Grid item >
                <img src="./orneconslogo.png" className="navlogo" alt="Logo"></img>
            </Grid>
            <Grid item >
                <Grid container className='navlinkContainer' >

                    <Grid item className='navlinksGrid'>
                        Services
                    </Grid>

                    <Grid item className='navlinksGrid'>
                         Industries
                    </Grid>

                    <Grid item className='navlinksGrid'>
                        Frameworks & Accelerators
                    </Grid>

                    <Grid item className='navlinksGrid'>
                        Digital Transformation
                    </Grid>

                    <Grid item className='navlinksGrid'>
                        Corporate overview

                    </Grid>
                </Grid>
                
            </Grid>
               
            
            <Grid item className='searchAndBtn'>
                <SearchIcon fontSize="large" />
                <button className="navButton">Get Started</button>
            </Grid>
        </Grid>
    </>
  )
}

export default HeaderRes