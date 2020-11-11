import Header from "../header/Header"; 
import Interior from "../services-interior/Interior";
import h1 from "./h1.jpg";
import GavelIcon from '@material-ui/icons/Gavel';
import React from 'react'
import "./Service.css"

function Service() {
    return (
        <div >
            <Header
                subtitle="Hizmetlerimiz"
                title="Hizmetlerimiz"
                icon={<GavelIcon style={{fontSize:"35px"}}/>}
            />
          <div className="row" style={{margin:"0%",padding:"1%"}}>
          <Interior
                photo={h1}
                title="Türk Vatandaşlığı"
                uzanti="#turk-vatandasligi"
                divert="/turk-vatandasligi"
            />
            <Interior
                photo={h1}
                title="Çalışma İzni"
                uzanti="#calisma-izni"
                divert="/calisma-izni"
            />
            <Interior
                photo={h1}
                title="Oturma İzni"
                uzanti="#oturma-izni"
                divert="oturma-izni"
            />
            <Interior
                photo={h1}
                title="Türkiye'de Şirket Kuruluşu"
                uzanti="#turkiyede-sirket-kurulusu"
                divert="#turkiyede-sirket-kurulusu"
            />
            <Interior
                photo={h1}
                title="Turkuaz Kart"
                uzanti="#turkuaz-kart"
                divert="#turkuaz-kart"
            />
            <Interior
                photo={h1}
                title="Sağlık Sigorta Poliçesi"
                uzanti="#saglik-sigorta-policesi"
                divert="#saglik-sigorta-policesi"
            />
                  
        </div>   
          

       


            
        </div>
    )
}

export default Service
