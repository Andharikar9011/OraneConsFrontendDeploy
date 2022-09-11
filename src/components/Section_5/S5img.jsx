import { useSlotProps } from '@mui/base'
import React from 'react'
import './styles.css'

function S5img(props) {
  return (
    <div className='s5card'>
        <img src={props.url}  alt="s8_1"></img>
        <div className='s5content'>
            <h3>{props.heading}</h3>
        </div>
    </div>
  )
}
// ./s5_img/s5_1.png
export default S5img