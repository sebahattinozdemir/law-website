import React from 'react';
import "./TurkSaglik.css";
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import Header from "../../header/Header"; 

export default function TurkSaglik() {
    return (
        <div>
           <Header
                subtitle="Türkiye'de Sağlık"
                title="Türkiye'de Sağlık"
                icon={<LocalHospitalIcon style={{fontSize:"35px"}}/>}
            />
            
            <div className="row" style={{margin:"0%",padding:"1%"}}>
                    
                    
          
                   <div className="col-12" style={{marginLeft:"1%",marginRight:"1%"}}>
                           <p class="card-text1">Türkiye’de sağlık hizmetleri oldukça geniş imkânları olan ve karışık bir yapıya sahiptir. 
                           Özel sağlık sigortalısı veya genel sağlık sigortalısı olmanız halinde sigortanızın kapsamına göre sağlık hizmetlerinden
faydalanabilirsiniz, sigortalı değilseniz sağlık hizmetlerinden ücretli olarak faydalanabilirsiniz. Sağlık hizmetlerinden etkin yararlanabilmeniz için öncelikle
 İl Göç İdaresi Müdürlüklerine kayıt olmanız ve Türkiye’de bağlı bulunduğunuz statünün sağlık hizmetlerinden hangi kapsamda verildiğini bilmeniz gerekmektedir.
Türk sağlık sistemi; acil sağlık hizmetleri, birinci, ikinci ve üçüncü basamak sağlık merkezlerinden oluşmaktadır.</p>
                   </div>

                   <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                           <h3 style={{color:"#A4203A"}}><LocalHospitalIcon style={{fontSize:"x-large",color:"black"}}/> Acil Sağlık Hizmetler</h3>
                           <p class="card-text1">Acil sağlık hizmetleri kaza, yaralanma, ani oluşan sağlık problemleri gibi
acil durumlarda kişilere verilen sağlık hizmetlerini kapsar. 
Ambulans Hizmetleri: Acil durumun varlığı halinde 112 numarasını arayarak ulaşabileceğiniz tıbbi yardımdır. 112’yi aradığınızda acil durumun
gerçekleştiği yer bilgilerini, hasta ya da yaralı sayısı gibi bilgileri vermeniz gerekmektedir. 112 yetkilileri size doğru sağlık hizmetini sunmak adına ek sorular sorabilir, yetkililerin sorularına doğru ve eksiksiz cevap vermeniz
hayati önem taşımaktadır. Hastane Acil Servisleri: Hastanelerin bünyesinde bulunan ve 24 saat hizmet
veren acil servisleridir. Bu servislere yalnızca acil durumların varlığı halinde başvurmanız gerekmektedir. 
Acil servislerde genel olarak ilk tıbbi müdahale ve karşılama hizmeti verilmektedir.</p>
                   </div>

                   <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                           <h3 style={{color:"#A4203A"}}><LocalHospitalIcon style={{fontSize:"x-large",color:"black"}}/> Sağlık Sigortası Sistemi</h3>
                           <p class="card-text1">Türkiye’de yaşadığınız süre boyunca sağlık sisteminden etkin faydalanmak
için sigorta yaptırmanız yararınıza olacaktır. Özel sağlık sigortası yaptırmanız
halinde sigorta poliçenizin kapsamına göre hizmet alabilirsiniz. Özel sağlık
sigortası birçok sigorta şirketi tarafından farklı kapsamlarda ve farklı ücretlere
göre belirlenmektedir. Size en uygun sigortayı seçmek için sigorta acenteleri
ile görüşmeniz ve detaylı araştırma yapmanız faydalı olacaktır.
Genel sağlık sigortası ise sosyal güvenlik il müdürlüklerince yapılan yani kamu
otoritesi tarafından yapılan sigortalardır. Genel sağlık sigortası yaptırmak için
Türkiye’de 1 yıl ikamet etme şartı aranır. Ancak Türkiye’de öğrenim gören
yabancı uyruklu öğrenciler bir yıl ikamet şartına bakılmaksızın okullarına ilk
kayıt tarihinden itibaren üç ay içinde talepte bulunurlarsa genel sağlık sigortası
yaptırabilirler. </p>
                   </div>

                   <div className="col-lg-4 col-md-6 col-sm-6 col-12" >
                           <h3 style={{color:"#A4203A"}}><LocalHospitalIcon style={{fontSize:"x-large",color:"black"}}/> Genel Sağlık Sigortası Kapsamı</h3>
                           <p class="card-text1" >Genel sağlık sigortası sistemine dâhil olduğunuz zaman sağlık hizmetinden siz, eşiniz ve
18 yaşını doldurmamış olan çocuklarınız faydalanabilir. Ancak lise ve dengi öğrenim veya
aday çıraklık ve çıraklık eğitimi ile işletmelerde meslekî eğitim görmesi halinde 20 yaşını
doldurmamış çocuklarınız, yükseköğrenim görmesi halinde 25 yaşını doldurmamış
ve evli olmayan çocuklarınız ile malûl olduğu tespit edilen evli olmayan çocuklarınız,
geçimini sağladığınız anne ve babanız da sağlık hizmetinden yararlanabilirler. Genel sağlık sigortası kişinin ikamet izninin sona ermiş olması, yabancı bir ülkede sigortalı
olması, başka bir kapsamda genel sağlık sigortalısı sayılması, ölüm ve gaiplik gibi nedenlerle
sonlandırılır. </p>
                   </div>
                 
                  
                   
             

       </div>
        </div>
    )
}
