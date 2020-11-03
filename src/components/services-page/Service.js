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
            
            <div className="row" style={{margin:"0%",padding:"0%"}}>
                   
                    
          
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                            
                            
                                <img src={h1} class="card-img-top" alt="..." style={{width:"100%", height:"auto"}}></img>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                            
                            
                                <img src={h1} class="card-img-top" alt="..." style={{width:"100%", height:"auto"}}></img>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                            
                            
                                <img src={h1} class="card-img-top" alt="..." style={{width:"100%", height:"auto"}}></img>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                            
                            
                                <img src={h1} class="card-img-top" alt="..." style={{width:"100%", height:"auto"}}></img>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                            
                            
                                <img src={h1} class="card-img-top" alt="..." style={{width:"100%", height:"auto"}}></img>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                            
                            
                                <img src={h1} class="card-img-top" alt="..." style={{width:"100%", height:"auto"}}></img>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                            
                            
                                <img src={h1} class="card-img-top" alt="..." style={{width:"100%", height:"auto"}}></img>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                            
                            
                                <img src={h1} class="card-img-top" alt="..." style={{width:"100%", height:"auto"}}></img>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        
                  
 
            </div>

        </div>
    )
}

export default Service
