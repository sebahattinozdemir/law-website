import "./Home.css";
import AtaKasım from "./atatürk10.gif";
import investment from "./investment.jpg";
import education from "./education.jpg";
import life from "./life.jpg";
import health from "./health.jpg";
import calisma from "./calisma.jpg";
import oturma from "./oturma.jpg";
import turkishimg from "./turkishcitizenship.jpg";
import Mail from "../mail/Mail";
import SabitHizmet from "../sabit-hizmet/SabitHizmet";
import Investment from "../investment/Investment";
import React, { useEffect } from 'react';
import useDocumentTitle from '../../../useDocumentTitle';



function Home() {

  useDocumentTitle('Nar Göç ve Danışmanlık');
  return (
    <div className="row">
      <div
        className="col-12 slide"
        style={{ position: "relative", marginLeft:'1%',marginRight:'1%',marginTop:"-2rem"}}
      >

        <img
          src={AtaKasım}
          class="card-img-top"
          alt="..."
          style={{ width: "100%", height: "20vw"}}
        ></img>

        <p
          style={{
            position: "absolute",
            top: "75%",
            left: "10%",
            color: "white",
            fontSize:"xx-large"
            
          }}
        >
          DAHA HIZLI VE GÜVENLİ ADIMLAR İÇİN BİZİ TERCİH ETMELİSİNİZ...
        </p>
      </div>
      <div className="row" style={{margin:"0%",padding:"1%"}}>
          <SabitHizmet
                Sphoto={turkishimg}
                Stitle="Türk Vatandaşlığı Talebi"
                Suzanti="/türk-vatandasligi-talebi" 
                Sexplain="Yatırım yoluyla Türk vatandaşlığı (Türkiye’den ev alan yabancılara vatandaşlık) 2018 yeni programının tüm detaylarını ve danışmanlık hizmetlerimizin kapsamını burada bulabilirsiniz."
                
            />
            <SabitHizmet
                Sphoto={calisma}
                Stitle="Çalışma İzni"
                Suzanti="/türkiyede-calisma-izni"
                Sexplain="Yabancıların Türkiye’de çalışma esaslarını düzenleyen 6735 Sayılı Uluslarası işgücü kanunu ve yönetmeliğine göre Çalışma izni hakkında tüm sorularınıza bu sayfamızda cevap bulabilirsiniz."
            />
            <SabitHizmet
                Sphoto={oturma}
                Stitle="Oturma İzni"
                Suzanti="/türkiyede-oturma-izni"
                Sexplain="Türkiye’de yabancılar için ikamet izni çeşitleri, başvuru yöntemleri ve başvuruların nasıl yapılacağına dair videolu anlatımlarla Oturma izni ile ilgili herşeyi detaylı anlatıyoruz."
            />
          
      </div>
     
      <div className="row" style={{margin:"0%",padding:"1%"}}>
            <Investment
                Iphoto={investment}
                Ititle="Türkiye'de Yatırım"
                Iuzanti="/turkiyede-yatirim"
                Iexplain="Türkiye 2017 yılı itibari ile dünya üzerinde en hızlı büyüyen ikinci ülke konumundadır ve Türkiye’de her şey bir yatırım aracıdır, nereye ve nasıl yatırım yapacağınızı bu sayfamızda öğretiyoruz."
            />
            <Investment
                Iphoto={life}
                Ititle="Türkiye'de Yaşam"
                Iuzanti="/turkiyede-yasam"
                Iexplain="Türkiye’de huzurlu bir yaşam için nasıl davranmalısınız, misafiri olduğunuz ülkenin örf ve adetleri nelerdir, Türkler neleri sever neleri sevmez, başucunuzdan ayırmayacağınız bir rehber hazırladık."
            />
            <Investment
                Iphoto={health}
                Ititle="Türkiye'de Sağlık"
                Iuzanti="/turkiyede-saglik"
                Iexplain="Coğrafyanın en büyük şehir hastaneleri, dünya üzerinde ün yapmış özel hastaneleri ve kalifiye doktorları ile Türkiye’de sağlık ve tedavi hakkında bilmeniz gereken her şeyi burada yazdık."
            />
            <Investment
                Iphoto={education}
                Ititle="Türkiye'de Eğitim"
                Iuzanti="/turkiyede-egitim"
                Iexplain="Yabancı öğrenciler için bir cennet olan Türkiye’de hangi okullarda nasıl eğitimler veriliyor, okul kayıt aşamaları, öğrenci ikamet izinleri, mezuniyet sonrası iş bulma süreçlerini detaylı bir şekilde öğretiyoruz."
            />
      </div>
            
            <Mail />
            
    </div>
  );
}

export default Home;

