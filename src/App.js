// import Component1 from "./components/Component1";
import Header from "./components/Navbar/Header.jsx";
import Footer from "./components/Footer/Footer";
import "./App.css";
import Section1 from "./components/Section_1/Section_1.jsx";
// import Card1 from "./components/utility/Card1.jsx";
// import Card0 from "./components/utility/Card0.jsx";
import Section2 from "./components/Section_2/Section_2.jsx";
// import Section7 from "./components/Section7/Section7.jsx";
import Section8 from "./components/Section_8/Section_8.jsx";
import Section5 from "./components/Section_5/Section_5.jsx";
import Section4 from "./components/Section_4/Section_4.jsx";
import Section7 from "./components/Section_7/Section_7.jsx";
import Section3 from "./components/Section_3/Section_3.jsx";
import Section9 from "./components/Section_9/Section_9.jsx";
import Section6 from "./components/Section_6/Section_6.jsx";

function App() {
  return (
    <div className="App">
      <Header />

      <Section1 />
      <Section2 />
      <Section3
        heading="Logistics & Supply Chain"
        content="Integrated Solutions For Wide  Logistic Operations"
        imgurl="./page1/s3_1.png"
      />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Footer />
    </div>
  );
}

export default App;
