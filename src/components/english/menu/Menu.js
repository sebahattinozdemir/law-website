import React from "react";
import NarV5 from "./narV61.jpg";
import BusinessIcon from '@material-ui/icons/Business';
import GroupIcon from '@material-ui/icons/Group';
import GavelIcon from '@material-ui/icons/Gavel';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import AssignmentIcon from '@material-ui/icons/Assignment';
import HomeIcon from '@material-ui/icons/Home';

import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import SettingsPhoneIcon from "@material-ui/icons/SettingsPhone";
import "./Menu.css";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="menu col-12">
      <div className="col-lg-12 col-md-12 col-sm-6  company-logo">
        <Link className="menu-item-link logo" to="/">
        <img
              className="kurum_logo"
              style={{ height: "8rem", width: "75%",align:"center",margin:"auto",display:"block"}}
              src={NarV5}
              alt="hukuk"
              title="Nar Göç ve Danışmanlık"
              
            ></img>
        </Link>
        <p className="buroeng"><b>Nar Law &amp; Consultancy</b></p>
      </div>
      
      <div
        className="col-sm-6  container " style={{minWidth:"100rem"}}
        onClick={(x) => {
          var visible = document.getElementById("menu-item").style.display;
          if (visible === "block") {
            document.getElementById("menu-item").style.display = "none";
          } else {
            document.getElementById("menu-item").style.display = "block";
          }
        }}
      >
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>
      <br/>
      <br/>
      <div
        className="col-lg-12 col-md-12 col-sm-12 p-0 menu-item"
        id="menu-item"
        
      >
        <ul style={{ width: "100%", marginLeft: "0%" }}>
          <li className="pl-0">
            <HomeIcon className="menu-icon" style={{fontSize:"24px",color:"#A4203A"}}/>
            &nbsp;
            &nbsp;
            <Link className="menu-item-link" to="/eng">
              HOME
            </Link>
          </li>
          <hr className="line" />
          <li>
            <BusinessIcon className="menu-icon" style={{fontSize:"24px",color:"#A4203A"}}/>
            &nbsp;
            &nbsp;
            <Link className="menu-item-link" to="/about-us">
              ABOUT US
            </Link>
          </li>
          <hr className="line" />
          <li>
            <GavelIcon className="menu-icon" style={{fontSize:"24px",color:"#A4203A"}}/>
            &nbsp;
            &nbsp;
            <Link className="menu-item-link" to="/services">
              SERVICES
            </Link>
          </li>
          <hr className="line" />
          <li>
            <GroupIcon className="menu-icon" style={{fontSize:"24px",color:"#A4203A"}}/>
            &nbsp;
            &nbsp;
            <Link className="menu-item-link" to="/references">
              REFERENCES
            </Link>
          </li>
          <hr className="line" />
          <li>
            <AssignmentIcon className="menu-icon" style={{fontSize:"24px",color:"#A4203A"}}/>
            &nbsp;
            &nbsp;
            <Link className="menu-item-link" to="/en-blog">
              BLOG
            </Link>
          </li>
          <hr className="line" />
          <li>
            <ContactPhoneIcon className="menu-icon" style={{fontSize:"24px",color:"#A4203A"}}/>
            &nbsp;
            &nbsp;
            <Link className="menu-item-link" to="/contact">
              CONTACT
            </Link>
          </li>
        </ul>
        <br/>
        
      </div>

      
      
      </div>
    
  );
}

export default Menu;
