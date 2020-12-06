import React from "react";
import NarV5 from "./narV5.jpg";
import Nar01 from "./nar01.jpg";
import BusinessIcon from '@material-ui/icons/Business';
import GroupIcon from '@material-ui/icons/Group';
import GavelIcon from '@material-ui/icons/Gavel';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import AssignmentIcon from '@material-ui/icons/Assignment';
import HomeIcon from '@material-ui/icons/Home';
import FacebookIcon from "@material-ui/icons/Facebook";
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
              
              style={{ height: "15rem", width: "80%",align:"center",marginLeft:"1rem"}}
              src={NarV5}
              alt="hukuk"
              title="Nar Göç ve Danışmanlık"
              
            ></img>
        </Link>
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
            <HomeIcon style={{fontSize:"28px",color:"#A4203A"}}/>
            &nbsp;
            &nbsp;
            <Link className="menu-item-link" to="/">
              ANA SAYFA
            </Link>
          </li>
          <hr className="line" />
          <li>
            <BusinessIcon style={{fontSize:"28px",color:"#A4203A"}}/>
            &nbsp;
            &nbsp;
            <Link className="menu-item-link" to="/hakkimizda">
              HAKKIMIZDA
            </Link>
          </li>
          <hr className="line" />
          <li>
            <GavelIcon style={{fontSize:"28px",color:"#A4203A"}}/>
            &nbsp;
            &nbsp;
            <Link className="menu-item-link" to="/hizmetlerimiz">
              HİZMETLERİMİZ
            </Link>
          </li>
          <hr className="line" />
          <li>
            <GroupIcon style={{fontSize:"28px",color:"#A4203A"}}/>
            &nbsp;
            &nbsp;
            <Link className="menu-item-link" to="/referanslarimiz">
              REFERANSLARIMIZ
            </Link>
          </li>
          <hr className="line" />
          <li>
            <AssignmentIcon style={{fontSize:"28px",color:"#A4203A"}}/>
            &nbsp;
            &nbsp;
            <Link className="menu-item-link" to="/blog">
              BLOG
            </Link>
          </li>
          <hr className="line" />
          <li>
            <ContactPhoneIcon style={{fontSize:"28px",color:"#A4203A"}}/>
            &nbsp;
            &nbsp;
            <Link className="menu-item-link" to="/iletisim">
              İLETİŞİM
            </Link>
          </li>
        </ul>
        <br/>
        <br/>
        <br/>
        
        <div className="icon_parent">
                <a className="menu-item-link"
                  href="https://www.facebook.com/adli.sicil.1"
                  style={{ float: "left" }}
                >
                  <FacebookIcon style={{fontSize:"28px"}}/>
                </a>
                
                <a className="menu-item-link"
                  href="https://wa.me/+905376971155"
                  style={{ float: "left", textIndent: "10px" }}
                >
                  <WhatsAppIcon style={{fontSize:"28px"}}/>
                </a>
                <a className="menu-item-link"
                  href="tel: +905376971155"
                  style={{ float: "left", textIndent: "10px" }}
                >
                  <SettingsPhoneIcon style={{fontSize:"28px"}}/>
                </a>


            </div>

      </div>

      
      
      </div>
    
  );
}

export default Menu;
