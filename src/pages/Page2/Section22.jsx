import { Grid } from '@mui/material'
import React from 'react'
import Card0 from '../../components/utility/Card0'

export const Section22 = () => {
  return (
    <div>
        <Grid container>
            <Grid item lg={12} style={{
              marginBottom: '2rem', 
              display:"flex", 
              justifyContent:"center",
              fontFamily: 'Ubuntu',
              fontStyle: 'normal',
              fontWeight: '500',
              fontSize: '48px',
              lineHeight: '55px',

              color: '#213058'
              }}>
               <h1 style={{
                fontFamily: 'Ubuntu',
                fontStyle: 'normal',
                fontWeight: '500',
                fontSize: '48px',
                lineHeight: '55px',

                color: '#213058'
               }}>Our Values</h1>
            </Grid>
                
            <Grid item lg={12}>

                <Grid container  spacing={2} sx={
                  {
                    // paddingLeft: "3rem",
                   
                    display: 'flex',
                    // flexDirection: 'column',
                    alignItems : 'center',
                    justifyContent: 'space-around'
                  }
                }>
                {/* card1 */}
                 
                    <Card0/>
                 

                  {/* card2 */}
                  
                    <Card0/>
                  

                  {/* card3 */}
                 
                    <Card0/>
                 
                </Grid>
            </Grid>
        </Grid>
    
    </div>
  )
}
