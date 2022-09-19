import React from 'react'
import './coverCardBtn_styles.css'
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Overlapcard = (props) => {
  return (
    <div className="overlap_card">
      <div className="overlap_content">
        <h4>{props.heading}</h4>
        <p>{props.content}</p>

        <button className="overlap_button">
          <span id="btntext">All services</span>
          <ArrowForwardIcon />
        </button>
      </div>
      <div className="overlap_bottom_line"></div>
    </div>
  )
}

export default Overlapcard