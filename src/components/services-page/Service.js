import Header from "../header/Header"; 
import Interior from "../services-interior/Interior";
import h1 from "./h1.jpg";
import nar11 from "./nar11.jpg";
import Turkishcitizen from "./turkishcitizen.jpg";
import Oturmaic from "./oturmaic.jpg";
import Calismaic from "./calisma.jpg";
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
                photo={Turkishcitizen}
                title="Türk Vatandaşlığı"
                uzanti="/hizmetlerimiz/turk-vatandasligi"
                more="Daha Fazla Bilgi"
                divert="/hizmetlerimiz/turk-vatandasligi"
            />
            <Interior
                photo={Calismaic}
                title="Çalışma İzni"
                uzanti="/hizmetlerimiz/calisma-izni"
                more="Daha Fazla Bilgi"
                divert="/hizmetlerimiz/calisma-izni"
            />
            <Interior
                photo={Oturmaic}
                title="Oturma İzni"
                uzanti="/hizmetlerimiz/oturma-izni"
                more="Daha Fazla Bilgi"
                divert="/hizmetlerimiz/oturma-izni"
            />
            <Interior
                photo={nar11}
                title="Türkiye'de Şirket Kuruluşu"
                uzanti="/hizmetlerimiz/turkiyede-sirket-kurulusu"
                more="Daha Fazla Bilgi"
                divert="/hizmetlerimiz/turkiyede-sirket-kurulusu"
            />
            <Interior
                photo={nar11}
                title="Turkuaz Kart"
                uzanti="/hizmetlerimiz/turkuaz-kart"
                more="Daha Fazla Bilgi"
                divert="/hizmetlerimiz/turkuaz-kart"
            />
            <Interior
                photo={nar11}
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
