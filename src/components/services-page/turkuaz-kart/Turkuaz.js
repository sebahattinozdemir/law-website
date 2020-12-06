import React from 'react';
import "./Turkuaz.css";
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import Altheader from '../../altheader/Altheader'

export default function Turkuaz() {
    return (
        <div>
             <Altheader
                 subtitle="Hizmetlerimiz"
                 title="Turkuaz Kart"
                 alttitle="Turkuaz Kart"
                 icon={<AssignmentIndIcon style={{fontSize:"35px"}}/>}
            />
              <div className="row" style={{margin:"0%",padding:"1%"}}>
                    
                    
          
                    <div className="col-12" style={{marginLeft:"1%",marginRight:"1%"}}>
                            <p class="card-text1">İkamet izni alacak kişiler artık yalnız değiller. Konu hakkında tecrübesi olmayanların yanında olarak kolay bir şekilde ikamet izni almalarını sağlıyoruz. Tek yapmanız gereken sizlere söylediğimiz belgeleri hazırlamak olacak. Geriye kalan işlerin emin ellerde olduğunun garantisini vermekteyiz. Dosyalarınızı inceleyerek ikamet izni alıp alamayacağınızı başvurudan önce söylemekteyiz. Böylece ikamet izni başvurulsa dahi alınamayacak kişiler yüksek danışmanlık ücreti vermekten kurtulacaklar.

İkamet izni almanın farklı türleri bulunmaktadır. Öğrenciler ve insani haklardan yararlanarak ikamet hizmeti almak isteyenler olabilir. Aynı zamanda “Uzun süreli ve kısa süreli” olacak şekilde ikamet izinleri alınabilir. Sizin durumunuz hangisi için uygunsa o kategoriden başvurunuzu tamamlıyor, sonuçları bizzat ilgili ve işinde uzman arkadaşlar takip ediyor. Sonuçlanma ve gelişme olduğu aşamalarda sizlere hızlı bir şekilde dönüş sağlıyoruz. İkamet izni başvurusu yapacak kişilerin işinde uzman kadrolarla çalışması her zaman için avantajlarına olacaktır.</p>
                    </div>
 
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <h3 style={{color:"#A4203A"}}><AssignmentIndIcon style={{fontSize:"x-large",color:"black"}}/> Öğrenci İkamet İzni Gerekli Belgeler</h3>
                            <p class="card-text1">Öğrenci ikamet izni adından da anlaşılacağı üzere Türkiye’ye okumak için geleceklere verilen ikamet iznidir. Gerekli evraklar ise;</p>
                            <ol className="sermaye">
                                <li>Pasaport fotokopisi,</li>
                                <li>İkamet izni başvuru formu,</li>
                                <li>Sağlık sigortası, 4 biometrik fotoğraf,</li>
                                <li>Öğrenci belgesi, (okul başladıktan sonra alınmalı ve 1-2 sene içerisinde başvuru yapılmalıdır.)</li>
                                <li>18 yaş altı kişiler için muvaffakatname.</li>
                            </ol>
                            <p class="card-text1">Yukarıdaki evrakların başvuru aşamasına yönelik eksiksiz olarak hazırlandığından emin olmak istiyorsanız işinde uzman ekibimize başvuruda bulunabilirsiniz. Öğrencilik için ikamet izni almak oldukça basittir fakat yanlış bir şey yapıldığında okuma hakkınız elinizden alınabilir ve verdiğiniz emeklerin tümü boşa gidebilir.</p>
                    </div>
 
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <h3 style={{color:"#A4203A"}}><AssignmentIndIcon style={{fontSize:"x-large",color:"black"}}/>  Yabancı İkamet İzni Nasıl Alınır?</h3>
                            <p class="card-text1">Yabancılar için ikamet izni almak oldukça basittir. Öncelikle kişiler hangi amaçla oturma izni alacağını bilmeli ve ona göre evrak hazırlayıp ikamet izni başvuru formu doldurmalıdır. Bu kapsamda profesyonel destek alıp başvurusunun olumlu sonuç getirmesini isteyenler işinde uzman kişilerle çalışmalıdır. Başvuru formu ve gerekli evraklar hazırlandığı zaman başvuru yapacak yabancı uyruklu kişi ülkesinde bulunan Türk Başkonsolosluğuna başvurmalıdır. Türkiye sınırları içerisinde olup başvuru yapmak isteyenler ise valilik, il ve ilçe göç müdürlüklerine formlarını teslim edebilirler.</p>
                    </div>
 
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12" >
                            <h3 style={{color:"#A4203A"}}><AssignmentIndIcon style={{fontSize:"x-large",color:"black"}}/>  İnsani İkamet İzni Hakkında</h3>
                            <p class="card-text1" >İnsani ikamet izni sadece hak edenlere verilen bir uygulamadır. Bu durumdan birçok kişi farklı yöntemler eşliğine yararlanabilmektedir. Örnek verecek olursak, Türkiye’miz için yararlı olabilecek, faydası dokunabilecek çocuklar insani ikamet izni kapsamında Türkiye’de kalabilirler. İnsani ikamet izni genel olarak valilikler tarafından 1 yıl süre şartıyla verilir. Fakat uygun görüldüğü takdirde 1 yıl süre istenildiği kadar uzatılabilir.</p>
                    </div>
                  
                   
                    
              
 
        </div>
        </div>
    )
}

