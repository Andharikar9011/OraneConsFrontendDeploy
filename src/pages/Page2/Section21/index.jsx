import './s21_styles.css'

import React from 'react'
import { Grid } from '@mui/material'

function Section21 () {
  return (
    <>
    <div className='s21_quote_section'>
    <Grid container>

        <section className='s21_quote'>
            <div id="s21_quoteLeft">
                <img src='../page2/s21_quoteLeft.png' alt="quoteimg" ></img>
                <img src='../page2/s21_quoteLeft.png' alt="quoteimg" ></img>
            </div>
          
            <blockquote>
            Orane believes in building strong connections between people and technology, by providing you a career path of your dreams.  We are committed to build and cherish our culture. With an open-door policy and hands-on training, we empower our people by being a part of their journey. Join us and be a part of our dynamic Orane family. 
            </blockquote>
           
            <div id="s21_quoteRight">
                <img src="../page2/s21_quoteRight.png" alt="quoteimg" ></img>
                <img src="../page2/s21_quoteRight.png" alt="quoteimg" ></img>
            </div>
        </section>
    </Grid>
     </div>
     </>
  )
}


export default Section21 