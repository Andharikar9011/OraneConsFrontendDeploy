import React from "react";
import "./sec7_styles.css";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
function Sectionbuttons(props) {
  return (
    <div className="sec7_outerButton">
      <h4>{props.heading} </h4>
      <button>
        <ArrowOutwardRoundedIcon />
      </button>
    </div>
  );
}

export default Sectionbuttons;
