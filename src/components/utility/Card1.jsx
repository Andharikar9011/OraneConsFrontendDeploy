// import { Box } from '@mui/material'
// import { PropaneSharp } from '@mui/icons-material'
import React from 'react'
import './p2_card1styles.css'

export const Card1 = (props) => {
  return (
    <div className='p2_card1'>

        <img src={props.url} alt="carimg" >

        </img>

        <div className='p2_card1Conten1'>
            <h3>{props.heading}</h3>
            <p>
           {props.content} 
            </p>
        </div>
       
    </div>
  )
}
