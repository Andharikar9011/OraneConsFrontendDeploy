

import Section1 from "./Section_1/Section_1";
import Section2 from "./Section_2/Section_2";
// import Section3 from "./Section_3/Section_3";
import Section4 from "./Section_4/Section_4";
import Section5 from "./Section_5/Section_5";
import Section6 from "./Section_6/Section_6";
import Section7 from "./Section_7/Section_7";
import Section8 from "./Section_8/Section_8";
import Section9 from "./Section_9/Section_9";
import Footer from '../../components/Footer/Footer.jsx'
// import Header from '../../components/Navbar/Header.jsx'
import HeaderRes from "../../components/Navbar/HeaderRes";
import CoverCardBtn from '../../components/utility/CoverCardBtn'


function Page1() {
  return (
    <div className="Page1">
      {/* <Header /> */}
      <HeaderRes/>
      <Section1 />
      <Section2 />
      {/* <Section3 heading="Logistics & Supply Chain"
        content="Integrated Solutions For Wide  Logistic Operations"
        imgurl="./page1/s3_1.png"/> */}
     
        <CoverCardBtn heading="Logistics & Supply Chain" content="Integrated Solutions For Wide  Logistic Operations"/>

        
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7/>
      <Section8/>
      <Section9/>
      
      <Footer />
    </div>
  );
}

export default Page1;
