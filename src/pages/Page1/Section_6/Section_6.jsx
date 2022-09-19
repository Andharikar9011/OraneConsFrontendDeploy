import React from "react";
import CoverCardBtn from "../../../components/utility/CoverCardBtn";
import Section3 from "../Section_3/Section_3";
import "./s6_style.css";
function Section6() {
  return (
    <div className="section_6">
      <h1 className="s6_heading">Recent Client Stories</h1>
{/* 
      <Section3
        heading="Logistics & Supply Chain"
        content="Integrated Solutions For Wide  Logistic Operations"
        imgurl="./page1/page1elem6cont1.png"
      /> */}

      <CoverCardBtn
         heading="Logistics & Supply Chain"
        content="Integrated Solutions For Wide  Logistic Operations"
      />
    </div>
  );
}

export default Section6;
