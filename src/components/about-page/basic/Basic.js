import "./Basic.css";
import Player from "../player/Player";
import React, { Component } from 'react'

export default class Basic extends Component {
    render() {
        return (
            <div className="row" style={{margin:"0%",padding:"1%"}}>
                   
            <br/>
            <div className="col-md-6 col-sm-6 col-12">
                
                 <p className="card-basic"> NAR Danışmanlık , Ankara merkezli bir danışmanlık ofisi olup Türkiye genelindeki ve yurt dışındaki  çözüm ortakları ve bünyesindeki avukatlarla birlikte yerli ve yabancı danışanlarına   ticari ve hukuki danışmanlık hizmetleri sunmaktadır.
Güncel hukuki ve ticari meseleleri takip eden Danışmanlık ofisimiz; Anayasa Mahkemesi, Yargıtay ve Danıştay tarafından verilen güncel emsal kararları, ticari ve finansal değişimleri revizyonist bakış açısı ile bilimsel çalışmalar ışığında gözden geçirerek uygulamaya koyar.
Vizyonumuz ilkeler çerçevesinde müvekkillerimize, danışanlarımıza karşılaştığı problemlere, sahip olduğumuz tecrübe ve birikimlerle profesyonelce çözüm aramak ve uyuşmazlıkların en iyi, en hızlı ve en etkin  şekilde    kısa sürede bitirilmesini sağlamak ofisimizin yegâne amacıdır. Ofisimiz, müvekkil-vekil, danışan-danışman arasındaki karşılıklı güven, insana saygı ve gizlilik prensipleri üzerine temellendirilmiş ve bu çerçevede değişen zaman koşullarına uygun olarak verdiğimiz hizmetin kalitesini arttırmak ve en üst düzeye çıkarmak amacıyla ofisimiz sürekli gelişim içerisinde olmuştur.</p>
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
