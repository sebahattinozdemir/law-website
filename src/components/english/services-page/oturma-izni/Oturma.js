import React from 'react';
import "./Oturma.css";
import HouseIcon from '@material-ui/icons/House';
import Altheader from '../../altheader/Altheader';

export default function Oturma() {
    return (
        <div>
             <Altheader
                 subtitle="Hizmetlerimiz"
                 title="Oturma İzni"
                 alttitle="Oturma İzni"
                 icon={<HouseIcon style={{fontSize:"35px"}}/>}
            />
             <div className="row" style={{margin:"0%",padding:"1%"}}>
                    
                    
          
                    <div className="col-12" style={{marginLeft:"1%",marginRight:"1%"}}>
                            <p class="card-text1">Türkiye üzerinde oturma izni alacak kişilerin bu başvuruyu hangi amaç ile yaptığı önemlidir. Göç Dairesi verilerine göre 2016 yılında Türkiye’de en çok oturma izni alan ülke Irak olmuştur. Ardından Suriye ve Azerbaycan ülkeleri Irak’ı takip etmektedir. Türkiye için toplamda 6 adet oturma izni alma yöntemi bulunur. Bu yöntemler “Kısa Dönem Oturma İzni, Aile Oturma İzni, Öğrenci Oturma İzni, Uzun Dönem Oturma İzni, İnsani Oturmat İzni, İnsani Ticaret Mağduru Oturma İzni” olarak karşımıza çıkmaktadır. Bu izinler için hakkında bilgi edinmek ve gerekli evrakları öğrenmek için yazımızı okumaya devam edebilirsiniz.</p>
                    </div>
 
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <h3 style={{color:"#A4203A"}}><HouseIcon style={{fontSize:"x-large",color:"black"}}/> Kısa Dönem Oturma İzni</h3>
                            <p class="card-text1">Kısa dönem oturma izni alacakların Türkiye’ye gelme nedenlerinin belirlenen kapsamlar içerisinde olması gerekir. Bu şartlardan bazıları şu şekildedir;</p>
                            <ol className="sermaye">
                                <li>Araştırma amacı ile gelenler,</li>
                                <li>Taşınmaz mülkü bulunanlar,</li>
                                <li>Ticari iş yapacaklar veya bağlantı kuracaklar,</li>
                                <li>Turizm amacı güdenler,</li>
                                <li>Aile ikamet izninden kısa dönem ikamet iznine geçenler.</li>
                            </ol>
                    </div>
 
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <h3 style={{color:"#A4203A"}}><HouseIcon style={{fontSize:"x-large",color:"black"}}/> Aile Oturma İzni</h3>
                            <p class="card-text1">Oturma izni arasında aile oturma izni almanız için evlilik şartı bulunur. Bir Türkiye Cumhuriyeti vatandaşı ile evli olan yabancı uyruklu kişi Türkiye Cumhuriyeti üzerinde oturma iznine sahip olabilir. Yabancı uyrukta olan kişinin Türk vatandaşından çocuğu olmasa bile evlenildiği takdirde çocuklarını Türkiye oturma iznine kaydettirebilir.</p>
                           
                    </div>
 
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12" >
                            <h3 style={{color:"#A4203A"}}><HouseIcon style={{fontSize:"x-large",color:"black"}}/> Öğrenci Oturma İzni</h3>
                            <p class="card-text1" >Adından da anlaşılacağı üzere Türkiye’ye öğrenci olarak gelen kişilerin alacağı oturma izni türüdür. Türkiye üzerinde okul kazanılması veya okula kayıt yapılması durumunda, Türkiye’ye geldikten en geç 2 ay içerisinde ikamet kaydının yapılması gerekir. Aksi takdirde kişiler oturma izni konusunda büyük problemler yaşayabilir. Öğrencilik için yapılan ikamet izinleri, öğrenim süresinden fazla olamamaktadır.</p>
                    </div>

                   
                  
                   
                    
              
 
        </div>
        </div>
    )
}
