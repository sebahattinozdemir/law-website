import "./Home.css";
import video from "./1.gif";
import h2 from "./h2.jpg";
import Mail from "../mail/Mail";
import Interior from "../services-interior/Interior";
import React from 'react';
import "./Home.css"
function Home() {
  return (
    <div className="row">
      <div
        className="col-12"
        style={{ position: "relative", marginLeft:'1%',marginRight:'1%' }}
      >

        <img
          src={video}
          class="card-img-top"
          alt="..."
          style={{ width: "100%", height: "25vw"}}
        ></img>

        <p
          style={{
            position: "absolute",
            top: "35%",
            left: "30%",
            color: "white",
            fontSize:"xx-large"
            
          }}
        >
          BİZİ TERCİH ETMELİSİNİZ ÇÜNKÜ ...
        </p>
      </div>
      <div className="row" style={{margin:"0%",padding:"1%"}}>
          <Interior
                photo={h2}
                title="Türk Vatandaşlığı"
                uzanti="/hizmetlerimiz/turk-vatandasligi"
                divert="/hizmetlerimiz/turk-vatandasligi"
            />
            <Interior
                photo={h2}
                title="Çalışma İzni"
                uzanti="/hizmetlerimiz/calisma-izni"
                divert="/hizmetlerimiz/calisma-izni"
            />
            <Interior
                photo={h2}
                title="Oturma İzni"
                uzanti="/hizmetlerimiz/oturma-izni"
                divert="/hizmetlerimiz/oturma-izni"
            />
          
      </div>
      <Mail/>
    </div>
  );
}

export default Home;

