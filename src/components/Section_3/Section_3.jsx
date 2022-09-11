import React from 'react'
import Sec3_card from './Sec3_card'
import './s3_styles.css' 
import Btngrp from '../utility/Btngrp'


function Section_3(props) {
  return (
    <div className='section_3'>
       <img src={props.imgurl} className='s3_bgimg'></img> 
       <div className='s3_card_btn'>
          <Sec3_card heading={props.heading} content={props.content}/> 
           {/* <Btngrp/> */}
       </div>
          
    </div>
  )
}

export default Section_3
// 
// heading="Logistics & Supply Chain" content="Integrated Solutions For Wide  Logistic Operations"