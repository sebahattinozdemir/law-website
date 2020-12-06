import "./Basic.css";
import Player from "../player/Player";
import React, { Component } from 'react'

function Basic(props) {
   
        return (
            <div className="row" style={{margin:"0%",padding:"1%"}}>
                   
            <br/>
            <div className="col-md-6 col-sm-6 col-12">
                
        <p className="card-basic">{props.content}</p>
                 <br/>
                 <div className="ic">
                     <p className="ic_text">Bugüne kadar 1200 ün üzerinde kurumsal, 1500 ü aşkın bireysel müşteriye hizmet verdik. Müşterilerimize üstün teknoloji ile yüksek marka kalitesi ve dinamik bir insan kaynağı sunduk. Markamızın değerini sadece Türkiye sınırları içinde değil, bölgesel ve küresel ölçekte de yükselttik, daha büyük hedeflerimiz var.</p>
                 </div>
            </div>
         
            <div className="col-md-6 col-sm-6 col-12">
                 
                 <Player/>

                 
            </div>        
     </div>
        )
    
}
export default Basic

