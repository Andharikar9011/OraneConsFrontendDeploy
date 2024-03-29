import React from "react";
import Basicbuttons from "./s5buttons";
import S5img from "./S5img";
import "./sec5_styles.css";

function Section5() {
  return (
    <div className="section_5">
      <h1> Business Transformation and Automated Entreprises</h1>

      <div className="s5_buttons">
        <Basicbuttons name="SIMPLIFY" />
        <Basicbuttons name="predict" />
        <Basicbuttons name="empower" />
      </div>

      <div className="sec5_row">
        <S5img
          className="overlapimg"
          url="./page1/s5_1.png"
          heading="Legacy Transformation"
        />
        <S5img
          className="overlapimg"
          url="./page1/s5_2.png"
          heading="Cloud Transformation"
        />
        <S5img
          className="overlapimg"
          url="./page1/s5_3.png"
          heading="Digital Transformation"
        />
        <S5img
          className="overlapimg"
          url="./page1/s5_4.png"
          heading="Audit & Optimization"
        />
        <S5img
          className="overlapimg"
          url="./page1/s5_5.png"
          heading="Data Analytics"
        />
        <S5img
          className="overlapimg"
          url="./page1/s5_6.png"
          heading="Mobile Enablement"
        />
      </div>
    </div>
  );
}

export default Section5;
