import React from "react";
import "./sec8_styles.css";
function Card8(props) {
  return (
    <div className="sec8_card_inner">
      <img src={props.url} className="imghead" alt="cardimg"></img>

      <div className="cardbottom">
        <img src="./page1/s8_rect.png" alt="s8_1"></img>
        <div className="cardcontent">
          <h3>{props.heading}</h3>
          <p>{props.content}</p>
        </div>
      </div>
    </div>
  );
}

export default Card8;
