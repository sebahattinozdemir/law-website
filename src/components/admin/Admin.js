import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Admin.css";
import Login from "./login/Login";
import Hakkimizda from "./admin-hakkimizda/Hakkimizda";
import Hizmetlerimiz from "./admin-hizmetlerimiz/Hizmetlerimiz";
import Referanslarimiz from "./admin-referanslar/Referanslar.js";
import Blog from "./admin-blog/Blog";
import Iletisim from "./admin-iletisim/Iletisim";
import Sifre from "./admin-password/Password";
import Sidebar from "./admin-sidebar/Sidebar";


function Admin() {
  useEffect(() => {
    document.getElementById("menu").style.display = "none";
    document.getElementById("footer").style.display = "none";
    document.getElementById("admin").style.display = "none";
    document.getElementById("app-container").style.width = "99%";
  });


  return (
    <div className="row admin-ana">
    
  
      <div className="login" id='login'>
            <Login/>
      </div>
      
      <div className="admin" id="admin" style={{ display: "none", marginLeft: "1%",width:"99%",marginTop:'0px' }}>
        
        <div className="admin-sidebar" style={{ width: "15%", height: "100vh", marginTop:"0px",}}>
            <Sidebar/>
        </div>
       
        <div  className="admin-content" style={{ width: "85%", height: "100vh" }}>
          
          <div id="hakkimizda" style={{ width: "100%",height:'100%', display: "none" }}>
                <Hakkimizda/>
          </div>

          <div id="hizmetlerimiz" style={{ width: "100%", display: "none" }}>
                <Hizmetlerimiz/>
          </div>

          <div id="referanslar" style={{ width: "100%", display: "none" }}>
                <Referanslarimiz/>
          </div>

          <div id="blog" style={{ width: "100%", display: "none" }}>
            <Blog/>
          </div>

          <div id="iletisim" style={{ width: "100%", display: "none" }}>
            <Iletisim/>
          </div>

          <div id="password" style={{ width: "100%", display: "none" }}>
            <Sifre/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
