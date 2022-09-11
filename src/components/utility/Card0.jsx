// import { useSlotProps } from '@mui/base'
import React from "react";
import "./Card1Style.css";
function Card0(props) {
  return (
    <div className="card0">
      <img src={props.url} alt="img here"></img>

      <div className="cardcontent">
        <h1>{props.heading}</h1>
        <p>{props.content}</p>
        <button>Read More</button>
      </div>
    </div>
  );
}

export default Card0;
