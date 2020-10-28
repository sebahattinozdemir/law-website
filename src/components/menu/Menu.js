import React from "react";
import "./Menu.css";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="menu col-12">
      <div className="col-lg-12 col-md-12 col-sm-6  company-logo">
        <Link className="menu-item-link logo" to="/">
          LOGO
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
      </div>

      <div className="col-lg-12 social-icon" style={{ marginTop: "10%" }}>
        <ul>
          <li>
            <a class="active menu-item-link" href="#home">
              Instagram
            </a>
          </li>

          <li>
            <a class="active menu-item-link" href="#home">
              Facebook
            </a>
          </li>

          <li>
            <a class="active menu-item-link" href="#home">
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
