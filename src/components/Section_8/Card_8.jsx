import React from "react";
import "./styles.css";
function Card8(props) {
  return (
    <div className="card">
      <img src={props.url} className="imghead" alt="cardimg"></img>

      <div className="cardbottom">
        <img src="./s8_img/s8_rect.png" alt="s8_1"></img>
        <div className="cardcontent">
          <h3>{props.heading}</h3>
          <p>{props.content}</p>
        </div>
      </div>
    </div>
  );
}

export default Card8;
