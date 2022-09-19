import React from 'react'
import './commonCoverStyles.css'
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const CoverOverlap = (props) => {
  return (
    <div className="cover_overlap_card">
      <div className="cover_overlap_content">
        <h4>{props.heading}</h4>
        <p>{props.content}</p>

      </div>
      
    </div>
  )
}

export default CoverOverlap