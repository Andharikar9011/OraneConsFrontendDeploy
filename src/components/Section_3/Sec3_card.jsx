import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './s3_styles.css'

function Sec3_card(props) {
  return (
    <div className='s3_card'>

        <div className='s3_card_content'>

            <h1>{props.heading}</h1>
            <h5>{props.content}</h5>
            
              <button className='s3_card_button'>All services
              <ArrowForwardIcon />
            </button>
           
           
          
            
        </div>
        <div className='cardbottomLine'></div>

        
    </div>
  )
}

export default Sec3_card