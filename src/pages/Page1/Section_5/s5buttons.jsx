// import { useSlotProps } from '@mui/base'
import React from "react";
import "./sec5_styles.css";

function Basicbuttons(props) {
  return (
    <div className="s5btn">
      <button>{props.name}</button>
    </div>
  );
}

export default Basicbuttons;
