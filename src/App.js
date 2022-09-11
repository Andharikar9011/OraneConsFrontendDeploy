// import Component1 from "./components/Component1";
import Header from "./components/Navbar/Header.jsx";
import Footer from "./components/Footer/Footer";
import "./App.css";
import Section_1 from "./components/Section_1/Section_1.jsx";
// import Card1 from "./components/utility/Card1.jsx";
// import Card0 from "./components/utility/Card0.jsx";
import Section_2 from "./components/Section_2/Section_2.jsx";
// import Section7 from "./components/Section7/Section7.jsx";
import Section_8 from "./components/Section_8/Section_8.jsx";
import Section_5 from "./components/Section_5/Section_5.jsx";
import Section_4 from "./components/Section_4/Section_4.jsx";
import Section_7 from "./components/Section_7/Section_7.jsx";
import Section_3 from "./components/Section_3/Section_3.jsx";
import Section_9 from "./components/Section_9/Section_9.jsx";
import Section_6 from "./components/Section_6/Section_6.jsx";

function App() {
  return (
    <div className="App">
      <Header />

      <Section_1 />
      <Section_2 />
      <Section_3 heading="Logistics & Supply Chain" 
      content="Integrated Solutions For Wide  Logistic Operations"
        imgurl="./page1/s3_1.png"
      />
      <Section_4 />
      <Section_5 />
      <Section_6/>
      <Section_7 />
      <Section_8 />
      <Section_9 />
      <Footer />
    </div>
  );
}

export default App;
