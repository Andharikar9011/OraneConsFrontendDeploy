import React from "react";
import "./sec9_styles.css";
import { BsArrowRight } from "react-icons/bs";

const Section9 = () => {
  return (
    <div className="sec9_container">
      <div className="sec9_img1"></div>
      <div className="sec9_img2"></div>
      <div className="sec9_img3"></div>
      <div className="sec9_img4"></div>
      <div className="sec9_img5"></div>
      <div className="sec9_containeroverlap">
        <h1>Success Stories</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
          mollitia.
        </p>
        <div>
          <span>READ MORE</span>
          <BsArrowRight
            color="white"
            style={{ height: "1.5em", width: "1.5em" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Section9;
