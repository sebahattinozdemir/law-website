import React from 'react';

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
                           <p class="card-text1">Türkiye’de yaşayan yabancı olarak çalışmaya başlamadan önce çalışma
izni almanız gerekmektedir. Ancak, mülteci veya ikincil koruma statüsü
aldıysanız, bu statüyü aldığınız tarihten itibaren bağımlı veya bağımsız olarak çalışabilirsiniz.
Çalışma izni Aile, Çalışma ve Sosyal Hizmetler Bakanlığı tarafından verilmektedir. Başvuru yurtiçi ve yurtdışından olmak üzere iki türlü yapılmaktadır. Hem yurtiçi hem de yurtdışı başvurular bir işyeri veya işletme
üzerinden yapılmaktadır</p>
                   </div>

                   <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                           <h3 style={{color:"#A4203A"}}><WorkIcon style={{fontSize:"x-large",color:"black"}}/> Türkiye için Çalışma İzni</h3>
                           <p class="card-text1">Türkiye’ye çalışma amacıyla gelecekseniz bulunduğunuz ülkedeki Türkiye
Cumhuriyeti dış temsilciliğine giderek başvuruda bulunmalısınız. Temsilciliğe başvuru amacıyla gittiğinizde Türkiye’de çalışacağınız işyeri veya işletmeye yaptığınız iş sözleşmesini ibraz etmeniz gerektiğini unutmayınız.
Başvuruda bulunduktan sonra tarafınıza verilecek referans numarası Türkiye’de çalışacağınız işyeri veya işletmeye iletilecek ve sizin adınıza başvuruda bulunması istenecektir. Bu adımdan sonra işyeri veya işletme online
sistem üzerinden sizin adınıza başvuruda bulunabilecektir.</p>
                   </div>

                   <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                           <h3 style={{color:"#A4203A"}}><WorkIcon style={{fontSize:"x-large",color:"black"}}/> Çalışma İzni Başvuru Yöntemleri</h3>
                           <p class="card-text1">Ülkemizde ikamet sahibi olarak bulunuyorsanız en az 6 ay süreli geçerli
ikamet izniniz olması durumunda, uluslararası koruma başvuru sahibi
iseniz başvuru üzerinden 6 ay geçtikten sonra, şartlı mülteci veya geçici
koruma sahibi iseniz kimlik düzenlenmesinin üzerinden 6 ay geçtikten
sonra çalışma izni başvurusu hakkı kazanmaktasınız. Süre koşulunu yerine getirmeniz durumunda, çalışacağınız iş yeri veya işletme online sistem
üzerinden sizin adınıza başvuruda bulunabilecektir. </p>
                   </div>

                   <div className="col-lg-4 col-md-6 col-sm-6 col-12" >
                           <h3 style={{color:"#A4203A"}}><WorkIcon style={{fontSize:"x-large",color:"black"}}/> Türkiye'de İş Kurma</h3>
                           <p class="card-text1" >Türkiye, hızlı gelişen başarılı ekonomisi ile dünya genelindeki yatırımcıların dikkatini çeken ülkelerden birisidir. Genç ve dinamik nüfusa sahip oluşu, nitelikli ve
rekabetçi iş gücü, 30 milyonu aşkın genç nüfusu, ulaşım, telekomünikasyon ve
enerji sektörlerindeki gelişkin alt yapısı ile merkezi konumu sayesinde yabancı yatırımcıları hızla kendisine çeken Türkiye, dünyanın önde gelen ekonomileri
arasındadır.
50 bini aşkın yabancı şirketin bulunduğu ve 12 milyar doları aşan doğrudan yatırımın yapıldığı ülkemizde, siz de Türk vatandaşlarıyla aynı koşullar ve haklara
sahip olarak yatırım yapabilirsiniz</p>
                   </div>
                 
                  
                   
             

       </div>
        </div>
    )
}
