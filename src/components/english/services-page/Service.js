import Header from "../header/Header"; 
import Interior from "../services-interior/Interior";
import h1 from "./h1.jpg";
import GavelIcon from '@material-ui/icons/Gavel';
import React, { useState, useEffect } from "react";
import "./Service.css"
import db from "./../../../firebase";
import useDocumentTitle from '../../../useDocumentTitle';

function Service() {
  useDocumentTitle('Services - Nar Law and Consultancy');
  const [services, setServices] = useState([]);

  useEffect(() => {
    // fires once when the app loads
    db.collection("enServices")
      .orderBy("timeStamp", "desc")
      .onSnapshot((snapshot) => {
        setServices(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            url:doc.data().url.substring(doc.data().url.lastIndexOf('file')+7, doc.data().url.lastIndexOf('/')),
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
                subtitle="Services"
                title="Services"
                icon={<GavelIcon style={{fontSize:"35px"}}/>}
            />
          <div className="row" style={{margin:"0%",padding:"1%"}}>

          {services.map((service,index) => (
            <Interior photo = {service.url} 
            title={service.heading} 
            uzanti={"/services/"+service.heading} 
            content = {service}
             
            />
          ))}

          
        </div>   
          

       


            
        </div>
    )
}

export default Service
