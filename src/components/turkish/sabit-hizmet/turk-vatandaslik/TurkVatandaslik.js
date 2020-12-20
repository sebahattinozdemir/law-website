import React from 'react';
import StarRateIcon from '@material-ui/icons/StarRate';
import Altheader from '../../altheader/Altheader'



export default function TurkVatandaslik() {
    return (
        <div>
             <Altheader
                 subtitle="Hizmetlerimiz"
                 title="Türk Vatandaşlığı Talebi"
                 alttitle="Türk Vatandaşlığı Talebi"
                 icon={<StarRateIcon style={{fontSize:"35px"}}/>}
            />
            <div className="row" style={{margin:"0%",padding:"1%"}}>
                    
                    
          
                    <div className="col-12" style={{marginLeft:"1%",marginRight:"1%"}}>
                            <p class="card-text1">Türk vatandaşlığı günümüzde artık çok kolay alınabilmektedir. Yabancı uyruklu kişiler farklı alternatif yollar ile Türk vatandaşlığına geçebilirler. Bu yöntemler arasında “Gayrimenkul Yatırımı, Sermaye Yatırımı, İstihdam Yatırımı” seçenekleri bulunmaktadır. Her biri için ayrı koşullar gerekmektedir. Yazımızda sizlere hizmetini verdiğimiz bu seçenekleri tanıtacağız. Böylece Türk vatandaşlığına geçmek isteyen kişiler konu hakkında detaylı bilgi sahibi olabilecekler.</p>
                    </div>
 
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <h3 style={{color:"#A4203A"}}><StarRateIcon style={{fontSize:"x-large",color:"black"}}/> Gayrimenkul Yatırımı</h3>
                            <p class="card-text1">Yönetmelikte yapılan değişiklik sonucunda artık yabancı uyruklu kişiler sadece 250.000$ değerinde gayrimenkul alarak Türk vatandaşlığına geçebilmektedirler. Alınan 250.000$ değerindeki gayrimenkulün taşınamaz tapulu olması ve 3 yıl boyunca satılmaması gereklidir. SPK tarafından taşınamaz belgesi alınması gereken gayrimenkuller aynı zamanda sözleşmede yer alan üç yıl boyunca satılamaz ibaresini de bulundurmak zorundadırlar. Yabancı uyruklu kişiler bu satın alma işleminden sonra maddelere uymalıdır. Aksi takdirde Türk vatandaşlığı düşürülebilir.

Taşınamaz raporundan sonra gayrimenkulün piyasa fiyatı belirlenir. 250.000$ veya üzeri olan mülkler için güncel kur üzerinden hesaplama yapılır. Kurların hesaplaması ise Merkez Bankası tarafından yapılmaktadır.</p>
                    </div>
 
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <h3 style={{color:"#A4203A"}}><StarRateIcon style={{fontSize:"x-large",color:"black"}}/> Sermaye Yatırımı</h3>
                            <p class="card-text1">Sermaye yatırımı ile Türk vatandaşlığı almak için 500.000$ sabit sermaye yatırılması gerekmektedir. Son yapılan gayrimenkul değişikliği sermaye yatırımını etkilememiştir. Bu fiyat 17 Ocak 2017 tarihinde güncellenmiştir. 500.000$ tutarında yatırım yapan kişiler gerekli belgeler eşliğinde Ekonomi Bakanlığı üzerinden vatandaşlık başvurusu yaparlar. Gerekli olan belgeler ise aşağıdaki gibi olmalıdır;</p>
                            <ol className="sermaye">
                                <li>Yatırım bilgi formu,</li>
                                <li>Pasaport üzerinde kimlik bilgileri olan kısmın fotokopisi,</li>
                                <li>Ortaklık yapısı, sermaye tutarını gösterir ticaret sicil gazetesi kaydı,</li>
                                <li>Sabit sermaye tutarını gösteren YMM onayı olan özel amaçlı rapor.</li>
                                <li>Yukarıdaki YMM raporunda 500.000$ tutarında yatırım yapıldığına dair dekont</li>
                            </ol>
                    </div>
 
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12" >
                            <h3 style={{color:"#A4203A"}}><StarRateIcon style={{fontSize:"x-large",color:"black"}}/> İstihdam Yatırımı</h3>
                            <p class="card-text1" >Bu seçenek ile Türk vatandaşlığına geçmek henüz yürürlüğe girmemiştir. Konu hakkında detaylı bilgi sahibi olmak için yapılacak olan resmî açıklamaları beklemek durumundayız. Detaylar açıklanır açıklanmaz sitemizi ziyaret edebilir, işinde uzman ekibimizden yardım alabilirsiniz. İstihdam yatırımı ile vatandaşlık almanın detayları 2019 sonlarına doğru yürürlüğe gireceği tahmin ediliyor.</p>
                    </div>

                    
                  
                   
                    
              
 
        </div>
        </div>
    )
}
