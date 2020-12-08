import Header from "../header/Header"; 
import "./Altblog.css";
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Link } from "react-router-dom";
import React from 'react'
function Altblog() {
    return (
        <div>
            <Header
                subtitle="3 Yılda 7 Bin Yabancı Türk Vatandaşı Oldu"
                title="Blok İçerikleri"
                icon={<AssignmentIcon style={{fontSize:"35px"}} />}
            />
                   <div className="row" style={{margin:"0%",padding:"1%"}}>
                        <div className="col-12" style={{margin:"3%"}} > 
                            <h3 className="blogtitle">3 Yılda 7 Bin Yabancı Türk Vatandaşı Oldu</h3>
                            <p class="blogtext">Türkiye, Covid-19 pandemisi sürecinde her alanda başlattığı uygulamalarla tüm dünyaya örnek 
                            olmaya devam ediyor. Etkili çözümler üreterek sürdürülebilir tedbirler alma yoluna giden Türkiye, güçlü sağlık 
                            sistemi ile gösterdiği yüksek başarısını sigortacılık alanına da taşıyarak buradaki güçlü altyapısını kullanmayı 
                            hedefliyor. Bu bağlamda, “Güvenli Turizm Sertifika Programı” ile yine dünyada örnek bir uygulama başlatan Türkiye’de, 
                            yabancı turistlerin güvenli bir şekilde tatil yapabilmeleri için Covid-19 teminatlı “Yabancı Turist Koruma Destek 
                            Sigortası”paketini geçtiğimiz dönemde ilan etti. Kültür ve Turizm Bakanlığı ve Türkiye Turizm Tanıtım ve Geliştirme 
                            Ajansı (TGA)’nın ortak çalışmaları sonucunda, “Yabancı Turist Koruma ve Destek Sigortası” poliçesi uygulamaya 
                            konuldu. Yapılan resmi açıklamada, tarihi, doğası ve kültürüyle turizmin merkezlerinden olan Türkiye’de daha keyifli
                             ve güvenli bir tatil için Covid-19 teminatlı Yabancı Turist Koruma Destek Sigortası’nın yürürlüğe girdiği duyuruldu.
                              Yazımızın devamında yabancı turistler için Covid-19 sigortası hakkında bilinmesi gereken tüm ayrıntıları
                               bulabilirsiniz.Yabancı Turist Koruma ve Destek Sigortası, yabancı turistler için Covid-19 kaynaklı hastalık 
                               durumunda gerçekleştirilecek tedavi hizmetlerini de kapsayan bir sağlık sigortası paketi olarak karşımıza 
                               çıkıyor.Türkiye Cumhuriyeti’nin öncülüğünde ülkenin lider sigorta şirketlerinden biri tarafından hayata 
                               geçirilen bu proje ile Türkiye’nin en güzel tatil yörelerinde gönül rahatlığı ile tatil yapmak isteyen 
                               yabancılar, ayların yorgunluğunu ve stresini, Covid-19 endişesi olmadan atlatıyor. İstanbul, Bodrum, Kapadokya, 
                               Marmaris, Nemrut, Antalya ve Türkiye’nin diğer turistik şehirlerinde masmavi denizler, yemyeşil yaylalar, geniş 
                               kanyonlar ve açık hava müzelerinde Türkiye’nin eşsiz güzelliklerini keşfeden yabancı misafirlerimiz, tüm dünyayı 
                               etkisi altına alan Covid-19 tedirginliğini Turist Koruma ve Destek Sigortası ile geride bırakarak tatilin tadını 
                               çıkarıyor.</p>

                        </div>
                   </div>
        </div>
    )
}
export default Altblog
