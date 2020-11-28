import React from 'react';
import "./Calisma.css";
import WorkIcon from '@material-ui/icons/Work';
import Altheader from '../../altheader/Altheader'

export default function Calisma() {
    return (
        <div>
            <Altheader
                 subtitle="Hizmetlerimiz"
                 title="Çalışma İzni"
                 alttitle="Çalışma İzni"
                 icon={<WorkIcon style={{fontSize:"35px"}}/>}
            />
            
            <div className="row" style={{margin:"0%",padding:"1%"}}>
                    
                    
          
                   <div className="col-12" style={{marginLeft:"1%",marginRight:"1%"}}>
                           <p class="card-text1">Çalışma izni Türkiye için alınması karışık bir izindir. Yabancı uyruktan başvuru yapıldığı zaman mutlaka bir profesyonel eşliğinde yapılmalıdır. Amatörce hazırlanan başvurular direkt reddedildiği için cebinizdeki paradan olma şansınız var. Bizim sizlere sunacağı %100 garantili hizmet sayesinde artık boş yere para harcamaya son. Danışmanlık hizmetimiz işinde uzman kişiler tarafından verilmektedir. Çalışma izni başvurusunda bulunacak kişilerden detaylı evrakları talep eder, incelemeden sonra geri dönüş yaparız. Reddedilme şansı olan başvuruları müşterilerimize söyleyerek onların parasını boş yere almayız. Böylece paranız cebinde kalır, boş danışmanlık hizmetine para vermiş olmazsınız.</p>
                   </div>

                   <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                           <h3 style={{color:"orange"}}><WorkIcon style={{fontSize:"x-large",color:"black"}}/> Türkiye için Çalışma İzni</h3>
                           <p class="card-text1">Uluslararası geçerliliğe sahip Anayasa 6735 sayılı uluslararası işgücü kanununa göre yabancılar sadece geçerli bir iş sunduğunda Türkiye’de çalışma izni alabilir. Bu kanun kapsamında çalışacak olan yabancı uyruklu kişinin çalışma izni başvurusu işveren tarafından yapılır. İşveren kişiler ise işinde profesyonel olan çalışma izni danışmanları ile çalışır. Firmamız da bu konuda uzman olduğu için oldukça geniş referanslara sahiptir. Dolayısı ile bir yabancı kesinlikle kendi çalışma izni için başvuru yapamaz.</p>
                   </div>

                   <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                           <h3 style={{color:"orange"}}><WorkIcon style={{fontSize:"x-large",color:"black"}}/> Çalışma İzni Başvuru Yöntemleri</h3>
                           <p class="card-text1">T.C Çalışma ve Sosyal Güvenlik Bakanlığına E-Devlet üzerinden online olarak başvuru yapabiliyorlar.
                            Eğer yabancı uyruklu kişinin Türkiye üzerinde oturma izni yoksa farklı bir yöntem izlenir. Çalışacak olan yabancı kişinin geldiği ülkede resmî bir ikamet adresi olmalıdır. Resmî ikametgah adresi olan ülkenin ilgili Türk Büyükelçiliği veya konsolosluğuna başvuru yapması gerekmektedir. İki türdeki başvuru da yabancı uyruklu kişiler için online olarak internet üzerinden yapılır.</p>
                   </div>

                   <div className="col-lg-4 col-md-6 col-sm-6 col-12" >
                           <h3 style={{color:"orange"}}><WorkIcon style={{fontSize:"x-large",color:"black"}}/> Yabancı Uyruklu Çalışanlar için Asgari Ücret</h3>
                           <p class="card-text1" >Yabancı uyruklu çalışanlar için merak edilen bir diğer konu ise asgari ücrettir. Öncelikle yabancılar için Türkiye’de Türklere ödenen asgari ücretin eşit olan miktarında maaş ödenir. Ayrıca çalışanların konumu ve yeterliliği de göz önüne alınmalıdır. Üst düzey yönetici, pilot, ön izinli mühendisler Türkiye’nin asgari ücretinin 6.5 katı fazla olacak şekilde maaş almalıdırlar. Birim veya şube müdürleri ise 4 kat fazla maaş almalıdır. Sadece ev hizmetlerinde çalışacak yabancı uyruklu kişilere asgari ücretin denginde ödeme yapılır. Diğer tüm sektörlerde asgari ücretin 1,5 kat fazlası ödenmek zorundadır. Çalışma süresi uzatmak isteyen kişilerin de prim borcu olmaması gerekmektedir.</p>
                   </div>
                 
                  
                   
             

       </div>
        </div>
    )
}
