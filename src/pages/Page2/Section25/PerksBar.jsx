import React from 'react'
import MoreTimeIcon from '@mui/icons-material/MoreTime';
import './Sec25_styles.css'
const PerksBar = (props) => {
  return (
    <div className='perksBar'>
        <div className='perksIcon'>
          <MoreTimeIcon fontSize='large'/>
        </div>
        <p className='perksContent'>{props.content}</p>
    </div>
  )
}

export default PerksBar