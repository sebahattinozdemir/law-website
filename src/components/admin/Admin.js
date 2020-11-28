import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Admin.css";
function Admin() {
  useEffect(() => {
    document.getElementById("menu").style.display = "none";
    document.getElementById("footer").style.display = "none";
  });

 const giris = ()=>{
      console.log('Giris')
      document.getElementById('login').style.display='none';
      document.getElementById('admin').style.display='block';
  }

  const vazgec = ()=>{
    document.getElementById("menu").style.display   = "block";
    document.getElementById("footer").style.display = "block";

  }

  return (
    <div  className="row">
      <div className="col-12 login" id="login" style={{marginTop:"10%",marginLeft: "20%"}}>
        <h2 style={{ textAlign: "center" }}>Login Form</h2>

        <form
          action="/action_page.php"
          method="post"
        >
          <div class="imgcontainer">
            <img src="img_avatar2.png" alt="Avatar" class="avatar" />
          </div>

          <div class="container">
            <label for="uname">
              <b>Kullanici Adi</b>
            </label>
            <input
              type="text"
              placeholder="Kullanici Adiniz Giriniz"
              name="uname"
              required
            />

            <label for="psw">
              <b>Sifre</b>
            </label>
            <input
              type="password"
              placeholder="Sifrenizi Giriniz"
              name="psw"
              required
            />

            <button type="submit" className="btn btn-success" onClick={giris}>Giris</button>
          </div>

          <div class="container" style={{ backgroundColor: "#f1f1f1" }}>
              <Link to="/">
              <button type="button" class="btn btn-danger cancelbtn" onClick={{vazgec}}>
              Vazgec
            </button>  
              </Link>
            
            <span class="psw">
              Sifrenizi mi <a href="#">unuttunuz?</a>
            </span>
          </div>
        </form>
      </div>

      <div className="col-12 admin" id='admin' style={{display:'none',border:'2px solid red',marginLeft:'1%'}}> 
            <div className="col-3" style={{border:'2px solid yellow',width:'20%', height:'965px', backgroundColor:'#333'}}>
                <h3 style={{textAlign:'center',color:'white'}}> SITE ISLEMLERI</h3>
                <button style={{backgroundColor:'transparent',color:'#fff',fontSize:'16px'}} className="btn btn-outline">Hakkimizda</button>
                <button style={{backgroundColor:'transparent',color:'#fff',fontSize:'16px'}} className="btn btn-outline">Hizmetlerimiz</button>
                <button style={{backgroundColor:'transparent',color:'#fff',fontSize:'16px'}} className="btn btn-outline">Referanslarimiz</button>
                <button style={{backgroundColor:'transparent',color:'#fff',fontSize:'16px'}} className="btn btn-outline">Blog</button>
                <button style={{backgroundColor:'transparent',color:'#fff',fontSize:'16px'}} className="btn btn-outline">Iletisim</button>
            </div>
      </div>

    </div>
  );
}

export default Admin;
