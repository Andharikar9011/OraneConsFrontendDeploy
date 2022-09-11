import React from "react";

import insta from "./instagram.png";
import fb from "./facebook.png";
import tweet from "./twitter.png";
import ldin from "./linkedin.png";

function FooterNav() {
  return (
    <div className="footernav">
      <div className="navlogo">
        <img src="./logobgless.png" alt="Logo"></img>
      </div>

      <ul className="footerNavlinks">
        <li>Sitemap</li>
        <li>Privacy Policy</li>
        <li>Cookie Policy</li>
        <li>Terms and conditions</li>
        <li>Follow us on</li>
      </ul>

      {/* <img src='twitter.png' alt="twitter"></img> */}
      <ul className="socialMediaIcons">
        <li>
          <img src={fb} alt="fb"></img>
        </li>
        <li>
          <img src={tweet} alt="tweeet"></img>
        </li>
        <li>
          <img src={insta} alt="insta"></img>
        </li>
        <li>
          <img src={ldin} alt="lkdn"></img>
        </li>
      </ul>
    </div>
  );
}

export default FooterNav;
