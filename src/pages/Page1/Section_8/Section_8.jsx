import React from "react";
import Card8 from "./Card_8";
function Section8() {
  return (
    <div className="section_8">
      <h1>Pioneers of digital tranformation.</h1>
      <div className="sec8_cards">
        <Card8
          heading="People"
          url="./page1/page1elem8cont1.png"
          content="Our consultants across verticals and domains like finance & accounting, sales & distribution, supply chain and human resources help you drive transformation that drives results"
        />

        <Card8
          heading="Process"
          url="./page1/page1elem8cont2.png"
          content="Our project methodologies and understanding of the SAP ecosystem builds on your investments ove replacing them preventing sunk costs; seamless workflows and integrations is where we diffrentiate"
        />

        <Card8
          heading="Passion"
          url="./page1/page1elem8cont3.png"
          content="Our passion for technology knows no bounds! We invest in innovation and deliver solutions that help your organization to the next level of growth."
        />
      </div>
    </div>
  );
}

export default Section8;
