import "./Misyon.css";
import mission from "./target.ico";
import vision from "./vision.ico";
import React, { Component } from 'react'

export default class Misyon extends Component {
    render() {
        return (
            <div className="row" style={{margin:"0%",padding:"1%"}}>
                   
                   <br/>
                   <div className="col-md-6 col-sm-6 col-12">
                        <h3 style={{marginLeft:"1%"}}><img src={mission}></img> Misyonumuz</h3>
                        <p class="card-vizyon"> Sunduğumuz tüm sağlık hizmetlerinde hasta ve çalışan güvenliğini ön planda tutan, hasta haklarına daima saygılı, yetkin ve kalifiye sağlık personeli yetiştiren ve sürekli kendini geliştiren/yenileyen, hasta odaklı ve performans bazlı dinamikleri ile hizmet veren öncü bir kuruluş olmak.
Koruyucu ve iyileştirici sağlık hizmetlerini, tıbbın ulaştığı en üst düzeyde, yaygın ve bütünleşik bir yapı içinde, uygun ekonomik koşullarda  din, dil, ırk ve cinsiyet ayrımı gözetmeksizin nitelikli ve uzman kadrolar ile topluma sunmak.
Sağlık bilimleri alanındaki akademik çalışmalara ve bilimsel araştırmalara olanak sağlayarak, sağlıkla ilgili her konuda yeni bilgi ve uygulamaların geliştirilmesini desteklemek.
Uzmanlık eğitiminde çağdaş teknoloji ve yöntemleri kullanarak ülkemizin lider uzmanlarını yetiştirmek. Sağlık alanındaki araştırmalar ile evrensel bilime katkıda bulunmaktır.</p>
                        <br/>
                   </div>
                
                   <div className="col-md-6 col-sm-6 col-12">
                        <h3 style={{marginLeft:"1%"}}><img src={vision}></img> Vizyonumuz</h3>
                        <p class="card-vizyon"> Aşağıdaki değerlere bağlı kalan anlayışımızı değiştirmeden Şirketimizin yetenek ve kapasitesi doğrultusunda, müşterilerimizin istek ve beklentilerini dünya standartlarında karşılayan, Müşterilerimizin ve çalışanlarımızın memnuniyetlerini sağlayan firma anlayışımızı devam ettirebilmek.</p>
                        <ol className="ilkeler">
                            <li>Kaliteli hizmet üretimi,</li>
                            <li>Günceli yakalayan teknoloji yatırımı,</li>
                            <li>Mesleki uzmanlık,</li>
                            <li>Kişisel verilerde gizlilik,</li>
                            <li>Kreatif düşünebilen eğitimli insan kaynağı,</li>
                            <li>İnsana Saygı duyan,</li>
                            <li>Sosyal sorumluluk bilincine sahip</li>
                        </ol>

                        <br/>
                   </div>
                  
                   
                  
                   
                  
                   
                   
             
                   
            </div>
        )
    }
}
