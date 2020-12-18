import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "./Notfound.css";
function Notfound() {
  useEffect(() => {
    document.getElementById("engmenu").style.display = "none";
    document.getElementById("footer").style.display = "none";
  });

  const goHome = () => {
    document.getElementById("engmenu").style.display = "block";
    document.getElementById("footer").style.display = "block";
  };
  return (
    <div
      class="col-12 py-4 px-0 notfound"
      style={{ width: "100vw", height: "100vh" }}
    >
      <div class="container">
        <div class="error">
          <p class="p">4</p>
          <span class="dracula">
            <div class="con">
              <div class="hair"></div>
              <div class="hair-r"></div>
              <div class="head"></div>
              <div class="eye"></div>
              <div class="eye eye-r"></div>
              <div class="mouth"></div>
              <div class="blod"></div>
              <div class="blod blod2"></div>
            </div>
          </span>
          <p class="p">4</p>

          <div class="page-ms">
            <p class="page-msg">
              {" "}
              Oops, the page you're looking for Disappeared{" "}
            </p>
            <Link to="/">
              <button class="go-back" onClick={goHome}>Go Back</button>
            </Link>
          </div>
        </div>
      </div>

      <iframe title="unique"
        style={{ width: 0, height: 0, border: "none" }}
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src="https://instaud.io/_/2Vvu.mp3"
      ></iframe>
    </div>
  );
}

export default Notfound;
