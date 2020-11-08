import React from 'react';
import not404 from "./notfound.jpg";
import "./Notfound.css"
function Notfound() {
    return (
        
        <div class="col-12 py-4 px-0" style={{ width:"100%"}}>
                <img src={not404} class="card-img-top" alt="..." style={{width:"100%", height:"100%"}}></img>
        </div>

       

        
     
    )
}

export default Notfound
