import ankara from "./ankara06.jpg";
import samsun from "./samsun55.jpg";
import SettingsPhoneIcon from "@material-ui/icons/SettingsPhone";
import EmailIcon from '@material-ui/icons/Email';
import React from 'react'
import "./Footer.css"
function Footer() {
    return (
        
        <div class="col-12 py-4 px-0" style={{ width:"100%"}}>
          
          <div className="col-lg-3 col-md-6 col-sm-6 col-12" style={{paddingTop:"1%"}}>
            
            <b style={{ color: "#A4203A", fontSize: "20px"}}>Why Us</b>
            <hr/>
            <p style={{textAlign:"justify"}}>
            NAR Danışmanlık , Ankara merkezli bir danışmanlık ofisi olup Türkiye genelindeki ve yurt dışındaki çözüm ortakları ve bünyesindeki avukatlarla birlikte yerli ve yabancı danışanlarına ticari ve hukuki danışmanlık hizmetleri sunmaktadır.
            NAR Danışmanlık hizmetleri, İkamet izni (oturma izni), Yabancı sermayeli şirket kuruluşu, Çalışma izni, Türk  hukuku, Türk vatandaşlığı gibi başlıca konularda  profesyonel avukat ve uzman kadrosuyla   hizmet veren Türk danışmanlık firmasıdır.
            </p>
           
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12" style={{paddingTop:"1%"}}>
            <b style={{ color: "#A4203A", fontSize: "20px" }}>Yasal Uyarı</b>
            <hr/>
            <p style={{textAlign:"justify"}}>
            Tüm hakları saklıdır. Bu sitede yer alan yazı, haber, fotoğraf, video ve sair dokümanların, bireysel kullanım dışında izin alınmadan kısmen ya da tamamen kopyalanması, çoğaltılması, kullanılması, yayınlanması ve dağıtılması kesinlikle yasaktır.
            </p>
            
            <div>
                  <a className="footeremail" href="nargocvedanismanlik@gmail.com" ><EmailIcon style={{fontSize:"24px",color:"black",float:"left"}}/> &nbsp;nargocvedanismanlik@gmail.com</a> 
                  <br/>
                  <br/>
                  <a className="footerphone"
                  href="tel: +905376971155"
                  style={{ float: "left"}}
                >
                  <SettingsPhoneIcon style={{fontSize:"24px"}}/> 
                </a> 
                <p style={{fontSize:"medium"}}>&nbsp;+90 537 697 11 55</p>
            </div>  

                
                


            
            
          </div>

        
          <div className="col-lg-3 col-md-6 col-sm-6 col-12" style={{paddingTop:"1%"}}>
            <b style={{ color: "#A4203A", fontSize: "20px" }}>Ankara Ofis</b>
            <hr/>
            <p><b>Çalışma Saatleri: </b> 10:00 - 18:00</p>
            <p><b>Adres: </b>Atatürk İş Merkezi
                <br/>
                    Karanfil Caddesi No:199 Kat:2
                <br/>
                    Kızılay / Çankaya / Ankara

            </p>
            <img src={ankara} className="footerphoto" alt="Ankara" title="Ankara"></img>
            
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12" style={{paddingTop:"1%"}}>
            <b style={{ color: "#A4203A", fontSize: "20px" }}>Samsun Ofis</b>
            <hr/>
            <p><b>Çalışma Saatleri: </b> 10:00 - 18:00</p>
            <p><b>Adres: </b>Atatürk İş Merkezi
                <br/>
                    Nato Caddesi No:155 Kat:3
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
