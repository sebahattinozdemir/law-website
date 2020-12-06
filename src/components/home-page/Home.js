import "./Home.css";
import video from "./1.gif";
import h2 from "./h2.jpg";
import Calisma from "./calisma.jpg";
import Oturma from "./oturma.jpg";
import nar14 from "./nar14.jpg";
import investment from "./investment.jpg";
import education from "./education.jpg";
import life from "./life.jpg";
import health from "./health.jpg";
import Mail from "../mail/Mail";
import Interior from "../services-interior/Interior";
import Investment from "../investment/Investment";
import React from 'react';
function Home() {
  return (
    <div className="row">
      <div
        className="col-12 slide"
        style={{ position: "relative", marginLeft:'1%',marginRight:'1%' }}
      >

        <img
          src={video}
          class="card-img-top"
          alt="..."
          style={{ width: "100%", height: "25vw"}}
        ></img>

        <p
          style={{
            position: "absolute",
            top: "65%",
            left: "15%",
            color: "white",
            fontSize:"xx-large"
            
          }}
        >
          DAHA HIZLI VE DAHA GÜVENLİ ADIMLAR İÇİN BİZİ TERCİH ETMELİSİNİZ...
        </p>
      </div>
      <div className="row" style={{margin:"0%",padding:"1%"}}>
          <Interior
                photo={nar14}
                title="Türk Vatandaşlığı"
                uzanti="/hizmetlerimiz/turk-vatandasligi"
                explain="Yatırım yoluyla Türk vatandaşlığı (Türkiye’den ev alan yabancılara vatandaşlık) 2018 yeni programının tüm detaylarını ve danışmanlık hizmetlerimizin kapsamını burada bulabilirsiniz."
                
            />
            <Interior
                photo={Calisma}
                title="Çalışma İzni"
                uzanti="/hizmetlerimiz/calisma-izni"
                explain="Yabancıların Türkiye’de çalışma esaslarını düzenleyen 6735 Sayılı Uluslarası işgücü kanunu ve yönetmeliğine göre Çalışma izni hakkında tüm sorularınıza bu sayfamızda cevap bulabilirsiniz."
            />
            <Interior
                photo={Oturma}
                title="Oturma İzni"
                uzanti="/hizmetlerimiz/oturma-izni"
                explain="Türkiye’de yabancılar için ikamet izni çeşitleri, başvuru yöntemleri ve başvuruların nasıl yapılacağına dair videolu anlatımlarla Oturma izni ile ilgili herşeyi detaylı anlatıyoruz."
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

