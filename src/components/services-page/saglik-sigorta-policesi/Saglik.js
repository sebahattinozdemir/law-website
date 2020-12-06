import React from 'react';
import "./Saglik.css";
import HealingIcon from '@material-ui/icons/Healing';
import Altheader from '../../altheader/Altheader'

export default function Saglik() {
    return (
        <div>
            <Altheader
                 subtitle="Hizmetlerimiz"
                 title="Sağlık Sigorta Poliçesi"
                 alttitle="Sağlık Sigorta Poliçesi"
                 icon={<HealingIcon style={{fontSize:"35px"}}/>}
            />
             <div className="row" style={{margin:"0%",padding:"1%"}}>
                    
                    
          
                    <div className="col-12" style={{marginLeft:"1%",marginRight:"1%"}}>
                            <p class="card-text1">Sağlık sigorta poliçesi imzalayacak olan kişilerin günümüzde yaptığı çok büyük hatalar olmaktadır. Poliçe detaylandırması ve okuması aşamasında işinde uzman olmayan kişiler sağlık sigortasından minimum şekilde faydalanmaktadırlar. İşinde uzman olan sağlık sigorta poliçesi ekibimiz sizler için en ideal koşulları hazırlayacak ve sağlık sigortanızı bağlatacaklar. Sağlık Sigortasını yakından tanıyarak konu hakkında siz de bilgi sahibi olabilirsiniz.</p>
                    </div>
 
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <h3 style={{color:"#A4203A"}}><HealingIcon style={{fontSize:"x-large",color:"black"}}/> Sağlık Sigortası Nedir?</h3>
                            <p class="card-text1">Sağlık sigortasını basit bir şekilde açıklamak gerekirse, geçirecek olduğunuz hastalık veya kazalar için önceden bir önlem alma aşamasıdır. Bu hastalık ve kazalarda kendinize bir ekonomik güvence oluşturursunuz. Sağlık sigortası yaptırmak zorunlu bir şey değildir. Kişiler isteğe bağlı olarak sağlık sigortasını yaptırabilir, düzenli ödemeler yaparak ağır veya hafif hastalık, kaza geçirdiğinde kendisini ekonomik güvence altına alabilir. Böylece yüksek meblağdaki tedavilerin sigorta kapsamında karşılanmasını sağlayabilirsiniz.</p>
                    </div>
 
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <h3 style={{color:"#A4203A"}}><HealingIcon style={{fontSize:"x-large",color:"black"}}/> Özel Sağlık Sigortası</h3>
                            <p class="card-text1">Özel sağlık sigortası ve tamamlayıcı sağlık sigortası arasındaki farklar oldukça fazladır. Tamamlayıcı sağlık sigortası yaptırmak isteyenler genel olarak yüksek prim ödemekten kaçınan kişilerdir. Fakat bu sigortadan yararlanabilmek için örnek verecek olursak SGK kapsamında sigortanız olması gerekir. Özel hastanelerde daha fazla sigortadan yararlanmak istiyorsanız tamamlayıcı sağlık sigortası yaptırarak bu eylemi gerçekleştirebilirsiniz. Durumu olmayanlar ve özel hastanelerde fazla para ödemek istemeyenler tamamlayıcı sağlık sigortasını tercih edebilirler.

Özel sağlık sigortası ise başlı başına bir sigorta olmaktadır. Özel ve devlet hastanelerinde tüm alanlarda sigorta kapsamında olursunuz. Ancak bu sigorta türünü yaptırdıktan sonra az da olsa yüksek prim ödemek zorunda kalırsınız. Düzenli prim ödemeyen kişilerin sigortası yaptıkları sözleşme kapsamında iptal edilebilmektedir.</p>
                    </div>
 
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12" >
                            <h3 style={{color:"#A4203A"}}><HealingIcon style={{fontSize:"x-large",color:"black"}}/> Sağlık Sigorta Poliçesi</h3>
                            <p class="card-text1" >İşinde uzman ekibimiz artık sağlık sigorta poliçesini sizler için hazırlayıp kontrol ediyor. Sigorta şirketinizin sizlere sunduğu poliçeleri de inceleyip sizin kötü maddelere sahip olan sözleşmelere imza atmanızı engelliyor. Bu sayede sağlık sigortalarından en iyi şekilde yararlanabiliyorsunuz. Sağlık sigorta poliçesi belirttiğimiz gibi işinde uzman kişiler tarafından incelenmediği zaman ciddi sorunlar doğurabilir. Yüksek primler ödeyip her alanı kapsamayan sigorta alabilirsiniz. Poliçe üzerinde belirtilen risklerden tam anlamıyla korunmak için gelin ve işinde uzman olan ekibimiz ile çalışın. 7/24 destek alabileceğiniz ve sizlere anlık bilgi sağlayacak işinde tecrübeli iş arkadaşlarımız bulunmaktadır. Bizden alacağınız hizmet sayesinde poliçeleriniz güvende olacak, belirtilen her türden kaza ve hastalık sonucunda sigorta kapsamında olacaksınız. Sağlığınızın artık emin ellerde olduğundan emin olabilirsiniz.</p>
                    </div>
                  
                   
                    
              
 
        </div>
        </div>
    )
}
