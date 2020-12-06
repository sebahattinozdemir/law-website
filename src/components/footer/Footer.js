import React from 'react'
import "./Footer.css"
function Footer() {
    return (
        
        <div class="col-12 py-4 px-0" style={{ width:"100%"}}>
          
          <div className="col-lg-3 col-md-6 col-sm-6 col-12" style={{paddingTop:"1%"}}>
            
            <b style={{ color: "black", fontSize: "20px"}}>Neden Biz</b>
            <hr/>
            <p style={{textAlign:"justify"}}>
            NAR Danışmanlık hizmetleri, İkamet izni (oturma izni), Yabancı sermayeli şirket kuruluşu, Çalışma izni, Türk  hukuku, Türk vatandaşlığı gibi başlıca konularda  profesyonel avukat ve uzman kadrosuyla   hizmet veren Türk danışmanlık firmasıdır.
            </p>
           
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12" style={{paddingTop:"1%"}}>
            <b style={{ color: "black", fontSize: "20px" }}>Yasal Uyarı</b>
            <hr/>
            <p style={{textAlign:"justify"}}>
            Tüm hakları saklıdır. Bu sitede yer alan yazı, haber, fotoğraf, video ve sair dokümanların, bireysel kullanım dışında izin alınmadan kısmen ya da tamamen kopyalanması, çoğaltılması, kullanılması, yayınlanması ve dağıtılması kesinlikle yasaktır. Bu yasağa uymayanlar hakkında 5846 sayılı Fikir ve Sanat Eserleri Kanunu uyarınca yasal işlem yapılacaktır.
            </p>
            
          </div>

        
          <div className="col-lg-3 col-md-6 col-sm-6 col-12" style={{paddingTop:"1%"}}>
            <b style={{ color: "black", fontSize: "20px" }}>Ankara Ofis</b>
            <hr/>
            <p><b>Çalışma Saatleri: </b> 10:00 - 18:00</p>
            <p><b>Randevusuz Görüşme: </b> HAYIR</p>
            <p><b>Görüşme Ücreti: </b>400 ₺/45 Dakika</p>
            <p><b>Adres: </b>Atatürk İş Merkezi
                <br/>
                    Karanfil Caddesi No:199 Kat:2
                <br/>
                    Kızılay / Çankaya / Ankara

            </p>
            
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12" style={{paddingTop:"1%"}}>
            <b style={{ color: "black", fontSize: "20px" }}>Samsun Ofis</b>
            <hr/>
            <p><b>Çalışma Saatleri: </b> 10:00 - 18:00</p>
            <p><b>Randevusuz Görüşme: </b> HAYIR</p>
            <p><b>Görüşme Ücreti: </b>300 ₺/45 Dakika</p>
            <p><b>Adres: </b>Atatürk İş Merkezi
                <br/>
                    Nato Caddesi No:155 Kat:3
                <br/>
                    Atakent / Atakum / Samsun

            </p>
           
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
