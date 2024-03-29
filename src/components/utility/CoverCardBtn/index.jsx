import { Grid } from '@mui/material'
import React from 'react'
import Overlapcard from './Overlapcard'
// import Sec3card from '../../../pages/Page1/Section_3/Sec3_card'
// import zIndex from '@mui/material/styles/zIndex'

const CoverCardBtn = (props) => {
  // ../page1/page1elem3cont1.png
  // ${eggCount}
  // `url("./page1/page1elem3cont1.png")`
  let urlPath = props.urllink;
  let urlLink = `url(${urlPath})`
  return (
    <div style={{
      
          // backgroundColor: 'cyan',
          height: '40rem',
    }}>
        <Grid container style={{
          backgroundImage: urlLink,
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