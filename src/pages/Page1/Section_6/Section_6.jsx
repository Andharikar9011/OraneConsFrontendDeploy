import React from "react";
import CoverCardBtn from "../../../components/utility/CoverCardBtn";

import "./s6_style.css";
function Section6() {
  return (
    <div className="section_6">
      <h1 className="s6_heading">Recent Client Stories</h1>


      <CoverCardBtn
         heading="Logistics & Supply Chain"
        content="Integrated Solutions For Wide  Logistic Operations"
        urllink="./page1/page1elem6cont1.png"
      />
    </div>
  );
}

export default Section6;
