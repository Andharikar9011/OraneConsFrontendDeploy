import React from "react";
import Sectionbuttons from "./Sectionbuttons";
import "./sec7_styles.css";
function Section7() {
  return (
    
      <div className="section7_container">
      
        <div className="sec7_leftpane">
            <h1>Catalyst for Digital Enterprise</h1>
            <p>
              Real Transformation takes place when all gears in the machinery of
              an organization move in synchronization as a robust engine thats
              fuels growth. With our digital craftsmanship, we tailor
              solutions that 
              keep moving your fordward with digital velocity
            </p>
            <div className="sec7_Buttons">
              <Sectionbuttons heading="Industrial transformation" />
              <Sectionbuttons heading="Supply Chain" />
              <Sectionbuttons heading="Framework & Templates" />
              <Sectionbuttons heading="Data Driven Organization" />
            </div>
        </div>
        <div className="sec7_rightpane">
          <img src="./section7_img.png" alt="Logo"></img>
        </div>
      </div>
    
  );
}

export default Section7;
