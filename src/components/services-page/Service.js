import Header from "../header/Header"; 
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
                   
                    
          
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            
                            
                                <img src={h1} class="card-img-top" alt="..." style={{width:"100%", height:"auto"}}></img>
                                
                                <a className="h_title" href="#">Türk Vatandaşlığı</a>
                                <p class="card-text">Daha Fazla Bilgi  &gt;</p> 
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            
                            
                                <img src={h1} class="card-img-top" alt="..." style={{width:"100%", height:"auto"}}></img>
                                <a className="h_title" href="#">Oturma İzni</a>
                                <p class="card-text">Daha Fazla Bilgi  &gt;</p> 
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            
                            
                                <img src={h1} class="card-img-top" alt="..." style={{width:"100%", height:"auto"}}></img>
                                <a className="h_title" href="#">Çalışma İzni</a>
                                <p class="card-text">Daha Fazla Bilgi  &gt;</p> 
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            
                            
                                <img src={h1} class="card-img-top" alt="..." style={{width:"100%", height:"auto"}}></img>
                                <a className="h_title" href="#">Turkuaz Kart</a>
                                <p class="card-text">Daha Fazla Bilgi  &gt;</p> 
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            
                            
                                <img src={h1} class="card-img-top" alt="..." style={{width:"100%", height:"auto"}}></img>
                                <a className="h_title" href="#">Sağlık Sigorta Poliçesi</a>
                                <p class="card-text">Daha Fazla Bilgi  &gt;</p> 
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            
                            
                                <img src={h1} class="card-img-top" alt="..." style={{width:"100%", height:"auto"}}></img>
                                <a className="h_title"  href="#">Türk Vatandaşlığı</a>
                
                                <p class="card-text">Daha Fazla Bilgi  &gt;</p> 
                        </div>
                      
                  
 
            </div>

        </div>
    )
}

export default Service
