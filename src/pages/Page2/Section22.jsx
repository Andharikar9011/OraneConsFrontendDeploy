import { Grid } from '@mui/material'
import React from 'react'
import { Card1 } from '../../components/utility/Card1'
// import Card0 from '../../components/utility/Card0'
// import Card1 from '../../components/utility/Card1'

export const Section22 = () => {
  return (
    <div style={{
      display: "flex",
      flexDirection: 'column' ,
      justifyContent: 'center',
      alignItems: 'center',
      margin: '2rem 0 2rem'
    }}>

      <h3 style={{
        fontFamily: 'Ubuntu',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '48px',
        lineHeight: '55px',

        color: '#213058',
        marginBottom: '1rem'
       
      }}>Our Values</h3>

        <Grid container 
          sx={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center'

          }}
        >

             <Grid item>
                  <Card1   heading="We Enable" url="../page2/Sec22_img1.png" content="With a constant helping hand to upskill, we enable employees for limitless success"/>
              
             </Grid>

             <Grid item>
                  <Card1 heading="We Attract" url="../page2/Sec22_img2.png" content="We craft champions by providing them countless career and growth happiness "/>

             </Grid>

             <Grid item>
                  <Card1 heading="We Engage" url="../page2/Sec22_img3.png" content="With Live Projects & Engaging activities,we craeted an eccentric work environment."/>

             </Grid>
              
        </Grid>
    
    </div>
  )
}
