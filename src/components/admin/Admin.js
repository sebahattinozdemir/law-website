import React, { useEffect } from "react";
import "./Admin.css";
import Login from "./login/Login";
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
    console.log("I am here")
  },[]);


  return (
    <div className="row admin-ana">
    
  
      <div className="login" id='login'>
            <Login/>
      </div>
      
      <div className="admin" id="admin">
        
        <div className="admin-sidebar" style={{ width: "15%", height: "100vh", marginTop:"0px",}}>
            <Sidebar/>
        </div>
       
        <div  className="admin-content" style={{ width: "85%", height: "100vh" }}>
          
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
