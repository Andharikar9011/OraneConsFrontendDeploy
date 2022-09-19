import { Grid } from '@mui/material'
import React from 'react'
import Overlapcard from './Overlapcard'
// import Sec3card from '../../../pages/Page1/Section_3/Sec3_card'
// import zIndex from '@mui/material/styles/zIndex'

const CoverCardBtn = (props) => {

  


  return (
    <div style={{
      height: '500px',
          // backgroundColor: 'cyan',
          height: '40rem',
    }}>
        <Grid container style={{
          backgroundImage: `url("../page1/page1elem3cont1.png")`,
          width: '100%',
          backgroundSize: 'cover',
          height: '30rem',
         
        }}>

         <Overlapcard heading={props.heading} content={props.content}/>
        

        </Grid>
    </div>
  )
}

export default CoverCardBtn



// ../page1/page1elem3cont1.png