import Header from "../header/Header"; 
import h1 from "./h1.jpg";
import AssignmentIcon from '@material-ui/icons/Assignment';
import React from 'react'
import "./Blog.css"
function Blog() {
    return (
        <div>
            <Header
                subtitle="Blog"
                title="Blog"
                icon={<AssignmentIcon style={{fontSize:"35px"}} />}
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

export default Blog
