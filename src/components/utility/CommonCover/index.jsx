import { Grid } from '@mui/material'
import React from 'react'
import CoverOverlap from './CoverOverlap'
// import Overlapcard from './Overlapcard'
// import Sec3card from '../../../pages/Page1/Section_3/Sec3_card'
// import zIndex from '@mui/material/styles/zIndex'

const CommonCover = (props) => {

  return (
    <div style={{
        
          // backgroundColor: 'cyan',
          height: '38rem',
       
        }}>
            <Grid container style={{
            backgroundImage: `url("../page2/commonCover_bg.png")`,
            width: '100%',
            backgroundSize: 'cover',
            height: '30rem',
            
            }}>

            {/* <Overlapcard heading={props.heading} content={props.content}/> */}
            <CoverOverlap heading={props.heading} content={props.content}/>
        

        </Grid>
    </div>
  )
}

export default CommonCover



// ../page1/page1elem3cont1.png