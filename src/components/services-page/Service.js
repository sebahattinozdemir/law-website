import Header from "../header/Header"; 
import Interior from "../services-interior/Interior";
import h1 from "./h1.jpg";
import nar11 from "./nar11.jpg";
import Turkishcitizen from "./turkishcitizen.jpg";
import Oturmaic from "./oturmaic.jpg";
import Calismaic from "./calisma.jpg";
import GavelIcon from '@material-ui/icons/Gavel';
import React, { useState, useEffect } from "react";
import "./Service.css"
import db from "./../../firebase";

function Service() {

  const [services, setServices] = useState([]);

  const [heading, setHeading] = useState("");
  const [serviceContent, setServiceContent] = useState("");
  const [underServiceText1, setUnderServiceText1] = useState("");
  const [underServiceText2, setUnderServiceText2] = useState("");
  const [underServiceText3, setUnderServiceText3] = useState("");
  const [underServiceHead1, setUnderServiceHead1] = useState("");
  const [underServiceHead2, setUnderServiceHead2] = useState("");
  const [underServiceHead3, setUnderServiceHead3] = useState("");

  useEffect(() => {
    // fires once when the app loads
    db.collection("services")
      .orderBy("timeStamp", "desc")
      .onSnapshot((snapshot) => {
        setServices(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            heading: doc.data().heading,
            serviceContent: doc.data().service_content,
            underServiceHead1: doc.data().under_service_head1,
            underServiceHead2: doc.data().under_service_head2,
            underServiceHead3: doc.data().under_service_head3,
            underServiceText1: doc.data().under_service_text1,
            underServiceText2: doc.data().under_service_text2,
            underServiceText3: doc.data().under_service_text3,
          }))
        );
      });

    console.log(services);
  }, []);

    return (
        <div >
            <Header
                subtitle="Hizmetlerimiz"
                title="Hizmetlerimiz"
                icon={<GavelIcon style={{fontSize:"35px"}}/>}
            />
          <div className="row" style={{margin:"0%",padding:"1%"}}>

          {services.map((service,index) => (
            <Interior photo = {h1} title={service.heading} uzanti={"/hizmetlerimiz/"+service.heading} content = {service}
            more="Daha Fazla Bilgi" divert={"/hizmetlerimiz/"+service.heading}  
            />
          ))}

          
        </div>   
          

       


            
        </div>
    )
}

export default Service
