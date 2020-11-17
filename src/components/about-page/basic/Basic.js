import "./Basic.css";
import Player from "../player/Player";
import React, { Component } from 'react'

export default class Basic extends Component {
    render() {
        return (
            <div className="row" style={{margin:"0%",padding:"1%"}}>
                   
            <br/>
            <div className="col-md-6 col-sm-6 col-12">
                
                 <p className="card-basic"> Temelleri 2002 yılına dayanan ATA Kurumsal Danışmanlık A.Ş. başarılı geçmişiyle Türkiye’nin önde gelen danışmanlık firmaları arasında yer almakta ve hizmet sektöründe bölgesel lider olma vizyonuyla hareket etmektedir
Ata Kurumsal’ın ulaştığı başarının arkasında, müşteri odaklı ve verimliliği merkez alan bir yönetim yaklaşımı vardır. Bu yaklaşım, sadece maddi kazanımlarla değil, bütün toplumun yararlandığı ve yararlanacağı kurumsal yurttaşlık bilinciyle iç içe gelişmektedir. Bugüne kadar 1200 ün üzerinde kurumsal, 1500 ü aşkın bireysel müşteriye hizmet verdik. Müşterilerimize üstün teknoloji ile yüksek marka kalitesi ve dinamik bir insan kaynağı sunduk. Markamızın değerini sadece Türkiye sınırları içinde değil, bölgesel ve küresel ölçekte de yükselttik, daha büyük hedeflerimiz var.
Herhangi bir nedenden dolayı sağlık problemi yaşayan kişilerin ülkelerinde gerekli donanım bulunmaması sonucunda başka bir ülkeye tedavi olmak amacıyla giriş yapması sağlık turizmi olarak adlandırılmaktadır. Türkiye’de uluslararası standartlarda akredite olmuş 42 adet sağlık kuruluşu bulunmaktadır. İstanbul, Ankara ve İzmir başta olmak üzere kamu hastaneleri, üniversite hastaneleri ve özel hastaneler dünya standartlarındaki teknolojik cihazlarla donatılmıştır.</p>
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
}
