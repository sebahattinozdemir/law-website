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
                uzanti="/hizmetlerimiz/turk-vatandasligi"
                more="Daha Fazla Bilgi"
                divert="/hizmetlerimiz/turk-vatandasligi"
            />
            <Interior
                photo={h1}
                title="Çalışma İzni"
                uzanti="/hizmetlerimiz/calisma-izni"
                more="Daha Fazla Bilgi"
                divert="/hizmetlerimiz/calisma-izni"
            />
            <Interior
                photo={h1}
                title="Oturma İzni"
                uzanti="/hizmetlerimiz/oturma-izni"
                more="Daha Fazla Bilgi"
                divert="/hizmetlerimiz/oturma-izni"
            />
            <Interior
                photo={h1}
                title="Türkiye'de Şirket Kuruluşu"
                uzanti="/hizmetlerimiz/turkiyede-sirket-kurulusu"
                more="Daha Fazla Bilgi"
                divert="/hizmetlerimiz/turkiyede-sirket-kurulusu"
            />
            <Interior
                photo={h1}
                title="Turkuaz Kart"
                uzanti="/hizmetlerimiz/turkuaz-kart"
                more="Daha Fazla Bilgi"
                divert="/hizmetlerimiz/turkuaz-kart"
            />
            <Interior
                photo={h1}
                title="Sağlık Sigorta Poliçesi"
                uzanti="/hizmetlerimiz/saglik-sigorta-policesi"
                more="Daha Fazla Bilgi"
                divert="/hizmetlerimiz/saglik-sigorta-policesi"
            />
                  
        </div>   
          

       


            
        </div>
    )
}

export default Service
