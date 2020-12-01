import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  useEffect(() => {
    document.getElementById("menu").style.display = "none";
    document.getElementById("footer").style.display = "none";
    document.getElementById("app-container").style.width = "99%";
  });

  const giris = () => {
    document.getElementById("login").style.display = "none";
    document.getElementById("admin").style.display = "flex";
  };

  const vazgec = () => {
    document.getElementById("menu").style.display = "block";
    document.getElementById("footer").style.display = "block";
  };

  return (
    <div className="login" style={{ height: "100vh", width: "100vw" }}>
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-2"></div>
          <div class="col-lg-6 col-md-8 login-box">
            <div class="col-lg-12 login-key">
              <i class="fa fa-key" aria-hidden="true"></i>
            </div>
            <div class="col-lg-12 login-title">ADMIN PANEL</div>

            <div class="col-lg-12 login-form">
              <div class="col-lg-12 login-form">
                
                  <div class="form-group">
                    <label class="form-control-label">USERNAME</label>
                    <input type="text" class="form-control" />
                  </div>
                  <div class="form-group">
                    <label class="form-control-label">PASSWORD</label>
                    <input type="password" class="form-control" i />
                  </div>

                  <div class="col-lg-12 loginbttm">
                    <div class="col-lg-6 login-btm login-text"></div>
                    <div class="col-lg-6 login-btm login-button">
                      <button
                        class="btn btn-outline-primary"
                        onClick={giris}
                      >
                        LOGIN
                      </button>
                    </div>
                  </div>
                
              </div>
            </div>
            <div class="col-lg-3 col-md-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
