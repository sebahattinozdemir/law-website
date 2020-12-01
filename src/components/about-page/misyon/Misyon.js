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
                        <p class="card-vizyon">Sunduğumuz tüm  hizmetlerde danışan ve müvekkil  güvenliğini ön planda tutan, saygılı, yetkin, kalifiye hizmet üreten ve sürekli kendini yenileyen, danışan-müvekkil odaklı ve güven bazlı dinamikleri ile hizmet veren danışmanlık ofisi olmak. Vizyonumuz ilkeler çerçevesinde müvekkillerimize, danışanlarımıza karşılaştığı problemlere, sahip olduğumuz tecrübe ve birikimlerle profesyonelce çözüm aramak ve uyuşmazlıkların en iyi, en hızlı ve en etkin şekilde kısa sürede bitirilmesini sağlamak ofisimizin yegâne amacıdır.</p>
                        <ol className="ilkeler">
                            <li>Hizmet sunduğumuz bireylerin yaşam kalitesini artırmak,</li>
                            <li>Faaliyet gösterdiğimiz şehir, bölge ve ülkenin ekonomik, sosyal ve çevresel gelişimine katkıda bulunmaktır.</li>
                        </ol>
                        <br/>
                   </div>
                
                   <div className="col-md-6 col-sm-6 col-12">
                        <h3 style={{marginLeft:"1%"}}><img src={vision}></img> Vizyonumuz</h3>
                        <p class="card-vizyon"> Vizyonumuz aşağıda belirtilen ilkeler çerçevesinde müvekkillerimize, danışanlarımıza karşılaştığı problemlere, sahip olduğumuz tecrübe ve birikimlerle profesyonelce çözüm aramak ve uyuşmazlıkların en iyi, en hızlı ve en etkin şekilde kısa sürede bitirilmesini sağlamak ofisimizin yegâne amacıdır.</p>
                        <ol className="ilkeler">
                            <li>Kaliteli hizmet üretimi,</li>
                            <li>Mesleki uzmanlık,</li>
                            <li>Günceli yakalayan teknoloji yatırımı,</li>
                            <li>Kişisel verilerde gizlilik,</li>
                            <li>İnsana saygı gösterme,</li>
                            <li>Etkili ve hızlı adımları atabilme,</li>
                            <li>Sosyal sorumluluk bilincine sahip olmaktır.</li>
                        </ol>

                        <br/>
                   </div>
                  
                   
                  
                   
                  
                   
                   
             
                   
            </div>
        )
    }
}
