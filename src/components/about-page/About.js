import Header from "../header/Header"; 
import h1 from "./h1.jpg";
import BusinessIcon from '@material-ui/icons/Business';
import React from 'react'
import "./About.css";
function About() {
    return (
        <div>
            <Header
                subtitle="Hakkımızda"
                title="Hakkımızda"
                icon={<BusinessIcon style={{fontSize:"35px"}}/>}
                
            />
                 <div className="row" style={{margin:"0%",padding:"1%"}}>
                   
                    
          
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

export default About
