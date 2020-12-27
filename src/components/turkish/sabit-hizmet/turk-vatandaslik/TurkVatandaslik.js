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
                            <p class="card-text1">Türk vatandaşlığını kazanmak isteyen bir yabancı, kanunda belirtilen şartları taşıması halinde Bakanlığımızın kararı ile Türkiye uyruklu vatandaşlığımızı kazanabilir.

Yetkili makam kararı ile Türk vatandaşı olursanız, eşinizin vatandaşlık durumunda herhangi bir değişiklik olmaz. Ebeveynlerinden birinin vatandaşlığı kazandığı tarihte velayet hakkına sahip olduğu çocukları diğer eşin de muvafakat etmesiyle Türk vatandaşlığını kazanır. Diğer ebeveynin muvafakat etmemesi halinde ebeveynlerde birinin yerleşim yerindeki hakim kararına göre işlem yapılır. Türk vatandaşlığını birlikte kazanan ebeveynlerin çocukları da vatandaşlığı kazanmış olur. Ebeveynlerin kendileri ile birlikte işlem görmeyen çocukları, ergin olduktan sonra Türk vatandaşlığını kazanmak üzere başvurdukları takdirde haklarında Türk vatandaşlığının genel olarak kazanılmasına dair madde hükümleri uygulanır.

Aranan şartları taşımak Türk vatandaşlığının kazanılması için kişilere mutlak bir hak sağlamamaktadır.</p>
                    </div>
 
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <h3 style={{color:"#A4203A"}}><StarRateIcon style={{fontSize:"x-large",color:"black"}}/> İstisnai Olarak Türk Vatandaşlığının Kazanılması</h3>
                            <p class="card-text1">Millî güvenlik ve kamu düzeni açısından herhangi bir tehlike oluşturmamak şartıyla Bakanlığın teklifi, Bakanlar Kurulunun kararı ile aşağıda belirtilen yabancılar Türk vatandaşlığını kazanabilirler.

                                
                           </p>
                           <ol className="sermaye">
                                <li>Türkiye’ye sanayi tesisi temin edilmesini sağlayan ya da ekonomik, sosyal, sportif, kültürel, bilimsel, teknolojik, sanatsal alanlarda olağanüstü hizmeti geçen ya da geçeceği düşünülen ve ilgili bakanlıklarca haklarında gerekçeli teklifte bulunulan yabancılar,</li>
                                <li>6458 sayılı Yabancılar ve Uluslararası Koruma Kanunu uyarınca oturum izni alanlar ve Turkuaz Kart sahibi yabancılar ile bunların yabancı eşi, kendisinin ve eşinin ergin olmayan ya da bağımlı çocukları,</li>
                                <li> Vatandaşlığa alınması zaruri görülen yabancılar,</li>
                               
                            </ol>
                            <p class="card-text1">Millî güvenlik ve kamu düzeni bakımından engel teşkil edecek hali bulunanların talepleri Bakanlıkça reddedilir. İstisnai vatandaşlığa başvurma ve buna istinaden Türk vatandaşlığını kazanma işlemleri İçişleri Bakanlığınca yürütülür.</p>
                    </div>
 
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <h3 style={{color:"#A4203A"}}><StarRateIcon style={{fontSize:"x-large",color:"black"}}/> Evlilik Yoluyla Türk Vatandaşı Olmak</h3>
                            <p class="card-text1">Bir Türk vatandaşı ile evlenen bir yabancı, doğrudan Türk vatandaşı olamaz. Bunun için en az 3 yıl boyunca bir Türk vatandaşı ile evli olmalı ve evliliği devam ediyor olmalıdır. Bu şartları taşıyan yabancılar Türk vatandaşlığını kazanmak için başvuruda bulunabilirler.

Başvuru sahiplerinde;</p>
                            <ol className="sermaye">
                                <li>Aile birliği içinde yaşama şartı,</li>
                                <li>Evlilik birliği ile bağdaşmayacak bir faaliyette bulunmama şartı,</li>
                                <li>Millî güvenlik ve kamu düzeni için tehlike oluşturabilecek bir durumunun olmaması şartı aranmaktadır.</li>
                               
                            </ol>
                    </div>
 
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12" >
                            <h3 style={{color:"#A4203A"}}><StarRateIcon style={{fontSize:"x-large",color:"black"}}/> Mavi Kart</h3>
                            <p class="card-text1" >Doğum yoluyla Türk vatandaşı olan fakat daha sonra çıkma izni alarak Türk vatandaşlığını kaybeden kişilere ve birlikte işlem gören çocuklarına, talep etmeleri durumunda yurt dışında dış temsilciliklerimiz, yurt içinde ise İl Nüfus ve Vatandaşlık Müdürlüklerince Mavi Kart düzenlenir. Mavi kart sahipleri, güvenlik ve kamu düzenine ilişkin herhangi bir tehlike oluşturmadıkları takdirde Türk vatandaşları ile aynı haklara sahip olurlar. Ancak mavi kart sahibi olan kişilerin askerlik yükümlülüğü olmadığı gibi seçme ve seçilme / kamu görevlerine girme ve araç ya da ev eşyası ithal etme hakları bulunmamaktadır. Söz konusu kişilerin sosyal güvenlikle ilgili kazanılmış hakları varsa saklanmakta ve kanunlardaki hükümlere bağlı olarak kullanılabilmektedir.</p>
                    </div>

                    
                  
                   
                    
              
 
        </div>
        </div>
    )
}
