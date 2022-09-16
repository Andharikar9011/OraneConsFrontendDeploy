import React from "react";
// import { Nav } from "./navelements";
import { BrowserRouter as Router } from "react-router-dom";
// import { IoSearchOutline } from "react-icons/io5";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SearchIcon from "@mui/icons-material/Search";
import "./header_style.css";
import { Grid } from "@mui/material";

const Header = () => {
  return (
    <Router>
      <>
        <div className="navContainer">
       
            <img src="./orneconslogo.png" className="navlogo" alt="Logo"></img>
       
              <ul className="navlinks">
                <li>
                  <a href="./">Services </a>
                </li>
                <li>
                  <a href="./">Industries</a>
                </li>
                <li>
                  <a href="./">Frameworks & Accelerators</a>
                </li>
                <li>
                  <a href="./">Digital Transformation</a>
                </li>
                <li>
                  <a href="./">Corporate overview</a>
                </li>
              </ul>
           
         
          {/* <FontAwesomeIcon icon="fa-regular fa-magnifying-glass" /> */}
          {/* <i class="fa-regular fa-magnifying-glass">  </i> */}
          <SearchIcon fontSize="large" />
          <button className="navButton">Get Started</button>
        </div>
        {/* </Grid> */}
      </>
    </Router>
  );
};

export default Header;
