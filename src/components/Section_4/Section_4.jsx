import React from "react";
import "./sec4_styles.css";

const Section4 = () => {
  return (
    <section className="sec4_container">
      <div className="sec4_containerleft">
        {/* <img src="./page1/page1elem4cont1.png" alt="img" /> */}
        <div className="sec4_container_left_img" alt="topimg ">
        <img src='./page1/sec4_bgim.png' className="sec4_topimg" />
        </div>
        
      </div>
      <div className="sec4_containerright">
        <h1>Stay One Step Ahead Leveraging Our Expertise</h1>
        <p>
          We are the right partner of choice since we possess the global
          expertise to deliver, while we are lean enough to treat your
          transformation as our priority. Armed with the requisite functional
          and technical skill sets, we personalize each engagement to deliver
          optimal costs, competitive advantage and streamlined workflows that
          create value.
        </p>
        <div className="sec4_button_img_align">
          <button className="sec4_button">Know more</button>
          <img src="./sec4_icon.png" alt="icon" />
        </div>
      </div>
    </section>
  );
};

export default Section4;
