import React from 'react';
import "./Egitim.css";
import SchoolIcon from '@material-ui/icons/School';
import Header from "../../header/Header"; 

export default function Egitim() {
    return (
        <div>
           <Header
                subtitle="Türkiye'de Eğitim"
                title="Türkiye'de Eğitim"
                icon={<SchoolIcon style={{fontSize:"35px"}}/>}
            />
            
            <div className="row" style={{margin:"0%",padding:"1%"}}>
                    
                    
          
                   <div className="col-12" style={{marginLeft:"1%",marginRight:"1%"}}>
                           <p class="card-text1">Türkiye Eğitim Sistemi, örgün eğitim ve yaygın eğitim olmak üzere iki ana bölümden oluşmaktadır. 
                           Örgün eğitim; okul öncesi eğitimi, ilköğretim, ortaöğretim ve yükseköğretim kurumlarını, yaygın eğitim; örgün eğitim yanında veya dışında düzenlenen eğitim faaliyetlerinin tümünü kapsamaktadır.
Eğitim kurumları dil, ırk, cinsiyet ve din ayrımı gözetilmeksizin herkese açıktır. Eğitimde hiçbir kişiye, aileye, zümreye ve sınıfa imtiyaz tanınmamaktadır.
Türkiye’de eğitim hakkından yararlanabilmeniz için Türkiye’de yasal olarak bulunmanız zorunludur. 
Türkiye’de bulunan hiçbir kimse Anayasal güvence altına alınan eğitim hakkından mahrum bırakılamaz. 
Ayrıca, eğitim devlet okullarında zorunlu eğitim ücretsiz olarak verilir. Kişinin, eğitim hakkını engellemek suç teşkil eder.</p>
                   </div>

                   <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                           <h3 style={{color:"#A4203A"}}><SchoolIcon style={{fontSize:"x-large",color:"black"}}/> Yükseköğretim/Üniversite</h3>
                           <p class="card-text1">Yükseköğretim kurumları üniversite, fakülte, enstitü, yüksekokul, konservatuar, meslek
yüksekokulu ile uygulama ve araştırma merkezlerinden oluşmaktadır. Yükseköğretim kurumlarına kayıt olabilmek için ortaöğretim mezunu olmak ve üniversite giriş 
sınavında başarılı olmak gerekmektedir. Üniversite sınavında tercih hakkı kazanan öğrenciler merkezi
tercih sisteminde tercih ettiği üniversitelerden birisine başarı sıralamasına göre yerleştirilecektir. 
Sınavda tercih hakkı kazanan öğrenci sayısı ile üniversite kontenjanları arasında fark bulunduğundan tercih işlemlerinde daha gerçekçi davranmak size katkı sağlayacaktır. Daha
detaylı bilgi için ÖSYM tarafından her yıl düzenli olarak yayınlanan üniversite tercih kılavuzuna göz atabilir ya da www.osym.gov.tr adresini ziyaret edebilirsiniz
Yükseköğretim hizmetleri devlet ve vakıf üniversitelerinde verilmektedir. Devlet üniversiteleri
ücretsiz hizmet verirken vakıf üniversiteleri kendi yıllık ücretlerini belirlemektedir. Ancak yabancı öğrenciler için devlet üniversiteleri harç talep edebilmektedir. Türkiye’de yükseköğretim
programları için Türkiye Burslarına başvuruda bulunabilirsiniz. Türkiye Bursları hakkında daha
detaylı bilgi almak için www.turkiyeburslari.gov.tr adresini ziyaret edebilirsiniz</p>
                   </div>

                   <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                           <h3 style={{color:"#A4203A"}}><SchoolIcon style={{fontSize:"x-large",color:"black"}}/> Yüksek Lisans ve Doktora</h3>
                           <p class="card-text1">Türkiye, eğitimin her alanında olduğu gibi, akademik kariyer için de size çok sayıda fırsat sunmaktadır. Lisans derecesine sahip olduktan sonra yüksek lisans (master) ve doktora
eğitimine olan talep gün geçtikçe artmaktadır. Türkiye, bu talebi karşılamakta ve eğitim kalitesiyle dünyanın sayılı ülkeleri arasında yer almaktadır.
Lisans mezunu olduktan sonra öncelikle yüksek lisans yapmak istediğiniz bölüm ve üniversiteye karar vermelisiniz. Her bölüm ve üniversitenin kendine özgü kabul koşulları olduğunu unutmayınız. Programa kabul koşulları açısından üniversite ve program arasında
farklılıklar olsa da yüksek lisans ve doktora için temel bilimler sınavı (ALES, GRA vb.) gibi sınavlardan başarı puanı istenmektedir.
Yüksek lisans ve doktora programları için girmeniz gereken sınavlar ile yeterlilik koşulları hakkında daha detaylı bilgi almak için www.osym.gov.tr adresini ziyaret edebilir ya da başvurmayı
düşündüğünüz üniversitenin öğrenci işleri bürosunu ziyaret edebilirsiniz.
Eğer, lisans eğitiminizi Türkiye dışında tamamladıysanız yüksek lisansa başvuru yapmadan
önce lisans diplomanızın denklik işlemlerini yaptırmanız gerekmektedir. Aynı durum, doktora
başvurusu sırasında Türkiye dışında tamamladığınız yüksek lisans için de geçerlidir. </p>
                   </div>

                   <div className="col-lg-4 col-md-6 col-sm-6 col-12" >
                           <h3 style={{color:"#A4203A"}}><SchoolIcon style={{fontSize:"x-large",color:"black"}}/> Açık Öğretim</h3>
                           <p class="card-text1" >Örgün eğitimini tamamlamayan kişiler, istemeleri halinde, zorunlu ortaöğretimlerini tamamlamak adına açık öğretim okullarına kayıt olabilmektedir. Aynı durum sizin için de geçerliyse,
ilinizde bulunan Milli Eğitim Müdürlüğünden alacağınız denklik belgesi sonrasında Halk Eğitim
Merkezi Müdürlüğüne giderek başvuruda bulunarak kayıt olabilirsiniz. Açık öğretim birimleri
aşağıdaki gibidir;</p>
                        <ul className="card-list">
                                <li>Açık Öğretim Ortaokulu; ilkokul mezunları ve ilköğretimin herhangi bir kademesinden
ayrılanlar için ilköğretimlerini tamamlayabilme imkânı vermektedir. </li>
                                <li>Açık Öğretim Lisesi; ilköğretimi tamamlayan ancak ortaöğretime devam etmeyen veya
ortaöğretimden ayrılan kişilere eğitim alma fırsatı vermektedir. Yurtdışında öğrenim görmüş olanlar, denklik belgelerinde belirtilen öğrenim düzeylerini gösterdikleri takdirde açık
öğretim liselerine kayıt olabilirler</li>
                                <li>Öğretim İmam Hatip Lisesi; ilköğretimi tamamlayan, ortaöğretime devam etmeyenler ya da yükseköğretim mezunları da başvurabilirler. </li>

​
                        </ul>
                   </div>
                 
                  
                   
             

       </div>
        </div>
    )
}
