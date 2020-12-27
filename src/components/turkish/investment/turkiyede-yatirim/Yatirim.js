import React from 'react';
import "./Yatirim.css";
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import Header from "../../header/Header"; 

export default function Yatirim() {
    return (
        <div>
           <Header
                subtitle="Türkiye'de Yatirim"
                title="Türkiye'de Yatirim"
                icon={<LocalAtmIcon style={{fontSize:"35px"}}/>}
            />
            
            <div className="row" style={{margin:"0%",padding:"1%"}}>
                    
                    
          
                   <div className="col-12" style={{marginLeft:"1%",marginRight:"1%"}}>
                           <p class="card-text1">Türkiye ekonomisi, 2003 ve 2018 yılları arasında rekor bir büyüme kaydederek 2003 yılında dünyanın 18. büyük ekonomisi iken 2018 yılında 13. sıraya yükselmiştir​. Rakiplerini geride bırakan Türkiye’nin büyüme ivmesinin önümüzdeki yıllarda da devam edeceği öngörülmektedir.
                           Mali disipline bağlı kalan Türkiye, 2002 yılında %70 olarak gerçekleşen kamu borç stokunun milli gelire oranını 2018 yılında %30 seviyesinin altına düşürmeyi başarmıştır.
                           İzlenen sıkı mali disiplinin olumlu etkisi, Türkiye'nin bütçe dengesine son 16 yılda fark edilir biçimde azalan bir açık olarak yansımıştır.​</p>
                   </div>

                   <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                           <h3 style={{color:"#A4203A"}}><LocalAtmIcon style={{fontSize:"x-large",color:"black"}}/> Stratejik Konum</h3>
                           <p class="card-text1">​​​​​​​​​​​​​​​​​​​​​​​​​​​Türkiye, hem Doğu-Batı hem de Kuzey-Güney eksenleri arasında doğal bir köprü işlevi görerek büyük pazarlar için etkin ve uygun maliyetli bir merkez konumundadır.
                           Türkiye, 4 saatlik uçuş yarıçapı içinde Avrupa, Orta Doğu ve Kuzey Afrika bölgesi ve Orta Asya'da toplam 1,5 milyarlık bir nüfusa ve 24 trilyon ABD doları değerinde bir pazara kolay erişim sunmaktadır.​
                           Türkiye'nin stratejik konumu, Tokyo'dan New York'a kadar 16 farklı saat dilimindeki pazarlara kolay erişim olanağı sunmaktadır.​​
                           Türk Hava Yolları, 122 ülkede 255 noktaya uçuş gerçekleştirmektedir.
                           Çok uluslu şirketler giderek üretim, ihracat ve yönetim için merkez olarak Türkiye'yi tercih etmektedir.
                           </p>
                   </div>

                   <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                           <h3 style={{color:"#A4203A"}}><LocalAtmIcon style={{fontSize:"x-large",color:"black"}}/> Nitelikli ve Uygun Maliyetli İş Gücü</h3>
                           <p class="card-text1">Türkiye, 32,7 milyon kişilik iş gücüyle Avrupa'nın üçüncü en büyük iş gücü havuzunu oluşturmaktadır.​
                           Türkiye'nin sahip olduğu genç nüfus, iş gücünün büyümesindeki en önemli faktör olarak ülkenin rakiplerine kıyasla üst sıralarda yer almasına katkı sağlamıştır. 
                           Türkiye aynı zamanda AB ülkelerine kıyasla iş gücündeki en yüksek büyümeyi gerçekleştirmiştir.
                           Türkiye'de büyük bir hızla artan sayıdaki üniversiteler ülkedeki üniversite mezunu sayısının yükselmesini sağlayarak genç nüfus ve geniş iş gücünün kalifiye iş gücüne dönüşmesini sağlamaktadır.
                        </p>
                        <ul className="card-list">
                                <li>Yükseköğretim gören 6,7 milyonu aşkın öğrenci</li>
                                <li>Üniversitelerden yılda yaklaşık 800.000 mezun</li>
                                <li>Dünya standartlarında mühendislik eğitimi</li>

​
                        </ul>
                   </div>

                   <div className="col-lg-4 col-md-6 col-sm-6 col-12" >
                           <h3 style={{color:"#A4203A"}}><LocalAtmIcon style={{fontSize:"x-large",color:"black"}}/> Avantajlı AR-GE Ekosistemi</h3>
                           <p class="card-text1" >Türk hükümeti, Ar-Ge yatırımlarının toplam kamu bütçesi içindeki payını %2'ye artırmayı hedeflemektedir. 2018 yılı itibarıyla %1'in üzerine çıkan bu payın önümüzdeki birkaç yıl içinde %2'ye ulaşacağı beklenmektedir. 

                                Türkiye'deki kapsamlı Ar-Ge teşvikleri, iyi eğitimli ve kalifiye işgücü, rekabetçi maliyet avantajları ve piyasada faaliyet gösteren birçok küresel şirket tarafından da desteklenmektedir. 
                                Tüm bu unsurların bir araya gelmesi, Türkiye'de dinamik bir ekosistem oluşmasını sağlamaktadır. 
                                Bugün, 100'den fazla önde gelen küresel şirket, Türkiye'deki rekabetçi Ar-Ge teşviklerinden ve gelişen ekosistemden yararlanmaktadır.​</p>
                   </div>
                 
                  
                   
             

       </div>
        </div>
    )
}
