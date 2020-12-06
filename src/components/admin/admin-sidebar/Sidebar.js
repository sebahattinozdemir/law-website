import React from "react";
import './Sidebar.css'

function Sidebar() {
 
  const hizmetlerimiz = () => {
    document.getElementById("hizmetlerimiz").style.display = "block";
    document.getElementById("referanslar").style.display = "none";
    document.getElementById("blog").style.display = "none";
    document.getElementById("iletisim").style.display = "none";
  };
  const referanslar = () => {
    document.getElementById("hizmetlerimiz").style.display = "none";
    document.getElementById("referanslar").style.display = "block";
    document.getElementById("blog").style.display = "none";
    document.getElementById("iletisim").style.display = "none";
  };
  const blog = () => {
    document.getElementById("hizmetlerimiz").style.display = "none";
    document.getElementById("referanslar").style.display = "none";
    document.getElementById("blog").style.display = "block";
    document.getElementById("iletisim").style.display = "none";
  };

  const iletisim = () => {
    document.getElementById("hizmetlerimiz").style.display = "none";
    document.getElementById("referanslar").style.display = "none";
    document.getElementById("blog").style.display = "none";
    document.getElementById("iletisim").style.display = "block";
  };

  return (
    <div className={{ marginTop:"0px"}}>
      <div style={{ width: "100%", height: "100vh", backgroundColor: "#1A2226", marginTop:"0px",border:'2px solid transparent'}}>
        <h3 style={{ textAlign: "center", color: "white" }}>SITE ISLEMLERI</h3>
        <button
          className="btn btn-outline"
          style={{
            backgroundColor: "transparent",
            color: "#fff",
            fontSize: "16px",
            display:'block',
            width:'100%'
          }}
          onClick={hizmetlerimiz}
        >
          Hizmetlerimiz
        </button>
        
        <button
          className="btn btn-outline"
          onClick={referanslar}
          style={{
            backgroundColor: "transparent",
            color: "#fff",
            fontSize: "16px",
            display:'block',
            width:'100%'
          }}
        >
          Referanslarimiz
        </button>
        <button
          className="btn btn-outline"
          onClick={blog}
          style={{
            backgroundColor: "transparent",
            color: "#fff",
            fontSize: "16px",
            display:'block',
            width:'100%'
          }}
        >
          Blog
        </button>
        <button
          className="btn btn-outline"
          onClick={iletisim}
          style={{
            backgroundColor: "transparent",
            color: "#fff",
            fontSize: "16px",
            display:'block',
            width:'100%'
          }}
        >
          Iletisim
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
