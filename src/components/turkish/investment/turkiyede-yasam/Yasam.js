import React from 'react';
import "./Yasam.css";
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import Header from "../../header/Header"; 

export default function Yasam() {
    return (
        <div>
           <Header
                subtitle="Türkiye'de Yaşam"
                title="Türkiye'de Yaşam"
                icon={<EmojiPeopleIcon style={{fontSize:"35px"}}/>}
            />
            
            <div className="row" style={{margin:"0%",padding:"1%"}}>
                    
                    
          
                   <div className="col-12" style={{marginLeft:"1%",marginRight:"1%"}}>
                        <p class="card-text1">Bir kimsenin sürekli kalmak niyetiyle oturduğu yere ev denir. 
                           Türkiye’de herkesin adres sistemine kayıtlı bir yerleşim yeri olması zorunludur. 
                           Anayasaya göre ev dokunulmazdır ve izni olmadan kimsenin evine girilemez. Uluslararası Koruma ve Geçici Koruma ile kalanlar
statüleri gereği sadece Göç İdaresi Genel Müdürlüğünün belirlemiş olduğu illerde ikamet edebilmektedir. 
Söz konusu kurala uymamanız durumunda size sağlanan hak ve hizmetlerden faydalanmanız ciddi oranda kısıtlanır. </p>
                           
                   </div>

                   <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                           <h3 style={{color:"#A4203A"}}><EmojiPeopleIcon style={{fontSize:"x-large",color:"black"}}/> Kiralık Ev Arama</h3>
                           <p class="card-text1">Güzel ve uygun fiyatlı bir evde yaşamak hemen hemen herkesin hayalidir.Ancak, bu hayali gerçekleştirmek 
                           kapsamlı bir araştırmayı gerektirmektedir. Araştırma öncesinde mutlaka bir evde arayacağınız kriterleri belirlemelisiniz. 
                           Oturacağınız evin konumunun ve yaşının kira fiyatını belirleyen önemli özellikler olduğunu unutmayınız. Emlak danışmanı aracılığıyla ev kiralandığınızda, danışmana hizmet bedeli ödemeniz gerekir. 
                           Hizmet bedeli, kontrat süresinden bağımsız olarak kiracıdan bir defaya mahsus olmak üzere, bir yıllık kira bedelinin %10’u + KDV (%18) olarak alınır. 
                           İnternet veya sokakta yapılan aramalar sonucunda evinizi direkt olarak mülk sahibinden kiralarsanız herhangi bir ücret ödemenize gerek yoktur </p>
                   </div>

                   <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                           <h3 style={{color:"#A4203A"}}><EmojiPeopleIcon style={{fontSize:"x-large",color:"black"}}/> Ev Satın Almak</h3>
                           <p class="card-text1">T.C Çalışma ve Sosyal Güvenlik Bakanlığına E-Devlet üzerinden online olarak başvuru yapabiliyorlar.
                            Eğer yabancı uyruklu kişinin Türkiye üzerinde oturma izni yoksa farklı bir yöntem izlenir. Çalışacak olan yabancı kişinin geldiği ülkede resmî bir ikamet adresi olmalıdır. 
                            Resmî ikametgah adresi olan ülkenin ilgili Türk Büyükelçiliği veya konsolosluğuna başvuru yapması gerekmektedir. İki türdeki başvuru da yabancı uyruklu kişiler için online olarak internet üzerinden yapılır.
                            Ev satın alınırken dolandırılmamak adına söz konusu evin sahipliği ve üzerinde herhangi bir ipotek vb. kısıtlama olup olmadığını Tapu ve Kadastro İl Müdürlüklerinden veya Tapu Sicil Müdürlüklerinden kontrol edebilirsiniz. 
                            Türkiye’de taşınmaz (ev, arsa, dükkân vb.) satışı sadece ilgili taşınmazın bulunduğu Tapu Sicil Müdürlüklerinde yapılmaktadır. 
                            Almak istediğiniz taşınmaza ilişkin mülk sahibi ile anlaşmaya vardıktan sonra satış işleminin gerçekleştirilmesi için Tapu Sicil Müdürlüklerine başvurunuz.</p>
                   </div>

                   <div className="col-lg-4 col-md-6 col-sm-6 col-12" >
                           <h3 style={{color:"#A4203A"}}><EmojiPeopleIcon style={{fontSize:"x-large",color:"black"}}/> Kiracının Hak ve Yükümlülükleri</h3>
                           <p class="card-text1" ></p>
                           <ul className="card-list">
                                <li>Kira sözleşmesi yapıldıktan sonra ev sizin özel alanınızdır. Ev sahibi, sizin izniniz olmadan eve giremez. Ancak evin bakımı ve onarımı ile ilgili olarak sizinle önceden anlaşılacak bir zamanda izninizle girebilir.</li>
                                <li>Evi ne şekilde aldıysanız aynı şekilde teslim etmekle yükümlüsünüz.</li>
                                <li>Vermiş olduğunuz depozito evden çıkarken size teslim edilecektir. Ancak, eve vermiş olduğunuz zararlar depozitodan kesilebilir. 
                                        Vermiş olduğunuz zarar, depozito miktarından fazlaysa, eksik miktarı da karşılamakla yükümlüsünüz.</li>
                                <li>Kira ödemesini, sözleşmede belirlediğiniz tarihte ve şekilde vermelisiniz.</li>
                                <li>Ev sahibiniz, kira sözleşmesi boyunca haklı gerekçe olmadıkça sizi evden çıkaramaz.</li>

​
                        </ul>

                   </div>
                 
                  
                   
             

       </div>
        </div>
    )
}
