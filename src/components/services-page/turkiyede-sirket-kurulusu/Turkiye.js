import React from 'react';
import "./Turkiye.css";
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import Altheader from '../../altheader/Altheader'

export default function Turkiye() {
    return (
        <div>
             <Altheader
                 subtitle="Hizmetlerimiz"
                 title="Türkiye'de Şirket Kuruluşu"
                 alttitle="Türkiye'de Şirket Kuruluşu"
                 icon={<HomeWorkIcon style={{fontSize:"35px"}}/>}
            />
            <div className="row" style={{margin:"0%",padding:"1%"}}>
                    
                    
          
                    <div className="col-12" style={{marginLeft:"1%",marginRight:"1%"}}>
                            <p class="card-text1">Türkiye üzerinde vatandaşlık almak veya oturma izni, çalışma izni gibi alanlara başvuru yapacaklar için sınırsız hizmet firmamızdan. İşinde uzman ekibimiz tarafınca hazırlanan dosyalar başvuru esnasında incelemesi kolay ve eksiksiz bir şekilde olacağından dolayı onay almanız da büyük oranda artacaktır.

Oturma izni başvuru formu, vatandaşlık başvuru formu il göç idaresi ve Konsolosluklara teslim edilen belgelerdir. Bu kurumlar resmî ve titiz çalıştığı için kurallara uygun bir şekilde dosya hazırlanması gerekir. Amatör kişiler ve bu işte daha önce tecrübe edinmemiş kişilerin ilk başvuruları reddedilme olasılığı yüksek olur. Bizim firmamızda çalıştırdığımız profesyonel dosya hazırlama ekipleri sizleri tanıyarak işe başlarlar.</p>
                    </div>
 
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <h3 style={{color:"orange"}}><HomeWorkIcon style={{fontSize:"x-large",color:"black"}}/> Dosya Hazırlama Aşamalarında Dikkat Edilmesi Gerekenler</h3>
                            <p class="card-text1">Dosya hazırlama aşamasını eksiksiz bir şekilde tamamlamak için müşterilerimiz ile sıkı bir iletişim halinde oluruz. Böylece onları yakından tanıyarak başvuru formlarını eksiksiz ve doğru olarak doldururuz. İlgili kurumlar inceleme yaptığı zaman titizlik ile hazırlanmış başvuru formlarını, eksiksiz evrakları gördüğünde başvurunuzun onay alma şansı çok daha yüksek olacaktır. Düzen ve tertip konusunda Konsolosluklar ve il göç müdürlüklerini iyi bildiğimiz için bizi danışman olarak seçtiğinizde pişman olmayacaksınız.</p>
                    </div>
 
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <h3 style={{color:"orange"}}><HomeWorkIcon style={{fontSize:"x-large",color:"black"}}/> Boşa Vakit Harcamaya Son</h3>
                            <p class="card-text1">Siz değerli müşterilerimizi tanırken yapacak olduğunuz başvurulara uygun olmayan durumunuz varsa bunu baştan size söylüyoruz. Böylece boş yere Konsolosluk veya il göç müdürlüklerine başvuru yaparak masraf yapmıyorsunuz. Günümüzde danışmanlık hizmeti parasını alıp başvuruya uygun olmayan kişilerin dahi parasını alan birçok firma vardır. Aynı zamanda bu firmalar biometrik fotoğraf ve diğer evrak paralarını da müşterilerin cebinden çıkarmasına sebep olmaktadır.

Biz dosya hazırlama konusunda uzman kişiler olarak bu tür işler ile uğraşmamaktayız. Uygunsuz bir durum gördüğümüzde direkt olarak sizlere bildirir ve başvuru yapıp ret cevabını uzun süreler boyunca sizlere bekletmeyiz. Yaptığımız başvurularda da yüksek oranda kabul görmemiz olduğunu belirtelim. Dosya hazırlama konusunda tecrübeli olduğumuz için onay alma olasılığınız yüksek olacaktır.</p>
                    </div>
 
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12" >
                            <h3 style={{color:"orange"}}><HomeWorkIcon style={{fontSize:"x-large",color:"black"}}/> İşinde Uzman Ekibimiz ile Yanınızdayız</h3>
                            <p class="card-text1" >Dosya hazırlama için ayrı birimler çalıştırıyoruz. Böylece herkes kendi alanında uzman olduğu işi yapıyor. Dosya hazırlama konusunda daha önceden başarılı tecrübesi olan iş arkadaşlarımızı bünyemizde barındırıyoruz. Fazla iş yükü vermeden sadece alanlarına yönelik iş aldıkları için de sıkılmadan, işlerini severek yapıyorlar. Kendi çalışanlarımız mutlu olduğu için arkamızda mutlu müşteriler bırakıyoruz. Dosya hazırlama ve tüm başvuru işlemleriniz için sizlere en uygun fiyat garantisinin yanında Türkiye genelinde en titiz işçilik garantisini de sunmaktayız.</p>
                    </div>
                  
                   
                    
              
 
        </div>
        </div>
    )
}

