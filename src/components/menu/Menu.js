import React from "react";
import hukuk from "./logo.jpg";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
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
              
              style={{ height: "auto", width: "90%" }}
              src={hukuk}
              alt="hukuk"
              title="avukat"
              
            ></img>
        </Link>
      </div>

      <div
        className="col-sm-6  container"
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

      <div
        className="col-lg-12 col-md-12 col-sm-12 p-0 menu-item"
        id="menu-item"
      >
        <ul style={{ width: "100%", marginLeft: "0%" }}>
          <li className="pl-0">
            <Link className="menu-item-link" to="/">
              ANA SAYFA
            </Link>
          </li>
          <hr className="line" />
          <li>
            <Link className="menu-item-link" to="/hakkimizda">
              HAKKIMIZDA
            </Link>
          </li>
          <hr className="line" />
          <li>
            <Link className="menu-item-link" to="/hizmetlerimiz">
              HIZMETLERIMIZ
            </Link>
          </li>
          <hr className="line" />
          <li>
            <Link className="menu-item-link" to="/referanslarimiz">
              REFERANSLARIMIZ
            </Link>
          </li>
          <hr className="line" />
          <li>
            <Link className="menu-item-link" to="/blog">
              BLOG
            </Link>
          </li>
          <hr className="line" />
          <li>
            <Link className="menu-item-link" to="/iletisim">
              ILETISIM
            </Link>
          </li>
        </ul>
        <div className="col-lg-12 icon_parent">
                <a className="icon"
                  href="https://www.facebook.com/adli.sicil.1"
                  style={{ float: "left" }}
                >
                  <FacebookIcon style={{fontSize:"28px"}}/>
                </a>
                
                <a className="icon"
                  href="https://wa.me/+905427724718"
                  style={{ float: "left", textIndent: "10px" }}
                >
                  <WhatsAppIcon style={{fontSize:"28px"}}/>
                </a>
                <a className="icon"
                  href="tel: +905427724718"
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
