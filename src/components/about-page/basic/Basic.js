import "./Basic.css";
import Player from "../player/Player";
import React, { Component } from 'react'

export default class Basic extends Component {
    render() {
        return (
            <div className="row" style={{margin:"0%",padding:"1%"}}>
                   
            <br/>
            <div className="col-md-6 col-sm-6 col-12">
                
                 <p className="card-basic"> NAR Danışmanlık , Ankara merkezli bir danışmanlık ofisi olup Türkiye genelindeki ve yurt dışındaki  
                 çözüm ortakları ve bünyesindeki avukatlarla birlikte yerli ve yabancı danışanlarına   ticari ve hukuki danışmanlık hizmetleri 
                 sunmaktadır. Güncel hukuki ve ticari meseleleri takip eden Danışmanlık ofisimiz; Anayasa Mahkemesi, Yargıtay ve Danıştay 
                 tarafından verilen güncel emsal kararları, ticari ve finansal değişimleri revizyonist bakış açısı ile bilimsel çalışmalar 
                 ışığında gözden geçirerek uygulamaya koyar. Ofisimiz, müvekkil-vekil, danışan-danışman arasındaki karşılıklı güven, insana saygı ve gizlilik prensipleri üzerine 
                temellendirilmiş ve bu çerçevede değişen zaman koşullarına uygun olarak verdiğimiz hizmetin kalitesini arttırmak ve en üst 
                düzeye çıkarmak amacıyla ofisimiz sürekli gelişim içerisinde olmuştur.</p>
                 <br/>
                
            </div>
         
            <div className="col-md-6 col-sm-6 col-12">
                 
                 <Player/>

                 
            </div>


           


           
            
           
            
           
            
            
      
            
     </div>
        )
    }
}
