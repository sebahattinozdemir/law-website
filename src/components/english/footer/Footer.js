import ankara from "./ankara06.jpg";
import samsun from "./samsun55.jpg";
import SettingsPhoneIcon from "@material-ui/icons/SettingsPhone";
import EmailIcon from '@material-ui/icons/Email';
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import FacebookIcon from "@material-ui/icons/Facebook";


import React from 'react'
import "./Footer.css"
function Footer() {
    return (
        
        <div class="col-12 py-4 px-0" style={{ width:"100%"}}>
          
          <div className="col-lg-3 col-md-6 col-sm-6 col-12" style={{paddingTop:"1%"}}>
            
            <b style={{ color: "#A4203A", fontSize: "20px"}}>Who Are We</b>
            <hr/>
            <p style={{textAlign:"justify"}}>
            NAR Immigration and Consulting is a consultancy firm based in Ankara with partners and lawyers in general, except in Turkey and abroad within the domestic and international 
            airports Consult offers commercial and legal advisory services.
            </p>
           
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12" style={{paddingTop:"1%"}}>
            <b style={{ color: "#A4203A", fontSize: "20px" }}>Contact Information</b>
            <hr/>
            <p style={{textAlign:"justify"}}>
            You can contact us for any issue you will transmit verbally or in writing via the phone number below.
            </p>
            
            <div>
                  <a className="footeremail" href="mailto:nargocvedanismanlik@gmail.com" ><EmailIcon style={{fontSize:"24px",color:"black",float:"left"}}/> &nbsp;nargocvedanismanlik@gmail.com</a> 
                  <br/>
                  <br/>
                  <a className="footerphone"
                  href="tel: +905376971155"
                  style={{ float: "left"}}
                >
                  <SettingsPhoneIcon style={{fontSize:"24px"}}/> 
                </a> 
                <a className="footerphone"
                  href="https://wa.me/+905376971155"
                  style={{ float: "left",textIndent:"1rem"}}
                >
                  <WhatsAppIcon style={{fontSize:"24px"}}/>
                </a>
                <p style={{fontSize:"medium"}}>&nbsp;+90 537 697 11 55</p>

                <a className="menu-item-link"
                  href="https://www.facebook.com/adli.sicil.1"
                  style={{ float: "left" }}
                >
                  <FacebookIcon style={{fontSize:"x-large"}}/>
                </a>
                
            </div>  

                
                


            
            
          </div>

        
          <div className="col-lg-3 col-md-6 col-sm-6 col-12" style={{paddingTop:"1%"}}>
            <b style={{ color: "#A4203A", fontSize: "20px" }}>Ankara Office</b>
            <hr/>
            <p><b>Working Hours: </b> 10:00 am- 18:00 pm</p>
            <p><b>Address: </b>Atatürk Business Center
                <br/>
                    Karanfil Street Number:199 Floor:2
                <br/>
                    Kızılay / Çankaya / Ankara

            </p>
            <img src={ankara} className="footerphoto" alt="Ankara" title="Ankara"></img>
            
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12" style={{paddingTop:"1%"}}>
            <b style={{ color: "#A4203A", fontSize: "20px" }}>Samsun Office</b>
            <hr/>
            <p><b>Working Hours: </b> 10:00 am- 18:00 pm</p>
            <p><b>Address: </b>Atatürk Business Center
                <br/>
                    Nato Street Number:155 Floor:3
                <br/>
                    Atakent / Atakum / Samsun

            </p>
            <img src={samsun} className="footerphoto" alt="Samsun" title="Samsun"></img>
           
          </div>

          

          <div className="col-12">
            <p style={{color:"#f8f9fa"}}>This line was inserted in order to give a unique hr tag below the four colums</p>
            <hr/> 
                    <div className="patent">
                        
                            <p style={{fontSize:"12px",color:"black",paddingLeft:"15px",float:"left"}}> ©2020 All Rights Reserved</p> 
                            &nbsp; &nbsp;
                            <p style={{fontSize:"12px",color:"black",paddingRight:"15px",float:"right",textAlign:"right"}}> ®Se<b>B</b>er Tech</p>
                    </div>
          </div>

          
         
          
          

        </div>

       

        
     
    )
}

export default Footer
