import React from "react";
import Card0 from "../../../components/utility/Card0";
import "./sec2_styles.css";
function Section2() {
  return (
    <div className="sec2_container">
      <div className="sec2_content">
        <h1>Frameworks to Automation Innovation</h1>

        <p>
          We have identified and crafted plug-and-play solutions that are
          integrated <br />
          seamlessly with your SAP for business cases.
        </p>
      </div>

      <div className="sec2_cards-display">
        <Card0
          heading="B2B Ecommerce Solution"
          url="./page1/page1elem2cont1.png"
          content="Lorem ipsum Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem."
        />

        <Card0
          heading="Digital Employee Onboarding Form"
          url="./page1/page1elem2cont2.png"
          content="Lorem ipsum Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem."
        />

        <Card0
          heading="Digital Employee Onboarding Form"
          url="./page1/page1elem2cont3.png"
          content="Lorem ipsum Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem."
        />
      </div>
    </div>
  );
}

export default Section2;
