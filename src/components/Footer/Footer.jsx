import React from "react";
import Copyrightbar from "./Copyrightbar";
import Footcard from "./Footcard";
import FooterNav from "./FooterNav";

import "./footer_styles.css";

const Footer = () => {
  return (
    <div className="footerfinal">
      <div className="footercontainer">
        <div className="footerCol1">
          <ul>
            <li>Frameworks and Accelerators</li>
            <li>Digital Transformation</li>
            <li>Corporate overview</li>
            <li>About Us</li>
            <li>Blogs</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="footerCol2">
          <ul>
            <li className="f_listHead">Industries</li>
            <li>Retail</li>
            <li>E commerce</li>
            <li>Healthcare</li>
            <li>Logistics and Supply Chain</li>
            <li>Utilities</li>
            <li>Consumer Packaged Goods</li>
            <li>Manufacturing</li>
          </ul>
        </div>

        <div className="footerCol3">
          <ul>
            <li className="f_listHead">Services</li>
            <li>SAP Services</li>
            <li>Audit and Optimization</li>
            <li>Integration and Enhanement</li>
            <li>Application Services</li>
            <li>Business Intelligence & Analytics Services</li>
          </ul>
        </div>

        <div className="footerCol4">
          <Footcard />
        </div>
      </div>
      <hr className="f_horiLine" />

      <div className="footer-bottom">
        <FooterNav />
        <Copyrightbar />
      </div>
    </div>
  );
};

export default Footer;
